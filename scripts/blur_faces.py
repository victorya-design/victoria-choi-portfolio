#!/usr/bin/env python3
"""Blur only detected face areas (ellipse mask), not whole video tiles."""
import sys

import cv2
import numpy as np


def _iou(a, b) -> float:
    ax, ay, aw, ah = a
    bx, by, bw, bh = b
    ix1 = max(ax, bx)
    iy1 = max(ay, by)
    ix2 = min(ax + aw, bx + bw)
    iy2 = min(ay + ah, by + bh)
    iw = max(0, ix2 - ix1)
    ih = max(0, iy2 - iy1)
    inter = iw * ih
    if inter == 0:
        return 0.0
    union = aw * ah + bw * bh - inter
    return inter / union if union else 0.0


def dedupe_faces(faces, iou_threshold: float = 0.25):
    """Keep one tight box per face; prefer smaller boxes when overlapping."""
    faces = [tuple(map(int, f)) for f in faces]
    faces.sort(key=lambda r: r[2] * r[3])  # smallest area first
    kept = []
    for rect in faces:
        if any(_iou(rect, k) >= iou_threshold for k in kept):
            continue
        kept.append(rect)
    return kept


def detect_faces(gray):
    faces = []
    cascades = [
        cv2.data.haarcascades + "haarcascade_frontalface_default.xml",
        cv2.data.haarcascades + "haarcascade_profileface.xml",
    ]
    for path in cascades:
        detector = cv2.CascadeClassifier(path)
        if detector.empty():
            continue
        found = list(
            detector.detectMultiScale(
                gray,
                scaleFactor=1.06,
                minNeighbors=4,
                minSize=(14, 14),
            )
        )
        up = cv2.resize(gray, None, fx=1.5, fy=1.5, interpolation=cv2.INTER_LINEAR)
        found_up = detector.detectMultiScale(
            up,
            scaleFactor=1.06,
            minNeighbors=4,
            minSize=(18, 18),
        )
        for (ux, uy, uw, uh) in found_up:
            found.append(
                (int(ux / 1.5), int(uy / 1.5), int(uw / 1.5), int(uh / 1.5))
            )
        for rect in found:
            faces.append(rect)
    return dedupe_faces(faces)


def blur_single_face(img, x, y, fw, fh) -> None:
    height, width = img.shape[:2]
    cx = x + fw // 2
    cy = y + fh // 2

    # Tight region around the face (not the whole thumbnail).
    half_w = max(8, int(fw * 0.52))
    half_h = max(8, int(fh * 0.58))
    x1 = max(0, cx - half_w)
    y1 = max(0, cy - half_h)
    x2 = min(width, cx + half_w)
    y2 = min(height, cy + half_h)

    roi = img[y1:y2, x1:x2]
    if roi.size == 0:
        return

    rh, rw = roi.shape[:2]
    k = max(9, (min(rw, rh) // 4) | 1)
    if k >= min(rw, rh):
        k = (min(rw, rh) // 2) | 1
        k = max(k, 3)

    blurred = cv2.GaussianBlur(roi, (k, k), 0)

    mask = np.zeros((rh, rw), dtype=np.uint8)
    center = (rw // 2, rh // 2)
    axes = (max(2, int(rw * 0.42)), max(2, int(rh * 0.46)))
    cv2.ellipse(mask, center, axes, 0, 0, 360, 255, -1)
    mask = cv2.GaussianBlur(mask, (7, 7), 0)

    alpha = (mask.astype(np.float32) / 255.0)[..., None]
    blended = (blurred.astype(np.float32) * alpha + roi.astype(np.float32) * (1 - alpha))
    img[y1:y2, x1:x2] = blended.astype(np.uint8)


def blur_faces(path_in: str, path_out: str) -> int:
    img = cv2.imread(path_in)
    if img is None:
        print(f"Could not read {path_in}", file=sys.stderr)
        return 1

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = detect_faces(gray)

    for rect in faces:
        blur_single_face(img, *rect)

    cv2.imwrite(path_out, img, [cv2.IMWRITE_PNG_COMPRESSION, 6])
    print(f"Wrote {path_out} ({len(faces)} faces, ellipse blur only)")
    return 0


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: blur_faces.py input.png output.png", file=sys.stderr)
        sys.exit(2)
    sys.exit(blur_faces(sys.argv[1], sys.argv[2]))
