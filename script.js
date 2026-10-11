// --- Language (EN / KO) ---
// Shared text: translations.en / translations.ko
// Case study pages: pageTranslations (see data-i18n-page on <body>)

const translations = {
  en: {
    pageTitle: "Victoria Choi | Marketing Portfolio",
    metaDescription:
      "Victoria Choi, marketing portfolio. Psychology graduate based in Seoul.",
    skip: "Skip to content",
    "lang.groupLabel": "Language",
    "nav.aria": "Primary",
    "nav.menu": "Menu",
    "nav.intro": "Intro",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.about": "About",
    "skills.title": "Certifications & skills",
    "skills.certTitle": "Certifications",
    "skills.jobSim": "Forage · 2026",
    "skills.skillsTitle": "Skills",
    "skills.marketingLabel": "Marketing",
    "skills.m1": "Social media marketing",
    "skills.m2": "Content strategy",
    "skills.m3": "Email marketing",
    "skills.m4": "Marketing analytics",
    "skills.m5": "Event planning",
    "skills.researchLabel": "Research",
    "skills.r1": "Market research",
    "skills.r2": "Survey design",
    "skills.r3": "Customer feedback analysis",
    "skills.r4": "Data visualization (Excel)",
    "skills.businessLabel": "Business",
    "skills.b1": "Business development",
    "skills.b2": "Partnerships",
    "skills.b3": "Product development",
    "skills.languagesLabel": "Languages",
    "skills.l1": "Korean",
    "skills.l2": "English",
    "nav.contact": "Contact",
    "hero.eyebrow": "Marketing · Research",
    "hero.title": "Hi, I’m Victoria.",
    "hero.accent": "I like figuring out what people need.",
    "hero.lead1":
      "I studied Psychology at the University of Michigan and graduated with a BA. That training taught me to listen carefully, notice patterns in behavior, and ask better questions. I bring that to marketing when I’m trying to understand audiences and communicate in a way that feels human.",
    "hero.lead2":
      "I’m looking for roles where I can keep learning how brands connect with people. This site is a home for that work as it grows.",
    "hero.ctaExperience": "See my experience",
    "hero.ctaContact": "Get in touch",
    "hero.photoAlt": "Portrait of Victoria Choi",
    "experience.title": "Experience",
    "experience.intro":
      "From a personal project to an internship and student leadership roles, these are places where I’ve practiced PR, marketing, and bringing people together.",
    "experience.lgRole": "Personal project · PR & marketing",
    "experience.mendedRole": "Marketing intern · Remote",
    "experience.kisaRole": "PR leader · event coordinator",
    "experience.moreDetails": "Click for more details",
    "experience.researchTitle": "Research Experience",
    "experience.researchRole": "Research assistant",
    "research.role": "Research team member",
    "research.findingsTitle": "Findings and limitations",
    "research.enlarge": "Click to enlarge",
    "research.enlargeLabel": "Enlarge poster",
    "research.close": "Close",
    "research.prevSlide": "Previous slide",
    "research.nextSlide": "Next slide",
    "research.slideAlt": "Student experience presentation, slide {n}",
    "research.slideStatus": "{n} / {total}",
    "experience.kisaTitle": "Korean International Student Association",
    "about.title": "About",
    "about.p1":
      "I’m Victoria Choi. I earned my BA in Psychology from the University of Michigan. I’m drawn to marketing because it sits at the intersection of research instincts and storytelling. You have to understand people before you can speak to them well.",
    "about.p2":
      "Outside of class and org work, I pay attention to how brands show up in everyday life: what makes a message feel clear, what makes it feel forgettable, and how tone changes when the audience changes. That curiosity is what I want to bring to a team.",
    "about.factsTitle": "Quick facts",
    "about.educationLabel": "Education",
    "about.educationValue": "BA Psychology, University of Michigan",
    "about.locationLabel": "Location",
    "about.locationValue": "Seoul",
    "about.focusLabel": "Focus",
    "about.focusValue": "Audience insight, brand communication, org marketing",
    "contact.title": "Contact",
    "contact.intro":
      "If you’re hiring or just want to say hello, I’d love to hear from you.",
    "footer.name": "Victoria Choi",
    "detail.eyebrow": "Case study",
    "detail.back": "← All experience",
    "detail.contextTitle": "Context",
    "detail.workTitle": "What I worked on",
    "detail.learnedTitle": "What I took away",
  },
  ko: {
    pageTitle: "최영현 | 마케팅 포트폴리오",
    metaDescription:
      "최영현, 서울 기반, 심리학 전공 마케팅 포트폴리오.",
    skip: "본문으로 건너뛰기",
    "lang.groupLabel": "언어",
    "nav.aria": "주요 메뉴",
    "nav.menu": "메뉴",
    "nav.intro": "소개",
    "nav.experience": "경험",
    "nav.skills": "역량",
    "nav.about": "About",
    "skills.title": "자격증 및 역량",
    "skills.certTitle": "자격증",
    "skills.jobSim": "Forage · 2026",
    "skills.skillsTitle": "역량",
    "skills.marketingLabel": "마케팅",
    "skills.m1": "SNS 마케팅",
    "skills.m2": "콘텐츠 전략",
    "skills.m3": "이메일 마케팅",
    "skills.m4": "마케팅 분석",
    "skills.m5": "행사 기획",
    "skills.researchLabel": "리서치",
    "skills.r1": "시장 조사",
    "skills.r2": "설문 설계",
    "skills.r3": "고객 피드백 분석",
    "skills.r4": "데이터 시각화 (Excel)",
    "skills.businessLabel": "비즈니스",
    "skills.b1": "사업 개발",
    "skills.b2": "제휴·파트너십",
    "skills.b3": "제품 개발",
    "skills.languagesLabel": "언어",
    "skills.l1": "한국어",
    "skills.l2": "영어",
    "nav.contact": "연락",
    "hero.eyebrow": "마케팅 · 리서치",
    "hero.title": "안녕하세요, 최영현입니다.",
    "hero.accent": "사람들이 무엇을 필요로 하는지 알아가는 과정을 좋아합니다.",
    "hero.lead1":
      "미시간 대학교에서 심리학 학사 학위를 받았습니다. 심리학을 공부하며 사람의 이야기를 경청하고, 행동의 패턴을 관찰하고, 더 나은 질문을 던지는 법을 배웠습니다. 마케팅에서도 오디언스를 이해하고, 사람답게 소통할 때 그 경험이 큰 도움이 됩니다.",
    "hero.lead2":
      "브랜드가 사람과 어떻게 연결되는지 계속 배울 수 있는 자리를 찾고 있습니다. 이 사이트는 그 여정을 담아 두는 공간입니다.",
    "hero.ctaExperience": "경험 보기",
    "hero.ctaContact": "연락하기",
    "hero.photoAlt": "최영현 프로필 사진",
    "experience.title": "경험",
    "experience.intro":
      "개인 프로젝트, 인턴십, 학생 단체 리더십을 통해 PR·마케팅·이벤트를 경험해 왔습니다.",
    "experience.lgRole": "개인 프로젝트 · PR & 마케팅",
    "experience.mendedRole": "마케팅 인턴 · 원격",
    "experience.kisaRole": "PR 리더 · 이벤트 코디네이터",
    "experience.moreDetails": "자세히 보기",
    "experience.researchTitle": "연구 경험",
    "experience.researchRole": "연구조교",
    "research.role": "연구팀원",
    "research.findingsTitle": "결과와 한계",
    "research.enlarge": "크게 보기",
    "research.enlargeLabel": "포스터 크게 보기",
    "research.close": "닫기",
    "research.prevSlide": "이전 슬라이드",
    "research.nextSlide": "다음 슬라이드",
    "research.slideAlt": "학생 경험 발표 자료, {n}번 슬라이드",
    "research.slideStatus": "{n} / {total}",
    "experience.kisaTitle": "Korean International Student Association",
    "about.title": "About",
    "about.p1":
      "최영현입니다. 미시간 대학교에서 심리학을 전공하고 학사를 받았습니다. 마케팅이 좋은 이유는, 사람을 살피는 감각과 이야기를 전하는 일이 함께 있기 때문입니다. 잘 말하려면 먼저 사람을 이해해야 합니다.",
    "about.p2":
      "수업과 동아리 일 밖에서도, 브랜드가 일상에서 어떻게 다가오는지 눈여겨봅니다. 어떤 말이 분명하게 들리고, 어떤 말이 금방 잊히는지, 상대가 달라지면 말투가 어떻게 바뀌는지를 봅니다. 그 호기심을 팀에 보태고 싶습니다.",
    "about.factsTitle": "기본 정보",
    "about.educationLabel": "학력",
    "about.educationValue": "미시간 대학교 심리학 학사",
    "about.locationLabel": "위치",
    "about.locationValue": "서울",
    "about.focusLabel": "관심",
    "about.focusValue": "사람 이해, 브랜드 메시지, 단체 홍보",
    "contact.title": "연락",
    "contact.intro":
      "채용 문의나 가벼운 인사 모두 환영합니다. 편하게 연락 주세요.",
    "footer.name": "최영현",
    "detail.eyebrow": "사례",
    "detail.back": "← 경험 목록",
    "detail.contextTitle": "배경",
    "detail.workTitle": "담당 업무",
    "detail.learnedTitle": "배운 점",
  },
};

