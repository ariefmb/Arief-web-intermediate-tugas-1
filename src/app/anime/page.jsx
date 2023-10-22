import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Anime = () => {
    return (
        <div>
            <h1 className="font-bold text-center text-xl">SELAMAT DATANG DI ANIME LIST</h1>
            <p>Berikut beberapa anime popular yang dapat kamu lihat.</p>
            <div className="anime-card grid grid-cols-3 gap-1">
                <ul>
                    <p className="font-bold">Fullmetal Alchemist Brotherhood</p>
                    <Link className='hover:cursor-pointer' href="./anime/1">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/en/7/7e/Fullmetal_Alchemist_Brotherhood_key_visual.png"
                            alt=""
                            width={350}
                            height={550}
                        />
                    </Link>
                </ul>
                <ul>
                    <p className="font-bold">Shingeki no Kyojin</p>
                    <Link className='hover:cursor-pointer' href="./anime/2">
                        <Image
                            src="https://i.pinimg.com/564x/cd/17/a0/cd17a0714a4f1dcd5a7d979d8bc25aec.jpg"
                            alt=""
                            width={350}
                            height={550}
                        />
                    </Link>
                </ul>
                <ul>
                    <p className="font-bold">Kimetsu no Yaiba</p>
                    <Link className='hover:cursor-pointer' href="./anime/3">
                        <Image
                            src="https://i.pinimg.com/564x/b8/98/ab/b898abd779491464d4b5ce881e43ca32.jpg"
                            alt=""
                            width={350}
                            height={550}
                        />
                    </Link>
                </ul>
                <ul>
                    <p className="font-bold">Bleach: Thousand Year Blood War</p>
                    <Link className='hover:cursor-pointer' href="./anime/4">
                        <Image
                            src="https://i.pinimg.com/564x/64/68/f4/6468f4516814b2bd80aca8477f017b1f.jpg"
                            alt=""
                            width={350}
                            height={550}
                        />
                    </Link>
                </ul>
                <ul>
                    <p className="font-bold">One Piece</p>
                    <Link className='hover:cursor-pointer' href="./anime/5">
                        <Image
                            src="https://i.pinimg.com/564x/3b/06/c8/3b06c8f86dc393ec9284f946c6184d6b.jpg"
                            alt=""
                            width={350}
                            height={550}
                        />
                    </Link>
                </ul>
                <ul>
                    <p className="font-bold">Jujutsu Kaisen</p>
                    <Link className='hover:cursor-pointer' href="./anime/6">
                        <Image
                            src="https://i.pinimg.com/564x/61/7f/31/617f31f38693db9e82520a5e15e864fc.jpg"
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
export default Anime;
