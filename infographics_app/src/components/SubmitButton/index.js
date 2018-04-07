import React from "react";

export default ({ onClick }) => (
    <div>
        <input type="submit" name="submit" onClick={ () => console.log("Clicked") } />
    </div>
);