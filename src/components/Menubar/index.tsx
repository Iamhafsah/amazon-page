import React from 'react'
import {Container, Wrapper, Text} from "./styles"
import {Menu} from '@material-ui/icons';

const Menubar:React.FC = () => {
    return (
        <Container>
                
            <Wrapper>
                <Wrapper>
                        <Menu/>
                        <Text>All</Text>
                </Wrapper>

                <Wrapper>
                    <Text>Today's Deals</Text>
                    <Text>Customer Service</Text>
                    <Text>Gift Cards</Text>
                    <Text>Sell</Text>
                    <Text>Registry</Text>
                </Wrapper>
            </Wrapper>

            <Wrapper>
                <Text>Amazon's response to COVID-19</Text>
            </Wrapper>
           
        </Container>
    )
}

export default Menubar
