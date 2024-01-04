import { MainRouter } from "@/Routes/MainRouter";

import { Navbar, Footer } from "@/components/Layout";
export const App = () => {
	return (
		<>
			<Navbar />
			<MainRouter/>
			<Footer />
		</>
	);
};

export default App;
