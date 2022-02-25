import styled from 'styled-components';

const EditAll = styled.span`
  color: #007EFF;
  font-weight: 500;
  cursor: pointer;
  &:after {
    position: relative;
    top: -1px;
    content: '\f2ed';
    margin-left: 7px;
    font-size: 10px;
    font-family: FontAwesome;
    -webkit-font-smoothing: antialiased;
  }
`;
export default EditAll;
