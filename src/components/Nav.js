import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	position: relative;
	display: flex;
	flex-flow: row wrap;
	background-color: #585858;
	justify-content: space-between;
	padding: 5px 20px;
`
const Burger = styled.div`
	display: flex;
	@media (min-width: 768px) {
		display: none;
	}

	flex-flow: row wrap;
	align-items: center;
	img {
		width: 40px;
	}
`

const DesktopNav = styled.ul`
	@media (min-width: 320px) {
		display: none;
	}
	@media (min-width: 768px) {
		display: flex;
		flex-flow: row wrap;
	}

	padding: 0;

	li {
		list-style-type: none;
		padding: 0;
		margin: 0;
		margin-left: 20px;
		font-size: 1.1rem;
		color: #fff;
	}
`

const Nav = ({ showMobileNav, setShowMobileNav }) => {
	return (
		<Container>
			<div className='logo'>
				<img
					src='images/dummy-logo.svg'
					alt='dummy logo'
					width='50'
					height='50'
				/>
			</div>

			<DesktopNav>
				<li>Home</li>
				<li>About Us</li>
				<li>Contact</li>
				<li>FAQ</li>
				<li>Link</li>
			</DesktopNav>

			<Burger
				onClick={() => {
					setShowMobileNav(!showMobileNav)
				}}>
				<img
					src='images/burger-menu.svg'
					alt='burger menu'
					width='50'
					height='50'
				/>
			</Burger>
		</Container>
	)
}

export default Nav
