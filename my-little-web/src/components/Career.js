export default function Intro() {
    return (
        <div id="career" className="section">
            <div className="career__title">
                CAREER
            </div>
            {/* 대학 */}
            <div className="career__career1">
                <div className="career__career1__icon">
                    <img className="career__career1__symbol" src="university.png"></img>
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
                            - 총 학점 평균 4.14 / 4.5
                        </li>
                        <li className="career__career1__li">
                            - (2020)네트워크 관리사 2급 자격증 취득
                        </li>
                        <li className="career__career1__li">
                            - (2021)정보처리기사 자격증 취득
                        </li>
                        <li className="career__career1__li">
                            - (2021)졸업작품 &nbsp;&nbsp;
                            <a href="">(링크)</a>
                        </li>
                        <li className="career__career1__li">
                            - (2021.09 ~ 2021.12)IPP 현장실습(나눔아이씨티(주))
                            <ul>
                                <li>
                                    &nbsp;&nbsp;&nbsp;· 전자정부프레임워크를 활용한 웹 풀스택 개발
                                </li>
                                <li>
                                    &nbsp;&nbsp;&nbsp;· SQL쿼리문 최적화
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            {/* 회사 */}
            <div className="career__career1">
                <div className="career__career1__icon">
                    <img className="career__career1__symbol" src="flosenergy.png"></img>
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
                    <div className="career__career1__subtitle">
                        담당업무 : S/W 개발, 데이터 관리, R&D 프로젝트 관리
                    </div>
                    <ul className="career__career1__ul">
                        <li className="career__career1__li">
                            - MERN(MySql, Express, React, Node.js) Web 개발 및 네트워크 구축&nbsp;&nbsp;
                            <a href="">(링크)</a>
                        </li>
                        <li className="career__career1__li">
                            - ubuntu 환경 정수장 수열에너지 최적화 프로그램(Qt프레임워크) 유지보수
                        </li>
                        <li className="career__career1__li">
                            - 정수장 수열에너지 데이터 관리 및 분석(MySql, Grafana)
                        </li>
                        <li className="career__career1__li">
                            - APT 탄소모니터링 안드로이드 App(Java) 및 서버 유지보수
                        </li>
                        <li className="career__career1__li">
                            - 센서 데이터 수집 프로그램(Python) 개발
                        </li>
                    </ul>
                </div>
            </div>

            <div className="career__career1__line__circle"/>
        </div>
    )
}

