import "./App.css";
import { UserTable } from "@/components/UserTable/UserTable";
import { UserData } from "@/utils/constants/constants";

export const App = () => {
  return (
		<>
			<UserTable userData={UserData} />
		</>
	);
};

export default App;
