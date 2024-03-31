import { BiRocket as ContactIcon } from 'react-icons/bi';
import {
  BsEnvelopeAtFill as EmailIcon,
  BsFacebook as FacebookIcon,
  BsGithub as GithubIcon,
  BsTwitter as TwitterIcon,
} from 'react-icons/bs';
import {
  FiBookOpen as LearnIcon,
  FiCoffee as ProjectIcon,
  FiCpu as DashboardIcon,
  FiPieChart as AnalyticsIcon,
  FiPocket as HomeIcon,
  FiRss as BlogIcon,
  FiUser as ProfileIcon,
} from 'react-icons/fi';
import { PiChatCircleDotsBold as ChatIcon } from 'react-icons/pi';
import { SiJavascript } from 'react-icons/si';

import { MenuItemProps } from '../types/menu';

const iconSize = 20;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: '主頁',
    href: '/',
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home',
    type: 'Pages',
  },
  {
    title: '個人面板',
    href: '/dashboard',
    icon: <DashboardIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Dashboard',
    type: 'Pages',
  },
  {
    title: '作品集',
    href: '/projects',
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Projects',
    type: 'Pages',
  },
  {
    title: '部落格',
    href: '/blog',
    icon: <BlogIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Blog',
    type: 'Pages',
  },
  {
    title: '教學',
    href: '/learn',
    icon: <LearnIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Learn',
    type: 'Pages',
  },
  {
    title: '關於',
    href: '/about',
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: About',
    type: 'Pages',
  },
  {
    title: '聯絡',
    href: '/contact',
    icon: <ContactIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Contact',
    type: 'Pages',
  },
  {
    title: '訪客留言板',
    href: '/guestbook',
    icon: <ChatIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Chat',
    type: 'Pages',
  },
  {
    title: 'JS 遊樂場',
    href: '/playground',
    icon: <SiJavascript size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Playground',
    type: 'Pages',
  },
];

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    title: 'Email',
    href: 'mailto:s5460703@gmail.com',
    icon: <EmailIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Contact: Email',
    className: '!bg-green-600 border border dark:border-neutral-700',
    type: 'Link',
  },
  // {
  //   title: 'Linkedin',
  //   href: 'https://www.linkedin.com/in/114514/',
  //   icon: <LinkedinIcon size={iconSize} />,
  //   isShow: true,
  //   isExternal: true,
  //   eventName: 'Social: Linkedin',
  //   className: '!bg-blue-500 border border dark:border-neutral-700',
  //   type: 'Link',
  // },
  {
    title: 'Twitter',
    href: 'https://twitter.com/BlackishGreen03',
    icon: <TwitterIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Twitter',
    className: '!bg-sky-500 border border dark:border-neutral-700',
    type: 'Link',
  },
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/blackishgreen.su',
    icon: <FacebookIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Facebook',
    className: '!bg-orange-700 border border dark:border-neutral-700',
    type: 'Link',
  },
  {
    title: 'Github',
    href: 'https://github.com/BlackishGreen33',
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Github',
    className: '!bg-black border border dark:border-neutral-700',
    type: 'Link',
  },
];

export const EXTERNAL_LINKS: MenuItemProps[] = [
  {
    title: 'Analytics',
    href: 'https://analytics.aulianza.com/share/LK5kiRuosw9pORLa/aulianza.id',
    icon: <AnalyticsIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'External Link: Analytics',
    type: 'Link',
  },
];
