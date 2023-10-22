import {Poppins} from 'next/font/google';

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const Responsive = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-black bg-slate800">
            <div className="responsive w-full p-4 bg-blue-200 rounded-lg shadow-md md:w-3/4 lg:w-1/2 xl:w-2/3">
                <div className={poppins.className}>
                    <h1 className="mb-4 text-3xl font-semibold text-center text-slate-800">
                        This is the responsive Page
                    </h1>
                </div>
                <p className="text-lg text-center text-slate-800">
                    You can make the content adapt to the size of the screen
                </p>
            </div>
        </div>
    );
};
export default Responsive;
