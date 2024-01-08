import Header from "./Header";

export default function Layout({children}) {
    return(
        <>
            <Header />
            <div className="nav__right">
                    <nav className="nav">
                        <ul className="nav__right__wrapper">
                            <li><a className="nav__right__wrapper__a" href="#intro">Intro</a></li>
                            <li><a className="nav__right__wrapper__a" href="#career">Career</a></li>
                            <li><a className="nav__right__wrapper__a" href="#stack">Skill</a></li>
                            <li><a className="nav__right__wrapper__a" href="#portfolio">Portfolio</a></li>
                            {/* <li><a href="#phone"><img className="dot" src="dot.png"></img></a></li> */}
                        </ul>
                    </nav>
                </div>
            <div>{children}</div>
        </>
    );
}