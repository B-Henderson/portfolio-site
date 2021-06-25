import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotateFirst = keyframes`
    2%{
      opacity: 0;
      transform: translateY(-30px);
    }
    15%{
      opacity: 1;
      transform: translateY(0px);    
    }
    30%{
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
       opacity: 1; 
    } 
`;

const TitleContainer = styled.section`
  color: #fff;
`;
const TitleDiv = styled.div`  
  opacity: 0;
  overflow: hidden;
  animation: ${rotateFirst} 4.5s linear forwards;
`;
const NavItem = styled.h1`
    grid-column: 2;    
    ${TitleDiv}:nth-child(2){
      animation-delay: 1.5s;  
    }
    ${TitleDiv}:nth-child(3){
      animation-delay: 3s;  
    }
`;

const Title = () => (
  <>
    <TitleContainer>
      <NavItem>
        <TitleDiv>
          Ben Henderson
        </TitleDiv>
        <TitleDiv>
          Full Stack
        </TitleDiv>
        <TitleDiv>
          Web developer
        </TitleDiv>
      </NavItem>
    </TitleContainer>
  </>
);

export default Title;
