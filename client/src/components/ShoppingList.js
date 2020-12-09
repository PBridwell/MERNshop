import React, { useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

function ShoppingList(props) {
	const [items, setItems] = useState([
		{ id: uuid(), name: 'Eggs' },
		{ id: uuid(), name: 'Milk' },
		{ id: uuid(), name: 'Rice' },
		{ id: uuid(), name: 'Steak' },
	]);
}
return;

export default ShoppingList;
