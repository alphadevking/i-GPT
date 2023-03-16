import Layout from "@/pageSetup/Layout"
import Head from "next/head"

const SpeechToText = () => {
    return (
        <>
            <Head>
                <title>Speech to Text | i-GPT</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/i-gpt.png" />
            </Head>
            <Layout navbar footer>
            </Layout>
        </>
    )
}

export default SpeechToText
