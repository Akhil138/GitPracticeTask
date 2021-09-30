import React from 'react'
import styled from 'styled-components'

const Support = styled.div`
    position: relative;
    padding: 3rem 10rem;
    display: flex;
`
const Container = styled.div`
    position: relative;
    width: 1400px;
    margin: 0 auto;
    display: flex;
`

const TeamTraining = styled.div`
    text-align: left;
    width: 460px;
    margin-right: 3rem;
`

const Title = styled.h2`
    max-width: 540px;
    margin-top: 64px;
    font-size: 32px;
    font-weight: 400;
    padding-bottom: 2rem;
`

const SubText = styled.p`
    font-size: 16px;
    color: #293031;
`

const SupportEnter = styled.div`
    margin-top: 50px;
    width: calc(100% - 460px);
    align-items: center;
`

const Text = styled.h2`
    font-size: 18px;
    margin-bottom: 1rem;
    color: #979797;
`

const Enterprises = styled.div`
    position: relative;
    padding: 2rem 0;
    margin-top: 1rem;
    padding-left: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`

const Logo = styled.span`
    width: 190px;
    height: 80px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0,0,0,0.5);
    border-radius: 0.3rem;
`

const Explore = styled.div`
    display: flex;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    position: relative;
    left: -48rem;
    top: -6rem;
`


function Supporting() {
    return (
        <>
            <Support>
                <Container>
                    <TeamTraining>
                        <Title>Employee and Team Training Solutions</Title>
                        <SubText>Curriculum tailored to your organization, delivered with white-glove service and support</SubText>
                    </TeamTraining>
                        <SupportEnter>
                            <Text>Supporting Enterprises Around the Globe</Text>
                            <Enterprises>
                                <Logo>
                                    <img src="https://www.simplilearn.com/ice9/assets/home/ge.png" alt="" />
                                </Logo>
                                <Logo>
                                    <img src="https://www.simplilearn.com/ice9/assets/home/amz.png" alt="" />
                                </Logo>
                                <Logo>
                                    <img src="https://www.simplilearn.com/ice9/assets/home/dell.png" alt="" />
                                </Logo>
                                <Logo>
                                    <img src="https://www.simplilearn.com/ice9/assets/home/Bosch.png" alt="" />
                                </Logo>
                                <Logo>
                                    <img src="https://www.simplilearn.com/ice9/assets/home/citi.png" alt="" />
                                </Logo>
                                <Logo>
                                    <img src="https://www.simplilearn.com/ice9/assets/home/vodafone.png" alt="" />
                                </Logo>
                                <Logo>
                                    <img src="https://www.simplilearn.com/ice9/assets/home/kpmg.png" alt="" />
                                </Logo>
                                <Logo>
                                    <img src="https://www.simplilearn.com/ice9/assets/home/pepsico.png" alt="" />
                                </Logo>
                                <Logo>
                                    <img src="https://www.simplilearn.com/ice9/assets/home/wpp.png" alt="" />
                                </Logo>
                            </Enterprises>
                            <Explore>
                                <a href="https://www.simplilearn.com/corporate-training" style={{textDecoration:"none",padding:"0.6rem 1.6rem",fontSize:"1.5rem",color:"#fff",background:"#118aef", borderRadius:"0.5rem"}}>Request A Free Demo</a>
                            </Explore>
                        </SupportEnter>
                </Container>
            </Support>
        </>
    )
}

export default Supporting
