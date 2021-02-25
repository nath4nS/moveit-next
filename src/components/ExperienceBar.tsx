import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentExperience, experienceToNevelLevel } = useContext(ChallengesContext);

    const percentToNevelLevel = Math.round(currentExperience * 100) / experienceToNevelLevel;

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
                <div>
                    <div style={{ width: `${percentToNevelLevel}` }}/>

                    <span className={styles.currentExperience} style={{ left: `${percentToNevelLevel}` }}>
                        {currentExperience} xp
                    </span>
                </div>
            <span>{experienceToNevelLevel} xp</span>
        </header>
    );
}