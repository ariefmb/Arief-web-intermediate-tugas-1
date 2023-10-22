import Image from 'next/image';
import genV from '@/assets/genV.jpeg';
import Link from 'next/link';

const GenV = () => {
    return (
        <div>
            <Image src={genV} alt="" width={500} height={550} />
            <br />
            <h1 className="font-bold">Ini detail film Gen-V</h1>
            <p>
                Gen V bermula dari kehidupan Marie Moreau (Jaz Sinclair) yang
                menyadari kekuatan supernya lebih lambat daripada anak-anak
                super lainnya. Ketika remaja, ia baru menyadari bisa menggunakan
                darahnya menjadi senjata mematikan. Hal tersebut sangat
                memengaruhi kehidupannya hingga berusaha keras masuk Godolkin
                University.
            </p>
            <br />
            <Link href="/" className="bg-blue-500 rounded-lg">
                <button>Klik kembali ke Home</button>
            </Link>
        </div>
    );
};

export default GenV;
