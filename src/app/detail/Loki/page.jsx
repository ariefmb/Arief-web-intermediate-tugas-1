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
                Dalam petualangannya Loki mengalami time slip atau keadaan
                dimanan dirinya lompat dari satu waktu ke waktu lain. Hal ini
                menyebabkan garis waktu semakin parah dan berpotensi memunculkan
                varian dari He Who Remains yakni Kang The Qonqueror muncul untuk
                menguasai semesta.
            </p>
            <br />
            <Link href="/" className="bg-blue-500 rounded-lg">
                <button>Klik kembali ke Home</button>
            </Link>
        </div>
    );
};

export default Loki;
