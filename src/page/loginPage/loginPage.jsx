import * as React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import styled from "./loginPage.module.scss";

export default function LoginPage() {
	const [value, setValue] = React.useState({
		email: "",
		password: "",
	});

	const handleChange = (name) => (e) => {
		setValue({ ...value, [name]: e.target.value });
	};

	const handleLogin = async () => {
		try {
			const { data } = await axios.post(
				"http://localhost:8080/user/api/auth/login",
				{
					email: value.email,
					password: value.password,
				}
			);
			localStorage.setItem("_q", data.accessToken);
			toast.success("login berhasil");
			window.location.href = "/user-page";
		} catch (error) {
			toast.error("login error");
		}
	};
	return (
		<div className={styled.login}>
			<div className={styled.form}>
				<h1 className={styled.formTitle}>Login</h1>
				<div className={styled.inputContainer}>
					<input
						placeholder="Username"
						type="text"
						onChange={handleChange("email")}
					/>
					<input
						placeholder="Password"
						type="password"
						name=""
						id=""
						onChange={handleChange("password")}
					/>
				</div>
				<button className={styled.submit} onClick={handleLogin}>
					Login
				</button>
			</div>
		</div>
	);
}
