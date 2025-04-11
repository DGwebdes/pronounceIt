import WordSelector from "../components/WordSelector";
import Player from "../components/Player";
import Recorder from "../components/Recorder";
import Feedback from "../components/Feedback";
import Layout from "./Layout";
import Tile from "../components/Tile";
import { useState } from "react";

const Home = () => {
    const [word, setWord] = useState("");
    const [userAudio, setUserAudio] = useState<string | undefined>(undefined);

    return (
        <Layout>
            <Tile>
                <WordSelector onWordSelect={setWord} />
            </Tile>
            <Tile>
                <Player word={word} />
            </Tile>
            <Tile>
                <Recorder onRecordingComplete={setUserAudio} />
            </Tile>
            <Tile>
                <Feedback userAudio={userAudio} />
            </Tile>
        </Layout>
    );
};

export default Home;
