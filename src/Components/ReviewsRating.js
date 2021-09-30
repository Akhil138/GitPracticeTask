import { Star } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import switchUp from './Images/switchup.png'
import ReactPlayer from 'react-player'


const Container = styled.div`
    position: relative;
    display: flex;
    width: 970px;
    margin: auto;
    padding-top: 64px;
    padding-bottom: 80px;
`

const ContainerLeft = styled.div`
    position: relative;
    width: 360px;
    vertical-align: bottom;
`

const Title = styled.h2`
    color: #000;
    font-size: 32px;
    font-weight: normal;
`

const Rating = styled.ul`
    padding: 0;
    margin-bottom: 1rem;
    list-style: none;
`
const ListItem = styled.li`
    padding-top: 37px;
`

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    text-align: left;
    display: flex;
    align-items: center;
`

const Value = styled.span`
    font-size: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
    padding-right: 5rem;
    position: relative;

    &::before{
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 2px;
        height: 150%;
        background: #959797;
    }
`

const ContainerRight = styled.div`
    width: calc(100% - 360px);
    position: relative;
`

const VideoBx = styled.div`
    position: relative;
    width: 580px;
    height: 341px;
    background: #f0f;
`

function ReviewsRating() {
    return (
        <>
            <Container>
                <ContainerLeft>
                    <Title>Hear it <br />from our alumni.</Title>
                    <Rating>
                        {/* List Item One */}
                        <ListItem>
                            <Link>
                                <Value>4.5 <Star fontSize="small" style={{color:"gold", marginLeft:"0.5rem"}}/></Value>
                                <img src={switchUp} alt="SwitchUp" style={{paddingLeft:"1rem"}}/>
                            </Link>
                        </ListItem>
                        {/* List Item Two */}
                        <ListItem>
                            <Link>
                                <Value>4.5 <Star fontSize="small" style={{color:"gold", marginLeft:"0.5rem"}}/></Value>
                                <img src="https://www.simplilearn.com/ice9/assets/home/trustpilot_v1.png" alt="Trust Pilot" style={{paddingLeft:"1rem"}}/>
                            </Link>
                        </ListItem>
                        {/* List Item Three */}
                        <ListItem>
                            <Link>
                                <Value>4.5 <Star fontSize="small" style={{color:"gold", marginLeft:"0.5rem"}}/></Value>
                                <img src="https://www.simplilearn.com/ice9/assets/home/course-report.png" alt="Course Report" style={{paddingLeft:"1rem"}}/>
                            </Link>
                        </ListItem>
                    </Rating>
                </ContainerLeft>
                <ContainerRight>
                    <VideoBx>
                        <ReactPlayer url="https://www.youtube.com/watch?v=UVCP4bKy9Iw" width="200" muted="" controls=""/>
                    </VideoBx>
                </ContainerRight>
            </Container>
        </>
    )
}

export default ReviewsRating
