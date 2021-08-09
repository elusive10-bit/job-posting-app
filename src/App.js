import React from 'react'
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

function App() {
	return (
		<div className='App'>
			<Nav />

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
