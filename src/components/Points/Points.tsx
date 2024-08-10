import React from 'react';
import {IClicks} from '@/utils/types';
import {POINTS_TO_ADD} from '@/utils/constants.ts';
import styles from './Points.module.css'

interface Props {
    clicks: IClicks [];
    handleAnimationEnd: (id: number) => void;
}

const Points: React.FC<Props> = ({clicks, handleAnimationEnd}) => {
    return clicks.map((click) => (
        <div
            key={click.id}
            className={styles.text}
            style={{
                top: `${click.y - 42}px`,
                left: `${click.x - 28}px`
            }}
            onAnimationEnd={() => handleAnimationEnd(click.id)}
        >
            {POINTS_TO_ADD}
        </div>
    ));
};

export default Points;