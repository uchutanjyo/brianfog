import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
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
`;

export const LinkList = styled.div`
  list-style: none;
  padding: 0;
  margin-bottom: 70px;
`;

export const LinkItem = styled.div`
  margin-bottom: 10px;
`;

export const Link = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Description = styled.div`
  list-style: none;
  padding: 0;
font-style: italic`;

