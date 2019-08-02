const quotes = [{
        name: "Coco Chanel",
        quote: "Success is most often achieved by those who don\'t know that failure is inevitable"
    },
    {
        name: "Kanye West",
        quote: "I refuse to accept other people\'s ideas of happiness for me. As if there\'s a one size fits all standard for happiness."
    },
    {
        name: "Tony Robbins",
        quote: "If you do what you\'ve always done, you\'ll get what you\'ve always gotten."
    },
    {
        name: "Aristotle",
        quote: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing."
    }
];
const quoteBtn = document.querySelector('#quoteBtn'),
    quote = document.querySelector('#quote'),
    quoteAuthor = document.querySelector('#quoteAuthor'),
    displayQuote = () => {
        let number = Math.floor(Math.random() * quotes.length);
        quote.innerHTML = quotes[number].quote;
        quoteAuthor.innerHTML = quotes[number].name;
    };
quoteBtn.addEventListener('click', displayQuote);
