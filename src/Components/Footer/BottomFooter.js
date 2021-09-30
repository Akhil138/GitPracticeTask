import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    padding-top: 2rem;
    padding: 0 12rem;
`
const BrandCourses = styled.div`
    position: relative;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
`

const Course = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`

const Title = styled.h3`
    font-size: 16px;
    color: #fff;
    font-weight: 500;
    margin-bottom: 1.5rem;
`

const SubText = styled.h3`
    font-size: 16px;
    color: #979797;
    font-weight: 500;
    margin-bottom: 1.5rem;
`

function BottomFooter() {
    return (
        <Container>
            <hr style={{background:"#979797"}}/>
                <BrandCourses>
                    <Course>
                        <Title>Trending Post Graduate Programs</Title>
                        <SubText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, vel? Modi saepe quibusdam magni, eaque nisi officia natus facilis magnam quidem molestiae dolor mollitia nostrum quia odio repudiandae fugit ad, qui porro similique blanditiis? Error!</SubText>
                    </Course>
                    <Course>
                        <Title>Trending Post Graduate Programs</Title>
                        <SubText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, vel? Modi saepe quibusdam magni, eaque nisi officia natus facilis magnam quidem molestiae dolor mollitia nostrum quia odio repudiandae fugit ad, qui porro similique blanditiis? Error!</SubText>
                    </Course>
                    <Course>
                        <Title>Trending Post Graduate Programs</Title>
                        <SubText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, vel? Modi saepe quibusdam magni, eaque nisi officia natus facilis magnam quidem molestiae dolor mollitia nostrum quia odio repudiandae fugit ad, qui porro similique blanditiis? Error!</SubText>
                    </Course>
                    <Course>
                        <Title>Trending Post Graduate Programs</Title>
                        <SubText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, vel? Modi saepe quibusdam magni, eaque nisi officia natus facilis magnam quidem molestiae dolor mollitia nostrum quia odio repudiandae fugit ad, qui porro similique blanditiis? Error!</SubText>
                    </Course>
                </BrandCourses>
        </Container>
    )
}

export default BottomFooter
