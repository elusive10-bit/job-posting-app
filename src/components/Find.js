import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-flow: row wrap;
	input {
		height: 40px;
		padding: 10px 20px;
		padding-left: 70px;
		font-size: 1.1rem;
		flex: 1;
		border: 1px solid #969696;
		background-image: url(images/find.svg);
		background-repeat: no-repeat;
		background-position-y: center;
		background-position-x: 10px;
		background-size: 38px;
	}
`

const Find = () => {
	return (
		<Container>
			<input type='text' />
		</Container>
	)
}

export default Find
