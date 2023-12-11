import React, { useState } from "react";
import TextEnum from "../../type/enum/TextEnum";
import StyledSearchBox from "./StyledSearchBox";

type SearchBoxProps = {
    onSearch: (query: string) => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
    const [query, setQuery] = useState<string>("");

    const handleSearchClick = () => {
        const trimmedQuery = query.trim();
        onSearch(trimmedQuery);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearchClick();
        }
    };

    return (
        <StyledSearchBox>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={TextEnum.SEARCH_PLACEHOLDER}
                className="input"
            />
            <button
                type="button"
                onClick={handleSearchClick}
                className="search-button"
            >
                {TextEnum.SEARCH_BUTTON}
            </button>
        </StyledSearchBox>
    );
};

export default SearchBox;
