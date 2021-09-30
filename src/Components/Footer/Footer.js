import React from 'react'
import BottomFooter from './BottomFooter'
import TopFooter from './TopFooter'
import styled from 'styled-components'
import Terms from './Terms'
import Disclaimer from './Disclaimer'

const FooterBx = styled.div`
    background: #1a1a1a;
`

function Footer() {
    return (
        <FooterBx>
           <TopFooter/>
           <BottomFooter/> 
           <Terms/>
           <Disclaimer/>
        </FooterBx>
    )
}

export default Footer
