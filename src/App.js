import './App.css';
import React from 'react';
import SearchBox from "./Components/SearchBox/SearchBox/SearchBox"
import bookData from "./BookDetailsData/BookDetails"
import Popup from './Components/Popup/Popup';
import SearchItem from './Components/SearchItem/SearchItem';

function App() {
const [searchItemPopup, setSearchItempopup] = React.useState(false);
const [searchItemDetails, setSearchItemDetails] = React.useState({});
const getBookDetails = (bookId) => {
  const bookDetails = bookData.find(item => item.bookId === bookId);
  setSearchItemDetails(bookDetails);
  setSearchItempopup(true)
}

  return (
    <div className="App">
      <SearchBox 
        bookDetails={bookData}
        bookDetailsPopup={setSearchItempopup}
        getBookDetails={getBookDetails}
      />
      <Popup trigger={searchItemPopup} heading={"Book Details"} setTrigger={setSearchItempopup}>
        <SearchItem bookDetails={searchItemDetails}/>
      </Popup>
    </div>
  );
}

export default App;
