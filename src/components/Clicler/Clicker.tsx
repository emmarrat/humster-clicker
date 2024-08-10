import {clickerAvatar} from '@/assets/images';
import styles from './Clicker.module.css';

const Clicker = () => {
    return (
        <div className={styles.block}>
            <div
                className="w-80 h-80 p-4 rounded-full circle-outer"
            >
                <div className="w-full h-full rounded-full circle-inner">
                    <img src={clickerAvatar} alt="Clicker avatar" className="w-full h-full"/>
                </div>
            </div>
        </div>
    );
};

export default Clicker;