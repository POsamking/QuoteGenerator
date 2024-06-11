const quotes = [
    "All that we are is the result of what we have thought. - Buddha",
    "If you judge people, you have no time to love them. - Mother Teresa",
    "The most courageous act s still to think for yourself. Aloud. - Coco Chanel",
    "The greatest wealth is to live content with little. - Plato",
    "The future belongs to those who prepare for it today. - Malcolm X",
    "I have no special talent. I am only passionately curious. - Albert Einstein",
    "The successful warrior is the average man, with laser-like focus. - Bruce Lee",
    "Those who dare to fail miserably can achieve greatly. - John F.Kennedy",
    "A great man is always willing to be little. - Ralph Waldo Emerson",
    "Wisely, and slow. They stumble that run fast. - William Shakespeare"
]
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote").innerText = quote;
}

document.getElementById("generate-btn").addEventListener("click", generateQuote);

generateQuote();