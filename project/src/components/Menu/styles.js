import styled from "@emotion/styled";

export const Layout = styled.div`
  font-size: 14px;
  width: 256px;
  height: ${(props) => (props.active === true ? "108px" : "36px")};
  margin-bottom: 12px;
  margin: 0 auto;
`;
