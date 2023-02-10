import AnchorLink from 'react-anchor-link-smooth-scroll';

import { SelectedPage } from '../../shared/types';

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  closeMenuToggled?: () => void;
};

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  closeMenuToggled,
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? 'text-red-900' : ''}
        transition duration-500 hover:text-rose-900
      `}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        // closeMenuToggled();
      }}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
