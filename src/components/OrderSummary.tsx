import { Game } from '@/utils/endpoint';
import React from 'react';


type OrderSummaryProps = {
	orderId: string;
	products: Game[];
};

export const OrderSummary: React.FC<OrderSummaryProps> = ({ orderId="#000001", products }) => {
	const total = products.reduce((sum, p) => sum + p.price, 0);
	return (
		<div className="bg-surface-primary rounded-lg p-6 shadow-md w-full max-w-md mx-auto">
			<h2 className="text-heading-lg mb-2 font-bold">Order Summary</h2>
			<div className="text-body-md mb-4 text-text-secondary">Order ID: <span className="font-mono">{orderId}</span></div>
			<ul className="mb-4 divide-y divide-stroke-primary">
				{products.map(product => (
					<li key={product.id} className="flex justify-between py-2">
						<span>{product.name}</span>
						<span>${product.price.toFixed(2)}</span>
					</li>
				))}
			</ul>
			<div className="flex justify-between font-bold text-heading-md border-t border-stroke-primary pt-4">
				<span>Total</span>
				<span>${total.toFixed(2)}</span>
			</div>
		</div>
	);
};
