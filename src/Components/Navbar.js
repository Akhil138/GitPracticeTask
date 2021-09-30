import React from 'react'
import styled from 'styled-components'
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';


const Menu = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
`

const TopMenu = styled.div`
    width: 100%;
    position: relative;
    background: #e6ecef;
    padding: 0.5rem 14rem;
`

const Navigation =styled.ul`
    display: flex;
    justify-content: flex-end;
    list-style: none;
`

const Link = styled.a`
    display: inline-block;
    color: #293031;
    text-decoration: none;
    text-transform: capitalize;
    margin-left: 2rem;
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;

    &:hover
    {
        color: #118aef;
    }
`

const BottomMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 14rem;
    height: 62px;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
`

const Brand = styled.img`
    width: 150px;
    height: 46.15px;
`
const CoursesBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.6rem 1.6rem;
    background: #118aef;
    border-radius: 0.2rem;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    border: none;
    outline: none;
    margin-left: -10rem;

    &:hover
    {
        background: #116aef;
    }
`

const SearchForm = styled.div`
    width: 475px;
    height: 1rem;
    display: flex;
    align-items: center;
    padding: 1.2rem;
    border: 1px solid #118aef;
    border-radius: 0.2rem;
    margin-left: -8rem;
`
 
const Input = styled.input`
    border: none;
    outline: none;
    font-size: 16px;
    color: #293031;
    padding-left: 2rem;
`

const LoginBtn = styled.button`
    display: inline-flex;
    align-items: center;
    padding: 0.6rem 1.6rem;
    color: #293031;
    border-radius: 0.2rem;
    background: #fff;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    outline: none;
    border: 1px solid #293031;

    &:hover
    {
        color: #116aef;
        border: 1px solid #116aef;
    }
`


function Navbar() {
    return (
        <Menu>
            {/* Top Menu */}
            <TopMenu>
                    <Navigation>
                        <Link to="/">skill up</Link>
                        <Link to="/">Resources</Link>
                        <Link to="/">corporate training</Link>
                        <Link to="/">become an instructor</Link>
                        <Link to="/">higher education</Link>
                    </Navigation>
            </TopMenu>
            
            {/* Bottom Menu */}
            <BottomMenu>
                    <Brand src="https://www.simplilearn.com/ice9/new_logo.svgz"/>
                    <CoursesBtn>
                        <AppsIcon/>
                        All courses
                    </CoursesBtn>
                    <SearchForm>
                        <SearchIcon style={{color: "#118aef"}}/>
                        <Input type="text" placeholder="What do you want to learn" />
                    </SearchForm>
                    <LoginBtn>
                        Login
                    </LoginBtn>
            </BottomMenu>

        </Menu>
    )
}

export default Navbar
