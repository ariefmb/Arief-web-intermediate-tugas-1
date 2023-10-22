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
                Black Mirror adalah serial antologi yang menggali
                konsep-konsep futuristik dan teknologi dalam masyarakat modern.
                Setiap episode menghadirkan cerita berbeda tentang dampak
                teknologi terhadap kehidupan manusia, sering kali dengan pesan
                yang mencekam tentang dunia digital dan ketergantungan pada
                perangkat modern. Serial ini mengajukan pertanyaan etis yang
                mendalam tentang masa depan teknologi, komunikasi, dan perilaku
                manusia.
            </p>
            <br />
            <Link href="/" className="bg-blue-500">
                <button>Klik kembali ke Home</button>
            </Link>
        </div>
    );
};

export default BlackMirror;
