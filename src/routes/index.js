import React from "react";
import LabelTest from "../page/Soal 1/labelTest";
import LandingPage from "../page/landingPage/landingPage";
import MappingTest from "../page/Soal 2/maapingTest";
import HashItem from "../page/Soal 3/hashingTest";
import LoginPage from "../page/loginPage/loginPage";
import UserPage from "../page/loginPage/userPage";

const Router = () => {
	return [
		{
			path: "/",
			element: <LandingPage />,
		},
		{
			path: "/label-test",
			element: <LabelTest />,
		},
		{
			path: "/maping-test",
			element: <MappingTest />,
		},
		{
			path: "/hash-test",
			element: <HashItem />,
		},
		{
			path: "/form-login",
			element: <LoginPage />,
		},
		{
			path: "/user-page",
			element: <UserPage />,
		},
	];
};
export default Router;
