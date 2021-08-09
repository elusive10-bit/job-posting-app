import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	padding: 10px 20px;
	/* box-shadow: 1px 2px 4px 1px #b7b7b7; */
	border: 1px solid #ccc;

	@media (min-width: 320px) {
		margin-bottom: 15px;
	}
	@media (min-width: 728px) {
		margin-right: 15px;
		margin-bottom: 15px;
	}
	flex: 1 1 20vw;
`

const Post = () => {
	return (
		<Container>
			<h2>Job Position</h2>
			<p>Description</p>
			<h3>Salary</h3>
		</Container>
	)
}

export default Post
