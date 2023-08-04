import * as React from "react";
import styled from "./header.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className={styled.header}>
			<nav className={styled.navBar}>
				<ul className={styled.ul}>
					<li className={styled.li}>
						<Link className={styled.content} to={"/"}>
							<button className={styled.button}>
								<div className={styled.div}>
									<span className={styled.span}>
										<p className={styled.p}>Go Back?</p>
										<p className={styled.p}>?</p>
									</span>
								</div>
								<div className={styled.div}>
									<span className={styled.span}>
										<p className={styled.p}>Home?</p>
									</span>
								</div>
							</button>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
