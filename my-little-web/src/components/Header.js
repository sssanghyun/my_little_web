import { useState } from "react";

const darkmode_function = () => {
    alert("구현중");
};

export default function Header() {
    const [header_white, setHeader_white] = useState(false);

    if (typeof window === "object") {
        window.addEventListener("wheel", (e) => {
            if (window.scrollY > 50) {
                // console.log(window.scrollY);
                setHeader_white(true);
            } else {
                setHeader_white(false);
            }
        });
    }
    return (
        <header className={header_white ? "header active" : "header"}>
            <div className="header__wrapper">
                <span className="header__start">
                    <span className="header__title">
                        <a className="header__title__a" href="/">
                            &lt;/&gt;박상현's WEB
                        </a>
                    </span>
                </span>

                <div className="header__center">
                    <nav className="nav">
                        <ul className="nav__wrapper">
                            <li>
                                <a className="nav__wrapper__a" href="#intro">
                                    소개
                                </a>
                            </li>
                            <li>
                                <a className="nav__wrapper__a" href="#career">
                                    경력
                                </a>
                            </li>
                            <li>
                                <a className="nav__wrapper__a" href="#stack">
                                    기술스택
                                </a>
                            </li>
                            <li>
                                <a
                                    className="nav__wrapper__a"
                                    href="#portfolio"
                                >
                                    포트폴리오
                                </a>
                            </li>
                            {/* <li><a className="nav__wrapper__a" href="#phone">연락처</a></li> */}
                        </ul>
                    </nav>
                </div>

                {/* <div className="header__end"> */}
                {/* 다크모드 현재 미구현 */}
                {/* <img className="darkmode" src="darkmode.png" onClick={darkmode_function}></img> */}
                {/* <button className="header__mode">다크모드</button> */}
                {/* </div> */}
            </div>
        </header>
    );
}
