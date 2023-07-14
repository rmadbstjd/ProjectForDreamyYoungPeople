import styled from "@emotion/styled";

export const Layout = styled.div`
  width: 82px;
  height: 24px;
  margin-right: 32px;
`;

export const CustomCheckbox = styled.label`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: ${(props) => `url(${props.background})`};
  position: relative;
  cursor: pointer;
`;

export const Label = styled.label`
  position: relative;
  left: 4.5px;
  top: -2px;
  font-size: 14px;
`;
