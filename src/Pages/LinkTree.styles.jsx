import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  border: 1px dotted white;
  @media (max-width: 600px) {
  /* Adjust container width for smaller screens */
    max-width: 90%;
}
`;

export const Header = styled.h2`
  color: #cb6f6f;
  font-family: "Work Sans", sans-serif;

  `;

export const SubHeader = styled.h4`
color: #cb6f6f;
text-decoration: underline;

`;

export const SubSubHeader = styled.div`
  color: #a74141;
`;

export const LinkList = styled.div`
list-style: none;
padding: 0;
margin-bottom: 50px;
display: flex;
flex-direction: column;
color: white;
font-family: "Work Sans", sans-serif;
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
  padding-top: 1em;
  border: 1px dotted #737373;
  display: flex;
flex-direction: column;
margin-bottom: 1em
  `;
