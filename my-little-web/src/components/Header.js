export default function Header() {
    return (
        <>
            <header className="header">
                <div className="header__wrapper">
                    <h1 className="header__start">
                        <span className="header__title">Ssanghyun's</span>
                        <span className="header__title">Portfolio</span>
                    </h1>

                    <div className="header__center">
                        <nav className="nav">
                            <ul className="nav__wrapper">
                                <li><a href="#">소개</a></li>
                                <li><a href="#">경력</a></li>
                                <li><a href="#">기술스택</a></li>
                                <li><a href="#">포트폴리오</a></li>
                                <li><a href="#">연락처</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header__end">
                        <button className="header__mode">다크모드</button>
                    </div>
                </div>
            </header>
        </>
    )
}