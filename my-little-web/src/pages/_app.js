import Layout from "@/components/Layout";
import '@/styles/header.css';
import '@/styles/intro.css';
import '@/styles/career.css';
import '@/styles/stack.css';
import '@/styles/portfolio.css';
import '@/styles/phone.css';

export default function App({Component, pageProps}){
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			
			<style jsx global>
				{`
				html {
					scroll-behavior: smooth;
				}
				body {
					margin: 0;
				}
				@font-face {
					font-family: 'JalnanGothic';
					src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/JalnanGothic.woff') format('woff');
					font-weight: normal;
					font-style: normal;
				}
				@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

				.notosanskr * { 
				font-family: 'Noto Sans KR', sans-serif;
				}
				*{
					box-sizing: border-box;
				}
				@font-face {
					font-family: 'IBMPlexSansKR-Regular';
					src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');
					font-weight: normal;
					font-style: normal;
				}
				`}
			</style>
		</>
        );
}