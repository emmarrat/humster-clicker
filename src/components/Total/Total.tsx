import React from 'react';
import {dollarCoin} from '@/assets/images';

import styles from './Total.module.css';

interface Props {
    points: number;
}

const Total: React.FC<Props> = ({points}) => {
    return (
        <div className={styles.block}>
            <div className={styles.innerBlock}>
                <img src={dollarCoin} alt="Dollar Coin" className={styles.coin}/>
                <p className={styles.points}>{points}</p>
            </div>
        </div>
    );
};

export default Total;