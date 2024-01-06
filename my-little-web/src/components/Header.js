const darkmode_function = () => {
    alert("구현중");
}

export default function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__start">
                    <span className="header__title">
                        <a href="/">&lt;/&gt;SSanghyun's</a>
                    </span>
                </h1>

                <div className="header__center">
                    <nav className="nav">
                        <ul className="nav__wrapper">
                            <li><a href="#intro">소개</a></li>
                            <li><a href="#career">경력</a></li>
                            <li><a href="#stack">기술스택</a></li>
                            <li><a href="#portfolio">포트폴리오</a></li>
                            <li><a href="#phone">연락처</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="header__end">
                    {/* 다크모드 현재 미구현 */}
                    {/* <img className="darkmode" src="darkmode.png" onClick={darkmode_function}></img> */}
                    {/* <button className="header__mode">다크모드</button> */}
                </div>
            </div>
        </header>
    )
}