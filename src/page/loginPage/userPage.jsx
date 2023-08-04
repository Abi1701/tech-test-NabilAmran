import * as React from "react";
import axios from "axios";
import styled from "./loginPage.module.scss";

export default function UserPage() {
	const [profile, setProfile] = React.useState(null);

	const getProfile = async () => {
		try {
			const { data } = await axios.get(
				"http://localhost:8080/user/api/profile"
			);
			setProfile(data);
		} catch (error) {
			setProfile(null);
		}
	};

	React.useEffect(() => {
		getProfile();
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("_q");
		window.location.href = "/form-login";
	};

	console.log(profile);
	return (
		<div className={styled.login}>
			<div className={styled.form}>
				<div className={styled.inputContainer}>
					<h1 className={styled.formTitle}>Selamat Datang</h1>
					<button className={styled.submit} onClick={handleLogout}>
						logout
					</button>
				</div>
			</div>
		</div>
	);
}
