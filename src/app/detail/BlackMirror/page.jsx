import Image from 'next/image';
import blckmirror from '@/assets/blackMirror.jpg';
import Link from 'next/link';

const BlackMirror = () => {
    return (
        <div>
            <Image src={blckmirror} alt="" width={500} height={550} />
            <br />
            <h1 className="font-bold">Ini detail film Black Mirror</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem corporis necessitatibus sequi, deleniti veritatis
                quibusdam inventore, repellat ex voluptas placeat beatae, itaque
                harum pariatur quia mollitia possimus. Cupiditate, dolores hic?
            </p>
            <br />
            <Link href="/" className='bg-blue-500'>
                <button>Klik kembali ke Home</button>
            </Link>
        </div>
    );
};

export default BlackMirror;
