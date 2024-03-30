import { useEffect, useState } from 'react';

import useIsMobile from '@/common/hooks/useIsMobile';

import Copyright from './Copyright';
// import Navigation from '../../sidebar/Navigation';
import Breakline from '../../elements/Breakline';
import Profile from '../../sidebar/Profile';

const Sidebar = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="sidebar"
      className="sticky top-0 z-10 flex flex-col transition-all duration-300 lg:py-8"
    >
      <Profile isScrolled={isScrolled} />
      {!isMobile && (
        <>
          <Breakline />
          {/* <Navigation /> */}
          <Breakline className="mt-2" />
          <Copyright />
        </>
      )}
    </div>
  );
};

export default Sidebar;
