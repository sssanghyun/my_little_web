import Seo from "@/components/Seo";

export default function Home() {
    return(
        <>
            <Seo title="Ssanghyun's 포트폴리오"/>
            <div id="intro">
                "이곳은 intro 페이지입니다"
            </div>
            <div id="career">
                "이곳은 경력 페이지입니다"
            </div>
            <div id="stack">
                이곳은 스택영역
            </div>
            <div id="portfolio">
                이곳은 포트폴리오영역
            </div>
            <div id="phone">
                이곳은 폰 영역
            </div>
        </>
    );
}