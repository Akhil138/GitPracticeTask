import React from 'react'
import styled from 'styled-components'
import Reviews from './Reviews'
import ReviewsRating from './ReviewsRating'


const ReviewContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 5rem 14rem;
    background: #fff;
`

function Alumni() {
    return (
        <>
            <ReviewContainer>
                <ReviewsRating/>
                <Reviews/>
            </ReviewContainer>
        </>
    )
}

export default Alumni
