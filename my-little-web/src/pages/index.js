import Seo from "@/components/Seo";
import Intro from "@/components/Intro";
import Career from "@/components/Career";
import Stack from "@/components/Stack";
import Portfolio from "@/components/Portfolio";

// 스크롤 시 한페이지씩 넘어가는 기능
// if (typeof window === 'object') {
//     // Check if document is finally loaded
//     // const wrap = document.getElementsByClassName('wrap')[0]; // 보일 영역
//     const screen_height = window.innerHeight;
//     const section = document.getElementsByClassName('section');
//     let page = 0; // 영역 포지션 초기값
//     const lastPage = section.length - 1; // 마지막 페이지

//     window.addEventListener('wheel',(e)=>{
//         e.preventDefault();
//         if(e.deltaY > 0){
//             page++;
//         }else if(e.deltaY < 0){
//             page--;
//         }
//         if(page < 0){
//             page=0;
//         }else if(page > lastPage){
//             page = lastPage;
//         }
//         console.log(e.deltaY)
//         window.scrollTo(0, screen_height * page);
//     },{passive:false}); // 디폴트 기능 제거 - 스크롤
// }

export default function Home() {
    return (
        <div className="wrap">
            <Seo title="박상현`s WEB Portfolio" />
            <Intro />
            <Career />
            <Stack />
            <Portfolio />
        </div>
    );
}
