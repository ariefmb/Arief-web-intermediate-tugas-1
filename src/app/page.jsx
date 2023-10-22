import React from 'react';
import Link from 'next/link';
import MovieCard from '@/components/movieCard';
import AnimeCard from '@/components/animeCard';
import {Roboto} from 'next/font/google';

const roboto = Roboto({
    weight: '500',
    subsets: ['latin'],
});

const Home = () => {

    console.log(`\nAPP NAME: ${process.env.APP_NAME}`);
    console.log(`Description: ${process.env.DESC_APP}`);

    return (
        <main>
            <h1 className="font-bold text-center text-xl">
                SELAMAT DATANG DI WEBSITE MOVIE
            </h1>
            <div className="popular-list">
                <MovieCard />
            </div>
            <div className="anime-list">
                <AnimeCard />
            </div>
            <div className={roboto.className}>
                <Link
                    href="\responsive"
                    className="flex justify-center transition duration-5000 p-3 font-bold text-center bg-green-300 rounded-lg hover:bg-green-500"
                >
                    Responsive Page
                </Link>
            </div>
            <div className=''>Components</div>
        </main>
    );
};

export default Home;
