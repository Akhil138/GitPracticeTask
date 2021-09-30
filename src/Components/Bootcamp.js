import { AssignmentTurnedInOutlined, ComputerOutlined, GroupOutlined, QueryBuilder } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const BootCampContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background: #f8fbff;
    padding: 5rem 14rem;
`
const Title = styled.span`
    font-size: 16px;
    margin: 1rem 0;
    color: #272c37;
    display: inline-block;
    font-weight: 500;
`

const SubText = styled.h2`
    font-size: 32px;
    max-width: 540px;
    line-height: normal;
    margin-top: 12px;
`

const CardsContainer = styled.div`
    position: relative;
    display: flex;
    gap: 1rem;
`

const CardBx = styled.div`
    position: relative;
    background: #fff;
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 1rem;
`

const BootcampImg = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const BootcampInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
`

const InfoText = styled.h3`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 1rem;
`

const Infopara = styled.p`
    color: #293031;
`



function Bootcamp() {
    return (
        <>
            <BootCampContainer>
                <Title>Our Online Bootcamp</Title>
                <SubText>An immersive learning experience</SubText>

                {/* Cards Container */}

                <CardsContainer>
                    <CardBx>
                        <BootcampImg>
                            <AssignmentTurnedInOutlined fontSize="large" style={{color:"#116aef"}}/>
                        </BootcampImg>
                        <BootcampInfo>
                            <InfoText>Develop Skills for real career growth</InfoText>
                            <Infopara>Cutting-edge curriculum designed in guidance with industry and academia to develop job-ready skills</Infopara>
                        </BootcampInfo>
                    </CardBx>
                    <CardBx>
                        <BootcampImg>
                            <GroupOutlined fontSize="large" style={{color:"#116aef"}}/>
                        </BootcampImg>
                        <BootcampInfo>
                            <InfoText>Learn from experts active in their field, not out-of-touch trainers</InfoText>
                            <Infopara>Leading practitioners who bring current best practices and case studies to sessions that fit into your work schedule.</Infopara>
                        </BootcampInfo>
                    </CardBx>
                    <CardBx>
                        <BootcampImg>
                            <ComputerOutlined fontSize="large" style={{color:"#116aef"}}/>
                        </BootcampImg>
                        <BootcampInfo>
                            <InfoText>Learn by working on real-world problems</InfoText>
                            <Infopara>Capstone projects involving real world data sets with virtual labs for hands-on learning</Infopara>
                        </BootcampInfo>
                    </CardBx>
                    <CardBx>
                        <BootcampImg>
                            <QueryBuilder fontSize="large" style={{color:"#116aef"}}/>
                        </BootcampImg>
                        <BootcampInfo>
                            <InfoText>Structured guidance ensuring learning never stops</InfoText>
                            <Infopara>24x7 Learning support from mentors and a community of like-minded peers to resolve any conceptual doubts</Infopara>
                        </BootcampInfo>
                    </CardBx>
                </CardsContainer>
            </BootCampContainer>
        </>
    )
}

export default Bootcamp
