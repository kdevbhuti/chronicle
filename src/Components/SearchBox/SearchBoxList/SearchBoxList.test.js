import React from "react";
import ReactDOM from "react-dom";
import SearchBoxList from "../SearchBoxList/SearchBoxList"

const books =[
    {
        bookId: 1001,
        title: "Twenty Thousand Leagues Under the Seas",
        bookImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Houghton_FC8_V5946_869ve_-_Verne%2C_frontispiece.jpg/330px-Houghton_FC8_V5946_869ve_-_Verne%2C_frontispiece.jpg",
        auther:"Jules Verne",
        description: "A World Tour Underwater (French: Vingt mille lieues sous les mers: Tour du monde sous-marin) is a classic science fiction adventure novel by French writer Jules Verne.The novel was originally serialized from March 1869 through June 1870 in Pierre-Jules Hetzel's fortnightly periodical, the Magasin déducation et de récréation. A deluxe octavo edition, published by Hetzel in November 1871, included 111 illustrations by Alphonse de Neuville and Édouard Riou.[1] The book was widely acclaimed on its release and remains so; it is regarded as one of the premiere adventure novels and one of Vernes greatest works, along with Around the World in Eighty Days and Journey to the Center of the Earth. Its depiction of Captain Nemos underwater ship, the Nautilus, is regarded as ahead of its time, since it accurately describes many features of todays submarines, which in the 1860s were comparatively primitive vessels.",
        Publisher:	"Pierre-Jules Hetzel",
    },
    {
        bookId: 1002,
        title: "Five Weeks in a Balloon",
        bookImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Cinq_Semaines_en_ballon_001.png/300px-Cinq_Semaines_en_ballon_001.png",
        auther:"Jules Verne",
        description: "an adventure novel by Jules Verne, published in 1863. It is the first novel in which he perfected the ingredients of his later work, skillfully mixing a story line full of adventure and plot twists that keep the reader's interest through passages of technical, geographic, and historic description. The book gives readers a glimpse of the exploration of Africa, which was still not completely known to Europeans of the time, with explorers traveling all over the continent in search of its secrets.",
        Publisher:	"Pierre-Jules Hetzel",
    }
]

it("SearchBoxList box rendered without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <SearchBoxList
            bookLists = {books} 
            getBookDetails={() => {}}
            searchBoxListPopup={() => {}}
        ></SearchBoxList>, div)
})