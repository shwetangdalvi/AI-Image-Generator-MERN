import React, { useState, useEffect } from 'react'
import { Loader, Card, FormField } from '../components'

const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
        return data.map((post) => ( <Card key={post._id} {...post} /> ));
    }
    return (
        <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
    )
}

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState(null);

    const [searchText, setSearchText] = useState('');
  return (
    <section className="max-w-3xl mx-auto">
        <div>
            <h1 className="font-extrabold text-[#222328] text-[32px]">The Community Showcase</h1>
            <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">Welcome to the community showcase. Here you can see all the amazing projects that the community has been working on. Feel free to share your own project as well.</p>
        </div>

        <div className="mt-16">
            <FormField />
        </div>

        <div className="mt-10">
        {loading ? (
            <div className="flex justify-center items-center">
                <Loader />
            </div>
        ) : (
            <>
            {searchText && (
                <h2 className="font-medium text-[#666e75] text-xl mb-3">Search results for "{searchText}"</h2>
            )}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-col-2 grid-cols-1 gap-6">
                {searchText ? (
                    <RenderCards 
                        data={[]}
                        title="No Search results found" />
                ) : (
                    <RenderCards 
                        data={[]}
                        title="No posts found" />
                )}
            </div>

            </>
        )}
        </div>
    </section>
  )
}

export default Home
