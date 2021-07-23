import React from "react";
import ReactDOM from "react-dom";
import SearchItem from "../SearchItem/SearchItem"

import { render, cleanup} from "@testing-library/react"

afterEach(cleanup)

const bookDetails =     {
    bookId: 1001,
    title: "Twenty Thousand Leagues Under the Seas",
    bookImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Houghton_FC8_V5946_869ve_-_Verne%2C_frontispiece.jpg/330px-Houghton_FC8_V5946_869ve_-_Verne%2C_frontispiece.jpg",
    auther:"Jules Verne",
    description: "A World Tour Underwater (French: Vingt mille lieues sous les mers: Tour du monde sous-marin) is a classic science fiction adventure novel by French writer Jules Verne.The novel was originally serialized from March 1869 through June 1870 in Pierre-Jules Hetzel's fortnightly periodical, the Magasin déducation et de récréation. A deluxe octavo edition, published by Hetzel in November 1871, included 111 illustrations by Alphonse de Neuville and Édouard Riou.[1] The book was widely acclaimed on its release and remains so; it is regarded as one of the premiere adventure novels and one of Vernes greatest works, along with Around the World in Eighty Days and Journey to the Center of the Earth. Its depiction of Captain Nemos underwater ship, the Nautilus, is regarded as ahead of its time, since it accurately describes many features of todays submarines, which in the 1860s were comparatively primitive vessels.",
    Publisher:	"Pierre-Jules Hetzel",
}

it("SearchItem box rendered without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchItem bookDetails={bookDetails}></SearchItem>, div)
})