const pageTranslations = {
  lg: {
    en: {
      pageTitle: "Let’s Gather | Victoria Choi",
      metaDescription:
        "Case study: Let’s Gather, marketing, customer experience, and business development.",
      "detail.lg.meta": "Marketing, Customer Experience & Business Development",
      "detail.lg.subtitle": "Building participation and developing partnerships",
      "detail.lg.introLead":
        "My work at Let’s Gather spans social media marketing, customer feedback, and outreach to potential partners. I helped promote a signup and activity event that brought together 180 people. The platform now has 250 members and more than 80 projects and study groups.",
      "detail.lg.work1Title": "Social media and email marketing",
      "detail.lg.work1Body":
        "I created 40 posts and 16 reels, ran three events, and handled email marketing for our users. Through social media marketing, we gathered more than 200 users in two months.",
      "detail.lg.work2Title": "Customer feedback after the PoC",
      "detail.lg.work2Body":
        "Following our proof of concept, I gathered feedback through direct conversations and surveys to better understand users’ experiences and where improvements were needed.",
      "detail.lg.work3Title": "Outreach and business development",
      "detail.lg.work3Body":
        "I sent cold emails to more than 100 organizations and secured six contracts. I also worked on our collaboration with Easytask, a platform with more than 75,000 users.",
      "detail.lg.work4Title": "Project recognition",
      "detail.lg.work4Body":
        "Let’s Gather was selected for U300, KAIST & Gangnam Deeptech Startup, Hanyang NEOS, and Yonsei Y Ventures.",
      "detail.lg.logoAlt": "Let’s Gather logo",
      "detail.lg.snsTitle": "SNS Marketing",
      "detail.lg.snsIntro": "Instagram carousels I worked on for Let’s Gather.",
      "detail.lg.statPosts": "Posts",
      "detail.lg.statReels": "Reels",
      "detail.lg.statEvents": "Events",
      "detail.lg.statUsers": "Users in 2 months",
      "detail.lg.snsCarouselLabel": "Instagram carousel slides",
      "detail.lg.snsPrev": "Previous slide",
      "detail.lg.snsNext": "Next slide",
      "detail.lg.snsNews1Alt": "Let’s Gather news post 1: your office is wherever you are",
      "detail.lg.snsNews2Alt": "Let’s Gather news post 2: a space to meet and talk freely",
      "detail.lg.snsNews3Alt": "Let’s Gather news post 3: a new way of working",
      "detail.lg.snsEvent1Alt":
        "Signup event post: complete a mission and get a 5,000 won Baemin gift card",
      "detail.lg.snsEvent2Alt": "Signup event post: how to take part in three steps",
      "detail.lg.snsEvent3Alt":
        "Signup event post: find a team, build your portfolio, and get a reward",
      "detail.lg.snsEvent4Alt": "Let’s Gather logo poster",
      "detail.lg.snsIntro1Alt": "Post: nine AI tools every college student should know",
      "detail.lg.snsIntro2Alt": "Post: what is Let’s Gather?",
      "detail.lg.snsIntro3Alt": "Post: situations where Let’s Gather helps",
      "detail.lg.snsIntro4Alt": "Post: Let’s Start with Let’s Gather",
      "detail.lg.snsAi1Alt":
        "Gather AI post: see your future 10 years from now on Let’s Gather",
      "detail.lg.snsAi2Alt": "Gather AI guide step 1: sign up and fill in your profile",
      "detail.lg.snsAi3Alt":
        "Gather AI guide step 2: press Generate in the Gather AI window",
      "detail.lg.snsAi4Alt": "Gather AI guide step 3: wait for generation to finish",
      "detail.lg.snsAi5Alt":
        "Gather AI guide step 4: view your future self as a news article",
      "detail.lg.snsAi6Alt":
        "Notes on the Gather AI popup buttons and a regenerate feature",
      "detail.lg.eventsTitle": "Marketing events",
      "detail.lg.snsAmb1Alt":
        "Let’s Gather Campus Ambassador first cohort recruitment poster",
      "detail.lg.snsAmb2Alt":
        "Campus Ambassador activities: feedback, content, research, ideas, and weekly missions",
      "detail.lg.snsAmb3Alt":
        "Campus Ambassador rewards for participation, activity, and the top team",
      "detail.lg.snsAmb4Alt":
        "Mission event: find a team, build your portfolio, and get a Baemin gift card",
      "detail.lg.snsAmb5Alt":
        "Mission event: complete a simple mission for a 5,000 won Baemin gift card",
      "detail.lg.snsAmb6Alt": "Mission event: how to take part in three steps",
      "detail.lg.reel1Label":
        "Reel: tips for people who struggled to find contest teammates",
      "detail.lg.reel2Label": "Reel: humor-based Let’s Gather video",
      "detail.lg.reel3Label":
        "Reel: find teammates for projects, studies, and clubs on Let’s Gather",
      "detail.lg.reel4Label":
        "Reel: we got you, for teams that struggle to collaborate",
      "detail.lg.reel5Label":
        "Reel: honestly, tell me, a meme-style Let’s Gather video",
      "detail.lg.reel6Label": "Reel: animated phone story video for Let’s Gather",
      "detail.lg.reel7Label":
        "Reel: tour of Let’s Gather features, from team search to contests and chat",
      "detail.lg.snsEvent2nd1Alt":
        "Let’s Gather second event: first 100 people, 20 winners get a 5,000 won Baemin gift card",
      "detail.lg.snsEvent2nd2Alt": "Second event instructions: build your growth roadmap",
      "detail.lg.snsEvent2nd3Alt":
        "Second event instructions: create your future 10 years from now",
      "detail.lg.snsEvent2nd4Alt":
        "Second event: complete four missions, then verify to enter the gift card draw",
      "detail.lg.learned":
        "Running PR and marketing for something I built myself taught me to connect message and audience early. You notice quickly when wording doesn’t match what people actually care about.",
    },
    ko: {
      pageTitle: "Let’s Gather | 최영현",
      metaDescription:
        "Let’s Gather, 마케팅·고객 경험·사업 개발 사례.",
      "detail.lg.meta": "마케팅, 고객 경험 & 사업 개발",
      "detail.lg.subtitle": "참여를 늘리고 파트너십을 만들어 가기",
      "detail.lg.introLead":
        "Let’s Gather에서 SNS 마케팅, 고객 피드백, 잠재 파트너 아웃리치를 맡았습니다. 180명이 참여한 가입·활동 이벤트 홍보를 도왔고, 현재 플랫폼에는 250명의 멤버와 80개 이상의 프로젝트·스터디 그룹이 있습니다.",
      "detail.lg.work1Title": "SNS 마케팅과 이메일 마케팅",
      "detail.lg.work1Body":
        "게시물 40개와 릴스 16개를 제작하고, 이벤트 3회를 진행했으며, 사용자 대상 이메일 마케팅을 맡았습니다. SNS 마케팅을 통해 2개월 만에 200명 이상의 사용자를 모았습니다.",
      "detail.lg.work2Title": "PoC 이후 고객 피드백",
      "detail.lg.work2Body":
        "PoC를 마친 뒤 직접 대화와 설문을 통해 피드백을 모아, 사용자 경험과 개선이 필요한 부분을 파악했습니다.",
      "detail.lg.work3Title": "아웃리치와 사업 개발",
      "detail.lg.work3Body":
        "100곳 이상의 단체에 콜드 메일을 보내 6건의 계약을 성사했습니다. 또한 75,000명 이상의 사용자를 보유한 플랫폼 Easytask와의 협업을 진행했습니다.",
      "detail.lg.work4Title": "프로젝트 선정",
      "detail.lg.work4Body":
        "Let’s Gather는 U300, KAIST & 강남 딥테크 스타트업, 한양 NEOS, 연세 Y Ventures에 선정되었습니다.",
      "detail.lg.logoAlt": "Let’s Gather 로고",
      "detail.lg.snsTitle": "SNS Marketing",
      "detail.lg.snsIntro": "Let’s Gather 인스타그램에 게시한 카드뉴스입니다.",
      "detail.lg.statPosts": "게시물",
      "detail.lg.statReels": "릴스",
      "detail.lg.statEvents": "이벤트",
      "detail.lg.statUsers": "2개월간 모은 사용자",
      "detail.lg.snsCarouselLabel": "Instagram carousel slides",
      "detail.lg.snsPrev": "이전 슬라이드",
      "detail.lg.snsNext": "다음 슬라이드",
      "detail.lg.snsNews1Alt": "레츠게더 뉴스 1: 당신이 있는 곳이 곧 오피스입니다",
      "detail.lg.snsNews2Alt": "레츠게더 뉴스 2: 자유롭게 만나고 소통하는 공간",
      "detail.lg.snsNews3Alt": "레츠게더 뉴스 3: 레츠게더와 함께하는 새로운 업무 방식",
      "detail.lg.snsEvent1Alt": "가입 이벤트: 미션 완료 시 배달의민족 5,000원 기프티콘 지급",
      "detail.lg.snsEvent2Alt": "가입 이벤트: 참여 방법 3단계",
      "detail.lg.snsEvent3Alt": "가입 이벤트: 팀도 찾고, 스펙도 쌓고, 맛있는 것도 먹자",
      "detail.lg.snsEvent4Alt": "Let’s Gather 로고 포스터",
      "detail.lg.snsIntro1Alt": "대학생이라면 꼭 알아야 할 AI 툴 9선",
      "detail.lg.snsIntro2Alt": "레츠게더가 뭐야?",
      "detail.lg.snsIntro3Alt": "그럼 어떤 상황에 쓸 수 있을까?",
      "detail.lg.snsIntro4Alt": "레츠게더, Let’s Start 해보자!",
      "detail.lg.snsAi1Alt": "Gather AI: 레츠게더에서 10년 뒤 미래를 확인해 보세요",
      "detail.lg.snsAi2Alt": "Gather AI 가이드 1: 회원가입 후 프로필 정보 작성",
      "detail.lg.snsAi3Alt": "Gather AI 가이드 2: Gather AI 창에서 '생성하기' 누르기",
      "detail.lg.snsAi4Alt": "Gather AI 가이드 3: 생성이 완료될 때까지 기다리기",
      "detail.lg.snsAi5Alt": "Gather AI 가이드 4: 뉴스 기사로 만들어진 미래 모습 보기",
      "detail.lg.snsAi6Alt": "Gather AI 팝업 버튼과 regenerate 기능에 대한 메모",
      "detail.lg.eventsTitle": "마케팅 이벤트",
      "detail.lg.snsAmb1Alt": "Let’s Gather Campus Ambassador 1기 모집 포스터",
      "detail.lg.snsAmb2Alt": "Campus Ambassador 활동 내용 & 주요 활동",
      "detail.lg.snsAmb3Alt": "Let’s Gather 1기 멤버 리워드 안내",
      "detail.lg.snsAmb4Alt": "미션 이벤트: 팀도 찾고, 스펙도 쌓고, 맛있는 것도 먹자",
      "detail.lg.snsAmb5Alt": "미션 이벤트: 배달의민족 5,000원 기프티콘 지급",
      "detail.lg.snsAmb6Alt": "미션 이벤트: 참여 방법 3단계",
      "detail.lg.reel1Label": "릴스: 공모전 팀원 찾다 해탈한 형들을 위한 꿀팁",
      "detail.lg.reel2Label": "릴스: 유머 기반 Let’s Gather 영상",
      "detail.lg.reel3Label": "릴스: 레츠게더에서 프로젝트·스터디·소모임 팀원 찾기",
      "detail.lg.reel4Label": "릴스: 팀 협업이 원활하지 않을 때, we got you",
      "detail.lg.reel5Label": "릴스: 근데 솔직히 말해봐, 밈 스타일 Let’s Gather 영상",
      "detail.lg.reel6Label": "릴스: 휴대폰 화면 스토리 형식의 Let’s Gather 영상",
      "detail.lg.reel7Label": "릴스: 팀 찾기부터 공모전, 채팅까지 Let’s Gather 기능 소개",
      "detail.lg.snsEvent2nd1Alt":
        "레츠게더 2차 이벤트: 선착순 100명, 20명 추첨 5천원 배민 기프티콘",
      "detail.lg.snsEvent2nd2Alt": "2차 이벤트 안내: 성장 로드맵 만들기",
      "detail.lg.snsEvent2nd3Alt": "2차 이벤트 안내: 10년 후 미래 만들기",
      "detail.lg.snsEvent2nd4Alt": "2차 이벤트: 미션 4가지 완료 후 인증",
      "detail.lg.learned":
        "직접 만든 것의 PR·마케팅을 맡으면서, 메시지와 오디언스를 처음부터 맞춰 가야 한다는 걸 배웠습니다. 표현이 사람들의 관심과 어긋날 때 그 차이가 금방 드러납니다.",
    },
  },
  mended: {
    en: {
      pageTitle: "Mended | Victoria Choi",
      metaDescription:
        "Case study: Mended, remote marketing intern, April–November 2025.",
      "detail.mended.meta": "Marketing intern · Remote",
      "detail.mended.dates": "April 2025–November 2025",
      "detail.mended.logoAlt": "Mended app logo",
      "detail.mended.promoAlt":
        "Mended app screens and marketing visuals showing features such as finding buddies, groups, and personalized feeds",
      "detail.mended.promoCaption":
        "App screens and brand visuals from Mended.",
      "detail.mended.aboutTitle": "About Mended",
      "detail.mended.about":
        "Mended is a social networking app focused on mental wellbeing, combining social content with community connection and support.",
      "detail.mended.roleTitle": "My role",
      "detail.mended.roleBody":
        "I worked remotely as a marketing intern and intern team leader for people who want to network around mental health. I proposed content ideas and weekly themes, suggested revisions, and gave feedback on content created by other interns. I also researched market trends and worked with a team of seven on business development and potential app features.",
      "detail.mended.work1Title": "Content planning, review, and feedback",
      "detail.mended.work1Body":
        "I proposed weekly content themes and content ideas on mental health topics. I reviewed interns’ posts, blogs, and videos and provided feedback and revision suggestions. I did not produce those assets myself.",
      "detail.mended.work2Title": "Audience and trend research",
      "detail.mended.work2Body":
        "I researched market trends and explored topics relevant to people who want to connect around mental health, using those findings to suggest content ideas for this audience.",
      "detail.mended.work3Title": "Business development and app ideas",
      "detail.mended.work3Body":
        "I contributed to business development discussions and collaborated with a team of seven to brainstorm upcoming app features.",
      "detail.mended.subtitle": "From weekly themes to team content.",
      "detail.mended.factRoleLabel": "Role",
      "detail.mended.factRole": "Marketing Intern / Intern Team Leader",
      "detail.mended.factPeriodLabel": "Period",
      "detail.mended.factPeriod": "April–November 2025",
      "detail.mended.factArrangementLabel": "Work arrangement",
      "detail.mended.factArrangement": "Remote",
      "detail.mended.factTeamLabel": "Team",
      "detail.mended.factTeam": "Seven people, including me",
      "detail.mended.introLead":
        "Mended is a social networking app focused on mental wellbeing. During my internship, I helped organize weekly work, proposed content ideas and themes, and reviewed fellow interns’ content.",
      "detail.mended.viewApp": "View the app",
      "detail.mended.contributionsTitle": "My contributions",
      "detail.mended.contributionsIntro": "My internship work included:",
      "detail.mended.contrib1":
        "Proposing content ideas and weekly themes for mental health content.",
      "detail.mended.contrib2":
        "Reviewing intern-created posts, blogs, and videos and providing feedback and revision suggestions.",
      "detail.mended.contrib3": "Conducting market and trend research.",
      "detail.mended.contrib4":
        "Contributing to business development discussions and brainstorming potential app features.",
      "detail.mended.individualTitle": "On my own",
      "detail.mended.individualBody":
        "I proposed weekly themes and content ideas, conducted research, and wrote briefs the team could follow. I reviewed interns’ work and gave feedback and revision suggestions.",
      "detail.mended.teamTitle": "With the team",
      "detail.mended.teamBody":
        "Fellow interns created the posts, blogs, and videos from shared weekly plans. Business development discussions and app feature brainstorming happened collaboratively with the wider team.",
      "detail.mended.leadershipTitle":
        "Turning a theme into a clear weekly brief.",
      "detail.mended.leadershipBody":
        "I developed weekly themes and organized them into assignments with defined deliverables, publishing channels, and space for team questions.",
      "detail.mended.step1Label": "Plan:",
      "detail.mended.step1Body": "Choose the weekly focus.",
      "detail.mended.step2Label": "Organize:",
      "detail.mended.step2Body":
        "Define tasks, content formats, quantities, and submission channels.",
      "detail.mended.step3Label": "Coordinate:",
      "detail.mended.step3Body":
        "Include follow-up reminders and opportunities to share ideas.",
      "detail.mended.briefsSectionTitle": "Weekly planning documents",
      "detail.mended.tabWeek4": "Week 4",
      "detail.mended.tabWeek6": "Week 6",
      "detail.mended.briefDocTitle": "MENDED: Weekly Marketing Team Brief",
      "detail.mended.briefPrepared":
        "Prepared by: Victoria Choi, Marketing Intern / Intern Team Leader",
      "detail.mended.w4.title": "WEEK 4: HUMOR-BASED CONTENT",
      "detail.mended.w4.focusLabel": "Focus:",
      "detail.mended.w4.focus":
        "Create humor-based content to promote Mended and contribute to its content feed.",
      "detail.mended.tableDeliverable": "Deliverable",
      "detail.mended.tableQuantity": "Quantity",
      "detail.mended.tableChannel": "Channel",
      "detail.mended.w4.row1del": "Humorous promotional video",
      "detail.mended.w4.row1qty": "1 video",
      "detail.mended.w4.row1ch": "PhotoCircle",
      "detail.mended.w4.row2del": "Humor-based memes",
      "detail.mended.w4.row2qty": "4 posts during the week",
      "detail.mended.w4.row2ch": "Mended",
      "detail.mended.w4.row3del": "Short humor videos",
      "detail.mended.w4.row3qty": "3 videos",
      "detail.mended.w4.row3ch": "Mended / Flicks",
      "detail.mended.w4.followLabel": "Follow-up:",
      "detail.mended.w4.follow":
        "Complete unfinished tasks from the previous three weeks. Additional memes and videos are welcome beyond the required deliverables.",
      "detail.mended.w6.title": "WEEK 6: GUERRILLA MARKETING AND APP PROMOTION",
      "detail.mended.w6.focusLabel": "Focus:",
      "detail.mended.w6.focus":
        "Develop low-cost promotional strategies using referral codes, word of mouth, and guerrilla marketing.",
      "detail.mended.w6.targetLabel": "Planning target:",
      "detail.mended.w6.target":
        "Develop a strategy aimed at generating 35 app downloads per week through a referral code.",
      "detail.mended.w6.assignmentLabel": "Assignment:",
      "detail.mended.w6.assignment":
        "Prepare a promotional strategy and share it with the group so members can exchange ideas.",
      "detail.mended.w6.prepLabel": "Preparation:",
      "detail.mended.w6.prep":
        "Review guerrilla marketing and campus marketing videos provided by the CEO.",
      "detail.mended.w6.disclaimer":
        "35 downloads was a planning target, not a reported result.",
      "detail.mended.briefFootnote":
        "Reformatted from weekly briefs I created during my internship.",
      "detail.mended.contentTitle": "The work behind the brief.",
      "detail.mended.contentIntro":
        "These examples were created by fellow interns. My role was to propose ideas, review the content, and provide feedback and revision suggestions.",
      "detail.mended.archivedNotice":
        "Mended’s blog, website, and Instagram account are currently being revamped, so the original content is not publicly accessible. The examples shown here are saved materials from my internship. Other interns’ faces have been blurred to protect their privacy.",
      "detail.mended.reelsShowcaseTitle": "Team-created reels",
      "detail.mended.reelsShowcaseNote":
        "Sample grid of short-form videos from the internship. Faces are blurred for privacy.",
      "detail.mended.reelsGrid1Alt":
        "Grid of team-created Mended reels with faces blurred",
      "detail.mended.reelsGrid2Alt":
        "Second grid of team-created Mended reels with faces blurred",
      "detail.mended.reelsShowcaseCaption":
        "Reels produced by fellow interns during weekly content cycles, not my own production work.",
      "detail.mended.badgeTeam": "Team-created content",
      "detail.mended.placeholderReel":
        "Media placeholder: intern-created reel (replace with video or embed)",
      "detail.mended.placeholderPost":
        "Media placeholder: intern-created post or blog (replace with image or link)",
      "detail.mended.placeholderTeam":
        "Media placeholder: intern-created video or post (replace with image or video)",
      "detail.mended.placeholderCollage":
        "Optional team content collage (replace images/mended-team-collage.png)",
      "detail.mended.ex1Title": "Intern-created video",
      "detail.mended.ex2Title": "Intern-created video",
      "detail.mended.ex3Title": "Intern-created video",
      "detail.mended.ideaLabel": "Idea I proposed:",
      "detail.mended.feedbackLabel": "Feedback I gave:",
      "detail.mended.revisionsLabel": "Revision suggestions:",
      "detail.mended.ex1Idea": "[Add when ready]",
      "detail.mended.ex1Feedback": "[Add when ready]",
      "detail.mended.ex1Revisions": "[Add when ready]",
      "detail.mended.ex2Idea": "[Add when ready]",
      "detail.mended.ex2Feedback": "[Add when ready]",
      "detail.mended.ex2Revisions": "[Add when ready]",
      "detail.mended.ex3Idea": "[Add when ready]",
      "detail.mended.ex3Feedback": "[Add when ready]",
      "detail.mended.ex3Revisions": "[Add when ready]",
      "detail.mended.collageCaption":
        "Optional supporting collage of team content from shared weekly plans.",
    },
    ko: {
      pageTitle: "Mended | 최영현",
      metaDescription:
        "Mended, 원격 마케팅 인턴 (2025년 4–11월) 사례.",
      "detail.mended.meta": "마케팅 인턴 · 원격",
      "detail.mended.dates": "2025년 4월–11월",
      "detail.mended.logoAlt": "Mended 앱 로고",
      "detail.mended.promoAlt":
        "버디 찾기, 그룹, 맞춤 피드 등 Mended 앱 화면과 마케팅 비주얼",
      "detail.mended.promoCaption": "Mended 앱 화면 및 브랜드 비주얼.",
      "detail.mended.aboutTitle": "Mended 소개",
      "detail.mended.about":
        "Mended는 정신적 웰빙에 초점을 맞춘 소셜 네트워킹 앱으로, 소셜 콘텐츠와 커뮤니티 연결·지원을 함께 제공합니다.",
      "detail.mended.roleTitle": "나의 역할",
      "detail.mended.roleBody":
        "정신 건강을 주제로 네트워킹하고 싶은 사람들을 대상으로, 원격 마케팅 인턴 및 인턴 팀 리더로 활동했습니다. 콘텐츠 아이디어와 주간 테마를 제안하고, 다른 인턴이 만든 콘텐츠에 대한 수정 제안과 피드백을 제공했습니다. 시장 트렌드 조사와 7명 팀의 비즈니스 개발·앱 기능 논의에도 참여했습니다.",
      "detail.mended.work1Title": "콘텐츠 기획, 검토, 피드백",
      "detail.mended.work1Body":
        "정신 건강 주제의 주간 콘텐츠 테마와 아이디어를 제안했습니다. 인턴들의 게시물·블로그·영상을 검토하고 피드백과 수정 제안을 제공했으며, 해당 결과물을 직접 제작하지는 않았습니다.",
      "detail.mended.work2Title": "오디언스·트렌드 리서치",
      "detail.mended.work2Body":
        "시장 트렌드를 조사하고 정신 건강을 주제로 연결하고 싶은 사람들과 연관된 주제를 탐색한 뒤, 그 결과를 바탕으로 이 오디언스를 위한 콘텐츠 아이디어를 제안했습니다.",
      "detail.mended.work3Title": "비즈니스 개발 및 앱 아이디어",
      "detail.mended.work3Body":
        "비즈니스 개발 논의에 기여했고, 7명의 팀과 함께 새로운 앱 기능 아이디어를 브레인스토밍했습니다.",
      "detail.mended.subtitle": "주간 테마에서 팀 콘텐츠까지.",
      "detail.mended.factRoleLabel": "역할",
      "detail.mended.factRole": "마케팅 인턴 / 인턴 팀 리더",
      "detail.mended.factPeriodLabel": "기간",
      "detail.mended.factPeriod": "2025년 4–11월",
      "detail.mended.factArrangementLabel": "근무 형태",
      "detail.mended.factArrangement": "원격",
      "detail.mended.factTeamLabel": "팀",
      "detail.mended.factTeam": "본인 포함 7명",
      "detail.mended.introLead":
        "Mended는 정신적 웰빙에 초점을 맞춘 소셜 네트워킹 앱입니다. 인턴십 기간 동안 주간 업무를 정리·운영하고, 콘텐츠 아이디어와 테마를 제안하며, 다른 인턴의 콘텐츠를 검토했습니다.",
      "detail.mended.viewApp": "앱 보기",
      "detail.mended.contributionsTitle": "기여 요약",
      "detail.mended.contributionsIntro": "인턴십에서 맡은 업무는 다음을 포함합니다.",
      "detail.mended.contrib1":
        "정신 건강 콘텐츠를 위한 아이디어 및 주간 테마 제안.",
      "detail.mended.contrib2":
        "인턴이 제작한 게시물·블로그·영상 검토 및 피드백·수정 제안.",
      "detail.mended.contrib3": "시장·트렌드 리서치.",
      "detail.mended.contrib4":
        "비즈니스 개발 논의 및 잠재적 앱 기능 아이디어 브레인스토밍.",
      "detail.mended.individualTitle": "개인 업무",
      "detail.mended.individualBody":
        "주간 테마와 콘텐츠 아이디어를 제안하고, 리서치 후 팀이 따를 브리프를 작성했습니다. 인턴들의 작업을 검토하며 피드백과 수정 제안을 제공했습니다.",
      "detail.mended.teamTitle": "팀과 함께",
      "detail.mended.teamBody":
        "게시물·블로그·영상은 공유된 주간 계획에 따라 다른 인턴들이 제작했습니다. 비즈니스 개발 논의와 앱 기능 브레인스토밍은 더 넓은 팀과 협업으로 진행했습니다.",
      "detail.mended.leadershipTitle": "테마를 명확한 주간 브리프로.",
      "detail.mended.leadershipBody":
        "주간 테마를 정하고, 산출물·게시 채널·팀 질문 공간을 포함한 과제 형태로 정리했습니다.",
      "detail.mended.step1Label": "Plan:",
      "detail.mended.step1Body": "주간 초점 정하기.",
      "detail.mended.step2Label": "Organize:",
      "detail.mended.step2Body":
        "업무, 콘텐츠 형식, 수량, 제출 채널 정의.",
      "detail.mended.step3Label": "Coordinate:",
      "detail.mended.step3Body": "후속 리마인더와 아이디어 공유 기회 포함.",
      "detail.mended.briefsSectionTitle": "주간 기획 문서",
      "detail.mended.tabWeek4": "Week 4",
      "detail.mended.tabWeek6": "Week 6",
      "detail.mended.briefDocTitle": "MENDED: Weekly Marketing Team Brief",
      "detail.mended.briefPrepared":
        "Prepared by: 최영현, Marketing Intern / Intern Team Leader",
      "detail.mended.w4.title": "WEEK 4: HUMOR-BASED CONTENT",
      "detail.mended.w4.focusLabel": "Focus:",
      "detail.mended.w4.focus":
        "Mended 홍보 및 콘텐츠 피드 기여를 위한 유머 기반 콘텐츠 제작.",
      "detail.mended.tableDeliverable": "Deliverable",
      "detail.mended.tableQuantity": "Quantity",
      "detail.mended.tableChannel": "Channel",
      "detail.mended.w4.row1del": "Humorous promotional video",
      "detail.mended.w4.row1qty": "1 video",
      "detail.mended.w4.row1ch": "PhotoCircle",
      "detail.mended.w4.row2del": "Humor-based memes",
      "detail.mended.w4.row2qty": "4 posts during the week",
      "detail.mended.w4.row2ch": "Mended",
      "detail.mended.w4.row3del": "Short humor videos",
      "detail.mended.w4.row3qty": "3 videos",
      "detail.mended.w4.row3ch": "Mended / Flicks",
      "detail.mended.w4.followLabel": "Follow-up:",
      "detail.mended.w4.follow":
        "지난 3주 미완료 과제 마무리. 필수 분량 외 추가 밈·영상 환영.",
      "detail.mended.w6.title": "WEEK 6: GUERRILLA MARKETING AND APP PROMOTION",
      "detail.mended.w6.focusLabel": "Focus:",
      "detail.mended.w6.focus":
        "추천 코드, 입소문, 게릴라 마케팅을 활용한 저비용 홍보 전략.",
      "detail.mended.w6.targetLabel": "Planning target:",
      "detail.mended.w6.target":
        "추천 코드를 통해 주당 앱 다운로드 35건을 목표로 하는 전략 수립.",
      "detail.mended.w6.assignmentLabel": "Assignment:",
      "detail.mended.w6.assignment":
        "홍보 전략을 준비해 그룹과 공유하고 아이디어 교환.",
      "detail.mended.w6.prepLabel": "Preparation:",
      "detail.mended.w6.prep":
        "CEO가 제공한 게릴라·캠퍼스 마케팅 영상 검토.",
      "detail.mended.w6.disclaimer":
        "35 downloads was a planning target, not a reported result.",
      "detail.mended.briefFootnote":
        "인턴십 중 작성한 주간 브리프를 재구성한 문서입니다.",
      "detail.mended.contentTitle": "The work behind the brief.",
      "detail.mended.contentIntro":
        "아래 예시는 다른 인턴들이 제작한 콘텐츠입니다. 저는 아이디어 제안, 콘텐츠 검토, 피드백 및 수정 제안을 담당했습니다.",
      "detail.mended.archivedNotice":
        "Mended 블로그, 웹사이트, Instagram 계정은 현재 리뉴얼 중이라 당시 콘텐츠는 공개적으로 볼 수 없습니다. 이 페이지의 예시는 인턴십 기간에 보관해 둔 자료입니다. 다른 인턴의 얼굴은 개인정보 보호를 위해 블러 처리했습니다.",
      "detail.mended.reelsShowcaseTitle": "Team-created reels",
      "detail.mended.reelsShowcaseNote":
        "인턴십 기간 제작된 숏폼 영상 그리드 예시입니다. 개인정보 보호를 위해 얼굴은 블러 처리했습니다.",
      "detail.mended.reelsGrid1Alt":
        "얼굴이 블러 처리된 팀 제작 Mended 릴 그리드",
      "detail.mended.reelsGrid2Alt":
        "얼굴이 블러 처리된 두 번째 팀 제작 릴 그리드",
      "detail.mended.reelsShowcaseCaption":
        "주간 콘텐츠 사이클 동안 다른 인턴들이 제작한 릴입니다제가 직접 제작한 작업이 아닙니다.",
      "detail.mended.badgeTeam": "Team-created content",
      "detail.mended.placeholderReel":
        "미디어 자리 표시: 인턴 제작 릴 (영상 또는 embed로 교체)",
      "detail.mended.placeholderPost":
        "미디어 자리 표시: 인턴 제작 게시물·블로그 (이미지 또는 링크로 교체)",
      "detail.mended.placeholderTeam":
        "미디어 자리 표시: 인턴 제작 영상·게시물 (이미지·영상으로 교체)",
      "detail.mended.placeholderCollage":
        "선택: 팀 콘텐츠 콜라주 (images/mended-team-collage.png 로 교체)",
      "detail.mended.ex1Title": "인턴 제작 영상",
      "detail.mended.ex2Title": "인턴 제작 영상",
      "detail.mended.ex3Title": "인턴 제작 영상",
      "detail.mended.ideaLabel": "Idea I proposed:",
      "detail.mended.feedbackLabel": "Feedback I gave:",
      "detail.mended.revisionsLabel": "Revision suggestions:",
      "detail.mended.ex1Idea": "[준비되면 추가]",
      "detail.mended.ex1Feedback": "[준비되면 추가]",
      "detail.mended.ex1Revisions": "[준비되면 추가]",
      "detail.mended.ex2Idea": "[준비되면 추가]",
      "detail.mended.ex2Feedback": "[준비되면 추가]",
      "detail.mended.ex2Revisions": "[준비되면 추가]",
      "detail.mended.ex3Idea": "[준비되면 추가]",
      "detail.mended.ex3Feedback": "[준비되면 추가]",
      "detail.mended.ex3Revisions": "[준비되면 추가]",
      "detail.mended.collageCaption":
        "공유 주간 계획에 따른 팀 콘텐츠 콜라주(선택).",
    },
  },
  kisa: {
    en: {
      pageTitle: "KISA | Victoria Choi",
      metaDescription:
        "Case study: KISA, PR leader and event coordinator.",
      "detail.kisa.meta": "PR leader · event coordinator",
      "detail.kisa.acronym": "KISA (Korean International Student Association)",
      "detail.kisa.logoAlt": "KISA @UMICH logo",
      "detail.kisa.context":
        "At the Korean International Student Association (KISA) at the University of Michigan, I worked with a community of Korean international students. Public-facing communication and live events were central to how the group stayed connected on campus.",
      "detail.kisa.work":
        "I served as PR leader and event coordinator. That meant leading how the association communicated outwardly and coordinating events that brought members together.",
      "detail.kisa.learned":
        "Holding both PR and events pushed me to keep one voice across announcements and in-person experiences. What you say before an event and how it feels when people show up should line up.",
      "detail.kisa.snsTitle": "SNS Operation",
      "detail.kisa.snsIntro":
        "Saved posts from KISA’s social channels during my PR leadership.",
      "detail.kisa.snsPost1Title": "Open chat for new and transfer students",
      "detail.kisa.snsPost1Alt":
        "KISA open chat recruitment graphic for new and transfer UMich students",
      "detail.kisa.snsPost2Title": "2025–2026 membership (Instagram carousel)",
      "detail.kisa.snsMembership1Alt": "Membership carousel, slide 1",
      "detail.kisa.snsMembership2Alt": "Membership carousel, slide 2",
      "detail.kisa.snsMembership3Alt": "Membership carousel, slide 3",
      "detail.kisa.snsPost3Title": "Friends UP event (Instagram carousel)",
      "detail.kisa.snsFriends1Alt": "Friends UP event carousel, slide 1",
      "detail.kisa.snsFriends2Alt": "Friends UP event carousel, slide 2",
      "detail.kisa.snsFriends3Alt": "Friends UP event carousel, slide 3",
      "detail.kisa.snsCarouselLabel": "Instagram carousel slides",
      "detail.kisa.snsPrev": "Previous slide",
      "detail.kisa.snsNext": "Next slide",
      "detail.kisa.eventsTitle": "Event coordination",
      "detail.kisa.eventsIntro":
        "Programs I helped bring to campus as event coordinator, alongside KISA leadership and partner orgs.",
      "detail.kisa.eventsRoleLabel": "My work on each program",
      "detail.kisa.eventsRole1":
        "Outreach and communication with partners, speakers, and campus contacts",
      "detail.kisa.eventsRole2":
        "Marketing the event through KISA channels and promotional assets",
      "detail.kisa.eventsRole3":
        "Organizing venue and room reservations on campus",
      "detail.kisa.eventsRole4":
        "On-site operations for the full run of the program",
      "detail.kisa.event1Title":
        "K-onnect: Song & His Story with Kim Kwang Jin",
      "detail.kisa.event1Meta":
        "Sep 19, 2025 · 6–8 PM · Lydia Mendelssohn Theatre, Ann Arbor",
      "detail.kisa.event1Alt":
        "K-onnect concert poster featuring Kim Kwang Jin",
      "detail.kisa.event1Slide2Alt":
        "Kim Kwang Jin speaking on stage at K-onnect with a moderator",
      "detail.kisa.event1Slide3Alt":
        "Kim Kwang Jin with flowers and KISA members after the concert",
      "detail.kisa.event2Title": "Korean Alumni Amazon SWE Career Panel",
      "detail.kisa.event2Meta": "March 19 (Thu) · 6:45–8:45 PM · NUB 1528",
      "detail.kisa.event2Alt": "Amazon SWE career panel promotional graphic",
      "detail.kisa.event2Slide2Alt":
        "Korean Alumni SWE Career Panel in session at NUB",
      "detail.kisa.event3Title":
        "Google × KSAG × KISA: Technical Resume & Interview Workshop",
      "detail.kisa.event3Meta":
        "Mon, Sep 14, 2026 · 6–8 PM · Michigan League Ballroom (2nd floor)",
      "detail.kisa.event3Alt":
        "Google, KSAG, and KISA technical interview workshop flyer",
      "detail.kisa.event3Slide2Alt":
        "Google tech interview workshop in session at Michigan",
    },
    ko: {
      pageTitle: "KISA | 최영현",
      metaDescription:
        "KISA PR 리더·이벤트 코디네이터 사례.",
      "detail.kisa.meta": "PR 리더 · 이벤트 코디네이터",
      "detail.kisa.context":
        "미시간 대학교 Korean International Student Association(KISA)에서 한국 유학생 커뮤니티와 함께했습니다. 대외 PR과 이벤트가 캠퍼스에서 단체를 연결하는 핵심이었습니다.",
      "detail.kisa.work":
        "PR 리더와 이벤트 코디네이터로 활동했습니다. 학생회가 밖으로 어떻게 말하는지를 이끌고, 구성원이 모이는 이벤트를 기획·운영하는 일이었습니다.",
      "detail.kisa.learned":
        "PR과 이벤트를 동시에 맡으며, 공지와 오프라인 경험에서 하나의 목소리를 유지해야 한다는 걸 배웠습니다. 행사 전에 하는 말과 사람들이 왔을 때 느끼는 분위기가 맞아야 합니다.",
      "detail.kisa.acronym":
        "KISA (Korean International Student Association)",
      "detail.kisa.logoAlt": "KISA @UMICH 로고",
      "detail.kisa.snsTitle": "SNS Operation",
      "detail.kisa.snsIntro": "PR 리더 활동 기간 KISA SNS에 게시했던 자료입니다.",
      "detail.kisa.snsPost1Title": "신·편입생 오픈채팅 안내",
      "detail.kisa.snsPost1Alt": "신·편입생 대상 KISA 오픈채팅 홍보 이미지",
      "detail.kisa.snsPost2Title": "2025–2026 멤버십 (Instagram carousel)",
      "detail.kisa.snsMembership1Alt": "멤버십 carousel, 1번 슬라이드",
      "detail.kisa.snsMembership2Alt": "멤버십 carousel, 2번 슬라이드",
      "detail.kisa.snsMembership3Alt": "멤버십 carousel, 3번 슬라이드",
      "detail.kisa.snsPost3Title": "Friends UP 이벤트 (Instagram carousel)",
      "detail.kisa.snsFriends1Alt": "Friends UP carousel, 1번 슬라이드",
      "detail.kisa.snsFriends2Alt": "Friends UP carousel, 2번 슬라이드",
      "detail.kisa.snsFriends3Alt": "Friends UP carousel, 3번 슬라이드",
      "detail.kisa.snsCarouselLabel": "Instagram carousel slides",
      "detail.kisa.snsPrev": "Previous slide",
      "detail.kisa.snsNext": "Next slide",
      "detail.kisa.eventsTitle": "Event coordination",
      "detail.kisa.eventsIntro":
        "이벤트 코디네이터로 KISA 리더십·파트너 단체와 함께 캠퍼스에서 진행한 프로그램입니다.",
      "detail.kisa.eventsRoleLabel": "각 행사에서 맡은 일",
      "detail.kisa.eventsRole1":
        "파트너·연사·캠퍼스 관계자 대상 아웃리치 및 커뮤니케이션",
      "detail.kisa.eventsRole2":
        "KISA 채널과 홍보 자료를 통한 이벤트 마케팅",
      "detail.kisa.eventsRole3": "캠퍼스 공간·강의실 예약 및 조율",
      "detail.kisa.eventsRole4": "행사 전 과정 현장 운영",
      "detail.kisa.event1Title":
        "K-onnect: Song & His Story with Kim Kwang Jin",
      "detail.kisa.event1Meta":
        "2025년 9월 19일 · 오후 6–8시 · Lydia Mendelssohn Theatre, Ann Arbor",
      "detail.kisa.event1Alt": "Kim Kwang Jin K-onnect 콘서트 포스터",
      "detail.kisa.event1Slide2Alt":
        "K-onnect 행사에서 무대 위 김광진과 진행자",
      "detail.kisa.event1Slide3Alt":
        "공연 후 꽃다발과 함께한 김광진 및 KISA 멤버",
      "detail.kisa.event2Title": "Korean Alumni Amazon SWE Career Panel",
      "detail.kisa.event2Meta":
        "3월 19일 (목) · 오후 6:45–8:45 · NUB 1528",
      "detail.kisa.event2Alt": "Amazon SWE 커리어 패널 홍보 이미지",
      "detail.kisa.event2Slide2Alt":
        "NUB에서 진행된 Korean Alumni SWE Career Panel 현장",
      "detail.kisa.event3Title":
        "Google × KSAG × KISA: Technical Resume & Interview Workshop",
      "detail.kisa.event3Meta":
        "2026년 9월 14일 (월) · 오후 6–8시 · Michigan League Ballroom (2층)",
      "detail.kisa.event3Alt":
        "Google·KSAG·KISA 기술 면접 워크숍 플라이어",
      "detail.kisa.event3Slide2Alt":
        "미시간 대학교에서 진행된 Google 기술 면접 워크숍 현장",
    },
  },
  researchExp: {
    en: {
      pageTitle: "Research Experience | Victoria Choi",
      metaDescription:
        "Research assistant roles and methods coursework, plus three psychology research presentations.",
      "detail.rx.eyebrow": "Research experience",
      "detail.rx.intro":
        "My research background combines coursework in qualitative and quantitative methods with research assistant roles. I learned R, SPSS, and SQL through my studies and gained practical experience in data collection, analysis, questionnaire development, and research communication.",
      "detail.rx.role1Title": "Research Assistant",
      "detail.rx.role1Org":
        "Institute for Social Research, University of Michigan",
      "detail.rx.role1Dates": "September 2025–May 2026",
      "detail.rx.role2Title": "Research Assistant — Social Psychology",
      "detail.rx.role2Org": "Sogang University",
      "detail.rx.role2Dates": "May–August 2025",
      "detail.rx.role2Body":
        "Supported ongoing research projects through questionnaire development, translation, and weekly research meetings.",
      "detail.rx.role3Title": "Research Assistant",
      "detail.rx.role3Org":
        "Department of Psychological Perspectives in Education, University of Michigan",
      "detail.rx.role3Dates": "January–May 2025",
      "detail.rx.role3Body":
        "Worked on three small-scale research studies, primarily contributing to data collection and analysis.",
      "detail.rx.role4Title": "Research Methods and Statistics Coursework",
      "detail.rx.role4Dates": "January–December 2023",
      "detail.rx.role4Body":
        "Studied qualitative and quantitative research methods and learned to use R, SPSS, and SQL. Presented one mini presentation.",
      "detail.rx.presentationsTitle": "Selected Research Presentations",
      "detail.rx.presentationsBody":
        "Presented three studies examining instructor perception and student engagement, childhood media preferences and adult personality, and social roles and caregiver burden.",
      "detail.rx.contribTitle": "My contributions",
      "detail.rx.contrib1":
        "Instructor perception: study setup, data collection, and the presentation, with collaboration on design and analysis. The comparison and interpretation belonged to the PSYCH 357 team.",
      "detail.rx.contrib2":
        "Childhood media and personality: survey setup, data collection, analysis with the team, and the presentation. I was one of five researchers.",
      "detail.rx.contrib3":
        "Caregiver burden: the research process and the presentation. I did not recruit the caregivers. The analysis uses responses that were already collected.",
      "detail.rx.instTitle":
        "Student experience: instructor perception and engagement",
      "detail.rx.instEmphasis":
        "Measuring teaching quality and engagement while a lecture is happening.",
      "detail.rx.instBody":
        "How did students’ ratings of teaching quality and engagement differ between the two instructors studied? Participants watched a lecture and rated teaching quality and engagement continuously with a joystick. The joystick recorded a rating every two seconds, and participants also completed questionnaires before and after. The team compared a younger Asian female instructor and an older white male instructor with t-tests.",
      "detail.rx.instCredit":
        "PSYCH 357 team: Abigail Kurniawan, Allegra Isdar, Christa Hanna, Dior Jones, Heeba Altawil, Jennifer Roman, Juliana Tanner, Lang Lang, and Younghyun Choi.",
      "detail.rx.instFindings":
        "In this dataset, the older white male instructor received higher ratings of teaching quality and engagement than the younger Asian female instructor. The presentation reports those differences as statistically significant.",
      "detail.rx.instLimits":
        "That gap does not show that gender, race, or age caused the ratings. The instructors differed on several characteristics at once, and the data were collected in different years. The presentation also names other possible confounds: the sample was mostly introductory psychology students, some participants may have had trouble concentrating, the lecture content may have mattered, and familiarity with online lectures may have differed around COVID-19 online classes. The team’s conclusion is that it is not clear which factor had the strongest influence.",
      "detail.rx.instPdf": "Open the presentation (PDF)",
      "detail.rx.presentationTitle": "Presentation",
      "detail.rx.mediaTitle":
        "The Relationship Between Childhood Media Genre and Adult Personality",
      "detail.rx.mediaEmphasis": "Recalled preferences and individual differences.",
      "detail.rx.mediaBody":
        "Were recalled childhood media preferences associated with adult personality traits? Students who had taken PSYC 2002 or PSYCH 100 completed an online Qualtrics survey on demographics, recalled childhood media preferences, and Big Five personality traits. This was a correlational survey, not a controlled experiment.",
      "detail.rx.mediaCredit":
        "Instructor: Professor Maria Pizzano. Researchers: Younghyun Choi, Chloe McKnight, Claire Gross, Abby Nolan, and Ashton Nguyen.",
      "detail.rx.mediaNotice":
        "A few research-question headings on the poster name a different personality trait from the table beside them. The detailed statistics are not listed here until those labels are checked.",
      "detail.rx.mediaFindings":
        "The poster reports statistically significant associations between some recalled media-enjoyment scores and Big Five scores. An association here is not evidence that childhood media caused adult personality.",
      "detail.rx.mediaLimits":
        "Respondents needed a computer and an internet connection, and they had to be 18 or older. The poster describes the sample as predominantly white and male, with an average age of 19.04 and an average GPA of 3.49. A one-time survey cannot separate memory, preference, and personality.",
      "detail.rx.mediaAlt":
        "Research poster titled The Relationship Between Childhood Media Genre and Adult Personality. The instructor and research team are listed on the poster.",
      "detail.rx.mediaCaption": "Researcher names stay visible on the poster.",
      "detail.rx.careTitle": "Impact of Multiple Social Roles on Caregiver Burden",
      "detail.rx.careEmphasis": "Caregiving circumstances in existing survey data.",
      "detail.rx.careBody":
        "How were multiple social roles associated with caregiving tasks, rewards, and burden? This is an observational analysis of baseline responses from about 2,200 unpaid caregivers, age 18 and older, in the Understanding America Study and UAS-CLEAR. Social roles, care tasks, caregiving rewards, and caregiver burden were analyzed with Pearson correlations in SPSS. It was not a newly conducted experiment.",
      "detail.rx.careCredit":
        "Younghyun Choi, Dr. Kira Birddit, and Angela Turkelson. University of Michigan Undergraduate Research Opportunity Program (UROP).",
      "detail.rx.careFindings":
        "The correlations between the number of social roles and caregiving outcomes are small. In a sample this large, a result can be statistically significant and still be a small effect.",
      "detail.rx.careStat1":
        "Full sample: care tasks r = .049, caregiving reward r = .014, and care burden r = .059, each marked p < .05. The reward correlation is significant and very small.",
      "detail.rx.careStat2":
        "For women, social roles and care tasks were positively associated (r = .065, p < .05). Social roles were not significantly associated with caregiving reward (r = .021) or care burden (r = .036).",
      "detail.rx.careStat3":
        "For men, social roles and care burden were positively associated (r = .108, p < .05). Social roles were not significantly associated with care tasks (r = .018) or caregiving reward (r = −.002).",
      "detail.rx.careMore":
        "Links among the caregiving measures themselves are larger. Reward and burden were negatively associated (women r = −.210, men r = −.167). Care tasks were positively associated with reward and with burden for both women and men, with correlations from about .21 to .27. These are associations in existing data. They do not show that social roles caused exhaustion. The poster also notes that social roles in the sample do not vary much.",
      "detail.rx.careAlt":
        "Research poster titled Impact of Multiple Social Roles on Caregiver Burden, from University of Michigan UROP. The authors are listed on the poster.",
      "detail.rx.careCaption": "Author names stay visible on the poster.",
      "detail.rx.carePhotoAlt":
        "Victoria Choi standing beside the Impact of Multiple Social Roles on Caregiver Burden poster.",
      "detail.rx.carePhotoEnlarge": "Enlarge photo",
      "detail.rx.carePhotoCaption": "With the poster at the session.",
    },
    ko: {
      pageTitle: "연구 경험 | 최영현",
      metaDescription:
        "연구조교 경험, 연구방법 수업, 그리고 심리학 연구 발표 세 편.",
      "detail.rx.eyebrow": "연구 경험",
      "detail.rx.intro":
        "질적·양적 연구방법 수업과 연구조교 경험을 함께 쌓았습니다. 수업에서 R, SPSS, SQL을 배웠고, 자료 수집과 분석, 설문 개발, 연구 결과를 전달하는 일을 직접 해 보았습니다.",
      "detail.rx.role1Title": "연구조교",
      "detail.rx.role1Org":
        "Institute for Social Research, University of Michigan",
      "detail.rx.role1Dates": "2025년 9월–2026년 5월",
      "detail.rx.role2Title": "연구조교, 사회심리학",
      "detail.rx.role2Org": "서강대학교",
      "detail.rx.role2Dates": "2025년 5월–8월",
      "detail.rx.role2Body":
        "진행 중인 연구에서 설문지를 만들고 번역했으며, 매주 연구 회의에 참여했습니다.",
      "detail.rx.role3Title": "연구조교",
      "detail.rx.role3Org":
        "Department of Psychological Perspectives in Education, University of Michigan",
      "detail.rx.role3Dates": "2025년 1월–5월",
      "detail.rx.role3Body":
        "소규모 연구 세 건에 참여했고, 주로 자료 수집과 분석을 맡았습니다.",
      "detail.rx.role4Title": "연구방법·통계 수업",
      "detail.rx.role4Dates": "2023년 1월–12월",
      "detail.rx.role4Body":
        "질적 연구와 양적 연구 방법을 배우고 R, SPSS, SQL을 익혔습니다. 짧은 발표도 한 번 했습니다.",
      "detail.rx.presentationsTitle": "연구 발표",
      "detail.rx.presentationsBody":
        "교수자 인식과 학생 몰입, 어린 시절 미디어 선호와 성인 성격, 사회적 역할과 돌봄 부담. 이 세 연구를 발표했습니다.",
      "detail.rx.contribTitle": "나의 기여",
      "detail.rx.contrib1":
        "교수자 인식: 연구 세팅, 데이터 수집, 발표, 그리고 설계와 분석에 대한 협업. 비교와 해석은 PSYCH 357 팀의 작업입니다.",
      "detail.rx.contrib2":
        "어린 시절 미디어와 성격: 설문 세팅, 데이터 수집, 팀 분석, 발표. 연구자 다섯 명 중 한 명이었습니다.",
      "detail.rx.contrib3":
        "돌봄 부담: 연구 과정과 발표. 돌봄 제공자를 모집하지 않았습니다. 분석은 이미 수집된 응답을 사용합니다.",
      "detail.rx.instTitle": "학생 경험: 교수자 인식과 수업 몰입",
      "detail.rx.instEmphasis":
        "강의가 진행되는 동안 수업의 질과 몰입을 측정했습니다.",
      "detail.rx.instBody":
        "두 교수자에 대한 수업의 질과 몰입 평가는 어떻게 달랐을까요? 참가자는 강의를 보면서 조이스틱으로 수업의 질과 몰입을 계속 평가했습니다. 조이스틱은 2초마다 반응을 남겼고, 강의 전과 후에도 설문에 답했습니다. 팀은 젊은 아시아계 여성 교수자와 나이 든 백인 남성 교수자를 t검정으로 비교했습니다.",
      "detail.rx.instCredit":
        "PSYCH 357 팀: Abigail Kurniawan, Allegra Isdar, Christa Hanna, Dior Jones, Heeba Altawil, Jennifer Roman, Juliana Tanner, Lang Lang, Younghyun Choi.",
      "detail.rx.instFindings":
        "이 데이터에서는 더 나이 든 백인 남성 교수자가 더 젊은 아시아계 여성 교수자보다 수업의 질과 몰입에서 더 높은 평가를 받았습니다. 발표 자료는 그 차이를 통계적으로 유의하다고 보고합니다.",
      "detail.rx.instLimits":
        "이 차이가 성별, 인종, 또는 나이 때문이라고 보여 주지는 않습니다. 두 교수자는 여러 특성이 한꺼번에 달랐고, 데이터는 서로 다른 해에 수집되었습니다. 발표 자료는 표본이 대부분 심리학 개론 수강생이었다는 점, 일부 참가자가 집중하기 어려웠을 수 있다는 점, 강의 내용, COVID-19 전후 온라인 강의에 대한 익숙함도 가능한 요인으로 적습니다. 팀의 결론은 어떤 요인의 영향이 가장 큰지 이 설계로는 알기 어렵다는 것입니다.",
      "detail.rx.instPdf": "발표 자료 열기 (PDF)",
      "detail.rx.presentationTitle": "발표 자료",
      "detail.rx.mediaTitle":
        "The Relationship Between Childhood Media Genre and Adult Personality",
      "detail.rx.mediaEmphasis": "기억해 낸 선호와 개인차.",
      "detail.rx.mediaBody":
        "어린 시절 미디어 선호를 떠올리면, 어른이 된 뒤의 성격과 관련이 있었을까요? PSYC 2002나 PSYCH 100을 수강한 학생들이 인구통계, 기억 속 어린 시절 미디어 선호, Big Five 성격을 묻는 Qualtrics 설문에 응답했습니다. 통제된 실험이 아니라, 관계를 보는 설문입니다.",
      "detail.rx.mediaCredit":
        "담당 교수: Maria Pizzano. 연구자: Younghyun Choi, Chloe McKnight, Claire Gross, Abby Nolan, Ashton Nguyen.",
      "detail.rx.mediaNotice":
        "포스터에서 일부 연구 질문 제목이 바로 옆 표의 성격 특성과 다릅니다. 그 라벨을 확인하기 전에는 자세한 통계를 이 페이지에 적지 않았습니다.",
      "detail.rx.mediaFindings":
        "포스터는 회상된 미디어 즐거움 점수와 일부 Big Five 점수 사이에 통계적으로 유의한 관련이 있다고 보고합니다. 여기서의 관련은 어린 시절 미디어가 성인 성격을 만들었다는 증거가 아닙니다.",
      "detail.rx.mediaLimits":
        "응답에는 컴퓨터와 인터넷이 필요했고, 18세 이상이어야 했습니다. 포스터는 응답자를 주로 백인이자 남성으로 설명하며, 평균 연령 19.04세, 평균 GPA 3.49라고 적습니다. 한 번의 설문으로는 기억, 선호, 성격을 나누어 볼 수 없습니다.",
      "detail.rx.mediaAlt":
        "The Relationship Between Childhood Media Genre and Adult Personality 포스터. 담당 교수와 연구팀 이름이 포스터에 적혀 있습니다.",
      "detail.rx.mediaCaption": "연구자 이름은 포스터에 적혀 있습니다.",
      "detail.rx.careTitle": "Impact of Multiple Social Roles on Caregiver Burden",
      "detail.rx.careEmphasis": "기존 설문 자료로 본 돌봄 상황.",
      "detail.rx.careBody":
        "여러 사회적 역할은 돌봄 과제, 보상, 부담과 어떻게 이어져 있었을까요? Understanding America Study와 UAS-CLEAR에 있는 18세 이상 무급 돌봄 제공자 약 2,200명의 기준선 응답을 분석한 연구입니다. 사회적 역할, 돌봄 과제, 돌봄 보상, 돌봄 부담을 SPSS에서 Pearson 상관으로 살펴보았습니다. 새로 진행한 실험은 아닙니다.",
      "detail.rx.careCredit":
        "Younghyun Choi, Dr. Kira Birddit, Angela Turkelson. University of Michigan Undergraduate Research Opportunity Program(UROP).",
      "detail.rx.careFindings":
        "사회적 역할의 수와 돌봄 결과 사이의 상관은 작습니다. 표본이 이 정도로 크면 통계적으로 유의해도 효과 크기는 작을 수 있습니다.",
      "detail.rx.careStat1":
        "전체 표본: 돌봄 과제 r = .049, 돌봄 보상 r = .014, 돌봄 부담 r = .059이며, 각각 p < .05로 표시되어 있습니다. 보상 상관은 유의하지만 매우 작습니다.",
      "detail.rx.careStat2":
        "여성의 경우 사회적 역할과 돌봄 과제는 정적 관련이 있었습니다(r = .065, p < .05). 사회적 역할은 돌봄 보상(r = .021)이나 돌봄 부담(r = .036)과는 유의하지 않았습니다.",
      "detail.rx.careStat3":
        "남성의 경우 사회적 역할과 돌봄 부담은 정적 관련이 있었습니다(r = .108, p < .05). 사회적 역할은 돌봄 과제(r = .018)나 돌봄 보상(r = −.002)과는 유의하지 않았습니다.",
      "detail.rx.careMore":
        "돌봄 측정치들 사이의 관련은 더 큽니다. 보상과 부담은 부적 관련이었습니다(여성 r = −.210, 남성 r = −.167). 돌봄 과제는 여성과 남성 모두에서 보상 및 부담과 정적 관련이 있었고, 상관은 대략 .21에서 .27 사이입니다. 이는 기존 데이터 안의 관련이지, 사회적 역할이 소진을 일으켰다는 결과는 아닙니다. 포스터는 표본 안 사회적 역할의 다양성도 부족하다고 적습니다.",
      "detail.rx.careAlt":
        "University of Michigan UROP의 Impact of Multiple Social Roles on Caregiver Burden 포스터. 저자 이름이 포스터에 적혀 있습니다.",
      "detail.rx.careCaption": "저자 이름은 포스터에 적혀 있습니다.",
      "detail.rx.carePhotoAlt":
        "Impact of Multiple Social Roles on Caregiver Burden 포스터 옆에 서 있는 최영현.",
      "detail.rx.carePhotoEnlarge": "사진 크게 보기",
      "detail.rx.carePhotoCaption": "포스터 발표 현장.",
    },
  },
};

