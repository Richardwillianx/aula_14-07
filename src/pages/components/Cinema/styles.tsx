import styled from "styled-components";

export const Title = styled.h2`
  color: ${(props) => props.theme.color};
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  background: ${(props) => props.theme.bg};
`;

export const Year = styled.p`
  color: #775a5a;
  font-weight: 900;
`;
