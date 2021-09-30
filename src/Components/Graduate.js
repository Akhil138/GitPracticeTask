import React from 'react'
import styled from 'styled-components'
import GraduateSlider from './GraduateSlider'
import Masters from './Masters'

const GraduateBox = styled.div`
    position: relative;
    width: 100%;
    background-image: linear-gradient(to bottom, #f8fbff 10%, #fff 100%);
`

const GraduateContainer = styled.div`
    width: 85%;
    margin: auto;
`

const Title = styled.h2`
    line-height: normal;
    font-size: 32px;
    font-weight: 350;
    padding-left: 5rem;
`

const SliderBox = styled.div`
    position: relative;
    width: 100%;
`


function Graduate() {
    return (
        <GraduateBox>
            <GraduateContainer>
                <Title>
                    Get Certified, Get Ahead with Our Programs
                </Title>
                <SliderBox>
                    {/* Post Graduate Programs Component */}
                    <GraduateSlider/>
                    {/* Masther's Programs Component */}
                    <Masters/>
                </SliderBox>
            </GraduateContainer>
        </GraduateBox>
    )
}

export default Graduate
