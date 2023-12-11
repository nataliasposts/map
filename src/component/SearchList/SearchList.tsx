import { useSelector } from "react-redux";
import StyledSearchList from "./StyledSearchList";
import { RootState } from "../../store";
import TextEnum from "../../type/enum/TextEnum";

const SearchList: React.FC = () => {
    const { searchHistory } = useSelector((state: RootState) => state.location);

    return (
        <StyledSearchList>
            <h3>{TextEnum.SEARCH_HISTORY}</h3>
            <ul className="list">
                {searchHistory?.map((item) => (
                    <li className="list-item">{item}</li>
                ))}
            </ul>
        </StyledSearchList>
    );
};

export default SearchList;
