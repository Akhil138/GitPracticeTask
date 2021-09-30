import React from 'react'
import styled from 'styled-components'

const AwardsBox = styled.div`
    padding: 5rem 14rem;
    background: #fff;
    width: 100%;
`

const Container = styled.div`
    position: relative;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Title = styled.h3`
    font-size: 24px;
    font-weight: 500;
    margin: 1rem 0;
`

const AwardsContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    gap: 1.2rem;
`

const Award= styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
`

const Image = styled.div`
    width: 200px;
    height: 100px;
    text-align: center;
    margin-bottom: 2rem;
`

const AwardTitle = styled.span`
    font-size: 16px;
    font-weight: 600;
    margin: 1rem 0;
`

const AwardDesc = styled.span`
    color: #293031;
    margin: auto;
    font-size: 14px;
    width: 75%;
`


function Awards() {
    return (
        <AwardsBox>
            <Container>
                <Title>Awards and Accolades</Title>
                <AwardsContainer>
                    <Award>
                        <Image>
                            <img src="https://www.simplilearn.com/ice9/assets/home/2018-gold-winner.png" alt="" />
                        </Image>
                        <AwardTitle>2018 Gold Winner</AwardTitle>
                        <AwardDesc>Fot customer service by Steive Awards</AwardDesc>
                    </Award>
                    <Award>
                        <Image>
                            <img src="https://www.simplilearn.com/ice9/assets/home/2020-gold-winner.png" alt="" />
                        </Image>
                        <AwardTitle>2018 Gold Winner</AwardTitle>
                        <AwardDesc>Fot customer service by Steive Awards</AwardDesc>
                    </Award>
                    <Award>
                        <Image>
                            <img src="https://www.simplilearn.com/ice9/assets/home/AGBA-2020-winner.png" alt="" />
                        </Image>
                        <AwardTitle>2018 Gold Winner</AwardTitle>
                        <AwardDesc>Fot customer service by Steive Awards</AwardDesc>
                    </Award>
                    <Award>
                        <Image>
                            <img src="https://www.simplilearn.com/ice9/assets/home/2019_Top20.png" alt="" />
                        </Image>
                        <AwardTitle>2018 Gold Winner</AwardTitle>
                        <AwardDesc>Fot customer service by Steive Awards</AwardDesc>
                    </Award>
                    <Award>
                        <Image>
                            <img src="https://www.simplilearn.com/ice9/assets/home/2019_Top20.png" alt="" />
                        </Image>
                        <AwardTitle>2018 Gold Winner</AwardTitle>
                        <AwardDesc>Fot customer service by Steive Awards</AwardDesc>
                    </Award>
                </AwardsContainer>
            </Container>
        </AwardsBox>
    )
}

export default Awards
