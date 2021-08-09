import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	padding: 5px 20px;
	/* box-shadow: 1px 2px 4px 1px #b7b7b7; */
	border: 1px solid #ccc;
	display: flex;
	@media (min-width: 320px) {
		margin-bottom: 15px;
		flex-flow: row wrap;
	}
	@media (min-width: 728px) {
		margin-right: 15px;
		margin-bottom: 15px;
		flex: 1 1;
		border: none;
		border-bottom: 1px solid #8f8f8f;
	}

	@media (min-width: 1024px) {
		width: 800px;
		min-width: 900px;
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

	padding-left: 10px;
	padding-right: 10px;

	button {
		margin-bottom: 20px;
		padding: 10px 20px;
		border: none;
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
