import * as React from "react";
import styled from "./testDua.module.scss";
import axios from "axios";

export default function SoalDua() {
	const [data, setData] = React.useState([]);
	const getData = async () => {
		const profile = await axios.get(
			"http://jsonplaceholder.typicode.com/posts"
		);
		return profile.data;
	};
	React.useEffect(() => {
		getData().then((result) => {
			setData([...result]);
		});
	}, []);

	const deleteItem = (id) => {
		const newData = data.filter((data) => data.id !== id);
		setData(newData);
	};

	return (
		<div className={styled.mapingPage}>
			<div className={styled.mapingContainer}>
				<table className={styled.table}>
					<tr className={styled.tableHeader}>
						<th className={styled.tableTitle}>Id</th>
						<th className={styled.tableTitle}>Title</th>
						<th className={styled.tableTitle}>Body</th>
						<th className={styled.tableTitle}>Action</th>
					</tr>
					{data.slice(0, 10).map((value) => {
						return (
							<tbody className={styled.tableBody} key={value.id}>
								<td className={styled.tableContent1}>{value.id}</td>
								<td className={styled.tableContent2}>{value.title}</td>
								<td className={styled.tableContent3}>{value.body}</td>
								<td className={styled.tableContent4}>
									<button
										className={styled.deleteButton}
										onClick={() => deleteItem(value.id)}>
										<svg viewBox="0 0 448 512" className={styled.svgIcon}>
											<path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
										</svg>
									</button>
								</td>
							</tbody>
						);
					})}
				</table>
			</div>
		</div>
	);
}
