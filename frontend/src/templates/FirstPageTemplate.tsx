import React from 'react'
import { useHistory } from 'react-router'
import styled from "styled-components"
import spaceLogo from '../assets/space_logo.png'
import Constants from '../constants/constants'


const StyledWrapper = styled.div`
display: flex;
justify-content: space-between;
width:100%;
height:100vh;
`
const StyledLeftSection = styled.div`
    background-color: ${({theme})=> theme.whiteBackground};
    width:50%;
`

const StyledLeftContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    align-items: center;
    text-align: center;
    height:100vh;
`

const StyledTextWrapper = styled.div`
    max-width: 80%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media (max-width: 900px) {
    font-size: 0.9rem;
  }

`

const StyledRightSection = styled.div`
    background-color: ${({theme})=> theme.primaryBackground};
    width:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position:relative;
    height:100%;
`
const StyledImg = styled.img`
    max-width: 50vw;
    max-height: 50vh;
`

const StyledTitleContainer = styled.div`
    display:flex;
    justify-content: center;
    width: 500px;
    align-items: center;
`

const StyledSignInTitle = styled.p<{active: boolean}>`
  background: ${({ theme, active }) => active ? theme.goldBackground : theme.primaryBackground};
  width:50%;
  height:64px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme}) => theme.bold};
  cursor: ${({ active }) => active ? 'default' : 'pointer'};
  padding-left: 40px;
  padding-top: 28px;
  color: ${({ theme }) => theme.whiteBackground};
  margin-bottom: 0;
  transition: all 0.3s ease-in-out;

    &:hover {
        background: ${({ theme}) => theme.goldBackground };
        color: ${({ theme}) => theme.whiteBackground};
        transition: all 0.3s ease-in-out;
    }
`;

const StyledSignUpTitle = styled(StyledSignInTitle)`
    background: ${({ theme, active }) => active ? theme.whiteBackground : theme.primaryBackground};
    color: ${({ theme, active }) => active ? theme.primaryBackground :
        theme.whiteBackground};

    &:hover {
        background: ${({ theme}) => theme.whiteBackground};
        color: ${({ theme}) => theme.primaryBackground};
        transition: all 0.3s ease-in-out;
    }
`;
// const StyledRightContainer = styled.div`
//     margin-top: 50%;
//     height:100%;
// `;


const FirstPageTemplate: React.FC = ({children}) => {
    const history = useHistory();
    const loginActive = history.location.pathname === Constants.ROUTE__LOGIN;
    const registerActive = history.location.pathname === Constants.ROUTE__REGISTER;

    const handleOnChangeLocation = (e: any)=>{
        const id = e.target.getAttribute('id');

       if(id==='register') {
        history.push(Constants.ROUTE__REGISTER);
       } else {
           history.push(Constants.ROUTE__LOGIN)
       }
    }
    return (
        <StyledWrapper>
            <StyledLeftSection>
                <StyledLeftContent>
                <StyledImg src={spaceLogo} alt="space_logo"/>
                <StyledTextWrapper>
                <p>Here you will find your <strong>private</strong> and <strong>social</strong> space.</p>
                <p>In the <strong>private</strong> room you will find a calendar with a scheduling and notification system. You have at your disposal your own library with sections such as Books, Music, Movies, Recipes.</p>
                <p>In the <strong>community</strong> section, you have the ability to create posts, share your own ideas and libraries.</p>
                <p><strong>Create an account</strong> and try it!</p>
                </StyledTextWrapper>
                </StyledLeftContent>
            </StyledLeftSection>
            <StyledRightSection>
            <StyledTitleContainer>
            <StyledSignInTitle active={loginActive} id='login' onClick={handleOnChangeLocation}>Sign in</StyledSignInTitle>
            <StyledSignUpTitle active={registerActive} id='register' onClick={handleOnChangeLocation}>Sign up</StyledSignUpTitle>
                </StyledTitleContainer>
            {children}
            </StyledRightSection>
        </StyledWrapper>
    )
}

export default FirstPageTemplate;
