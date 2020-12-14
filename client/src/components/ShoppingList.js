import React, { useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';

function ShoppingList(props) {
	const [items, setItems] = useState([
		{ id: uuid(), name: 'Eggs' },
		{ id: uuid(), name: 'Milk' },
		{ id: uuid(), name: 'Rice' },
		{ id: uuid(), name: 'Steak' },
	]);

	return (
		<Container>
			<Button
				color='dark'
				style={{
					marginBottom: '2rem',
				}}
				onClick={() => {
					const name = prompt('Enter Item');
					if (name) {
						setItems((items) => [...items, { id: uuid(), name }]);
					}
				}}>
				Add Item
			</Button>
		</Container>
	);
}

export default ShoppingList;
