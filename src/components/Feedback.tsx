import WavesurferPlayer from "@wavesurfer/react";
import { useState } from "react";
import WaveSurfer from "wavesurfer.js";

interface UserAudioProps {
    userAudio: string | undefined;
}

const Feedback = ({ userAudio }: UserAudioProps) => {
    const [wavesurfer, setWaveSurfer] = useState<WaveSurfer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const onReady = (ws: WaveSurfer) => {
        setWaveSurfer(ws);
        setIsPlaying(false);
    };
    const onPlayPause = () => {
        if (wavesurfer) wavesurfer.playPause();
    };

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

                    <WavesurferPlayer
                        height={100}
                        waveColor={`Violet`}
                        url={userAudio}
                        onReady={onReady}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                    />
                    <button onClick={onPlayPause}>
                        {isPlaying ? "Pause" : "Play"}
                    </button>
                </>
            )}
        </div>
    );
};

export default Feedback;
