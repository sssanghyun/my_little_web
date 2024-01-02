import Header from "./Header";

export default function Layout({children}) {
    return(
        <>
            <Header />
            <div className="nav__right">
                    <nav className="nav">
                        <ul className="nav__right__wrapper">
                            <li><a href="#intro"><img className="dot" src="dot.png"></img></a></li>
                            <li><a href="#career"><img className="dot" src="dot.png"></img></a></li>
                            <li><a href="#stack"><img className="dot" src="dot.png"></img></a></li>
                            <li><a href="#portfolio"><img className="dot" src="dot.png"></img></a></li>
                            <li><a href="#phone"><img className="dot" src="dot.png"></img></a></li>
                        </ul>
                    </nav>
                </div>
            <div>{children}</div>
        </>
    );
}