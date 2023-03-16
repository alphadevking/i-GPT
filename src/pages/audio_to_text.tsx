import Layout from "@/pageSetup/Layout";
import Head from "next/head";
import { useState } from "react";

const AudioToText = () => {
    const [file, setFile] = useState<File | null>(null);
    const [transcription, setTranscription] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!file) {
            setErrorMessage("Please select a file to transcribe");
            return;
        }

        const reader = new FileReader();

        reader.onload = async () => {
            const audioContext = new AudioContext();
            const audioBuffer = await audioContext.decodeAudioData(reader.result as ArrayBuffer);

            try {
                const audioBufferCopy = audioBuffer.getChannelData(0);
                const audioData = Array.from(audioBufferCopy).join(",");
                const res = await fetch(
                    `https://api.openai.com/v1/speech-to-text/transcriptions`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
                        },
                        body: JSON.stringify({
                            model: "whisper-1",
                            audio_data: audioData,
                        }),
                    }
                );
                const { text } = await res.json();
                setTranscription(text);
                setErrorMessage(null);
            } catch (err:any) {
                setErrorMessage(err.message);
            }
        };

        reader.readAsArrayBuffer(file);
    };

    return (
        <>
            <Head>
                <title>Audio to Text | i-GPT</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/i-gpt.png" />
            </Head>
            <Layout navbar footer>
                <div className="p-8 grid gap-5 w-full md:w-1/2 mx-auto">
                    <form onSubmit={handleSubmit} className="grid gap-5">
                        <div className="grid gap-5">
                            <label htmlFor="file" className="text-center text-xl">
                                Select a file to transcribe:
                            </label>
                            <input
                                id="file"
                                type="file"
                                onChange={(e) => setFile(e.target.files?.[0] || null)}
                                className="ring-1 ring-slate-600/50 rounded-md py-4 px-7 text-xs bg-transparent backdrop-blur focus:outline-none"
                            />
                        </div>
                        <div>
                            {errorMessage && (
                                <div className='text-red-500 text-sm'>{errorMessage}</div>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="px-2 py-2 bg-slate-600/50 backdrop-blur rounded-md hover:bg-slate-600/40 transition-all duration-300 text-slate-50"
                        >
                            Transcribe
                        </button>
                    </form>
                    {transcription && (
                        <div className="ring-slate-600/50 rounded-lg shadow p-6 mt-4">
                            <p className="opacity-80">{transcription}</p>
                        </div>
                    )}
                </div>
            </Layout>
        </>
    );
};

export default AudioToText;
