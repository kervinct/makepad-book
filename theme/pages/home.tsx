import { useNavigate } from "rspress/runtime";
import FullyFeatured from "../components/Home/FullyFeatured";
import Hero from "../components/Home/Hero";
import { useI18n, useI18nUrl } from "../i18n";
import { useCallback } from "react";

export function HomeLayout() {

    const tUrl = useI18nUrl();
    const t = useI18n();

    const navigate = useNavigate();
    const handleClickGetStarted = useCallback(() => {
      navigate(tUrl('/makepad-book/guide/start/introduction'));
    }, [tUrl, navigate]);

    const handleClickLearnMore = useCallback(() => {
      navigate(tUrl('/makepad-book/guide/start/introduction'));
    }, [tUrl, navigate]);

    return (
        <>
            <Hero
                logo="/robius-logo-680.png"
                title={t('heroTitle')}
                subTitle={t('heroSlogan')}
                description={t('heroSubSlogan')}
                getStartedButtonText={t('getStarted')}
                learnMoreButtonText={t('learnMore')}
                onClickGetStarted={handleClickGetStarted}
                onClickLearnMore={handleClickLearnMore}
            />
            <FullyFeatured />
        </>
    )
}
