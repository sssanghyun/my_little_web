import Layout from "@/components/Layout";
import "@/styles/header.css";
import "@/styles/intro.css";
import "@/styles/career.css";
import "@/styles/stack.css";
import "@/styles/portfolio.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>

            <style jsx global>
                {`
                    @media screen and (min-width: 2561px) {
                        /* 데스크탑 */
                        * {
                            font-size: 32px;
                        }
                    }

                    @media screen and (max-width: 2560px) {
                        /* 데스크탑 */
                        * {
                            font-size: 20px;
                        }
                    }
                    @media screen and (max-width: 1920px) {
                        /* 데스크탑 */
                        * {
                            font-size: 16px;
                        }
                    }

                    @media screen and (max-width: 1600px) {
                        /* 데스크탑 */
                        * {
                            font-size: 14px;
                        }
                    }

                    @media screen and (max-width: 1400px) {
                        /* 타블렛 가로 */
                        * {
                            font-size: 12px;
                        }
                    }
                    @media screen and (max-width: 899px) {
                        /* 모바일 가로, 타블렛 세로 */
                        * {
                            font-size: 8px;
                        }
                        /* 모바일 환경 max-width 재정의 */
                        .header__wrapper,
                        .intro__intro,
                        .intro__intro__textbox,
                        .career__career1,
                        .stack__wrapper,
                        .portfolio__container {
                            max-width: 95vw;
                        }
                    }
                    html {
                        scroll-behavior: smooth;
                    }
                    body {
                        margin: 0;
                    }
                    @font-face {
                        font-family: "JalnanGothic";
                        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/JalnanGothic.woff")
                            format("woff");
                        font-weight: normal;
                        font-style: normal;
                    }
                    @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

                    .notosanskr * {
                        font-family: "Noto Sans KR", sans-serif;
                    }
                    * {
                        box-sizing: border-box;
                        overflow: scroll;
                        /* IE scroll 숨김 */
                        -ms-overflow-style: none;
                    }
                    *::-webkit-scrollbar {
                        display: none;
                        width: 0 !important;
                    }
                    @font-face {
                        font-family: "IBMPlexSansKR-Regular";
                        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff")
                            format("woff");
                        font-weight: normal;
                        font-style: normal;
                    }
                `}
            </style>
        </>
    );
}
