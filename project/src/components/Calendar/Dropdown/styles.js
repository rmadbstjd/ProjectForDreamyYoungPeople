import styled from "@emotion/styled";
export const Dropdown = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  border-radius: 0.313rem;
  width: ${(props) => props.width};
  height: 10.25rem;
  color: #333333;
  overflow-y: scroll;
  background: #ffffff;
  z-index: 10;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.16);
  &::-webkit-scrollbar {
    display: none;
  }

  & > :first-of-type {
    margin-top: 0.5rem;
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  height: 2.313rem;
  &:hover {
    background: #f6f7f8;
  }
  & > span {
    position: relative;
    left: 0.938rem;
  }
`;
