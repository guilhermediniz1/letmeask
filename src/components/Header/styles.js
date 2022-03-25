import styled from "styled-components";

export const HeaderContent = styled.div`
  position: relative;

  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    max-height: 45px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 16px;

    button {
      height: 40px;
    }
  }
  [alt="Menu"] {
    display: none;
  }

  @media (max-width: 768px) {
    > div {
      display: none;
    }
    [alt="Menu"] {
      display: inherit;
      cursor: pointer;
    }
  }
`;

export const HeaderComponent = styled.header`
  padding: 24px;
  border-bottom: 1px solid #e2e2e2;
  z-index: 2;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 8px;
  padding: 16px;
  z-index: 1;

  background: #fefefe;

  transition: all .2s ease-in;

  > span {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &.hidden{
    display: none;
  }
`;