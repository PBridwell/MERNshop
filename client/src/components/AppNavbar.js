import React, { useState } from 'react'
import {
	Collapse,
	NavbarToggler,
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container,
} from 'reactstrap'

function AppNavbar(props) {
	const [isOpen, setIsopen] = useState(false)

	const toggle = () => {
		setIsopen(!isOpen)
	}

	return (
		<div>
			<Navbar color='dark' dark expand='sm' className='mb-5'>
				<Container>
					<NavbarBrand href='/'>Shopping List</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className='ml-auto' navbar>
							<NavItem>
								<NavLink href='https://github.com/pbridwell'>GitHub</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</div>
	)
}
export default AppNavbar
