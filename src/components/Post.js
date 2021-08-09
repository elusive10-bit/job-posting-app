import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	padding: 5px 20px;
	/* box-shadow: 1px 2px 4px 1px #b7b7b7; */
	border: 1px solid #ccc;
	display: flex;

	justify-content: space-between;
	@media (min-width: 320px) {
		margin-bottom: 15px;
		flex-flow: row wrap;
	}
	@media (min-width: 728px) {
		margin-right: 15px;
		margin-bottom: 15px;
		flex: 1 1;
		border: 1px solid #ccc;
	}

	@media (min-width: 1024px) {
		width: 800px;
		min-width: 900px;
		border: none;
		border-bottom: 1px solid #ccc;
		margin-bottom: 0;
	}

	p {
		line-height: 1.62rem;
		max-width: 500px;
	}

	:hover {
		background-color: #f4f4f4;
	}
`

const JobInfo = styled.div`
	flex: 1;

	h2 {
		font-weight: 600;
	}

	h3 {
		font-weight: 500;
		font-size: 1.1rem;
	}
`

const ButtonContainer = styled.div`
	display: flex;
	flex-flow: column wrap;
	justify-content: center;

	button {
		margin-bottom: 20px;
		border: 1px solid #ccc;
		background-color: #fff;
	}
`

const Save = styled.button``

const Delete = styled.button`
	img {
		width: 40px;
		height: 40px;
	}
`

const PostImage = styled.div`
	width: 300px;
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: center;
	img {
		@media (min-width: 320px) {
			display: none;
		}
		@media (min-width: 600px) {
			display: flex;
		}
		width: 165px;
		height: auto;
	}
`

const Post = () => {
	return (
		<Container>
			<JobInfo>
				<h2>Web Developer</h2>
				<p>
					A strong skill in HTML, CSS, and Javascript. To create responsive, and
					accessible web pages. Experience in front-end frameworks is a plus.
					Able to start as soon as possible
				</p>
				<h3>Salary: $3,000,000 - $5,000,000 </h3>
			</JobInfo>

			<PostImage>
				<img
					src='images/job-posting-image.svg'
					alt='job posting'
					width='50'
					height='50'
				/>
			</PostImage>

			<ButtonContainer>
				<Save>
					<img
						src='images/heart-outline.svg'
						alt='heart'
						width='50'
						height='50'
					/>
				</Save>
				<Delete>
					<img src='images/trash.svg' alt='delete' width='50' height='50' />
				</Delete>
			</ButtonContainer>
		</Container>
	)
}

export default Post
