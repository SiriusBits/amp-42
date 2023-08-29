import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Technology Services',
      links: [
        {
          text: 'IT Strategy & Roadmapping',
          href: getPermalink('/technology-services/it-strategy-and-roadmapping'),
        },
        {
          text: 'Vendor Advisory & Resource Planning',
          href: getPermalink('/technology-services/vendor-advisory-and-resource-planning'),
        },
        {
          text: 'M&A Systems Integration',
          href: getPermalink('/technology-services/m-and-a-systems-integration'),
        },
        {
          text: 'Strategy Alignment Workshops',
          href: getPermalink('/technology-services/strategy-alignment-workshops'),
        },
        {
          text: 'Full-Stack Development Services',
          href: getPermalink('/technology-services/full-stack-development-services'),
        },
      ],
    },
    {
      text: 'Data Consulting',
      links: [
        {
          text: 'Data Strategy & Governance',
          href: getPermalink('/data-consulting/data-strategy-and-governance'),
        },
        {
          text: 'Data Unification & Activation',
          href: getPermalink('/data-consulting/data-unification-and-activation'),
        },
        {
          text: 'DataOps Planning & Implementation',
          href: getPermalink('/data-consulting/dataops-planning-and-implementation'),
        },
        {
          text: 'Data Management & Operations Consulting',
          href: getPermalink('/data-consulting/data-management-and-operations-consulting'),
        },
        {
          text: 'Data Migration Consulting',
          href: getPermalink('/data-consulting/data-migration-consulting'),
        },
       
      ],
    },
    {
      text: 'Work',
      href: '#',
    },
    {
      text: 'About',
      href: '#',
    },
  ],
  actions: [
    { type: 'button', text: 'Contact', href: '/contact' }
  ],
};
  
export const footerData = {
  links: [
    {
      title: 'Technology Services',
      links: [
        {
          text: 'IT Strategy & Roadmapping',
          href: getPermalink('/technology-services/it-strategy-and-roadmapping'),
        },
        {
          text: 'Vendor Advisory & Resource Planning',
          href: getPermalink('/technology-services/vendor-advisory-and-resource-planning'),
        },
        {
          text: 'M&A Systems Integration',
          href: getPermalink('/technology-services/m-and-a-system-integration'),
        },
        {
          text: 'Strategy Alignment Workshops',
          href: getPermalink('/technology-services/strategy-alignment-workshops'),
        },
        {
          text: 'Full-Stack Development Services',
          href: getPermalink('/technology-services/strategy-alignment-workshops'),
        },
      ],
    },
    {
      title: 'Data Consulting',
      links: [
        {
          text: 'Data Strategy & Governance',
          href: getPermalink('/data-consulting/data-strategy-and-governance'),
        },
        {
          text: 'Data Unification & Activation',
          href: getPermalink('/data-consulting/data-unification-and-activation'),
        },
        {
          text: 'DataOps Planning & Implementation',
          href: getPermalink('/data-consulting/dataops-planning-and-implementation'),
        },
        {
          text: 'Data Management & Operations Consulting',
          href: getPermalink('/data-consulting/data-management-and-operations-consulting'),
        },
        {
          text: 'Data Migration Consulting',
          href: getPermalink('/data-consulting/data-migration-consulting'),
        },
      ],
    },
    {
      title: 'Work',
      links: [
        { text: 'Hire Us', href: '#' },
        { text: 'Work with Us', href: '#' },
        { text: 'Customer Stories', href: '#' },
      ],
    },
    {
      title: 'About',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Partners & Vendors', href: '#' },
        { text: 'Contact Us', href: '#' },

      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/SiriusBits/Forsemble' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(~/assets/images/favicon.svg)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://www.amp42.com/"> AMP42</a> · All rights reserved.
  `,
};
