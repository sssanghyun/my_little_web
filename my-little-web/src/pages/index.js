import Seo from "@/components/Seo";
import Intro from "@/components/Intro";

export default function Home() {
    return(
        <>
            <Seo title="Ssanghyun's 포트폴리오"/>
            <Intro/>
            <div id="career">
                {/* 수정예정 */}
                <div className="career__title">
                    CAREER
                </div>

                <div className="career__career1">
                    <div className="career__career1__icon">
                        <img src="university.png"></img>
                    </div>
                    <div className="career__career1__line">
                        <div className="career__career1__line__circle"/>
                        <div className="career__career1__line__line"/>
                    </div>
                    <div className="career__career1__comment">
                        <div className="career__career1__period">
                            2015.03 ~ 2022.02
                        </div>
                        <div className="career__career1__title">
                            협성대학교
                        </div>
                        <div className="career__career1__subtitle">
                            컴퓨터공학과
                        </div>
                        <ul className="career__career1__ul">
                            <li className="career__career1__li">
                                총 학점 평균 4.14 / 4.5
                            </li>
                            <li className="career__career1__li">
                                정보처리기사 자격증 취득
                            </li>
                            <li className="career__career1__li">
                                졸업작품(4학년 1학기) &nbsp;&nbsp;
                                <a href="">(링크)</a>
                            </li>
                            <li className="career__career1__li">
                                IPP 현장실습(4학년 2학기) &nbsp;&nbsp;
                                <a href="">(링크)</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="career__career1">
                    <div className="career__career1__icon">
                        <img src="flosenergy.png"></img>
                    </div>
                    <div className="career__career1__line">
                        <div className="career__career1__line__circle"/>
                        <div className="career__career1__line__line"/>
                    </div>
                    <div className="career__career1__comment">
                        <div className="career__career1__period">
                            2022.01 ~ 2023.08
                        </div>
                        <div className="career__career1__title">
                            (주)후로스에너지
                        </div>
                        <div className="career__career1__subtitle">
                            연구원 재직
                        </div>
                        <ul className="career__career1__ul">
                            <li className="career__career1__li">
                                SW개발 및 R&D 프로젝트 관리
                            </li>
                            <li className="career__career1__li">
                                WEB기반 에너지 모니터링 프로그램 개발&nbsp;&nbsp;
                                <a href="">(링크)</a>
                            </li>
                            <li className="career__career1__li">
                                모드버스 통신을 통한 센서데이터 수집 프로그램 개발
                            </li>
                            <li className="career__career1__li">
                                ...
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="career__career1__line__circle"/>
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