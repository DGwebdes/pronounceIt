interface UserAudioProps {
    userAudio: string | undefined;
}

const Feedback = ({ userAudio }: UserAudioProps) => {
    return (
        <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold">🗣️ Your Pronunciation</h2>

            {!userAudio ? (
                <p className="text-gray-500 dark:text-gray-400 italic">
                    Record something to hear yourself!
                </p>
            ) : (
                <>
                    <p className="text-gray-700 dark:text-gray-300">
                        Here's what you just recorded:
                    </p>
                    <audio
                        controls
                        src={userAudio}
                        className="w-full rounded-lg"
                    />
                </>
            )}
        </div>
    );
};

export default Feedback;
