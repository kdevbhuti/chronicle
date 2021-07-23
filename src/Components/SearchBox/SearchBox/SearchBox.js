import React from "react";
import Popup from "../../Popup/Popup";
import SearchBoxList from "../SearchBoxList/SearchBoxList";
import "./SearchBox.css"

const SearchBox = (props) => {
    const [searchBoxListPopup, setSearchBoxListPopup] = React.useState(false);
    const [searchBooks, setSearchBooks] = React.useState([]);
    const booNameRef = React.useRef("");

    const handleBookSearch = () =>{
        const getBooks = props.bookDetails.filter(item => item.title.toLocaleLowerCase().includes(booNameRef.current.value.toLocaleLowerCase()));
        setSearchBooks(getBooks);
        setSearchBoxListPopup(true)
        props.bookDetailsPopup(false);
    }

    return(
        <div className="searchBox">
            <div className="inputSearch">
                <input 
                    className="searchInputBox"
                    type="text"
                    ref={booNameRef}
                    placeholder="Enter Book Name"
                />
                <button className="searchBtn" onClick={handleBookSearch}>Search</button>
            </div>
            <Popup trigger={searchBoxListPopup} heading={"Select Book"} setTrigger={setSearchBoxListPopup}>
                <SearchBoxList 
                    bookLists = {searchBooks} 
                    getBookDetails={props.getBookDetails}
                    searchBoxListPopup={setSearchBoxListPopup}
                />
            </Popup>
        </div>
    )
}

export default SearchBox;