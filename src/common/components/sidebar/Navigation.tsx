import { useContext } from 'react';
import { BiCommand as CommandIcon } from 'react-icons/bi';
import { useWindowSize } from 'usehooks-ts';

import { MENU_ITEMS } from '@/common/constant/menu';
import { CommandPaletteContext } from '@/common/context/CommandPaletteContext';

import Menu from './Menu';
import MenuItem from './MenuItem';
import Breakline from '../elements/Breakline';

const Navigation = () => {
  const { setIsOpen } = useContext(CommandPaletteContext);
  const { width } = useWindowSize();
  const isMobile = width < 480;

  const filterdMenu = MENU_ITEMS?.filter((item) => item?.isShow);

  const handleOpenCommandPalette = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <Menu list={filterdMenu} />
      <Breakline className="mb-2" />
      <MenuItem
        title={isMobile ? 'Command' : 'cmd + k'}
        href="#"
        icon={
          <CommandIcon
            className="transition-all duration-300 group-hover:-rotate-12"
            size={20}
          />
        }
        isExternal={false}
        onClick={() => handleOpenCommandPalette()}
      ></MenuItem>
    </div>
  );
};

export default Navigation;
