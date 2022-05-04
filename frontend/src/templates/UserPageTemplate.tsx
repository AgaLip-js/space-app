import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
     background: ${({ theme }) => theme.primaryWhite};
     height: 100vh;
     display: flex;
     width:100%;
`;

const UserPageTemplate: React.FC<{children: ReactNode}> = ({ children }) => (
  <StyledWrapper>
    {children}
  </StyledWrapper>
);

export default UserPageTemplate;
