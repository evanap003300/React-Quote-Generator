// Quote.jsx
import { useState } from "react";
import david_img from './Stay-hard.jpg';
// import bench from './images/bench_press.svg';

function getQuote() {
    const quotes = [
        "Stay hard! – David Goggins",
        "Who's gonna carry the boats?! – David Goggins",
        "The mind is the most powerful weapon we have. – David Goggins",
        "You are in danger of living a life so comfortable and soft that you will die without ever realizing your true potential. – David Goggins",
        "Be uncommon among uncommon people. – David Goggins",
        "The best way to learn is to do. The best way to earn is to give. – Alex Hormozi",
        "Don’t wish it were easier. Work until you are better. – Alex Hormozi",
        "If you can endure pain for a little longer, you can get everything you want. – Alex Hormozi",
        "You don't need more time. You need more focus. – Alex Hormozi",
        "Discipline is the shortcut. – Alex Hormozi",
        "You have power over your mind—not outside events. Realize this, and you will find strength. – Marcus Aurelius",
        "The impediment to action advances action. What stands in the way becomes the way. – Marcus Aurelius",
        "If it is not right, do not do it. If it is not true, do not say it. – Marcus Aurelius",
        "The soul becomes dyed with the color of its thoughts. – Marcus Aurelius",
        "We suffer more often in imagination than in reality. – Seneca",
        "It's not what happens to you, but how you react to it that matters. – Epictetus",
        "No man is free who is not master of himself. – Epictetus",
        "First say to yourself what you would be; and then do what you have to do. – Epictetus",
        "He who is brave is free. – Seneca",
        "Throw me to the wolves and I will return leading the pack. – Seneca",
        "Do not pray for an easy life. Pray for the strength to endure a difficult one. – Bruce Lee"
    ];

    return quotes[Math.floor(Math.random() * quotes.length)];
}

function Card({ onClick }) {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={david_img}
                    alt="David Goggins"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Need Motivation?</h2>
                <p>Generate a quote that will give you the fuel to keep going!</p>
                <div className="card-actions justify-end">
                    <button onClick={onClick} className="btn btn-primary">
                        Generate Quote
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function Quote() {
    const [quote, setQuote] = useState("");

    const handleClick = () => {
        setQuote(getQuote());
    };

    return (
        <div className="flex flex-col items-center space-y-6 mt-10">
            <Card onClick={handleClick} />
            {quote && (
                <p className="text-center text-lg font-semibold max-w-md">
                    "{quote}"
                </p>
            )}
        </div>
    );
}