import React, { useState }from 'react'
import { useNavigate } from 'react-router-dom'

import { preview } from '../assets'
import { getRandomPrompt} from '../utils'
import { FormField, Loader } from '../components'

const generateImage = () => {
    // Generate image using AI
}
const handleSubmit = async (e, form, setLoading) => {
    e.preventDefault();
    setLoading(true);
    try {
        // Send form data to server
    } catch (error) {
        console.log(error);
    }
    setLoading(false);
}

 const handleChanges = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
}

const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
}

const CreatePost = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: '',
    })
    const [loading, setLoading] = useState(false);
    const [generatingImg, setGeneratingImg] = useState(false);
  return (
    <section className="max-w-7xl mx-auto">
        <div>
            <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
            <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">Create imaginative and visually stunning images through AI image generator and share them with community</p>
        </div>

        <form className="mt-16 max-w-3x1" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
                <FormField 
                    lableName="Your Name"
                    type="text"
                    name="name"
                    placeholder="Elon Musk"
                    value={form.name}
                    onChange={handleChanges}
                />
                <FormField 
                    lableName="Prompt"
                    type="text"
                    name="prompt"
                    placeholder="The long-lost Star Wars 1990 Japanese Anime"
                    value={form.prompt}
                    onChange={handleChanges}
                    isSurpriseMe
                    handleSurpriseMe={handleSurpriseMe}
                />

                <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-[#6469ff] focus:border-[#6469ff] block w-64 p-3 h-64 flex justify-center rounded-lg">
                    {form.photo ? (
                        <img 
                            src={form.photo}
                            alt={form.prompt}
                            className='object-cover w-full h-full rounded-lg'
                        />
                    ) : (
                        <img 
                            src={preview}
                            alt="preview"
                            className='object-cover w-full h-full rounded-lg'
                        />
                    )}

                    {generatingImg && (
                        <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                            <Loader />
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-5 flex gap=5">
                <button 
                    type="submit"
                    onClick = {generateImage}
                    className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                    {generatingImg ? 'Generating...' : 'Generate'}
                </button>
            </div> 
            <div className="mt-10">
                <p className="mt-2 text-[#666e75] text-[14px]">Once you have created the image you want, you can share it with others in the community </p>
                <button
                    type="submit"
                    className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    {loading ? 'Sharing...' : 'Share with the Community'}
                </button>
            </div>
        </form>
    </section>
  )
}

export default CreatePost
 