import * as React from "react";
import styled from "./hash.module.scss";
import { sha256 } from "crypto-hash";

export default function HashItem() {
	const [algorithms] = React.useState("sha256");
	let [dateInput, setDateInput] = React.useState("");
	let [nameInput, setNameInput] = React.useState("");
	let [genderInput, setGenderInput] = React.useState("");
	let [ifabula, setIfabula] = React.useState("ifabula");
	let [output, setOutput] = React.useState("");

	const handleTextInputDate = async (e) => {
		let valueDate = e.target.value;

		let resultDate = "";

		if (algorithms === "sha256") {
			resultDate = await sha256(valueDate);
		}

		setOutput(resultDate);

		setDateInput(valueDate);
		setGenderInput("pria");
		setIfabula("ifabula");
	};
	const handleTextInputName = async (e) => {
		let valueName = e.target.value;

		let resultName = "";

		if (algorithms === "sha256") {
			resultName = await sha256(valueName);
		}

		setOutput(resultName);

		setNameInput(valueName);
	};
	console.log(output);
	return (
		<div className={styled.hashPage}>
			<div className={styled.form}>
				<div className={styled.inputContainer}>
					<input type="date" value={dateInput} onChange={handleTextInputDate} />
					<input type="text" value={nameInput} onChange={handleTextInputName} />
					<input
						type="text"
						value={genderInput}
						onChange={handleTextInputDate}
					/>
					<input type="text" value={ifabula} onChange={handleTextInputDate} />
				</div>
			</div>
		</div>
	);
}
