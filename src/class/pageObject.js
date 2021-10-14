const pageObj=[
    {
        Router: "",
        Link: "",
        Title: "페이지 이름",
        Message: "페이지 설명구",
        Error: "에러 문구",
    },
    { // localhost:4000/
        Router: "Global",
        Link: "/",
        Title: "메인 홈",
        Message: "Life Folio 에서 당신의 포트폴리오를 완성해보세요!",
        Error: "",
    },
    { // localhost:4000/search
        Router: "Global",
        Link: "/search",
        Title: "서치 페이지",
        Message: "옵션을 선택하고 검색을 진행해보세요!",
        Error: "",
    },

    // [userRouter]
    { // localhost:4000/user/join
        Router: "User",
        Link: "/user/join",
        Title: "회원가입",
        Message: "무료 회원가입으로 포트폴리오를 생성해보세요!",
        Error: "",
    },
    { // localhost:4000/user/login, logout
        Router: "User",
        Link: "/user/login",
        Title: "로그인",
        Message: "아이디와 비밀번호를 입력해주세요.",
        Error: "",
    },
    { // localhost:4000/user/profile/:id
        Router: "User",
        Link: "/user/:id",
        Title: "프로필 열람",
        Message: "해당 프로필을 열람하였습니다.",
        Error: "",
    },
    { // localhost:4000/user/profile/:id/edit
        Router: "User",
        Link: "/user/:id/edit",
        Title: "프로필 수정",
        Message: "해당 프로필을 수정하고 있습니다.",
        Error: "",
    },
    // [folioRouter]
    { // localhost:4000/folio/upload
        Router: "Folio",
        Link: "/folio/upload",
        Title: "새 포트폴리오 생성하기",
        Message: "포트폴리오 생성하시오",
        Error: "",
    },
    { // localhost:4000/folio/:id
        Router: "Folio",
        Link: "/folio/:id",
        Title: "$폴리오 제목",
        Message: "$폴리오 아이디",
        Error: "",
    },

    // [adminRouter]
    { // localhost:4000/admin/join
        Router: "Admin",
        Link: "/admin/join",
        Title: "관리자 가입",
        Message: "관리자 계정은 서버 승인 이후 사용할 수 있습니다.",
        Error: "",
    },
    { // localhost:4000/admin/login
        Router: "Admin",
        Link: "/admin/login",
        Title: "관리자 로그인",
        Message: "관리자 계정은 서버 승인 이후 사용할 수 있습니다.",
        Error: "",
    },

    // [companyRouter]
    { // localhost:4000/company/join
        Router: "Company",
        Link: "/company/login",
        Title: "비즈니스 가입",
        Message: "비즈니스 계정은 별도의 인증 과정 이후 사용할 수 있습니다.",
        Error: "",
    },
    { // localhost:4000/company/login
        Router: "Company",
        Link: "/company/login",
        Title: "비즈니스 로그인",
        Message: "비즈니스 계정은 별도의 인증 과정 이후 사용할 수 있습니다.",
        Error: "",
    },
]