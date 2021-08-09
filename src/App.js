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
`

const LinkContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	margin-right: 30px;

	ul li {
		list-style-type: none;
		text-decoration: none;
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
							<li>Link</li>
							<li>Link</li>
							<li>Link</li>
							<li>Link</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>Link</li>
							<li>Link</li>
							<li>Link</li>
							<li>Link</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>Link</li>
							<li>Link</li>
							<li>Link</li>
							<li>Link</li>
						</ul>
					</div>
				</LinkContainer>

				<h3>This is Footer</h3>
			</Footer>
		</div>
	)
}

export default App
