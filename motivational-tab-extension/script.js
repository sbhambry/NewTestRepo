// Silly and motivational quotes
const quotes = [
    "You're doing amazing, sweetie! Even if you're just opening tabs.",
    "Listen, you absolute LEGEND. Today is YOUR day!",
    "Fun fact: You're cooler than a polar bear wearing sunglasses.",
    "You didn't come this far to only come this far. KEEP GOING!",
    "Your potential is more unlimited than your browser tabs.",
    "Remember: You're the main character. Act like it!",
    "You're not procrastinating, you're strategically delaying success.",
    "Honestly? You're crushing it. Even your doubts are impressed.",
    "Plot twist: You're actually a superhero, you just haven't realized it yet.",
    "You're like a software update. Not everyone appreciates you right away, but you make everything better.",
    "Be the person your dog thinks you are. (If you don't have a dog, be that person anyway.)",
    "Today's goal: Be more awesome than yesterday. (Spoiler: You already are.)",
    "You're not just opening a tab. You're opening OPPORTUNITIES.",
    "Listen up: You're approximately 98% stardust and 100% incredible.",
    "Your vibe attracts your tribe. And your vibe is IMMACULATE.",
    "You're not lost, you're just taking the scenic route to success.",
    "Breaking news: You're fantastic and everyone knows it.",
    "You're the reason the word 'phenomenal' was invented.",
    "Reminder: You're braver than you believe, stronger than you seem, and smarter than you think. Also, you're adorable.",
    "You're not overthinking, you're just really thorough. (Okay, maybe a little overthinking.)",
    "The world is your oyster. And you're allergic to mediocrity.",
    "You're basically a unicorn in human form. Rare and magical.",
    "Today's forecast: 100% chance of you being INCREDIBLE.",
    "You could trip over a pebble and make it look intentional. That's how smooth you are.",
    "You're not weird, you're limited edition. And expensive.",
    "Your WiFi connection is strong, but your determination is STRONGER.",
    "You're not just thinking outside the box. You threw away the box.",
    "Life is tough, but so are you. You're like beef jerky. Resilient and unexpectedly delightful.",
    "You're the human equivalent of a standing ovation.",
    "Remember: Doubts are just plot twists in your success story."
];

// Fun emojis to rotate
const emojis = ["💪", "🚀", "⭐", "🔥", "✨", "🎯", "🏆", "💎", "🌟", "⚡", "🎉", "🦄", "👑", "🌈", "💫"];

// Get random quote
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Get random emoji
function getRandomEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
}

// Update the quote and emoji
function updateMotivation() {
    const quoteElement = document.getElementById('quote');
    const emojiElement = document.getElementById('emoji');

    // Add fade out effect
    quoteElement.style.opacity = '0';

    setTimeout(() => {
        quoteElement.textContent = getRandomQuote();
        emojiElement.textContent = getRandomEmoji();
        quoteElement.style.opacity = '1';
    }, 300);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateMotivation();

    // Button click handler
    const button = document.getElementById('newQuoteBtn');
    button.addEventListener('click', () => {
        updateMotivation();

        // Fun button animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    });
});

// Smooth quote transition
const style = document.createElement('style');
style.textContent = `
    .quote {
        transition: opacity 0.3s ease-in-out;
    }
`;
document.head.appendChild(style);
