import { useState } from "react";

interface RecorderProps {
    onRecordingComplete: (audioURL: string) => void;
}

const Recorder = ({ onRecordingComplete }: RecorderProps) => {
    const [recording, setRecording] = useState(false);
    const startRecording = () => {
        console.log("Recording");
        setRecording(true);
    };
    const stopRecording = () => {
        console.log("Stopped");
        setRecording(false);
    };

    return (
        <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold">🎤 Record Yourself</h2>

            {recording ? (
                <button
                    onClick={stopRecording}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-medium transition"
                >
                    ⏹ Stop Recording
                </button>
            ) : (
                <button
                    onClick={startRecording}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition"
                >
                    🎙 Start Recording
                </button>
            )}
        </div>
    );
};

export default Recorder;
