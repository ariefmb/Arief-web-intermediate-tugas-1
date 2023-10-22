import Link from 'next/link';
import Image from 'next/image';
import genV from '@/assets/genV.jpeg';
import loki from '@/assets/loki2.jpeg';
import moving from '@/assets/moving.jpeg';
import blkmirror from '@/assets/blackMirror.jpg';

const MovieCard = () => {
    return (
        <>
            <div className="top-movie-list">
                <h1 className="font-bold">Movie List</h1>
                <Link href="\movie">
                    <p className="underline hover:cursor-pointer hover:text-blue-500">
                        see all
                    </p>
                </Link>
            </div>
            <div className="grid grid-cols-6 gap-2">
                <Link href="/detail/GenV">
                    <picture>
                        <Image src={genV} alt="" width={500} height={650} priority/>
                    </picture>
                </Link>
                <Link href="/detail/Loki">
                    <picture>
                        <Image src={loki} alt="" width={500} height={650} />
                    </picture>
                </Link>
                <Link href="/detail/Moving">
                    <picture>
                        <Image src={moving} alt="" width={500} height={650} />
                    </picture>
                </Link>
                <Link href="/detail/BlackMirror">
                    <picture>
                        <Image
                            src={blkmirror}
                            alt=""
                            width={500}
                            height={650}
                        />
                    </picture>
                </Link>
                <br />
            </div>
        </>
    );
};

export default MovieCard;
