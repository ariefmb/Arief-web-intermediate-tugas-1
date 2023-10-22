import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import genV from '@/assets/genV.jpeg';
import loki from '@/assets/loki2.jpeg';
import moving from '@/assets/moving.jpeg';
import blkmirror from '@/assets/blackMirror.jpg';

const Movie = () => {
    return (
        <div>
            <h1 className="font-bold text-center text-xl">
                SELAMAT DATANG DI MOVIE LIST
            </h1>
            <p>Berikut beberapa movie popular yang dapat kamu lihat.</p>
            <div className="movie-card grid grid-cols-4 gap-1">
                <ul>
                    <p className="font-bold">Gen V</p>
                    <Link className="hover:cursor-pointer" href="./movie/1">
                        <Image src={genV} alt="" width={350} height={550} />
                    </Link>
                </ul>
                <ul>
                    <p className="font-bold">Loki Season 2</p>
                    <Link className="hover:cursor-pointer" href="./movie/2">
                        <Image src={loki} alt="" width={350} height={550} />
                    </Link>
                </ul>
                <ul>
                    <p className="font-bold">Moving</p>
                    <Link className="hover:cursor-pointer" href="./movie/3">
                        <Image src={moving} alt="" width={350} height={550} />
                    </Link>
                </ul>
                <ul>
                    <p className="font-bold">Black Mirror</p>
                    <Link className="hover:cursor-pointer" href="./movie/4">
                        <Image
                            src={blkmirror}
                            alt=""
                            width={350}
                            height={550}
                        />
                    </Link>
                </ul>
            </div>
        </div>
    );
};
export default Movie;
