import styled from 'styled-components';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 8px;
  padding: 16px;
  background-color: #fff;
  border-left: 4px solid transparent;
  :hover {
    background-color: ${ (props) => props.theme.colors.background };
    border-left-color: ${ (props) => props.theme.colors.primary };
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular };
  color: ${(props) => props.theme.colors.text };
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
  margin-bottom: 8px;
`;

export const Address = styled.span`
  font-family: ${(props) => props.theme.fonts.regular };
  color: ${(props) => props.theme.colors.text };
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 8px;
  margin-top: 8px;
`;

export const RestaurantPhoto = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;
