import { memo, useCallback } from 'react';
import { useNavigate } from 'rspress/runtime';
import styles from './index.module.scss';

export interface HeroProps {
    logo: string;
    title: string;
    subTitle: string;
    description: string;
    getStartedButtonText: string;
    learnMoreButtonText: string;
    onClickGetStarted: () => void;
    onClickLearnMore: () => void;
}

const Hero = memo(({
    logo,
    title,
    subTitle,
    description,
    getStartedButtonText,
    learnMoreButtonText,
    onClickGetStarted,
    onClickLearnMore,
}: HeroProps) => {
  return (
    <section className={styles.hero}>
        <div className={styles['hero-inner']}>
            <div className={styles.logo}>
                <img className={styles['logo-img']} src={logo} alt='logo' />
            </div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subTitle}</p>
            <p className={styles.description}>{description}</p>
            <div className={styles['button-group']}>
                <button className={styles['get-started']} onClick={onClickGetStarted}>{getStartedButtonText}</button>
                <button className={styles['learn-more']} onClick={onClickLearnMore}>{learnMoreButtonText}</button>
            </div>
        </div>
    </section>
  );
});

{/* <BaseHero
    showStars
    title="Makepad Book"
    subTitle="Blazingly Fast Cross Platform Rust UIs"
    description="Make with Rust, Pad your UI with smoothness"
    getStartedButtonText="Get Started"
    learnMoreButtonText="Learn More"
/> */}

export default Hero;
