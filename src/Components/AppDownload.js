import React from 'react'
import styled from 'styled-components'

const AppContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 3rem 14rem 0rem;
    background: #f8fbff;
`

const Box = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    gap: 1rem;
    padding-top: 2rem;
    align-items: center;
`

const BoxLeft = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: left;
    flex: 0.50;
`

const Title = styled.span`
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 2rem;
`

const SubText = styled.span`
    color: #293031;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 2rem;
    width: 90%;
`

const ImageLeft = styled.div`
    position: relative;
    width: 100%;
`

const BoxRight = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 0.50;
`

const RightSubText = styled.span`
    font-size: 16px;
    font-weight: 500;
    width: 50%;
    margin: auto;
    text-align: left;
    color: #293031;
`

const ImageQr = styled.div`
    width: 230px;
    height: 230px;
    margin: 16px 0;
`

const Store = styled.div`
    position: relative;
    display: flex;
    gap: 2rem;
`

const Gplay = styled.span`
    width: 145px;
    height: 50px;
`

const AppStore = styled.span`
    width: 145px;
    height: 50px;
`

function AppDownload() {
    return (
        <AppContainer>
            <Box>
                <BoxLeft>
                    <Title>Learn free on the App</Title>
                    <SubText>Download the lessons and learn anytime, anywhere from the free courses available on our app</SubText>
                    <ImageLeft>
                        <img src="https://www.simplilearn.com/ice9/assets/home/free-app.png" alt="" />
                    </ImageLeft>
                </BoxLeft>
                <BoxRight>
                    <RightSubText>Scan this Qr code in the camera app to download app</RightSubText>
                    <ImageQr>
                        <img src="https://www.simplilearn.com/ice9/assets/home/qr-code.jpg" alt="" width="250" height="250"/>
                    </ImageQr>
                    <br />
                    <span>or</span>
                    <br />
                    <Store>
                        <Gplay>
                            <img src="https://www.simplilearn.com/ice9/assets/home/android.svgz" alt="" />
                        </Gplay>
                        <AppStore>
                            <img src="https://www.simplilearn.com/ice9/assets/home/IOS.svgz" alt="" />
                        </AppStore>
                    </Store>
                </BoxRight>
            </Box>
        </AppContainer>
    )
}

export default AppDownload
