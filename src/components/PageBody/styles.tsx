import styled from "styled-components"
import {PageText} from "../helpers/PageText"
import {PageItemWrapper} from "../helpers/ItemWrapper"


export const Container = styled.div`
    display: flex;
    padding: 1em;
`

export const LeftContainer = styled.aside`
    height:80vh;
    width: 18vw;
    border-right: 2px solid #ddd;
   
   @media(max-width:650px){
        display: none
   }
`

export const RightContainer = styled.section`
    height:80vh;
    width: 82vw;
    display: flex;
    flex-direction: column;
    margin-left: 1.5em;

`
export const Image = styled.img`
    width: 13em;
`
export const Text = styled(PageText)`
    color:${(props)=>props.color ? props.color :"#131A22" };
    font-size:${(props)=>props.fontSize ? props.fontSize :".9em" };
`
export const BoldText = styled(Text)`
    font-weight: bold;
    padding: .4em;
`

export const Paragraph = styled.p`
    font-size:.9em;
    display: flex;
    align-items: center;
    padding-bottom: .1em;
`
export const SearchResultDiv = styled.div`
    border: 1px solid #ddd;
    padding: .6em;
    width: 95%;
    border-radius: 4px;
`
export const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 21em);
    margin-top: 2em;

    @media(max-width:915px){
        grid-template-columns: repeat(auto-fit, 15em);
        align-items: center;
        justify-content: center;
    }
`
export const ImageContainer = styled.div`
    height: 14em;
    display: flex;
    align-items: center;
`

export const Wrapper = styled(PageItemWrapper)`
    display: flex;
    margin-right: 1em;
    flex-direction: ${(props)=>props.flexDirection ? props.flexDirection  : "row"};
    align-items:  ${(props)=>props.alignItems ? props.alignItems  : "left"};
    margin:  ${(props)=>props.margin ? props.margin : ""};
`

export const IconWrapper = styled.div`
    color: #ff9900;
`