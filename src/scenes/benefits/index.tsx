import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid';

import { motion } from 'framer-motion';

import { BenefitType, SelectedPage } from '../../shared/types';

import HText from '../../shared/HText';

import ActionButton from '../../shared/ActionButton';

import BenefitsPageGraphic from '../../assets/BenefitsPageGraphic.png';

import Benefit from './Benefit';

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className='h-6 w-6' />,
    title: 'Современное оборудование',
    description:
      'Наша компания имеет собственную производственную базу, а также большой опыт в области проектирования и изготовления оборудования. Мы можем предложить вам самое современное фитнес оборудование. За более чем 15 лет работы на рынке мы смогли обеспечить своих клиентов всем необходимым для организации фитнес клубов.',
  },
  {
    icon: <UserGroupIcon className='h-6 w-6' />,
    title: '100 программ тренировок',
    description:
      'Мы предоставляем 100 программ тренировок, от самых простых до самых сложных. Просто купите нашу программу и следуйте нашим инструкциям! В комплекте с программой идет персональный тренер, который подробно распишет и покажет правила выполнения всех упражнений. И через месяц увидите результат!.',
  },
  {
    icon: <AcademicCapIcon className='h-6 w-6' />,
    title: 'Опытные тренеры',
    description:
      'В нашем клубе работают только сертифицированные инструкторы. Все наши инструкторы имеют высшее образование в области фитнеса и атлетики. Во время занятий инструктор всегда на страже вашего здоровья и безопасности, обеспечивая профессиональный подход к каждому клиенту.',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id='преимущества' className='mx-auto min-h-full w-5/6 py-20'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className='md:my-5 md:w-3/5'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>БОЛЬШЕ, ЧЕМ ПРОСТО ТРЕНАЖЕРНЫЙ ЗАЛ.</HText>
          <p className='my-5 text-sm'>
            Мы предоставляем фитнес-оборудование мирового класса, тренеров и
            занятия для того, чтобы вы с легкостью достигли своих конечных целей
            в фитнесе. Мы обеспечиваем истинную заботу о каждом члене клуба.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className='mt-5 items-center justify-between gap-8 md:flex'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className='items-center justify-between md:mt-28 md:flex'>
          {/* GRAPHIC */}
          <img
            className='mx-auto mb-11'
            alt='benefits-page-graphic'
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className='relative'>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>
                  МИЛЛИОНЫ СЧАСТЛИВЫХ ЛЮДЕЙ, НАБИРАЮЩИХ ФОРМУ{' '}
                  <span className='text-primary-500'>FIT</span>
                </HText>
              </motion.div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className='my-5'>
                Прислушивайся к своему собственному телу и разуму. Лучший судья
                того, что следует и того чего не следует делать — это Ваше тело
                и разум. Учитесь слышать их. Тело обязательно скажет, что какое
                движение или упражнение работает, чем Вам следует заняться
                сейчас. Если Вы чувствуете, что какая-либо деятельность
                мотивирует Вас — продолжайте ее! Эта деятельность наполняет Вас
                и делает сильнее. Ваше тело и разум — Ваши персональные учителя
                и тренера.
              </p>
              <p className='mb-5'>
                Представьте четкую и ясную картину того, чего Вы хотите достичь.
                Сфокусируйтесь на этом образе. Придерживайтесь образа, следуйте
                к нему. Не отпускайте из ума свою картину. Не дайте
                обстоятельствам помешать Вам видеть ее.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className='relative mt-16'>
              <ActionButton setSelectedPage={setSelectedPage}>
                Вступить
              </ActionButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
