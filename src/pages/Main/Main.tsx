import React, {useState} from 'react';
import Clicker from '@/components/Clicler/Clicker.tsx';
import Points from '@/components/Points/Points.tsx';
import Total from '@/components/Total/Total.tsx';

import { IClicks } from '@/utils/types';
import { POINTS_TO_ADD } from '@/utils/constants.ts';

import styles from './Main.module.css';


const Main = () => {
    const [points, setPoints] = useState(0);
    const [clicks, setClicks] = useState<IClicks[]>([]);

    const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
        setTimeout(() => {
            card.style.transform = '';
        }, 100);

        setPoints(points + POINTS_TO_ADD);
        setClicks([...clicks, {id: Date.now(), x: e.pageX, y: e.pageY}]);
    };

    const handleAnimationEnd = (id: number) => {
        setClicks((prevClicks) => prevClicks.filter(click => click.id !== id));
    };

    return (
        <div className="container">
            <div className={styles.block}>
                <Total points={points}/>
                <Clicker onClick={handleCardClick}/>
                <Points clicks={clicks} handleAnimationEnd={handleAnimationEnd}/>
                <h4 className={styles.title}>Welcome to Emir's hamster clicker!</h4>
                <p className={styles.subtitle}>Click to earn money (but you'll never get it 😜)</p>
            </div>
        </div>
    );
};

export default Main;