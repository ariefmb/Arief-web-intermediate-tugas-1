import {Oswald} from 'next/font/google';

const oswald = Oswald({
    weight: '500',
    subsets: ['latin'],
});

const GlobalComp = () => {
    return (
        <div className={`glob-comp ${oswald.className}`}>Global Component</div>
    );
};
export default GlobalComp;
