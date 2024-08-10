import {clickerAvatar} from '@/assets/images';
import styles from './Clicker.module.css';
import React from 'react';


interface Props {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Clicker: React.FC<Props> = ({onClick}) => {
    return (
        <div className={styles.block} onClick={(e) => onClick(e)}>
            <div className={styles.innerBlock} >
                <div className="w-full h-full rounded-full circle-inner">
                    <img src={clickerAvatar} alt="Clicker avatar" className={styles.avatar}/>
                </div>
            </div>
        </div>
    );
};

export default Clicker;