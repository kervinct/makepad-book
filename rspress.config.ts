import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  base: '/makepad-treasures/',
  root: path.join(__dirname, 'docs'),
  title: 'Makepad Treasures',
  description: 'A book for makepad, want to quickly and easily to help your use makepad.',
  lang: 'zh',
  icon: '/rspress-icon.png',
  logo: {
    light: '/logo_makepad.svg',
    dark: '/logo_makepad.svg',
  },
  markdown: {
    showLineNumbers: true,
    checkDeadLinks: true,
  },
  route: {
    cleanUrls: true,
  },
  themeConfig: {
    enableContentAnimation: true,
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/mindpool/makepad-treasures' },
    ],
    footer: {
      message: '© 2024 MindPool (Makepad Treasures) Team. All Rights Reserved.',
    },
    locales: [
      {
        lang: 'zh',
        label: '简体中文',
        editLink: {
          docRepoBaseUrl:
            'https://github.com/mindpool/makepad-treasures/tree/main/docs',
          text: '📝 在 GitHub 上编辑此页',
        },
        searchNoResultsText: '未搜索到相关结果',
        searchPlaceholderText: '搜索文档',
        searchSuggestedQueryText: '可更换不同的关键字后重试',
      },
      {
        lang: 'en',
        label: 'English',
        editLink: {
          docRepoBaseUrl:
            'https://github.com/mindpool/makepad-treasures/tree/main/docs',
          text: '📝 Edit this page on GitHub',
        },
      }
    ]
  },
});
