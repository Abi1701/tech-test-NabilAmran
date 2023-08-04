import * as React from "react";
import styled from "./landingPage.module.scss";
import { Link } from "react-router-dom";

export default function LandingPage() {
	return (
		<div className={styled.landingPage}>
			<div className={styled.buttonContainer}>
				<Link to={"/label-test"}>
					<button className={styled.button}>
						<span className={styled.shadow}></span>
						<span className={styled.edge}></span>
						<span className={styled.text}>Soal JSON</span>
					</button>
				</Link>
				<Link to={"/maping-test"}>
					<button className={styled.button}>
						<span className={styled.shadow}></span>
						<span className={styled.edge}></span>
						<span className={styled.text}>Soal Maping Data</span>
					</button>
				</Link>
				<Link to={"/hash-test"}>
					<button className={styled.button}>
						<span className={styled.shadow}></span>
						<span className={styled.edge}></span>
						<span className={styled.text}>Soal Hash Item</span>
					</button>
				</Link>
				<Link to={"/form-login"}>
					<button className={styled.button}>
						<span className={styled.shadow}></span>
						<span className={styled.edge}></span>
						<span className={styled.text}>Soal Form Login</span>
					</button>
				</Link>
				<Link to={"https://github.com/Abi1701/store-API"}>
					<button className={styled.button}>
						<span className={styled.shadow}></span>
						<span className={styled.edge}></span>
						<span className={styled.text}>GitHub Node Js API Store</span>
					</button>
				</Link>
				<Link to={"https://github.com/Abi1701/NFT-API"}>
					<button className={styled.button}>
						<span className={styled.shadow}></span>
						<span className={styled.edge}></span>
						<span className={styled.text}>GitHub Node Js API NFT</span>
					</button>
				</Link>
				<Link to={"https://github.com/Abi1701/pseudo-test"}>
					<button className={styled.button}>
						<span className={styled.shadow}></span>
						<span className={styled.edge}></span>
						<span className={styled.text}>
							Soal GitHub Pseudo Test & Debuging
						</span>
					</button>
				</Link>
			</div>
		</div>
	);
}
