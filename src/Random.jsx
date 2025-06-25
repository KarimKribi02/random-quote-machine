import React, { useEffect, useState } from "react";
import "./App.css";

const quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    text: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    text: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
];

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857"
];

const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

export default function QuoteMachine() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [color, setColor] = useState("#16a085");

  useEffect(() => {
    setQuote(getRandomQuote());
    setColor(getRandomColor());
  }, []);

  const handleNewQuote = () => {
    setQuote(getRandomQuote());
    setColor(getRandomColor());
  };

  return (
    <div className="app" style={{ backgroundColor: color, transition: "background-color 0.5s ease" }}>
      <div id="quote-box" className="quote-box" style={{ color }}>
        <p id="text" className="quote-text">"{quote.text}"</p>
        <p id="author" className="quote-author">- {quote.author}</p>
        <div className="buttons">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${quote.text}" - ${quote.author}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: color }}
          >
            Tweet
          </a>
          <button id="new-quote" onClick={handleNewQuote} style={{ backgroundColor: color }}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}
