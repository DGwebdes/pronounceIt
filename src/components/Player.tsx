import { useSpeech } from "react-text-to-speech";

interface PlayerProps {
    word: string;
}

const Player = ({ word }: PlayerProps) => {
    const { Text, speechStatus, start, pause, stop } = useSpeech({
        text: word,
        lang: "en-GB",
    });

    return (
        <div className="flex flex-col space-y-6 p-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                🔊 Hear It Out
            </h2>

            <div className="text-center text-gray-700 dark:text-gray-300 text-lg font-medium">
                <Text />
            </div>

            <div className="flex justify-center gap-4">
                {speechStatus !== "started" ? (
                    <button
                        onClick={start}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition"
                    >
                        Start
                    </button>
                ) : (
                    <button
                        onClick={pause}
                        className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md font-medium transition"
                    >
                        Pause
                    </button>
                )}

                <button
                    onClick={stop}
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md font-medium transition"
                >
                    Stop
                </button>
            </div>
        </div>
    );
};

export default Player;
