import { useState, useCallback } from "react";
import Head from "next/head";
import Layout from "@/pageSetup/Layout";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
export const openai = new OpenAIApi(configuration);

const TextCompletion = () => {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await openai.createCompletion({
                model: "davinci",
                prompt: prompt,
                max_tokens: 150,
                temperature: 0.7,
                stop: "\n",
            });

            const answer = res?.data?.choices?.[0]?.text?.trim() ?? null;

            // console.log("answer:",answer)

            if (answer !== null) {
                setResult(answer);
                setErrorMessage("");
            } else {
                setErrorMessage("No answer found");
            }
        } catch (err: any) {
            if (err.response) {
                setErrorMessage(`${err.response.status}: ${err.response.data}`);
            } else {
                setErrorMessage(err.message);
            }
        }
    }, [prompt]);

    return (
        <>
            <Head>
                <title>Text Completion | i-GPT</title>
                <meta name='description' content='' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/i-gpt.png' />
            </Head>

            <Layout navbar footer>
                <div className="p-8 grid gap-5 w-full md:w-1/2 mx-auto">
                    <form onSubmit={handleSubmit} className="grid gap-5">
                        <div className="grid gap-5">
                            <label htmlFor="prompt" className="text-center text-xl">Hear my thoughts on any topic.</label>
                            <input
                                id="prompt"
                                type="text"
                                value={prompt}
                                placeholder="Enter prompt..."
                                onChange={(e) => setPrompt(e.target.value)}
                                className="ring-1 ring-slate-600/50 rounded-md py-4 px-7 text-xs bg-transparent backdrop-blur focus:outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-2 py-2 bg-slate-600/50 backdrop-blur rounded-md hover:bg-slate-600/40 transition-all duration-300 text-slate-50"
                        >
                            Ask
                        </button>
                    </form>
                    {errorMessage && (
                        <div className="bg-red-500 text-white text-sm py-2 px-4 rounded mt-4">{errorMessage}</div>
                    )}
                    {result && (
                        <div className="ring-slate-600/50 rounded-lg shadow p-6 mt-4">
                            <p className="opacity-30 font-medium mb-2">{prompt}</p>
                            <p className="opacity-80">{result}</p>
                        </div>
                    )}
                </div>
            </Layout>
        </>
    );
};

export default TextCompletion;
