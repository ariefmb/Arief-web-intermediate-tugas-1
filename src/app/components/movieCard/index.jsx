import Link from 'next/link';
import Image from 'next/image';
import genV from 'assets/genV.jpeg';
import loki from 'assets/loki2.jpeg';
import moving from 'assets/moving.jpeg';
import pocong from 'assets/pocongGundul.jpg';

const movieCard = () => {
    return (
        <div className="grid grid-cols-6 gap-5">
            <Link href="/detail/GenV">
                <ul>
                    <Image src={genV} alt="" width={500} height={650} />
                </ul>
            </Link>
            <Link href="/detail/Loki">
                <ul>
                    <Image src={loki} alt="" width={500} height={650} />
                </ul>
            </Link>
            <Link href="/detail/Moving">
                <ul>
                    <Image src={moving} alt="" width={500} height={650} />
                </ul>
            </Link>
            <Link href="/detail/PocongGundul">
                <ul>
                    <Image src={pocong} alt="" width={500} height={650} />
                </ul>
            </Link>
            <br />
        </div>
    );
};

export default movieCard;
