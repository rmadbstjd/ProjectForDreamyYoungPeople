import styled from "@emotion/styled";

export const Layout = styled.div`
  width: 3.875rem;
  height: 1.5rem;
  margin-right: 2rem;
`;

export const CustomCheckbox = styled.label`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-image: ${(props) => `url(${props.background})`};
  position: relative;
  cursor: pointer;
`;

export const Label = styled.label`
  position: relative;
  left: 0.281rem;
  top: -0.125rem;
  font-size: 14px;
`;
