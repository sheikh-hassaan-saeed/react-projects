import React from "react";
import { animateScroll as scroll } from "react-scroll";
import "./BottomBtn.css";

const BottomBtn = () => {
    return (
        <div className="scroll-to-top-wrapper">
            <button
                className="scroll-btn"
                onClick={() => scroll.scrollToTop({ duration: 500 })}
                aria-label="Scroll to top"
            >
                <span className="arrow-up">↑</span>
                <span className="btn-text">Back to Top</span>
            </button>
        </div>
    );
};

export default BottomBtn;