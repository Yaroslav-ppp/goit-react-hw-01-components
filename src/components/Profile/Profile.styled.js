import styled from '@emotion/styled';

export const UserCard = styled.div`
  width: 294px;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Description = styled.div`
  padding: 20px;
`;

export const UserAvatar = styled.img`
  margin: 20px 30px;
  width: 200px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  text-align: center;
`;

export const Location = styled.p`
  margin-bottom: 10px;
  text-align: center;
`;

export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  gap: auto;
  padding-left: 0;
  border: 1px solid #ccc;
  border-radius: 0 0 5px 5px;
  li:not(:last-child) {
    border-right: 1px solid #ccc;
  }
`;

export const StatsParametr = styled.li`
  width: 98px;
  background-color: #f0f0f0;
`;

export const Label = styled.span`
  display: block;
  text-align: center;
  margin: 10px 0;
`;

export const Quantity = styled.span`
  display: block;
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
`;
