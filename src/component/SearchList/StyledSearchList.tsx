import styled from 'styled-components';
import { buttonBackground, borderRadious } from '../../style/style';

const StyledSearchList = styled.div({
  width: '20%',
  marginRight: '10px',
  display: 'flex',
  flexDirection: 'column',
  '.list-title_row': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  '.list': {
    alignSelf: 'center',
    width: '180px'
  },
  '.list-item': {
    margin: '5px 0 5px 0'
  },
  '.clean-button': {
    backgroundColor: buttonBackground,
    width: '60px',
    padding: '10px',
    borderRadius: borderRadious,
    marginLeft: '5px'
  }
});

export default StyledSearchList;
