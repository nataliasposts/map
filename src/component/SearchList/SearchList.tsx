import { useDispatch, useSelector } from 'react-redux';
import StyledSearchList from './StyledSearchList';
import { RootState } from '../../store';
import TextEnum from '../../type/enum/TextEnum';
import { cleanSearchHistory } from '../../store/reducer/locationReducer';

const SearchList: React.FC = () => {
  const dispatch = useDispatch();
  const { searchHistory } = useSelector((state: RootState) => state.location);

  const handleCleanHistoryClick = () => {
    dispatch(cleanSearchHistory());
  };

  return (
    <StyledSearchList>
      <div className="list-title_row">
        <h3>{TextEnum.SEARCH_HISTORY}</h3>
        <button type="button" onClick={handleCleanHistoryClick} className="clean-button">
          {TextEnum.CLEAN_BUTTON}
        </button>
      </div>
      <ul className="list">
        {searchHistory?.map((item, index) => (
          <li className="list-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </StyledSearchList>
  );
};

export default SearchList;
