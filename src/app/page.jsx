'use client';

import Link from 'next/link';
import MovieCard from '@/components/movieCard';
import AnimeCard from '@/components/animeCard';
import Responsive from './responsive/page';

const Home = () => {
    return (
        <main>
            <h1 className="font-bold text-center">
                SELAMAT DATANG DI WEBSITE MOVIE
            </h1>
            <div className="popular-list">
                <MovieCard />
            </div>
            <div className="anime-list">
                <AnimeCard />
            </div>
            <div>
                <Link
                    href="\responsive"
                    className="flex p-3 font-bold text-center bg-green-200 rounded-lg hover:bg-green-500"
                >
                    Responsive Page
                </Link>
            </div>
        </main>
    );
};

export default Home;
