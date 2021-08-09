import React from 'react'
import Post from './Post'
import styled from 'styled-components'

const PostsContainer = styled.div`
	display: flex;
	flex-flow: row wrap;

	@media (min-width: 320px) {
		flex-flow: column wrap;
	}
	@media (min-width: 768px) {
		flex-flow: row wrap;
	}
`

const Posts = () => {
	return (
		<div>
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
		</div>
	)
}

export default Posts
