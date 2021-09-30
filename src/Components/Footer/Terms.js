import { Copyright } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;
`

const Box = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 0.5rem;
`

const Text = styled.span`
    font-size: 16px;
    color: #fff;
    font-weight: 500;
`

const SubText = styled.p`
    color: #979797;
    font-size: 16px;
    display: flex;
    align-items: center;
`

function Terms() {
    return (
        <Container>
            <Box>
                <Text>Terms of Use</Text>
                <Text>Privacy Policy</Text>
                <Text>Refund Policy</Text>
                <Text>Reschedule Policy</Text>
                <Text>Country</Text>
            </Box>
            <SubText>
                <Copyright/>
                2009-2021 - Simplilearn Solutions. All Rights Reserved. The certification names are the trademarks of their respective owners.
            </SubText>
        </Container>
    )
}

export default Terms
