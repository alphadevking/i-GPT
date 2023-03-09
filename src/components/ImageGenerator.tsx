import React, { useEffect, useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const ImageGenerator = () => {
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState('');
    const [loaded, setLoaded] = useState(false);

    const generateImage = async () => {
        const res = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: "1024x1024",
        });
        if (res?.data?.data?.[0]?.url) {
            setResult(res.data.data[0].url);
        }
        // console.log(res.data.data[0].url)
    }

    // useEffect(() => {
    //     generateImage();
    // }, []);

    return (
        <div className='grid grid-cols-3 justify-center items-center h-screen bg-cover'>
            <div/>
            <div className='grid gap-3 text-center'>

                <div className='text-xl font-semibold'>Generate Images using OpenAI</div>

                <input type='text' className='ring-1 ring-slate-600/50 rounded-md py-2 px-3 text-sm bg-transparent backdrop-blur focus:outline-none' placeholder='Enter image prompt...' onChange={(e) => setPrompt(e.target.value)} />

                <button className='px-2 py-2 bg-slate-600/50 backdrop-blur rounded-md hover:bg-slate-600/40 transition-all duration-300 text-slate-50'
                    onClick={generateImage}>
                    Generate
                </button>

                <div className=''>
                    {!loaded && (
                        <div className="spinner">
                            
                        </div>
                    )}
                    {result && loaded && (
                        <img src={result} alt="Generated image" width={1024} height={1024} onLoad={() => setLoaded(true)} />
                    )}
                </div>


            </div>
        </div>
    )
}

export default ImageGenerator
