import { useLang, usePageData } from 'rspress/runtime';
import Theme from 'rspress/theme';
import Announcement from './components/Announcement';
import { HomeLayout } from './pages/home';
import { useI18nUrl } from './i18n';

const Layout = () => {
    const { page } = usePageData();
    const lang = useLang();
    const tUrl = useI18nUrl();
    const ANNOUNCEMENT_URL= tUrl("/guide/start/introduction");
    return (
      <Theme.Layout
        beforeNav={
          <Announcement
            href={ANNOUNCEMENT_URL}
            message={
              lang === 'en'
                ? 'Makepad Book(V1) has been released!🦀️'
                : 'Makepad Book 第一版已经发布！🦀️'
            }
            localStorageKey="makepad-book-announcement-closed"
            display={page.pageType === 'home'}
          />
        }
      />
    )
};

export * from 'rspress/theme';

export default {
  ...Theme,
  Layout,
  HomeLayout,
};
