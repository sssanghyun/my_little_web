export default function Portfolio() {
    return (
        <div id="portfolio" className="section">
            <div className="portfolio__title">PORTFOLIO</div>
            <div className="portfolio__container">
                <div className="portfolio__wrapper">
                    <div className="portfolio__wrapper__title">
                        에너지 모니터링 시스템(EMS) 개발 및 구축
                    </div>
                    <div className="portfolio__wrapper__content">
                        <div className="portfolio__wrapper__content__photo">
                            <div
                                id="carouselExampleIndicators1"
                                class="carousel slide"
                                data-bs-ride="carousel"
                            >
                                <div class="carousel-indicators">
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators1"
                                        data-bs-slide-to="0"
                                        class="active"
                                        aria-current="true"
                                        aria-label="Slide 1"
                                    ></button>
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators1"
                                        data-bs-slide-to="1"
                                        aria-label="Slide 2"
                                    ></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img
                                            src="portfolio_1_2.png"
                                            class="d-block w-100"
                                            alt=""
                                        />
                                    </div>
                                    <div class="carousel-item">
                                        <img
                                            src="portfolio_1_1.png"
                                            class="d-block w-100"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <button
                                    class="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators1"
                                    data-bs-slide="prev"
                                >
                                    <span
                                        class="carousel-control-prev-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span class="visually-hidden">
                                        Previous
                                    </span>
                                </button>
                                <button
                                    class="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators1"
                                    data-bs-slide="next"
                                >
                                    <span
                                        class="carousel-control-next-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="portfolio__wrapper__content__text">
                            <div className="portfolio__wrapper__content__text__wrapper">
                                <div className="portfolio__bold__text">
                                    개발 기간
                                </div>
                                <div className="portfolio__nomal__text">
                                    2022.06 ~ 2023.06
                                </div>
                            </div>
                            <div className="portfolio__wrapper__content__text__wrapper">
                                <div className="portfolio__bold__text">
                                    개발 인원
                                </div>
                                <div className="portfolio__nomal__text">
                                    2인 프로젝트(FrontEnd, BackEnd 담당)
                                </div>
                            </div>
                            <div className="portfolio__wrapper__content__text__wrapper">
                                <div className="portfolio__bold__text">
                                    주요 기능
                                </div>
                                <div className="portfolio__nomal__text">
                                    ✔ 실시간으로 계측되는 현장 센서 데이터(온도,
                                    습도, 전력 등)를 Modbus 통신을 통해 수집하여
                                    DB에 저장
                                    <br />✔ 데이터 조회기능, 데이터 다운로드,
                                    그래프 기능을 통해 실시간 계측 데이터를
                                    보기쉽게 UI 표시
                                </div>
                            </div>
                            <div className="portfolio__wrapper__content__text__wrapper">
                                <div className="portfolio__bold__text">
                                    사용 기술
                                </div>
                                <div className="portfolio__nomal__text">
                                    ubuntu 20.04, MySql, Express, React,
                                    Node.js, Port Forwarding
                                </div>
                            </div>
                            <hr></hr>
                            <div className="portfolio__nomal__text">
                                회사 R&D 과제로 Web기반의 에너지 관리 시스템을
                                구축하였습니다.
                                <br></br>이 프로젝트를 통해 <b>리눅스 환경</b>에
                                대한 지식을 얻을 수 있었고 내부 LAN 환경을 통해
                                타 회사의 DB 데이터와 연결하여 View를 통해
                                데이터를 공유하면서 <b>네트워크의 이해</b>를
                                높일 수 있었습니다. <br></br>Web으로 보여주는
                                자료와 별개로 데이터를 보여주기 외부망에서 볼 수
                                있게{" "}
                                <b>
                                    Grafana 서버를 구축하였고 포트포워딩과
                                    Route53, HTTPS인증 등 많은 경험
                                </b>
                                을 할 수 있었습니다.
                                <br></br>React를 통해 CRU를 이해할 수 있었고
                                Express를 통해 Node.js를 쉽게 활용하여 백엔드
                                서버구축을 하였습니다.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio__wrapper">
                    <div className="portfolio__wrapper__title">
                        안드로이드 앱과 라즈베리파이를 활용한 스마트 옷장 구현
                    </div>
                    <div className="portfolio__wrapper__content">
                        <div className="portfolio__wrapper__content__photo">
                            <div
                                id="carouselExampleIndicators2"
                                class="carousel slide"
                                data-bs-ride="carousel"
                            >
                                <div class="carousel-indicators">
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators2"
                                        data-bs-slide-to="0"
                                        class="active"
                                        aria-current="true"
                                        aria-label="Slide 1"
                                    ></button>
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators2"
                                        data-bs-slide-to="1"
                                        aria-label="Slide 2"
                                    ></button>
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators2"
                                        data-bs-slide-to="2"
                                        aria-label="Slide 3"
                                    ></button>
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators2"
                                        data-bs-slide-to="3"
                                        aria-label="Slide 4"
                                    ></button>
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators2"
                                        data-bs-slide-to="4"
                                        aria-label="Slide 5"
                                    ></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img
                                            src="portfolio_2_1.png"
                                            class="d-block w-100"
                                            alt=""
                                        />
                                    </div>
                                    <div class="carousel-item">
                                        <img
                                            src="portfolio_2_2.png"
                                            class="d-block w-100"
                                            alt=""
                                        />
                                    </div>
                                    <div class="carousel-item">
                                        <img
                                            src="portfolio_2_3.png"
                                            class="d-block w-100"
                                            alt=""
                                        />
                                    </div>
                                    <div class="carousel-item">
                                        <img
                                            src="portfolio_2_4.png"
                                            class="d-block w-100"
                                            alt=""
                                        />
                                    </div>
                                    <div class="carousel-item">
                                        <img
                                            src="portfolio_2_5.png"
                                            class="d-block w-100"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <button
                                    class="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators2"
                                    data-bs-slide="prev"
                                >
                                    <span
                                        class="carousel-control-prev-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span class="visually-hidden">
                                        Previous
                                    </span>
                                </button>
                                <button
                                    class="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators2"
                                    data-bs-slide="next"
                                >
                                    <span
                                        class="carousel-control-next-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="portfolio__wrapper__content__text">
                            <div className="portfolio__wrapper__content__text__wrapper">
                                <div className="portfolio__bold__text">
                                    개발 기간
                                </div>
                                <div className="portfolio__nomal__text">
                                    2021.01 ~ 2021.06
                                </div>
                            </div>
                            <div className="portfolio__wrapper__content__text__wrapper">
                                <div className="portfolio__bold__text">
                                    개발 인원
                                </div>
                                <div className="portfolio__nomal__text">
                                    3인 프로젝트(안드로이드(JAVA) 개발,
                                    라즈베리파이 구축 담당)
                                </div>
                            </div>
                            <div className="portfolio__wrapper__content__text__wrapper">
                                <div className="portfolio__bold__text">
                                    주요 기능
                                </div>
                                <div className="portfolio__nomal__text">
                                    ✔ 어플에 자신의 옷을 저장하고 날씨에 따라 옷
                                    추천
                                    <br />✔ 옷장 내 온습도 센서를 통해 환풍기를
                                    동작시켜 온습도 조절
                                    <br />✔ 어플과 라즈베리파이간 블루투스
                                    통신을 통해 화면 위젯 위치 조절
                                    <br />✔ Google Assistant 연동
                                </div>
                            </div>
                            <div className="portfolio__wrapper__content__text__wrapper">
                                <div className="portfolio__bold__text">
                                    사용 기술
                                </div>
                                <div className="portfolio__nomal__text">
                                    Android(JAVA), RaspberryPi(C, Python),
                                    SQLite
                                </div>
                            </div>
                            <hr></hr>
                            <div className="portfolio__nomal__text">
                                졸업작품으로 3인 팀으로 개발 진행하였습니다.
                                <br></br> 이 팀 프로젝트를 통해 다양한
                                <b>라이브러리 활용</b>과{" "}
                                <b>라즈베리파이의 이해</b> 그리고
                                <b>블루투스 통신 모듈의 이해도</b>를 높일 수
                                있었습니다. <br></br>
                                <b>팀원들과 의사소통</b>하는 방법을 배웠고 개발
                                중 라즈베리파이의 메모리가 파손된 적이 있어{" "}
                                <b>백업의 중요성</b>도 다시 한번 느낄 수
                                있었습니다.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio__wrapper">
                    <div className="portfolio__wrapper__title">
                        NEXT.JS 포트폴리오 웹사이트 개발
                    </div>
                    <div className="portfolio__wrapper__content">
                        <div className="portfolio__wrapper__content__photo"></div>
                        <div className="portfolio__wrapper__content__text"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
