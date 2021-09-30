
import { CalendarTodayOutlined, Done, FilterTiltShift, LibraryBooks } from '@material-ui/icons'
import React from 'react'
import Carousel from 'react-elastic-carousel'
import styled from 'styled-components'

const MasterContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: start;
`

const CardBx = styled.div`
    position: relative;
    width: 330px;
    height: 330px;
    border-radius: 0.5rem;
    background: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border: 1px solid;
    margin: 2rem;
    box-shadow: 0 4px 8px rgba(0,0,0,0.5);
`

const Info = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0;
    padding: 2rem;
    margin-top: -1rem;
`

const Title = styled.h3`
    font-size: 24px;
    font-weight: 600;
    margin-top: 40px;
    margin-bottom: 20px;
    text-transform: capitalize;
    padding-left: 5rem;
`

const SubText = styled.p`
    font-size: 16px;
    margin-bottom: 20px;
    padding-left: 5rem;
`

const InfoTitle = styled.span`
    font-size: 18px;
    font-weight: 500;
    margin: 1rem;
    line-height: 24px;
`

const Time = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`

const Duration = styled.span`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #273031;
    font-size: 14px;
    line-height: 18px;
    margin: 1rem;
`

const Courses = styled.span`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #273031;
    font-size: 14px;
    line-height: 18px;
    margin: 1rem;
`

const Perks = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
`

const Item = styled.span`
    color: #293031;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    gap: 1rem;
`

function Masters() {
    return (
        <>
            <MasterContainer>
                <Title>master's programs</Title>
                <SubText>Achieve your career goals with industry-recognized learning paths.</SubText>

                {/* Cards */}
                <Carousel itemsToShow={3}>
                    <CardBx>
                            <FilterTiltShift fontSize="large" style={{margin:"1rem 0 0 1rem", width:"50px", height:"50px", boxShadow:"0 4px 8px rgba(0,0,0,0.5)", borderRadius:"50%"}}/>
                        <Info>
                            <InfoTitle>
                                Digital Marketing
                            </InfoTitle>
                            <Time>
                                <Duration>
                                    <CalendarTodayOutlined fontSize="small" />
                                    12 Months</Duration>
                                <Courses>
                                    <LibraryBooks fontSize="small"/> 
                                    15 Courses</Courses>
                            </Time>
                            <Perks>
                                <Item>
                                    <Done style={{color:"green"}}/>
                                    Simplilearn JobAssist Program</Item>
                                <Item>
                                    <Done style={{color:"green"}}/>
                                    Simplilearn JobAssist Program</Item>
                                <Item>
                                    <Done style={{color:"green"}}/>
                                    Simplilearn JobAssist Program</Item>
                            </Perks>
                        </Info>
                    </CardBx>
                    <CardBx>
                            <FilterTiltShift fontSize="large" style={{margin:"1rem 0 0 1rem", width:"50px", height:"50px", boxShadow:"0 4px 8px rgba(0,0,0,0.5)", borderRadius:"50%"}}/>
                        <Info>
                            <InfoTitle>
                                Digital Marketing Specialist
                            </InfoTitle>
                            <Time>
                                <Duration>
                                    <CalendarTodayOutlined fontSize="small" />
                                    12 Months</Duration>
                                <Courses>
                                    <LibraryBooks fontSize="small"/> 
                                    13 Courses</Courses>
                            </Time>
                            <Perks>
                                <Item>
                                    <Done style={{color:"green"}}/>
                                    Simplilearn JobAssist Program</Item>
                                <Item>
                                    <Done style={{color:"green"}}/>
                                    Simplilearn JobAssist Program</Item>
                                <Item>
                                    <Done style={{color:"green"}}/>
                                    Simplilearn JobAssist Program</Item>
                            </Perks>
                        </Info>
                    </CardBx>
                    <CardBx>
                            <FilterTiltShift fontSize="large" style={{margin:"1rem 0 0 1rem", width:"50px", height:"50px", boxShadow:"0 4px 8px rgba(0,0,0,0.5)", borderRadius:"50%"}}/>
                        <Info>
                            <InfoTitle>
                                Digital Marketing Specialist
                            </InfoTitle>
                            <Time>
                                <Duration>
                                    <CalendarTodayOutlined fontSize="small" />
                                    12 Months</Duration>
                                <Courses>
                                    <LibraryBooks fontSize="small"/> 
                                    13 Courses</Courses>
                            </Time>
                            <Perks>
                                <Item>
                                    <Done style={{color:"green"}}/>
                                    Simplilearn JobAssist Program</Item>
                                <Item>
                                    <Done style={{color:"green"}}/>
                                    Simplilearn JobAssist Program</Item>
                                <Item>
                                    <Done style={{color:"green"}}/>
                                    Simplilearn JobAssist Program</Item>
                            </Perks>
                        </Info>
                    </CardBx>
                    <CardBx>
                            <FilterTiltShift fontSize="large" style={{margin:"1rem 0 0 1rem", width:"50px", height:"50px", boxShadow:"0 4px 8px rgba(0,0,0,0.5)", borderRadius:"50%"}}/>
                        <Info>
                            <InfoTitle>
                                Digital Marketing Specialist
                            </InfoTitle>
                            <Time>
                                <Duration>
                                    <CalendarTodayOutlined fontSize="small" />
                                    12 Months</Duration>
                                <Courses>
                                    <LibraryBooks fontSize="small"/> 
                                    13 Courses</Courses>
                            </Time>
                            <Perks>
                                <Item>
                                    <Done style={{color:"green"}}/>
                                    Simplilearn JobAssist Program</Item>
                                <Item>
                                    <Done style={{color:"green"}}/>
                                    Simplilearn JobAssist Program</Item>
                                <Item>
                                    <Done style={{color:"green"}}/>
                                    Simplilearn JobAssist Program</Item>
                            </Perks>
                        </Info>
                    </CardBx>
                    <CardBx>
                            <FilterTiltShift fontSize="large" style={{margin:"1rem 0 0 1rem", width:"50px", height:"50px", boxShadow:"0 4px 8px rgba(0,0,0,0.5)", borderRadius:"50%"}}/>
                        <Info>
                            <InfoTitle>
                                Digital Marketing Specialist
                            </InfoTitle>
                            <Time>
                                <Duration>
                                    <CalendarTodayOutlined fontSize="small" />
                                    12 Months</Duration>
                                <Courses>
                                    <LibraryBooks fontSize="small"/> 
                                    13 Courses</Courses>
                            </Time>
                            <Perks>
                                <Item>
                                    <Done style={{color:"green"}}/>
                                    Simplilearn JobAssist Program</Item>
                                <Item>
                                    <Done style={{color:"green"}}/>
                                    Simplilearn JobAssist Program</Item>
                                <Item>
                                    <Done style={{color:"green"}}/>
                                    Simplilearn JobAssist Program</Item>
                            </Perks>
                        </Info>
                    </CardBx>
                </Carousel>
            </MasterContainer>
        </>
    )
}

export default Masters
