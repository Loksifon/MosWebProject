import "./App.css";
import { UserTable } from "@/components/UserTable/UserTable";
import { UserData } from "@/utils/constants/Constants";
import { SchoolTable } from "@/components/SchoolTable/SchoolTable";
export const App = () => {

  return (
		<>
			<UserTable userData={UserData} />
			<SchoolTable />
		</>
	);
};

export default App;
