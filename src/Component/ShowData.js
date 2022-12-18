import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShowData = () => {
	const [content, setContent] = useState([]);
	const [dataSet, setDataSet] = useState(null);
	const [count, setCount] = useState(1);
	const [loader, setLoader] = useState(1);

	useEffect(() => {
		setLoader(true);
		axios
			.get(`https://reqres.in/api/users?page=${count}`)
			.then(({ data }) => {
				console.log("userData", data);
				setContent(data.data);
				setDataSet(data);
				setLoader(false);
			})
			.catch((err) => {
				console.log("err", err);
				setLoader(false);
			});
	}, [count]);

	const NextPage = () => {
		setCount(count + 1);
	};
	const PrevPage = () => {
		setCount(count - 1);
	};
	return (
		<>
			<div
				className=' d-flex justify-content-center'
				style={{ marginTop: "5%", marginBottom: "5%" }}>
				<div className='card w-100 loginCard' style={{ maxWidth: "800px" }}>
					<h2>Show Data</h2>
					<div className='card-body text-left'>
						<nav aria-label='Page navigation example'>
							<div>
								<div style={{ display: "flex", justifyContent: "flex-end" }}>
									<p className='mr-2'>
										Page {dataSet?.page} outOf {dataSet?.total_pages}
									</p>
									<ul className='pagination'>
										<li
											className='page-item'
											style={{
												display:
													dataSet?.page === 1 ||
													dataSet?.page < dataSet?.total_pages
														? "none"
														: "",
											}}>
											<Link
												className='page-link'
												to='#'
												aria-label='Previous'
												onClick={PrevPage}>
												<span aria-hidden='true'>«</span>
											</Link>
										</li>

										<li
											className='page-item'
											style={{
												display:
													dataSet?.page >= dataSet?.total_pages ? "none" : "",
											}}>
											<Link
												className='page-link'
												to='#'
												aria-label='Next'
												onClick={NextPage}>
												<span aria-hidden='true'>»</span>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</nav>
						{loader ? (
							<div className='d-flex justify-content-center'>
								<div className='spinner-border' role='status'>
									<span className='sr-only'>Loading...</span>
								</div>
							</div>
						) : (
							<table className='table table-borderless'>
								<thead>
									<tr>
										<th scope='col'>Id</th>
										<th scope='col'>Profile Photo</th>
										<th scope='col'>First Name</th>
										<th scope='col'>Last Name</th>
										<th scope='col'>Email</th>
									</tr>
								</thead>
								<tbody>
									{content &&
										content.map((value, i) => (
											<tr>
												<th scope='row'>{value.id}</th>

												<td>
													<img src={value.avatar} alt='....' />
												</td>
												<td>{value.first_name}</td>
												<td>{value.last_name}</td>
												<td>{value.email}</td>
												<td></td>
											</tr>
										))}
								</tbody>
							</table>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default ShowData;
