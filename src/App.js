import React, { useState } from 'react'
import Nav from './components/Nav'
import Find from './components/Find'
import Posts from './components/Posts'

import styled from 'styled-components'

const Main = styled.div`
	padding: 20px;
`
const Footer = styled.div`
	padding: 20px;
	background-color: #585858;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	color: #fff;
	align-items: center;

	li {
		line-height: 1.55rem;
	}

	h3 {
		font-size: 1.1rem;
		font-weight: 400;
	}
`

const LinkContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	margin-right: 30px;

	ul li {
		list-style-type: none;
		text-decoration: none;
	}

	div {
		margin-right: 15px;
	}
`

const OverlayNav = styled.div`
	@media (min-width: 320px) {
		display: none;
		display: ${(props) => (props.show ? 'flex' : 'none')};
	}

	@media (min-width: 768px) {
		display: none;
	}

	padding: 5px 10px;
	position: absolute;
	width: 100%;
	background-color: #595b62;
	z-index: 2;
	flex-flow: column wrap;
	color: #fff;

	ul {
		margin: 0;
		padding: 0;
		display: flex;
		flex-flow: column wrap;
	}

	ul li {
		display: flex;
		margin: 0;
		list-style-type: none;
		line-height: 2rem;
		font-size: 1.1rem;
		padding: 5px 20px;
		border-bottom: 1px solid #ccc;

		:hover {
			background-color: #fff;
			color: #000;
		}
	}
`

const Header = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: flex-start;
	padding: 0px 10px;
`

function App() {
	const [showMobileNav, setShowMobileNav] = useState(false)

	return (
		<div className='App'>
			<OverlayNav show={showMobileNav} setShow={setShowMobileNav}>
				<Header>
					<img
						src='images/dummy-logo.svg'
						alt='dummy logo'
						width='50'
						height='50'
					/>
					<span
						onClick={() => {
							setShowMobileNav(!showMobileNav)
						}}>
						close
					</span>
				</Header>

				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact</li>
					<li>FAQ</li>
					<li>Link</li>
				</ul>
			</OverlayNav>

			<Nav showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} />

			<Main>
				<Find />

				<Posts />
			</Main>

			<Footer>
				<LinkContainer>
					<div>
						<ul>
							<li>Home</li>
							<li>About Us</li>
							<li>Contact</li>
							<li>Email</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>LinkedIn</li>
							<li>Footer Link</li>
							<li>Hello</li>
							<li>World</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>Link Again</li>
							<li>Still a link</li>
							<li>Again Link</li>
							<li>Regular Link</li>
						</ul>
					</div>
				</LinkContainer>

				<h3>&copy; All rights reserved 2021 - 2022</h3>
			</Footer>
		</div>
	)
}

export default App
