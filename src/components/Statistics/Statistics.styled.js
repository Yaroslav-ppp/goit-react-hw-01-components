import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
  display: inline-block;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-left: 650px;
`;
export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding: 10px;
`;
export const StatList = styled.ul`
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  border-radius: 0 0 5px 5px;
  li:not(:last-child) {
    border-right: 1px solid #ccc;
  }
  color: white;
`;
export const Item = styled.li`
  width: 37px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;
export const Label = styled.span`
  text-align: center;
  margin-bottom: 10px;
`;
export const Percentage = styled.span`
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
`;
