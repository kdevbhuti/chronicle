import React from "react";
import "./SearchBoxList.css"

const SearchBoxList = ({
        bookLists,
        getBookDetails = ()=> {},
        searchBoxListPopup = ()=>{}
    }) =>{

    const handleOnSelectBook = (bookId) => {
        getBookDetails(bookId);
        searchBoxListPopup(false)
    } 
    return(
        <div className="searboxlist">
            {
                bookLists.map((item, index) => {
                    return bookLists.length-1 > index ? 
                        (
                            <div 
                                className="searboxlistItems"  
                                key={item.bookId}
                                onClick={()=>handleOnSelectBook(item.bookId)}
                            >
                                {item.title}
                            </div>
                        ):(
                            <div 
                                className="borderNon"
                                key={item.bookId} 
                                onClick={()=>handleOnSelectBook(item.bookId)}
                            >
                                {item.title}
                            </div>
                        )
                })
            }
        </div>
    )
}

export default SearchBoxList;