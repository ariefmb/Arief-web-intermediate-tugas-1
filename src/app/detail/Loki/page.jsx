import Image from 'next/image';
import loki from '@/assets/loki2.jpeg';
import Link from 'next/link';

const Loki = () => {
    return (
        <div>
            <Image src={loki} alt="" width={200} height={250} />
            <br />
            <h1 className="font-bold">Ini detail film Loki</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem corporis necessitatibus sequi, deleniti veritatis
                quibusdam inventore, repellat ex voluptas placeat beatae, itaque
                harum pariatur quia mollitia possimus. Cupiditate, dolores hic?
            </p>
            <br />
            <Link href="/" className="bg-blue-500">
                <button>Klik kembali ke Home</button>
            </Link>
        </div>
    );
};

export default Loki;
