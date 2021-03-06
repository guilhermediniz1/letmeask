import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.main`
  max-width: 800px;
  margin: 0 auto;

  form {
    textarea {
      width: 100%;
      border: 0;
      padding: 16px;
      border-radius: 8px;
      background: #fefefe;
      box-shadow: 0 2px 12px rgba($color: #000000, $alpha: 0.04);
      resize: vertical;
      min-height: 130px;
    }
    .form-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;

      .user-info {
        display: flex;
        align-items: center;

        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        > span {
          margin-left: 8px;
          color: #29292e;
          font-weight: 500;
          font-size: 14px;
        }
      }

      span {
        font-size: 14px;
        font-weight: 500;
        color: #737380;

        button {
          background: transparent;
          border: 0;
          color: #835af0;
          text-decoration: underline;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const RoomTitle = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    color: #29292e;
  }

  span {
    margin-left: 16px;
    background: #e559f9;
    border-radius: 9999px;
    padding: 8px 16px;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
  }
`;

export const QuestionList = styled.div`
  margin-top: 32px;
`;


export const EmptyAdvice = styled.div`
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fefefe;
  padding: 24px;
  font-size: 24px;
  font-weight: bold;
  color: #38383d;
`;
