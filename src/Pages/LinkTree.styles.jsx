import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  border: 1px dotted white;
  @media (max-width: 600px) {
  /* Adjust container width for smaller screens */
    max-width: 90%;
}
`;

export const Header = styled.h1`
  color: #79adb4;
`;

export const SubHeader = styled.h3`
  color: #4a8581;
  text-decoration: underline;

`;

export const SubSubHeader = styled.div`
  color: #709896;
`;

export const LinkList = styled.div`
list-style: none;
padding: 0;
margin-bottom: 50px;
display: flex;
flex-direction: column;
color: white
`;

export const LinkItem = styled.div`
margin-bottom: 10px;
`;

export const Link = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const SubLink = styled.a`
  text-decoration: italic;
  margin-left: 1em;

  &:hover {
    text-decoration: underline;
  }
`;

export const Description = styled.div`
  list-style: none;
  padding: 0;
font-style: italic;
margin-bottom: 20px
`;



export const LinkBox = styled.div`
  /* padding: 1em; */
  border: 1px dotted #737373;
  display: flex;
flex-direction: column;
  `;
