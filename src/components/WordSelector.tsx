import { useState } from "react";
import { wordSuggestion } from "../utils/suggestedWords";

interface WordSelectorProps {
    onWordSelect: (word: string) => void;
}

const WordSelector = ({ onWordSelect }: WordSelectorProps) => {
    const [userInput, setUserInput] = useState("");
    const [showMore, setShowMore] = useState(6);

    const handleSelect = () => {
        onWordSelect(userInput.trim());
        setUserInput("");
    };
    const handleSuggestion = (value: string) => {
        onWordSelect(value);
    };

    const filteredWords = wordSuggestion.filter((word: string) =>
        word.toLowerCase().includes(userInput.toLowerCase() && userInput),
    );

    console.log(showMore);

    return (
        <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold">🎯 Choose a Word</h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
                <input
                    type="text"
                    placeholder="Enter a word..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="flex-grow p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSelect}
                    className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
                >
                    Select
                </button>
            </div>

            {filteredWords.length > 0 && (
                <>
                    <div className="flex flex-wrap gap-2">
                        {filteredWords
                            .slice(0, showMore)
                            .map((word: string) => (
                                <button
                                    value={word}
                                    key={word}
                                    onClick={() => handleSuggestion(word)}
                                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full hover:bg-blue-500 hover:text-white transition text-sm"
                                >
                                    {word}
                                </button>
                            ))}
                    </div>
                    {showMore < filteredWords.length && (
                        <div className="flex justify-between">
                            <button
                                onClick={() => setShowMore((prev) => prev + 6)}
                                className="text-sm text-blue-600 hover:underline mt-2"
                            >
                                Show More
                            </button>
                            {showMore > 6 && (
                                <button
                                    onClick={() =>
                                        setShowMore((prev) => prev - 6)
                                    }
                                    className="text-sm text-blue-600 hover:underline mt-2"
                                >
                                    Show Less
                                </button>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default WordSelector;
