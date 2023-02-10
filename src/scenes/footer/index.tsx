import Logo from '../../assets/Logo.png';

const Footer = () => {
  return (
    <footer className='bg-neutral-300 py-16'>
      <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
          <img alt='logo' src={Logo} />
          <p className='my-5'>
            Мы находимся по адресу: г. Москва, ул. Петрова, стр. 22.
            <br />
            Pаботаем без выходных с 10.00 до 20.00.
          </p>
          <p>© GymBull. Все права защищены.</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Ссылки</h4>
          <p className='my-5'>Тренерский состав</p>
          <p className='my-5'>Галлерея</p>
          <p>Наши клубы</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Контакты</h4>
          <p className='my-5'>Мы ждем вашего звонка</p>
          <p>+7 (999) 979-71-38</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