const LANG_STORAGE_KEY = "portfolio-lang";

function getStrings(lang) {
  const base = translations[lang] || translations.en;
  const page = document.body.dataset.i18nPage;
  if (!page || !pageTranslations[page]) return base;
  return { ...base, ...pageTranslations[page][lang] };
}

function setLanguage(lang) {
  const strings = getStrings(lang);
  if (!strings) return;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (strings[key] !== undefined) {
      el.textContent = strings[key];
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (strings[key] !== undefined) {
      el.setAttribute("aria-label", strings[key]);
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (strings[key] !== undefined) {
      el.setAttribute("alt", strings[key]);
    }
  });

  const titleEl = document.getElementById("page-title");
  const metaEl = document.getElementById("meta-description");
  if (titleEl && strings.pageTitle) titleEl.textContent = strings.pageTitle;
  if (metaEl && strings.metaDescription) {
    metaEl.setAttribute("content", strings.metaDescription);
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    /* ignore private browsing */
  }

  refreshSlideCarousel();
}

function initLanguage() {
  let lang = "en";
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === "en" || saved === "ko") lang = saved;
  } catch {
    /* ignore */
  }

  setLanguage(lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.getAttribute("data-lang"));
    });
  });
}

initLanguage();

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.getElementById("site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initMendedBriefTabs() {
  const tablist = document.querySelector(".brief-tabs");
  if (!tablist) return;

  const tabs = tablist.querySelectorAll('[role="tab"]');
  const panels = document.querySelectorAll(".brief-preview [role='tabpanel']");

  function activateTab(tab) {
    tabs.forEach((t) => {
      const selected = t === tab;
      t.classList.toggle("is-active", selected);
      t.setAttribute("aria-selected", String(selected));
      t.tabIndex = selected ? 0 : -1;
    });

    panels.forEach((panel) => {
      const show = panel.id === tab.getAttribute("aria-controls");
      panel.hidden = !show;
      panel.classList.toggle("is-hidden", !show);
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activateTab(tab));
    tab.addEventListener("keydown", (event) => {
      const index = Array.from(tabs).indexOf(tab);
      let next = index;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = tabs.length - 1;
      else return;
      event.preventDefault();
      activateTab(tabs[next]);
      tabs[next].focus();
    });
  });
}

