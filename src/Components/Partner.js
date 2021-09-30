import React from 'react'
import styled from 'styled-components'

const PartnerBx = styled.div`
    width: 80%;
    padding: 4rem;
    margin: auto;
`

const Title = styled.p`
    font-size: 18px;
    text-align: center;
    margin-bottom: 2rem;
    color: #293031;
    font-weight: 400;
`

const PartnersImg = styled.img`
    width: 100%;
    margin: auto;
`

function Partner() {
    return (
        <PartnerBx>
        <Title>Partnering with world's leading universities and companies</Title>
        <PartnersImg src="https://www.simplilearn.com/ice9/assets/home/university-d-v1.png"/>
        </PartnerBx>
    )
}

export default Partner
