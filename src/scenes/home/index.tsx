import AnchorLink from 'react-anchor-link-smooth-scroll';

import { motion } from 'framer-motion';

import useMediaQuery from '../../hooks/useMediaQuery';

import { SelectedPage } from '../../shared/types';

import ActionButton from '../../shared/ActionButton';

import HomePageText from '../../assets/HomePageText.png';
import HomePageGraphic from '../../assets/HomePageGraphic.png';
import SponsorRedBull from '../../assets/SponsorRedBull.png';
import SponsorForbes from '../../assets/SponsorForbes.png';
import SponsorFortune from '../../assets/SponsorFortune.png';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

  return (
    <section
      id='главная'
      className='gap-16 bg-neutral-300 pt-10 md:h-full md:pb-0'
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className='mx-auto w-5/6 items-center justify-center md:flex md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className='z-10 mt-32 md:basis-3/5'>
          {/* HEADINGS */}
          <motion.div
            className='md:-mt-20'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className='relative'>
              <img alt='home-page-text' src={HomePageText} />
            </div>

            <p className='mt-8 text-sm'>
              Непревзойденный тренажерный зал. Студии мирового класса,
              <br />
              уникальные и проработанные тренировки, чтобы получить формы тела,
              <br />о которых вы мечтаете. Начни прямо сейчас.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className='mt-8 flex items-center gap-8 pb-3'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Вступить
            </ActionButton>
            <AnchorLink
              className='text-sm font-bold text-red-900 underline hover:text-red-500'
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Узнать больше</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className='flex basis-3/5 justify-center md:z-10
              md:ml-42 md:mt-16 md:justify-items-end'
        >
          <img alt='home-pageGraphic' src={HomePageGraphic} />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className='flex items-center h-[154px] w-full bg-gray-900 py-10'>
          <div className='mx-auto w-5/6 '>
            <div className='flex w-3/5 items-center justify-between gap-8'>
              <img alt='redbull-sponsor' src={SponsorRedBull} />
              <img alt='forbes-sponsor' src={SponsorForbes} />
              <img alt='fortune-sponsor' src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
