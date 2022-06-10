import styled from '@emotion/styled';

export const Item = styled.li`
  position: relative;
  width: 350px;
  display: flex;
  border-radius: 5px;
  margin: 10px 0 10px 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Status = styled.span`
  border-radius: 50%;
  padding: 20px;
  margin: 20px;
  background-color: ${props => {
    return props.status ? 'green' : 'red';
  }}};
`;

export const Avatar = styled.img`
  height: 48px;
  position: absolute;
  top: 15px;
  right: 200px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-indent: 110px;
  margin: auto 0;
`;
