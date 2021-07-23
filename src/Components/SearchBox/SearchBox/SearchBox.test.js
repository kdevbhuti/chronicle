
import React from "react";
import ReactDOM from "react-dom";
import SearchBox from "./SearchBox";


it("Search box rendered without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchBox></SearchBox>, div)
})

