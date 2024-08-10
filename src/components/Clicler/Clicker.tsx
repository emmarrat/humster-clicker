import {clickerAvatar} from '@/assets/images';
import styles from './Clicker.module.css';
import React from 'react';


interface Props {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Clicker: React.FC<Props> = ({onClick}) => {
    return (
        <div className={styles.block}>
            <div onClick={(e) => onClick(e)}>
                <div className="w-full h-full rounded-full circle-inner">
                    <img src={clickerAvatar} alt="Clicker avatar" className="w-full h-full"/>
                </div>
            </div>
        </div>
    );
};

export default Clicker;