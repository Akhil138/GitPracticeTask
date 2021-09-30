import { AndroidRounded, Apple, Facebook, Instagram, LinkedIn, Telegram, Twitter, YouTube } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
    position: relative;
    width: 100%;
    background: #1A1A1A;
    padding: 2rem 12rem;
`

const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
`

const Item = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    text-align: left;
`

const Title = styled.span`
    font-size: 16px;
    color: #fff;
    margin-bottom: 1rem;
    font-weight: 500;
`

const Refer = styled.a`
    text-align: center;
    width: 70%;
    padding: 0.6rem;
    font-size: 16px;
    font-weight: 500;
    color: #979797;
    cursor: pointer;
    border: 1px solid #979797;
    transition: all 0.2s linear;
    text-decoration: none;
    border-radius: 0.5rem;
    margin-bottom: 1rem;

    &:hover{
        background: #111;
    }
`;

const Icons = styled.span`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    width: 70%;
`

const Lists = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
`

const ListItem = styled.a`
    display: inline-block;
    text-decoration: none;
    text-transform: capitalize;
    font-size: 16px;
    color: #979797;
    font-weight: 500;
    cursor: pointer;
    margin-bottom: 1rem;
`

const AppStore = styled.span`
    position: relative;
    border: 1px solid #979797;
    padding: 0.6rem;
    border-radius: 0.5rem;
    color: #979797;
    font-size: 14px;
`

function TopFooter() {
    return (
        <FooterContainer>
            <Container>
                <Item>
                    <Title>Follow Us</Title>
                    <Refer>Refer and Earn</Refer>
                    <Icons>
                        <Facebook fontSize="large" style={{color:"#979797", background:"#293031", padding:"0.3rem",borderRadius:"50%"}}/>
                        <Twitter fontSize="large" style={{color:"#979797", background:"#293031", padding:"0.3rem",borderRadius:"50%"}}/>
                        <YouTube fontSize="large" style={{color:"#979797", background:"#293031", padding:"0.3rem",borderRadius:"50%"}}/>
                        <LinkedIn fontSize="large" style={{color:"#979797", background:"#293031", padding:"0.3rem",borderRadius:"50%"}}/>
                        <Telegram fontSize="large" style={{color:"#979797", background:"#293031", padding:"0.3rem",borderRadius:"50%"}}/>
                        <Instagram fontSize="large" style={{color:"#979797", background:"#293031", padding:"0.3rem",borderRadius:"50%"}}/>
                    </Icons>
                </Item>
                <Item>
                    <Title>Company</Title>
                    <Lists>
                        <ListItem>AbousUs</ListItem>
                        <ListItem>OurTeam</ListItem>
                        <ListItem>Careers</ListItem>
                        <ListItem>In the media</ListItem>
                        <ListItem>Alumni Speak</ListItem>
                        <ListItem>Contact Us</ListItem>
                    </Lists>
                </Item>
                <Item>
                    <Title>Work with us</Title>
                    <Lists>
                        <ListItem>Become an instructor</ListItem>
                        <ListItem>Blog as guest</ListItem>
                    </Lists>
                </Item>
                <Item>
                    <Title>Discover</Title>
                    <Lists>
                        <ListItem>Skillup</ListItem>
                        <ListItem>resources</ListItem>
                        <ListItem>simplilearn community</ListItem>
                        <ListItem>RSS feed</ListItem>
                        <ListItem>simplilearn coupons</ListItem>
                        <ListItem>City sitemap</ListItem>
                    </Lists>
                </Item>
                <Item>
                    <Title>For Business</Title>
                    <Lists>
                        <ListItem>Corporate Training</ListItem>
                        <ListItem>partners</ListItem>
                        <ListItem>digital transformation</ListItem>
                    </Lists>
                </Item>
                <Item>
                    <Title>Learn on the Go!</Title>
                    <Lists>
                        <AppStore>
                            <AndroidRounded fontSize="small" style={{marginRight:"0.5rem"}}/>
                            Get the Android App
                        </AppStore>
                        <AppStore>
                            <Apple fontSize="small" style={{marginRight:"0.5rem"}}/>
                            Get the ios App
                        </AppStore>
                    </Lists>
                </Item>
            </Container>
        </FooterContainer>
    )
}

export default TopFooter
