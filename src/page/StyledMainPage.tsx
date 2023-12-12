import styled from 'styled-components';

const StyledMainPage = styled.main({
  padding: '50px 15px 50px 15px',
  maxWidth: '100%',
  '.main-container': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  '.location-wrapper': {
    width: '70%'
  }
});

export default StyledMainPage;
