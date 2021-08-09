import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-flow: row wrap;
	background-color: #585858;
	justify-content: space-between;
	padding: 5px 20px;
`
const Burger = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	img {
		width: 40px;
	}
`

const Nav = () => {
	return (
		<Container>
			<div className='logo'>
				<img src='images/dummy-logo.svg' alt='dummy logo' />
			</div>

			<Burger>
				<img src='images/burger-menu.svg' alt='burger menu' />
			</Burger>
		</Container>
	)
}

export default Nav
