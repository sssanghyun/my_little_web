import Seo from "@/components/Seo";
import Intro from "@/components/Intro";
import Career from "@/components/Career";

export default function Home() {
    return(
        <>
            <Seo title="Ssanghyun's 포트폴리오"/>
            <Intro/>
            <Career/>
            <div id="stack">
                <div className="stack__title">
                    SKILLS
                </div>
                <div className="stack__wrapper">
                    <div className="stack__frontend">
                        <div className="stack__wrapper__title">
                            Frontend
                        </div>
                        <div className="stack__wrapper__skills">
                            <div className="stack__wrapper__skills__frontend">
                            </div>
                        </div>
                    </div>

                    <div className="stack__backend">
                        <div className="stack__wrapper__title">
                            Backend
                        </div>
                        <div className="stack__wrapper__skills__backend">
                        </div>
                    </div>

                    <div className="stack__database">
                        <div className="stack__wrapper__title">
                            Database
                        </div>
                        <div className="stack__wrapper__skills__database">
                        </div>
                    </div>

                    <div className="stack__os">
                        <div className="stack__wrapper__title">
                            OS
                        </div>
                        <div className="stack__wrapper__skills__os">
                        </div>
                    </div>

                    <div className="stack__version">
                        <div className="stack__wrapper__title">
                            Version Control
                        </div>
                        <div className="stack__wrapper__skills__versioncontrol">
                        </div>
                    </div>
                </div>
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