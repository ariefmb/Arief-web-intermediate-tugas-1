import Image from 'next/image';
import moving from '@/assets/moving.jpeg';
import Link from 'next/link';

const Moving = () => {
    return (
        <div>
            <Image src={moving} alt="" width={500} height={550} />
            <br />
            <h1 className="font-bold">Ini detail film Moving</h1>
            <p>
                Drama itu mengisahkan kehidupan orang-orang dengan kekuatan
                super yang menghadapi ancaman misterius di Korea. Semua itu
                bermula pada 1990-an, ketika Badan Intelijen Korea (NIS)
                mendirikan tim elite rahasia yang beranggotakan manusia super.
                Anggota satuan elite itu ditugaskan untuk menyelesaikan berbagai
                misi mustahil dengan menggunakan kekuatan super mereka. Beberapa
                personel satuan elite itu, yakni Jang Joo-won (Ryu Seung-ryong),
                Lee Mi-hyeon (Han Hyo-joo), hingga Kim Doo-shik (Zo In-sung).
            </p>
            <br />
            <Link href="/" className="bg-blue-500 rounded-lg">
                <button>Klik kembali ke Home</button>
            </Link>
        </div>
    );
};

export default Moving;
