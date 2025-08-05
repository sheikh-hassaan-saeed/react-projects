import { useState } from "react";

const QuoteGen = () => {
    const quotes = [
        { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
        { text: "Two things are infinite: the universe and human stupidity.", author: "Einstein" },
        { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
        { text: "Technology is best when it brings people together.", author: "Matt Mullenweg" },
        { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
        { text: "Software is a great combination of artistry and engineering.", author: "Bill Gates" },
    ];

    const [quote, setQuote] = useState({});

    const generateQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Quote Generator</h1>

            {quote.text && (
                <>
                    <p style={{ fontSize: "1.5rem", fontStyle: "italic" }}>"{quote.text}"</p>
                    <p>— {quote.author}</p>
                </>
            )}

            <button onClick={generateQuote} style={{ marginTop: "20px", padding: "10px 20px" }}>
                Generate Quote
            </button>
        </div>
    );
};

export default QuoteGen;
