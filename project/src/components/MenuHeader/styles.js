import styled from "@emotion/styled";

export const Layout = styled.div`
  display: flex;
  width: 16rem;
  height: 2.25rem;
  justify-content: center;
  align-items: center;
  &:hover {
    background: ${(props) => (props.active ? "#E0E4E8" : "#f0f2f3")};
  }
  background: ${(props) => (props.active ? "#E0E4E8" : null)};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 12.688rem;
  height: 1.125rem;
`;

export const Text = styled.span`
  color: ${(props) => (props.active ? "#333333" : "#565656")};
`;
export const Img = styled.img`
  position: relative;
  top: 0.188rem;
  width: 0.625rem;
  height: 0.625rem;
  cursor: pointer;
`;
