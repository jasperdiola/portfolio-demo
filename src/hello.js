import React, { createElement } from "react";

const hello = () => {
    return React.createElement(
        "div", null, createElement(
            "h1", "h1", "Hello World!"
        )
    )
}

export default hello