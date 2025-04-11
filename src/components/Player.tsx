interface PlayerProps {
    word: string;
}

const Player = ({ word }: PlayerProps) => {
    const playWord = () => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = "en-US";
        speechSynthesis.speak(utterance);
    };

    return (
        <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold">🔊 Hear It Out</h2>
            <button
                onClick={playWord}
                className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white font-medium transition"
                disabled={!word}
            >
                {word ? `Play "${word}"` : "Select a word first"}
            </button>
        </div>
    );
};

export default Player;
