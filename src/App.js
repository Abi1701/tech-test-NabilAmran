import * as React from "react";
import styled from "./App.module.scss";
import RouterApps from "./routes/index";
import { useLocation, useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./component/header";

function App() {
	const [isUser, setIsUser] = React.useState(false);
	const location = useLocation();
	const header = ["/"];
	React.useEffect(() => {
		const token = localStorage.getItem("_q");
		if (token) {
			setIsUser(true);
		} else {
			setIsUser(false);
		}
	}, []);
	const Routing = useRoutes(RouterApps(isUser));
	return (
		<>
			<div className={styled.myAPP}>
				{!header.includes(location.pathname) && <Header />}
				<ToastContainer />
				{Routing}
			</div>
		</>
	);
}

export default App;
