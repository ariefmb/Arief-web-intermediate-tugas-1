import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {getAnimeData} from '@/components/animeData';

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
                <Image
                    src={animeData.image}
                    alt=""
                    width={300}
                    height={500}
                    placeholder="blur"
                    blurDataURL={animeData.image}
                />
                <div className="sinopsis">
                    <h1 className="font-bold">{animeData.title}</h1>
                    <p>{animeData.description}</p>
                </div>
            </div>
            <div>
                <Link href="\anime">
                    <button className="px-[7rem] py-[3rem] rounded-lg m-[2rem] font-bold text-[#ffff] bg-green-300 hover:bg-green-500">
                        Arbitrary Test
                    </button>
                </Link>
            </div>
        </>
    );
};
export default detailAnime;
