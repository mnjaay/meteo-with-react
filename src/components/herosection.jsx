import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../functions/api';
import Card from './card';


function HeroSection() {
    const [posts, setPosts] = useState([]);
    const [ville, setVille] = useState("Dakar")

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await fetchPosts(ville);
                setPosts(data)
            } catch (error) {
                console.log(error);
            }
        };

        getPosts();
    }, []);

    const ChangeLocalite =async () => {
      try {
        const data = await fetchPosts(ville);
        setPosts(data)
    } catch (error) {
        console.log(error);
    }
    }
  return (
    <div><section class="w-full">
    <div class="w-full h-[520px] bg-[url('https://www.science-et-vie.com/wp-content/uploads/scienceetvie/2021/07/comment-prevoir-meteo-scaled.jpg')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center ">
        <div>
            <h1 class="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-semibold bg-gray-800 p-2 bg-opacity-40 rounded-sm">METEO DU MONDE</h1>
        </div>
        <div class="w-full mx-auto">
        <div class="max-w-md mx-auto m-5">
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Rechercher</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input 
                                type="text"  
                                onChange={(e) => setVille(e.target.value)} 
                                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Search Mockups, Logos..." 
                                required 
                            />
                            <button  onClick={ChangeLocalite} class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Rechercher</button>
                        </div>
                    </div>
        </div>
    </div>
</section>
<div className="m-5">
<Card 
        Ville={posts && posts.name} 
        temperature={posts && posts.main && posts.main.temp} 
        temp_min={posts && posts.main && posts.main.temp_min}
        temp_max={posts && posts.main && posts.main.temp_max} 
        humidity={posts && posts.main && posts.main.humididty}
        speed={posts && posts.main && posts.wind.speed}/>                

</div>
</div>
  )
}

export default HeroSection