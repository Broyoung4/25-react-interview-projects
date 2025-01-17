/** @format */

import { useEffect } from "react";
import { useState } from "react";
import "./style.css";

export default function LoadMoreData() {
	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);
	const [count, setCount] = useState(0);
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);

	// an async function that handles fetching of products
	async function fetchProducts() {
		try {
			setLoading(true);
			const response = await fetch(
				`https://dummyjson.com/products?limit=5&skip=${
					count === 0 ? 0 : count * 20
				}`
			);

			const result = await response.json();

			if (result && result.products && result.products.length) {
				setProducts((prevData) => [...prevData, ...result.products]);
				setLoading(false);
			}
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}

	// to cummumicate with a system outside of react
	useEffect(() => {
		fetchProducts();
	}, [count]);

	useEffect(() => {
		if (count === 3) {
			setIsButtonDisabled(true);
		} else {
			setIsButtonDisabled(false);
		}
	}, [count]);

	// whenever component renders/rerenders give a feedback if products are being fetched
	if (loading) {
		return <div>Loading data! Please wait.</div>;
	} else {
		return (
			<div className="container">
				<div className="products-container">
					{products.length
						? products.map((item, index) => (
								<div key={count + index} className="product">
									<img
										src={item.thumbnail}
										alt={item.title}
									/>
									<p>{item.title}</p>
								</div>
						  ))
						: null}
				</div>

				<div className="button-container">
					<button
						className="btn"
						disabled={isButtonDisabled}
						onClick={() => {
							setCount(count + 1);
						}}>
						Load more products
					</button>
					{isButtonDisabled ? (
						<p>You have reached to {products.length} products</p>
					) : null}
				</div>
			</div>
		);
	}
}
