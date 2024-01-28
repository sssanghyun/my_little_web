import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="ko">
                <Head>
                    <meta name="title" content="박상현's WEB Portfolio" />
                    <meta
                        name="description"
                        content="포트폴리오 웹 페이지입니다."
                    />
                    <meta
                        property="og:title"
                        content="박상현's WEB Portfolio"
                    />
                    <meta
                        property="og:description"
                        content="웹 개발자 박상현의 포트폴리오 사이트입니다."
                    />

                    <meta
                        property="og:url"
                        content="https://www.sanghyun-park.site/"
                    />
                    <meta property="og:image" content="/portfolio_3_1.png" />

                    <link rel="icon" href="/favicon.ico" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap&subset=korean"
                        rel="stylesheet"
                    />
                    {/* <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                        crossorigin="anonymous"
                    ></link> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    {/* <script
                        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                        crossorigin="anonymous"
                    ></script> */}
                </body>
            </Html>
        );
    }
}

export default MyDocument;
