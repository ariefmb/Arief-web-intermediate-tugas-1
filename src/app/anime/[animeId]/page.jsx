import React from 'react';
import {getAnimeData, getAnimeId} from '@/components/animeData';
import Image from 'next/image';
import Link from 'next/link';

const detailAnime = async ({params}) => {
    const animeData = await getAnimeData(params.animeId);

    if (!animeData) {
        return (
            <div className="not-found">
                <div className="font-bold">ANIME NOT FOUND!</div>
                <Link href="\anime">
                    <button className="p-2 text-white bg-blue-300 rounded-lg hover:bg-blue-500">
                        Kembali ke Anime Page
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <>
            <div className="anime-detail-page">
                <Image src={animeData.image} alt="" width={300} height={500} />
                <div className="sinopsis">
                    <h1>{animeData.title}</h1>
                    <p>{animeData.description}</p>
                </div>
            </div>
            <div>
                <Link href="\anime">
                    <button className="px-[2rem] py-[1rem] rounded-lg m-[2rem] text-[#810556] bg-green-300 hover:bg-green-500">
                        Arbitrary Test
                    </button>
                </Link>
            </div>
        </>
    );
};
export default detailAnime;
