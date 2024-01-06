import styled from 'styled-components'
import {ThemeProvider} from "styled-components";
import { MainRouter } from "@/Routes/MainRouter";
import { Navbar, Footer } from "@/components/Layout";
import { GlobalStyles } from '@/styles/Global';
import {lightTheme, darkTheme} from "@/styles/Theme";
import { FC, useState } from 'react';

export const App: FC = () => {
	
	const [theme, setTheme] = useState("darkTheme");
	
	const isDarkTheme = theme === "darkTheme"

	const toggleTheme = () => {
		setTheme(isDarkTheme ? "lightTheme" : "darkTheme")
	}


	return (
		<ThemeProvider theme={isDarkTheme ? lightTheme : darkTheme}>
			<GlobalStyles/>
			<Navbar toggleTheme={toggleTheme} />
			<MainRouter/>
			<Footer />
		</ThemeProvider>
	);
};

export default App;
