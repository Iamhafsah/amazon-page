import React from 'react'
import {
    Container, 
    LeftContainer, 
    RightContainer, 
    Wrapper, 
    Image, 
    Text, 
    Paragraph,
    ProductContainer,
    ImageContainer,
    SearchResultDiv,
    IconWrapper,
    BoldText
} from "./styles"
import {KeyboardArrowLeft, Star, StarHalf, KeyboardArrowDown} from '@material-ui/icons';
import {departmentList, productDetails} from "./PageInfo"

const Menubar:React.FC = () => {
    return (
        <Container>
            <LeftContainer>
                <BoldText>Department</BoldText >
                {departmentList.map(item =>(
                    <Paragraph> <KeyboardArrowLeft/>{item}</Paragraph>
                ))}
            </LeftContainer>
            <RightContainer>
                <SearchResultDiv> 
                    <BoldText>1-12 of over 2,000 results for
                    </BoldText>
                    <BoldText color="#c45500"> All Departments
                    </BoldText> 
                </SearchResultDiv>

                <ProductContainer>
                {productDetails.map(item =>(
                    <Wrapper 
                    flexDirection="column"
                    >
                        <ImageContainer>
                            <Image src={item.src}/>
                        </ImageContainer>
                        <Text>{item.name}</Text>
                        <Text fontSize=".8em" color="grey" >{item.by}</Text>

                        {/* stars */}
                        <Wrapper 
                        margin=".3em 0 0 0"
                        alignItems="center"
                        >
                            <IconWrapper>
                                <Star/>
                                <Star/>
                                <Star/>
                                <Star/>
                                <StarHalf/>
                            </IconWrapper>

                            <KeyboardArrowDown/>
                            <Text color="blue">{item.starcount}</Text>
                        </Wrapper>

                        <Wrapper 
                        alignItems="center"
                        margin=".3em 0 .3em 0"
                        >
                            <Text fontSize="1.3em">{item.price }</Text>
                            <Text color="grey">{ item.shipping}</Text>
                        </Wrapper>
                        <Text>{item.available}</Text>

                    </Wrapper>
                ))}
                </ProductContainer>
            </RightContainer>
        </Container>
    )
}

export default Menubar
