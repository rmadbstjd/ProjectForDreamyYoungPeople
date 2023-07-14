import styled from "@emotion/styled";

export const Layout = styled.div`
  display: flex;
  width: 256px;
  height: 36px;
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
  width: 203px;
  height: 18px;
`;

export const Text = styled.span`
  color: ${(props) => (props.active ? "#333333" : "#565656")};
`;
export const Img = styled.img`
  position: relative;
  top: 3px;
  width: 10px;
  height: 10px;
  cursor: pointer;
`;
