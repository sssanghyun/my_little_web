export default function Header() {
    return (
        <div className="header">
            <div className="header__wrapper">
                <h1 className="header__start">
                    <span className="header__title">
                        <a href="/">&lt; SSanghyun's &gt;</a>
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
                    <img src="darkmode.png"></img>
                    {/* <button className="header__mode">다크모드</button> */}
                </div>
            </div>
        </div>
    )
}