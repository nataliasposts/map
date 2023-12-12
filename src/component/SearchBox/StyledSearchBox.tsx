import styled from 'styled-components';
import { border, borderColor, borderRadious, buttonBackground } from '../../style/style';

const StyledSearchBox = styled.div({
  '.input': {
    border: border,
    borderColor: borderColor,
    padding: '10px',
    borderRadius: borderRadious,
    width: '650px',
    margin: '30px 10px 30px 0'
  },
  '.search-button': {
    backgroundColor: buttonBackground,
    width: '100px',
    padding: '10px',
    borderRadius: borderRadious,
    marginBottom: '20px'
  }
});

export default StyledSearchBox;
