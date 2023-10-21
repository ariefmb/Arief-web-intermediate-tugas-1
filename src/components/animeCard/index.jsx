require('dotenv').config();

import Link from 'next/link';
import {useEffect} from 'react';

const AnimeCard = () => {
    useEffect(() => {
        console.log(process.env.NEXT_PUBLIC_WIKIPEDIA_URL),
            console.log(process.env.NEXT_PUBLIC_PINTEREST_URL);
    }, []);
    return (
        <>
            <div className="top-anime-list">
                <h1 className="font-bold">Anime List</h1>
                <Link href="\anime">
                    <p className="underline hover:cursor-pointer hover:text-blue-500">
                        see all
                    </p>
                </Link>
            </div>
            <div className="grid grid-cols-6 gap-5">
                <picture>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/7/7e/Fullmetal_Alchemist_Brotherhood_key_visual.png"
                        alt=""
                    />
                    <p className="text-center font-bold">
                        Fullmetal Alchemist Brotherhood
                    </p>
                </picture>
                <picture>
                    <img
                        src="https://i.pinimg.com/564x/cd/17/a0/cd17a0714a4f1dcd5a7d979d8bc25aec.jpg"
                        alt=""
                    />
                    <p className="text-center font-bold">Shingeki no Kyojin</p>
                </picture>
                <picture>
                    <img
                        src="https://i.pinimg.com/564x/b8/98/ab/b898abd779491464d4b5ce881e43ca32.jpg"
                        alt=""
                    />
                    <p className="text-center font-bold">Kimetsu no Yaiba</p>
                </picture>
            </div>
        </>
    );
};
export default AnimeCard;
