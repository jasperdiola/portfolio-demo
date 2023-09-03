import React from "react";
import "./header.css"

const headerComponent = () => {
    return (
        <header className="header">
            <div className="_row-1">
                <div className="_col-1">
                    <h2>
                        Right Side
                    </h2>
                </div>
                <div className="_col-2">
                    <h2>
                        Left Side
                    </h2>
                </div>
            </div>
        </header>
    )
}

export default headerComponent