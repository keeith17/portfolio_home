export const items = {
    applications: [
        {
            id: 1,
            title: "트위터 클론 코딩",
            desc: "트위터와 따라 제작한 웹사이트입니다. Firebase와의 연동으로 회원가입과 로그인 기능, 해시 태그를 포함한 게시 글과 댓글을 작성하는 기능, 좋아요를 누르고 모아서 확인할 수 있는 기능을 구현했습니다. Recoil을 사용한 전역 상태 관리로 한글 / 영어 버전을 전환할 수 있습니다.",
            role: "학습 목적의 작업으로, 개인 프로젝트입니다.",
            front: "React.js, typescript, Recoil",
            back: "Firebase",
            deploy: "Vercel",
            learn: "Typescript를 실무에서 어떻게 사용하는지를 학습할 수 있었습니다. Firebase와의 연동을 통해 간단한 백엔드 기능을 통제할 수 있는 방법을 배웠습니다. 전역 상태 관리가 어떻게 이루어지는지 체득할 수 있었으나, redux-toolkit이나 mobX도 사용해 보고 싶습니다. 추후 다이렉트 메시지 기능이나 테마 기능을 추가하면 더욱 좋겠다고 생각합니다.",
            image: "https://i.imgur.com/JtJPyHl.png",
            url: "https://react-twitter-vert.vercel.app/",
        },
    ],
    boysplanet: [
        {
            id: 1,
            title: "모의 투표 서비스",
            desc: "올해 초 Mnet에서 방영했던 <Boys Planet> 프로그램의 투표 순위 여론 조사 서비스입니다. 블라인드 투표를 통해 데뷔를 결정하는 오디션 프로그램으로, 투표 순위를 가늠하기 어려웠기 때문에 팬들의 답답함을 해소해 보고자 제작했던 사이트입니다.",
            role: "기획 / 프론트엔드 / 백엔드로 역할 분담을 했으며, 프론트엔드 역할을 맡았습니다.",
            front: "React.js, javascript, Axios, Figma (담당)",
            back: "Java, SpringBoot, MariaDB, MySQL",
            deploy: "Aws",
            learn: "백엔드 개발자와 기획자와 함께 프로덕트 디자인부터 배포까지 경험해 볼 수 있어 뜻깊었습니다. 리액트 hook을 통해 검색 기능과 필터링 기능을 다루어 볼 수 있었습니다. 마음만 먹는다면 중복 투표를 끝없이 만들 수 있다는 문제점이 있어 세션 기능을 사용해 세 시간에 한 번씩만 투표할 수 있는 기능을 추가로 구현해 보고 싶었으나 실현하지 못해 아쉽습니다.",
            image: "https://i.imgur.com/Yvl8jtU.png",
            url: "http://boysplanet.hkamio.com/",
        },
    ],
    pofohome: [
        {
            id: 1,
            title: "포트폴리오 홈",
            desc: "지금 보고 계신 페이지입니다. 간단한 방명록 작성이 가능한 작업물 소개 목적의 웹사이트입니다. Next의 기능을 활용하여 api를 구성하고, SWR과 기본 fetch 기능을 혼용하여 데이터를 받았습니다. contextAPI를 사용하여 테마 변경 기능을 만들었습니다.",
            role: "개인 프로젝트입니다.",
            front: "Next.js, javascript, SWR",
            back: "NextAuth, mongoDB",
            deploy: "Vercel",
            learn: "SSR과 CSR의 차이점을 직접 확인해 볼 수 있었습니다. Next(SSR)을 활용한 웹사이트는 즉각적인 반응을 요구하는 커뮤니티 등의 용도로는 적합하지 않았습니다. SSR에서는 localStorage를 사용할 수 없었기 때문에 새로고침 시에는 변경한 테마가 적용되지 않는 점, client side를 사용하지 않고는 새로고침 없이 변경된 데이터를 적용하기 어려운 점이 어려웠습니다. Next만의 장점을 드러낼 수 있는 웹사이트를 다시 제작해 보고 싶습니다.",
            image: "https://i.imgur.com/IOddhQf.png",
            url: "https://next-tuto-one.vercel.app/",
        },
    ],
};
