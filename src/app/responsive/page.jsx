import {Poppins} from 'next/font/google';
import Link from 'next/link';

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const Responsive = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-black">
            <Link
                href="/"
                className="responsive text-center w-full p-4 bg-blue-500 rounded-lg shadow-md xl:w-full lg:w-3/4 md:w-1/2 sm:w-2/3"
            >
                <div className={poppins.className}>
                    <h1 className="mb-4 text-3xl font-bold text-center text-slate-800">
                        Responsive Page
                    </h1>
                    <p className="font-semibold">
                        Kamu bisa adjust screen semaumu
                    </p>
                </div>
                <p className="text-lg text-center text-slate-800">
                    Klik kembali ke Home
                </p>
            </Link>
        </div>
    );
};
export default Responsive;
