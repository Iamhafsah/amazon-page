import styled from "styled-components"
import NavText from "./NavText"
import NavItemWrapper from "./NavItemWrapper"


export const Container = styled.div`
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    color: white;
    background-color: #131A22;
`
export const Logo = styled.img`
    width: 6em;
    border:1px solid #131A22;
    padding: .2em .1em ;
    cursor:pointer;

    &:hover{
        border:1px solid #ffffff;
        border-radius: .2em;
    }
`
export const Text = styled(NavText)`
    color:${(props)=>props.color ? props.color :"#ffffff" };
    font-size: ${(props)=>props.fontSize ? props.fontSize  : ".9em"};
    
`

export const Wrapper = styled(NavItemWrapper)`
    display: flex;
    flex-direction: ${(props)=>props.flexDirection ? props.flexDirection  : "column"};
    align-items:  ${(props)=>props.alignItems ? props.alignItems  : "flex-start"};
    padding: .1em ;
    cursor:pointer;
    border:1px solid #131A22;

    &:hover{
        border:1px solid #ffffff;
        border-radius: .2em;
    }
`

export const Searchbox = styled.input`
    background-color: #ffffff;
    padding: .78em;
    width: 47%;
    border: none;
`
export const Select = styled.select`
    background-color:#ddd;
    margin-right: -1.2em;
    padding: .72em .5em;
    border-radius: .2em 0em 0em .2em;
    border: none;
    cursor: pointer;
` 
export const SearchIconWrapper = styled.span`
    background-color:#fabd60;
    color: #131A22;
    margin-left: -1em;
    border-radius: 0em .2em .2em 0em ;
    padding: .32em .5em;
    cursor: pointer;
    transition: all 250ms ease;

    &:hover{
        background-color:#ff9900;
    }
` 
export const Flag = styled.img`
    width:2em;
`