initMendedBriefTabs();

function initSnsSliders() {
  document.querySelectorAll("[data-sns-slider]").forEach((slider) => {
    const slideEls = Array.from(slider.querySelectorAll(".sns-slide"));
    const controls = slider.querySelector(".sns-slider-controls");
    const prevBtn = slider.querySelector(".sns-slider-btn--prev");
    const nextBtn = slider.querySelector(".sns-slider-btn--next");
    const currentEl = slider.querySelector(".sns-slider-current");
    const totalEl = slider.querySelector(".sns-slider-total");

    let slides = slideEls;
    let index = 0;
    let pending = slideEls.length;

    function finishInit() {
      slides = slideEls.filter((slide) => !slide.hidden && !slide.dataset.slideRemoved);
      if (slides.length === 0) {
        controls?.setAttribute("hidden", "");
        return;
      }
      if (slides.length < 2) {
        controls?.setAttribute("hidden", "");
      } else {
        controls?.removeAttribute("hidden");
      }
      if (totalEl) totalEl.textContent = String(slides.length);
      showSlide(0);
    }

    function showSlide(nextIndex) {
      if (!slides.length) return;
      index = (nextIndex + slides.length) % slides.length;
      slideEls.forEach((slide) => slide.classList.remove("is-active"));
      slides[index].classList.add("is-active");
      if (currentEl) currentEl.textContent = String(index + 1);
    }

    slideEls.forEach((slide) => {
      const img = slide.querySelector("img");
      if (!img) {
        slide.dataset.slideRemoved = "true";
        slide.hidden = true;
        pending -= 1;
        if (pending === 0) finishInit();
        return;
      }

      let slideReady = false;
      const markReady = () => {
        if (slideReady) return;
        slideReady = true;
        pending -= 1;
        if (pending === 0) finishInit();
      };

      const dropSlide = () => {
        slide.dataset.slideRemoved = "true";
        slide.hidden = true;
        markReady();
      };

      img.addEventListener("error", dropSlide, { once: true });

      if (img.complete) {
        if (img.naturalWidth === 0) dropSlide();
        else markReady();
      } else {
        img.addEventListener("load", markReady, { once: true });
      }
    });

    prevBtn?.addEventListener("click", () => showSlide(index - 1));
    nextBtn?.addEventListener("click", () => showSlide(index + 1));

    slider.addEventListener("keydown", (event) => {
      if (slides.length < 2) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showSlide(index - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showSlide(index + 1);
      }
    });
  });
}

