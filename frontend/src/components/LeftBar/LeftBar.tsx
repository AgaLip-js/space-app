import { faComments, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import spaceLogo from '../../assets/space_dark.png';
import Constants from '../../constants/constants';
import NavSection from '../NavSection/NavSection';

const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
    height: 7rem;
`;

const StyledImg = styled.img`
    max-height: 6rem;
`;

const StyledWrapper = styled.div`
    width: 20rem;
    height: 100vh;
    background-color:  ${({ theme }) => theme.primaryBackground};

`;
const StyledIconsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1rem 0;
`;

const StyledLink = styled(NavLink)`
    color: ${({ theme }) => theme.primaryWhite};
    font-size: 1.5rem;

    :hover {
        color: ${({ theme }) => theme.goldBackground};
    }

    &.active {
        color: ${({ theme }) => theme.goldBackground};
    }

`;

const LeftBar: React.FC = () => (
  <StyledWrapper>
    <StyledLogo>
      <StyledImg src={spaceLogo} />
    </StyledLogo>
    <StyledIconsWrapper>
      <StyledLink exact to={Constants.ROUTE__MAIN} activeClassName="active">
        <FontAwesomeIcon icon={faHouse as any} />
      </StyledLink>
      <StyledLink exact to={Constants.ROUTE__PROFILE} activeClassName="active">
        <FontAwesomeIcon icon={faUser as any} />
      </StyledLink>
      <StyledLink exact to={Constants.ROUTE__MESSAGES} activeClassName="active">
        <FontAwesomeIcon icon={faComments as any} />
      </StyledLink>
    </StyledIconsWrapper>
    <NavSection type={Constants.NAV_SECTION__PRIVATE}/>
    <NavSection type={Constants.NAV_SECTION__SOCIAL}/>
  </StyledWrapper>
);

export default LeftBar;
