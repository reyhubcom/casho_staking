import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Staking',
      links: [
        {
          text: 'Staking Bitcoin',
          href: getPermalink('/home/stakeBTC'),
        },
        {
          text: 'Stake [ ETH ]',
          href: getPermalink('/home/stakeETH'),
        },
        {
          text: 'Stake [ SOL ]',
          href: getPermalink('/home/stakeSOL'),
        },
        {
          text: 'Stake [ MON ]',
          href: getPermalink('/home/stakeMON'),
        },
      ],
    },
    {
      text: 'Products',
      links: [
        {
          text: 'Liquidity Pool',
          href: getPermalink('/home/liquidity'),
        },
        {
          text: 'Yields',
          href: getPermalink('/services'),
        },
        {
          text: 'Farming',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Lending',
          href: getPermalink('/about'),
        },
        {
          text: 'Deposit',
          href: getPermalink('/contact'),
        },
       
      ],
    },
    {
      text: 'Lending',
      links: [
        {
          text: 'Lend [ ETH ]',
          href: getPermalink('/lending/ETH'),
        },
        {
          text: 'Lend [ SOL ]',
          href: getPermalink('/lending/SOL'),
        },
        {
          text: 'Lend [ BNB ]',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Lend [ MON ]',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'ALL Lending',
          href: getPermalink('/landing/pre-launch'),
        },
        
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
  ],
  actions: [{ text: 'EXCHANGE', href: '/home/exchange', target: '' }],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'Liquidity Pool', href: '/home/liquidity' },
        { text: 'Yields', href: '#' },
        { text: 'Farming', href: '#' },
        { text: 'Lending', href: '#' },
        { text: 'Deposit', href: '#' },
        { text: 'Locked', href: '#' },
        { text: 'Leverage Farming', href: '#' },
      ],
    },
    {
      title: 'Networks',
      links: [
        { text: 'Ethereum', href: '/home/stakeETH' },
        { text: 'Solana', href: '/home/stakeSOL' },
        { text: 'Binance', href: '/home/stakeBNB' },
        { text: 'Monad', href: '/home/stakeMON' },
        { text: 'All Networks', href: '/home/staking' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="#"> Rey</a> · 2026 CASHo.xyz All Rights Reserved.
  `,
};
