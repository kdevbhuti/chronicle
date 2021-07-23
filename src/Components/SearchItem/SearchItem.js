import React from "react"
import "./searchItem.css"

const SearchItem = ({bookDetails}) =>{
    console.log(bookDetails)
    return(
        <div className="searchItem">
            <div className="bookDetails">
                <figure className="bookImg">
                    <img src={bookDetails.bookImage}></img>
                </figure>
                <h3 className="bookTitle">{bookDetails.title}</h3>
                <span>Auther: {bookDetails.auther}</span>
                <span>Publiser: {bookDetails.Publisher}</span>
            </div>
            
            <p>{bookDetails.description}</p>
           
        </div>
    )
}

export default SearchItem;