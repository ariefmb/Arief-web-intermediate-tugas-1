import Image from 'next/image';
import moving from 'assets/moving.jpeg';
import Link from 'next/link';

const Moving = () => {
    return (
        <div>
            <Image src={moving} alt="" width={500} height={550} />
            <br />
            <h1 className="font-bold">Ini detail film Moving</h1>
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

export default Moving;
