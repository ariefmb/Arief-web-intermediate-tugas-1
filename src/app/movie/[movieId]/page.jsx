import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {getMovieData} from '@/components/movieData';

const detailMovie = async ({params}) => {
    const movieData = await getMovieData(params.movieId);

    if (!movieData) {
        return (
            <div className="not-found">
                <div className="font-bold">MOVIE NOT FOUND!</div>
                <Link href="\movie">
                    <button className="p-2 text-white bg-blue-300 rounded-lg hover:bg-blue-500">
                        Kembali ke Movie Page
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <>
            <div className="movie-detail-page">
                <Image
                    src={movieData.image}
                    alt=""
                    width={300}
                    height={500}
                    blurDataURL="blur"
                />
                <div className="sinopsis">
                    <h1 className="font-bold">{movieData.title}</h1>
                    <p>{movieData.description}</p>
                </div>
            </div>
            <div>
                <Link href="\movie">
                    <button className="px-[7rem] py-[3rem] rounded-lg m-[2rem] text-[#810556] bg-green-300 hover:bg-green-500">
                        Arbitrary Test
                    </button>
                </Link>
            </div>
        </>
    );
};
export default detailMovie;
