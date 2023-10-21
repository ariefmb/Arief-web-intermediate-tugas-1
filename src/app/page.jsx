'use client';

import MovieCard from '@/components/movieCard';
import AnimeCard from '@/components/animeCard';
import Link from 'next/link';

const Home = () => {
    return (
        <main>
            <h1 className="font-bold">SELAMAT DATANG DI WEBSITE MOVIE</h1>
            <div className="popular-list">
                <h1 className='font-bold'>Popular Series List</h1>
                <MovieCard />
            </div>
            <div className="anime-list">
                <AnimeCard />
            </div>
        </main>
    );
};

export default Home;
