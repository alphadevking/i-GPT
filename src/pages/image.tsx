import ImageGenerator from "@/components/customPages/ImageGenerator"
import Layout from "@/pageSetup/Layout"
import Head from "next/head"

const TextToImage = () => {
    return (
        <>
            <Head>
                <title>Image Generator | i-GPT</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/i-gpt.png" />
            </Head>
            <Layout navbar footer>
                <ImageGenerator />
            </Layout>
        </>
    )
}

export default TextToImage
    