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
				@font-face {
					font-family: 'NotoSansKr';
					src: url('/fonts/NotoSansKR-Medium.otf') format('opentype');
					font-weight: normal;
					font-style: normal;
				}
				*{
					box-sizing: border-box;
				}
				`}
			</style>
		</>
        );
}