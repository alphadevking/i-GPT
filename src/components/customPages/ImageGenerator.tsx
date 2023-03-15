import React, { useEffect, useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import Image from 'next/image';

const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const ImageGenerator = () => {
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); 
    
    const generateImage = async () => {
        try {
            const res = await openai.createImage({
                prompt: prompt,
                n: 1,
                size: "1024x1024",
            });
            if (res?.data?.data?.[0]?.url) {
                setResult(res.data.data[0].url);
                setErrorMessage('');
            }
        } catch (err:any) {
            if (err.res) {
                setErrorMessage(`${err.res.status}: ${err.res.data}`);
            } else {
                setErrorMessage(err.message);
            }
        }
    }

    return (
        <div className='grid grid-cols-3 justify-center items-center'>
            <div />
            <div className='grid gap-3 text-center'>
                <div className='text-xl font-semibold'>Generate Images using OpenAI</div>

                <input
                    type='text'
                    className='ring-1 ring-slate-600/50 rounded-md py-2 px-3 text-sm bg-transparent backdrop-blur focus:outline-none'
                    placeholder='Enter image prompt...'
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' ? (e.preventDefault(), generateImage()) : null}
                />

                <div>
                    {errorMessage && (
                        <div className='text-red-500 text-sm'>
                            {errorMessage}
                        </div>
                    )}
                </div>

                <button
                    className='px-2 py-2 bg-slate-600/50 backdrop-blur rounded-md hover:bg-slate-600/40 transition-all duration-300 text-slate-50'
                    onClick={generateImage}
                >
                    Generate
                </button>

                <div className=''>
                    {result && (
                        <Image src={result} alt="Generated image" width={1024} height={1024} />
                    )}
                </div>
            </div>

            <div className='absolute flex top-1/3 right-5'>
                <Link href='/'><FaHome /></Link>
            </div>
        
        </div>
    )
}

export default ImageGenerator
