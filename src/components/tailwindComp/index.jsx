import {Playfair_Display_SC} from 'next/font/google';

const playfair = Playfair_Display_SC({
    weight: '400',
    subsets: ['latin'],
});
const TailwindComp = () => {
    return (
        <div
            className={`bg-gray-500 rounded-lg transition duration-3000 hover:cursor-pointer hover:bg-gray-400 ${playfair.className}`}
        >
            Tailwind Component
        </div>
    );
};
export default TailwindComp;
