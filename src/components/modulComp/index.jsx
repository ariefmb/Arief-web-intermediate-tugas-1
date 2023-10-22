import styles from './css/style.module.css';
import {Montserrat} from 'next/font/google';

const mont = Montserrat({
    weight: '500',
    subsets: ['cyrillic'],
});

const ModulComp = () => {
    return (
        <div className={`${styles.modComp} ${mont.className}`}>
            Modul Component
        </div>
    );
};
export default ModulComp;
