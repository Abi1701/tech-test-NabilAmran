import * as React from "react";
import styled from "./testSatu.module.scss";
import Select from "react-select";

const data = [
	{
		id: 1,
		title: "iPhone 9",
		description: "An apple mobile which is nothing like apple",
		price: "Rp. 5.490.000",
	},
	{
		id: 2,
		title: "iPhone 10",
		description: "An apple mobile which is nothing like apple",
		price: "Rp. 6.490.000",
	},
	{
		id: 3,
		title: "iPhone 11",
		description: "An apple mobile which is nothing like apple",
		price: "Rp. 7.490.000",
	},
	{
		id: 4,
		title: "iPhone 12",
		description: "An apple mobile which is nothing like apple",
		price: "Rp. 8.490.000",
	},
	{
		id: 5,
		title: "iPhone 13",
		description: "An apple mobile which is nothing like apple",
		price: "Rp. 8.490.000",
	},
	{
		id: 6,
		title: "iPhone 14",
		description: "An apple mobile which is nothing like apple",
		price: "Rp. 9.490.000",
	},
];

export default function SoalSatu() {
	const [userProduct, setUserProduct] = React.useState([]);
	const [popUp, setPopUp] = React.useState("");
	const [output, setOutPut] = React.useState(false);

	const getProduct = async () => {
		let result = data.map((datas) => {
			return {
				label: datas.title,
				value: datas.title + " - " + datas.price,
			};
		});
		setUserProduct(result);
	};
	React.useEffect(() => {
		getProduct();
	}, []);

	const handleSubmit = () => {
		setOutPut((state) => !state);
	};
	const handleChange = (value) => {
		setPopUp(value);
	};
	return (
		<div className={styled.testSatuPage}>
			<div className={styled.testSatuContainer}>
				<Select
					className={styled.select}
					options={userProduct}
					onChange={(e) => handleChange(e.value)}></Select>
				<button className={styled.button} onClick={() => handleSubmit()}>
					<span className={styled.circle1}></span>
					<span className={styled.circle2}></span>
					<span className={styled.circle3}></span>
					<span className={styled.circle4}></span>
					<span className={styled.circle5}></span>
					<span classNames={styled.text}>
						{output ? "Hide Product" : "Pick Product"}
					</span>
				</button>
				<h1 className={styled.outputProduct}>{output ? popUp : ""}</h1>
			</div>
		</div>
	);
}
