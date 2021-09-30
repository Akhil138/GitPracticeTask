import { CalendarTodayOutlined, LibraryBooks } from '@material-ui/icons'
import React from 'react'
import Carousel from 'react-elastic-carousel'
import styled from 'styled-components'

const Box = styled.div`
    width: 100%;
`
const CardBx = styled.div`
    width: 325px;
    height: 400px;
    background: #fff;
    border-radius: 0.5rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px rgba(0,0,0,0.5);
    margin: 2rem 0;
`

const TopImage = styled.div`
    width: 100%;
    height: 300px;
    overflow: hidden;
`

const Info = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: auto;
    margin-top: -2rem;
    padding: 1rem;
    background: #fff;
    border-radius: 0.5rem;
`

const Title = styled.div`
    margin: 1rem 0;
    font-size: 18px;
    color: #000;
    font-weight: 500;
`

const Duration = styled.div`
    color: #293030;
    margin: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
`

const StartTime = styled.div`
    color: #293030;
    margin: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
`

const BottomImage = styled.div`
    padding: 0 2rem;
    width: 100%;
    height: 100px;
    bottom: 0;
`


function GraduateSlider() {
    return (
        <Box>
            <Carousel itemsToShow={3}>
                <CardBx>
                    <TopImage>
                        <img src="https://www.simplilearn.com/ice9/banners/IIITB_Thumbnail_image.jpg" alt=""  />
                    </TopImage>
                    <Info>
                        <Title>Advanced Executive program for CyberSecurity</Title>
                        <Duration>
                            <CalendarTodayOutlined/>
                            6 Months</Duration>
                        <StartTime>
                            <LibraryBooks/>
                            30 Sep,2021</StartTime>
                    </Info>
                    <BottomImage>
                        <img src="https://www.simplilearn.com/ice9/university/IIITB_University_Logo_colored.png" alt="" />
                    </BottomImage>
                </CardBx>
                <CardBx>
                    <TopImage>
                        <img src="https://www.simplilearn.com/ice9/banners/IIITB_Thumbnail_image.jpg" alt=""  />
                    </TopImage>
                    <Info>
                        <Title>Advanced Executive program for CyberSecurity</Title>
                        <Duration>
                            <CalendarTodayOutlined/>
                            6 Months</Duration>
                        <StartTime>
                            <LibraryBooks/>
                            30 Sep,2021</StartTime>
                    </Info>
                    <BottomImage>
                        <img src="https://www.simplilearn.com/ice9/university/IIITB_University_Logo_colored.png" alt="" />
                    </BottomImage>
                </CardBx>
                <CardBx>
                    <TopImage>
                        <img src="https://www.simplilearn.com/ice9/banners/IIITB_Thumbnail_image.jpg" alt=""  />
                    </TopImage>
                    <Info>
                        <Title>Advanced Executive program for CyberSecurity</Title>
                        <Duration>
                            <CalendarTodayOutlined/>
                            6 Months</Duration>
                        <StartTime>
                            <LibraryBooks/>
                            30 Sep,2021</StartTime>
                    </Info>
                    <BottomImage>
                        <img src="https://www.simplilearn.com/ice9/university/IIITB_University_Logo_colored.png" alt="" />
                    </BottomImage>
                </CardBx>
                <CardBx>
                    <TopImage>
                        <img src="https://www.simplilearn.com/ice9/banners/IIITB_Thumbnail_image.jpg" alt=""  />
                    </TopImage>
                    <Info>
                        <Title>Advanced Executive program for CyberSecurity</Title>
                        <Duration>
                            <CalendarTodayOutlined/>
                            6 Months</Duration>
                        <StartTime>
                            <LibraryBooks/>
                            30 Sep,2021</StartTime>
                    </Info>
                    <BottomImage>
                        <img src="https://www.simplilearn.com/ice9/university/IIITB_University_Logo_colored.png" alt="" />
                    </BottomImage>
                </CardBx>
            </Carousel>
        </Box>
    )
}

export default GraduateSlider
