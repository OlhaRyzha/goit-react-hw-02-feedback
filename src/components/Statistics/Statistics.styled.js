import styled from '@emotion/styled';
export const Card = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: ${({ theme }) => theme.spacing(100)};
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(4)};
  margin-bottom: 20px;
`;
export const Title = styled.h1`
  text-align: center;
  margin: 15px 0;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const Button = styled.button`
  padding: 10px;
  background-color: #c6c9a9;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0 0 10px black;
`;
