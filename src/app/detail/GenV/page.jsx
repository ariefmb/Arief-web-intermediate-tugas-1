import Image from 'next/image';
import genV from 'assets/genV.jpeg';
import Link from 'next/link';

const GenV = () => {
    return (
        <div>
            <Image src={genV} alt="" width={500} height={550} />
            <br />
            <h1 className="font-bold">Ini detail film Gen-V</h1>
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

export default GenV;
