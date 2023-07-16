import styled from "@emotion/styled";

export const Layout = styled.div`
  font-size: 14px;
  width: 16;
  height: ${(props) => (props.active === true ? "6.75rem" : "2.25rem")};
  margin-bottom: 0.75rem;
  margin: 0 auto;
`;
