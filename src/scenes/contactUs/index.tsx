import { useForm } from 'react-hook-form';

import { motion } from 'framer-motion';

import { SelectedPage } from '../../shared/types';

import HText from '../../shared/HText';

import ContactUsPageGraphic from '../../assets/ContactUsPageGraphic.png';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-red-400
  px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id='контакты' className='mx-auto w-5/6 pt-24 pb-32'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className='md:w-3/5'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className='text-red-900'>ПРИСОЕДИНЯЙТЕСЬ</span>
          </HText>
          <p className='my-5'>
            Хотите иметь стройную, подтянутую фигуру? Вам нужен тренер, который
            поможет вам избавиться от лишнего веса и подтянуть мышцы всего тела?
            Тогда Вам нужен <b className='text-red-900'>Gym Bull.</b> Мы поможем
            вам сбросить лишние килограммы, сделать фигуру более стройной и
            подтянутой. Вы получите массу удовольствия от занятий, будете
            чувствовать себя более уверенно в повседневной жизни.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className='mt-10 justify-between gap-8 md:flex'>
          <motion.div
            className='mt-10 basis-3/5 md:mt-0'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target='_blank'
              onSubmit={onSubmit}
              action='https://formspree.io/f/xyyaepdr'
              method='POST'
            >
              <input
                className={inputStyles}
                type='text'
                placeholder='ИМЯ'
                {...register('name', {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className='mt-1 text-rose-500'>
                  {errors.name.type === 'required' &&
                    'Это поле является обязательным.'}
                  {errors.name.type === 'maxLength' &&
                    'Максимальная длина составляет 100 символов'}
                </p>
              )}

              <input
                className={inputStyles}
                type='text'
                placeholder='ПОЧТА'
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className='mt-1 text-rose-500'>
                  {errors.email.type === 'required' &&
                    'Это поле является обязательным.'}
                  {errors.email.type === 'pattern' &&
                    'Неверный адрес электронной почты.'}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder='СООБЩЕНИЕ'
                rows={4}
                cols={50}
                {...register('message', {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className='mt-1 text-rose-500'>
                  {errors.message.type === 'required' &&
                    'Это поле является обязательным.'}
                  {errors.message.type === 'maxLength' &&
                    'Максимальная длина - 2000 символов.'}
                </p>
              )}

              <button
                type='submit'
                className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
              >
                Отправить
              </button>
            </form>
          </motion.div>

          <motion.div
            className='relative mt-16 basis-2/5 md:mt-0'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              className='w-full'
              alt='contact-us-page-graphic'
              src={ContactUsPageGraphic}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