initSnsSliders();

function formatSlideLabel(template, n, total) {
  return String(template)
    .replaceAll("{n}", String(n))
    .replaceAll("{total}", String(total));
}

function initSlideCarousel() {
  const root = document.querySelector(".slide-carousel");
  if (!root) return;

  const count = Number(root.dataset.slideCount);
  const base = root.dataset.slideBase;
  const img = root.querySelector("img");
  const status = root.querySelector(".slide-status");
  const prev = root.querySelector(".slide-arrow-prev");
  const next = root.querySelector(".slide-arrow-next");
  if (!img || !count || !base) return;

  let index = 0;

  function showSlide(nextIndex) {
    index = Math.min(Math.max(nextIndex, 0), count - 1);
    const n = index + 1;
    const lang = document.documentElement.lang === "ko" ? "ko" : "en";
    const strings = getStrings(lang);
    img.src = `${base}${String(n).padStart(2, "0")}.jpg`;
    img.alt = formatSlideLabel(
      strings["research.slideAlt"] || "Student experience presentation, slide {n}",
      n,
      count
    );
    if (status) {
      status.textContent = formatSlideLabel(
        strings["research.slideStatus"] || "{n} / {total}",
        n,
        count
      );
    }
    if (prev) prev.disabled = index === 0;
    if (next) next.disabled = index === count - 1;

    if (n < count) {
      const preload = new Image();
      preload.src = `${base}${String(n + 1).padStart(2, "0")}.jpg`;
    }
  }

  prev?.addEventListener("click", () => showSlide(index - 1));
  next?.addEventListener("click", () => showSlide(index + 1));

  root.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showSlide(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      showSlide(index - 1);
    }
  });

  root.refreshSlides = () => showSlide(index);
  showSlide(0);
}

function refreshSlideCarousel() {
  document.querySelector(".slide-carousel")?.refreshSlides?.();
}

initSlideCarousel();

function initPosterLightbox() {
  const dialog = document.getElementById("poster-dialog");
  if (!dialog) return;

  const dialogImg = dialog.querySelector("img");
  const closeBtn = dialog.querySelector(".poster-dialog-close");

  document.querySelectorAll(".poster-enlarge").forEach((button) => {
    button.addEventListener("click", () => {
      const img = button.querySelector("img");
      if (!img || !dialogImg) return;
      dialogImg.src = img.currentSrc || img.src;
      dialogImg.alt = img.alt;
      dialog.showModal();
    });
  });

  closeBtn?.addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", () => {
    if (!dialogImg) return;
    dialogImg.removeAttribute("src");
    dialogImg.alt = "";
  });
}

initPosterLightbox();
