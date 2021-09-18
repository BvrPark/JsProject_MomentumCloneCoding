const quotes = [
    {
       quote: "For me, words are a form of action, capable of influencing change."
    },
    {
        quote: "The man of virtue makes the difficulty to be overcome his first business, and success only a subsequent consideration."
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;