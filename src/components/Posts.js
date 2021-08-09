import React from 'react'
import Post from './Post'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-flow: column wrap;

	@media (min-width: 1024px) {
		align-items: center;
	}
`

const PostsContainer = styled.div`
	display: flex;

	@media (min-width: 320px) {
		flex-flow: column wrap;
	}
	@media (min-width: 768px) {
		flex-flow: column wrap;
		justify-content: center;
	}
`

const Posts = () => {
	return (
		<Container>
			<h2>Posts</h2>
			<PostsContainer>
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</PostsContainer>
		</Container>
	)
}

export default Posts
