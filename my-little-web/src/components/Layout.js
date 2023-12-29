import Header from "./Header";

export default function Layout({children}) {
    return(
        <>
            <Header />
            <div className="nav__right">
                    <nav className="nav">
                        <ul className="nav__right__wrapper">
                            <li><a href="#intro"><img src="dot.png"></img></a></li>
                            <li><a href="#career"><img src="dot.png"></img></a></li>
                            <li><a href="#stack"><img src="dot.png"></img></a></li>
                            <li><a href="#portfolio"><img src="dot.png"></img></a></li>
                            <li><a href="#phone"><img src="dot.png"></img></a></li>
                        </ul>
                    </nav>
                </div>
            <div>{children}</div>
        </>
    );
}