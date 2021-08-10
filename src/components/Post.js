import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	/* box-shadow: 1px 2px 4px 1px #b7b7b7; */
	border-bottom: 1px solid #b6b6b6;
	display: flex;
	padding: 10px 25px;

	@media (min-width: 320px) {
		flex-flow: column wrap;
	}
	@media (min-width: 728px) {
		flex-flow: row wrap;
		margin-right: 15px;
	}

	@media (min-width: 1024px) {
		min-width: 950px;
	}

	p {
		line-height: 1.42rem;
		max-width: 400px;
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

	@media (min-width: 320px) {
		order: 2;
	}

	@media (min-width: 728px) {
		order: 1;
	}
`

const ButtonContainer = styled.div`
	display: flex;
	flex-flow: column wrap;
	justify-content: center;

	@media (min-width: 320px) {
		margin-top: 20px;
		margin-bottom: 20px;
		flex-flow: row wrap;
		order: 3;
	}
	@media (min-width: 728px) {
		flex-flow: column wrap;
		order: 3;
	}

	button {
		@media (min-width: 320px) {
			margin-right: 15px;
			width: 70px;
		}
		@media (min-width: 728px) {
			margin-bottom: 15px;
			width: 70px;
		}

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
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	margin-left: 20px;
	margin-top: 20px;
	margin-bottom: 20px;

	@media (min-width: 768px) {
		order: 2;
	}

	img {
		@media (min-width: 320px) {
			display: none;
		}
		@media (min-width: 768px) {
			display: flex;
			width: 100px;
		}
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
