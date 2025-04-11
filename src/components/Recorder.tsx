import { useRef, useState } from "react";

interface RecorderProps {
    onRecordingComplete: (audioURL: string) => void;
}

const Recorder = ({ onRecordingComplete }: RecorderProps) => {
    const [recording, setRecording] = useState(false);

    const mediaRecorder = useRef<MediaRecorder | null>(null);
    const chunks = useRef<Blob[]>([]);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
            });

            mediaRecorder.current = new MediaRecorder(stream);
            mediaRecorder.current.ondataavailable = (e: BlobEvent) => {
                if (e.data.size > 0) {
                    chunks.current.push(e.data);
                }
            };

            mediaRecorder.current.onstop = () => {
                const audioBlog = new Blob(chunks.current, {
                    type: "audio/wav",
                });
                const url = URL.createObjectURL(audioBlog);
                onRecordingComplete(url);
                chunks.current = [];
            };
            mediaRecorder.current.start();
            setRecording(true);
        } catch (error) {
            console.error("Error fetching audio: ", error);
            setRecording(false);
        }
    };

    const stopRecording = () => {
        if (mediaRecorder.current) {
            mediaRecorder.current.stop();
            setRecording(false);
        }
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
