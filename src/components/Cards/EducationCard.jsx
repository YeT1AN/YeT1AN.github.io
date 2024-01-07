import React from 'react'
import styled from 'styled-components'

const DocumentContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Document = styled.img`
    // display: none;
    height: 70px;
    // width: fit-content;
    background-color: #000;
    border-radius: 10px;
    margin: 0 10px;

    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 10px;

    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
    overflow: hidden;
    // display: -webkit-box;
    max-width: 100%;
    // -webkit-line-clamp: 4;
    // -webkit-box-orient: vertical;
    // text-overflow: ellipsis;
`

const Card = styled.div`
    width: 650px;
    background: #FAFAFA;
    border-radius: 10px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;

    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }

    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }
    border: rgb(53, 53, 53) 0.1px solid;
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    height: 50px;
    background-color: #FAFAFA;
    margin-top: 4px;

    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`

const Name = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};

    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Degree = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};

    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};

    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Grade = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};

    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`


const EducationCard = ({ education }) => {
    return (
        <Card>
            <Top>
                <Image src={education.img} />
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>
            <Grade><b>Grade: </b>{education.grade}</Grade>
            <Description>
                <Span>{education.desc}</Span>
            </Description>
            <DocumentContainer>
                <a href={education.doc0} target="new">
                    <Document src={education.doc0} />
                </a>
                <a href={education.doc1} target="new">
                    <Document src={education.doc1} />
                </a>
                <a href={education.doc2} target="new">
                    <Document src={education.doc2} />
                </a>
                <a href={education.doc3} target="new">
                    <Document src={education.doc3} />
                </a>
            </DocumentContainer>
        </Card>
    )
}

export default EducationCard