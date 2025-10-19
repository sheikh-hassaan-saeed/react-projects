import React from "react";
import { animateScroll as scroll } from "react-scroll";
import "./BottomBtn.css";

const BottomBtn = () => {
    return (
        <div className="bottom-btn">
            <button onClick={() => scroll.scrollToTop({ duration: 500 })}>
                Move to Top
            </button>
        </div>
    );
};

export default BottomBtn;
