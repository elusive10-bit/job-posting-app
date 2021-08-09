import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-flow: column wrap;

	form {
		display: flex;
		flex-flow: column wrap;

		label {
			margin-bottom: 5px;
		}
	}
	input {
		height: 65px;
		width: 100%;
		padding: 15px 20px;
		padding-left: 70px;
		font-size: 1.1rem;
		border: 1px solid #969696;
		background-image: url(images/find.svg);
		background-repeat: no-repeat;
		background-position-y: center;
		background-position-x: 10px;
		background-size: 38px;
	}
`

const FilterContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;

	h3 {
		margin-right: 10px;
	}

	div {
		flex: 1;
		display: flex;
		flex-flow: row wrap;
	}

	button:first-child {
	}

	button {
		@media (min-width: 320px) {
			margin-right: 5px;
		}
		@media (min-width: 768px) {
			margin-right: 10px;
		}
		padding: 8px 20px;
		border: 1px solid #ccc;
		background-color: #3c3c3c;
		color: #fff;
	}
`

const Find = () => {
	return (
		<Container>
			<form>
				<label htmlFor='search'>Search</label>
				<input type='text' id='search' />
			</form>

			<FilterContainer>
				<h3>Filter</h3>
				<div>
					<button>Remote</button>
					<button>Added Recently</button>
					<button>Popular</button>
				</div>
			</FilterContainer>
		</Container>
	)
}

export default Find
