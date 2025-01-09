import slideImg1 from "./images/slider-img/slide-1.jpg";
import slideImg2 from "./images/slider-img/slide-2.jpg";
import slideImg3 from "./images/slider-img/slide-3.jpg";

import services1 from "./images/services/service-1.png";
import services2 from "./images/services/service-2.png";
import services3 from "./images/services/service-3.png";
import services4 from "./images/services/service-4.png";

import person1 from "./images/testimonials/person-1.jpg";
import person2 from "./images/testimonials/person-2.jpg";
import person3 from "./images/testimonials/person-3.jpg";
import person4 from "./images/testimonials/person-4.jpg";
import person5 from "./images/testimonials/person-5.jpg";
import person6 from "./images/testimonials/person-6.jpg";

import new1 from "./images/news/new-1.jpg";
import new2 from "./images/news/new-2.jpg";
import new3 from "./images/news/new-3.jpg";

export const LINKS = [
  { href: "#advantages", label: "О нас" },
  { href: "#services", label: "Сборки" },
  // { href: "workSteps", label: "Как работаем" },
  { href: "#articles", label: "Блог" },
  { href: "#testimonials", label: "Отзывы" },
  // { href: "faq", label: "FAQ" },
  { href: "#contacts", label: "Контакты" },
];

export const SLIDES = [
  {
    title: "Игровые ПК на базе GEFORCE RTX 4090",
    desc: "Заряжены и настроены на победу",
    link: "#",
    buttonText: "Подробнее",
    url: slideImg1,
  },
  {
    title: "GEFORCE RTX 4060 Ti в ПК EDELWEISS",
    desc: "Заряжены и настроены на победу",
    link: "#",
    buttonText: "Купить пк",
    url: slideImg2,
  },
  {
    title: "Серия экстремально мощных игровых ПК",
    desc: "Сверхмощные ПК",
    link: "#",
    buttonText: "Купить пк",
    url: slideImg3,
  },
];

export const TESTIMONIALS = [
  {
    name: "Мария",
    feedback: "Отличная работа! Собрали быстро и качественно",
    image: person1,
  },
  {
    name: "Алексей",
    feedback:
      "Понравилось обслуживание. Консультанты дали полезные советы по подбору комплектующих",
    image: person2,
  },
  {
    name: "Михаил",
    feedback:
      "Я очень доволен! Теперь можно во все новинки поиграть на максималках!",
    image: person3,
  },
  {
    name: "Алиса",
    feedback:
      "Подобрали отличную конфигурацию, все работает быстро и слаженно.",
    image: person4,
  },
  {
    name: "Наталья",
    feedback: "Все работает отлично уже несколько месяцев. Рекомендую!",
    image: person5,
  },
  {
    name: "Олег",
    feedback: "Спасибо ребятам за помощь в сборке ПК для работы.",
    image: person6,
  },
];

export const SERVICES = [
  {
    id: 1,
    title: "Optima Game",
    desc: "Твой идеальный старт в мир гейминга: плавный геймплей, стильный дизайн и всё, что нужно для победы.",
    price: "80 000 ₽",
    img: services1,
    config: [
      {
        name: " Процессор",
        value: "AMD Ryzen 5 5600",
      },
      {
        name: "Материнская плата",
        value: "MSI B550M PRO-VDH",
      },
      {
        name: "Видеокарта",
        value: "Palit GeForce RTX 4060 Infinity 2",
      },
      {
        name: "Оперативная память",
        value: "ADATA XPG GAMMIX D20",
      },
      {
        name: "Охлаждение",
        value: "PCCooler R400 BK",
      },
      {
        name: "SSD",
        value: "ADATA LEGEND 800 1ТБ",
      },
      {
        name: "Блок питания",
        value: "DEEPCOOL PK600D",
      },
      {
        name: "Корпус",
        value: "ARDOR GAMING Rare Minicase MS1",
      },
    ],
    program: {
      name: "Операционная система",
      value: "Microsoft Windows 11 Home (без активации)",
    },
    testimonials: TESTIMONIALS,
  },
  {
    id: 2,
    title: "Performance",
    desc: "Оптимальный выбор для FullHD-гейминга в эффектном корпусе без лишних деталей.",
    price: "100 000 ₽",
    img: services2,
    config: [
      {
        name: " Процессор",
        value: "AMD Ryzen 5 7500F OEM",
      },
      {
        name: "Материнская плата",
        value: "ASRock B650M Pro RS",
      },
      {
        name: "Видеокарта",
        value: "RTX 4060 VENTUS 2X BLACK OC",
      },
      {
        name: "Оперативная память",
        value: "ADATA XPG Lancer Blade",
      },
      {
        name: "Охлаждение",
        value: "DEEPCOOL AK400",
      },
      {
        name: "SSD",
        value: "ADATA LEGEND 900 1ТБ",
      },
      {
        name: "Блок питания",
        value: "MONTECH CENTURY 650",
      },
      {
        name: "Корпус",
        value: "ARDOR GAMING Rare Minicase MS1",
      },
    ],
    program: {
      name: "Операционная система",
      value: "Microsoft Windows 11 Home (без активации)",
    },
    testimonials: TESTIMONIALS,
  },

  {
    id: 3,
    title: "Extreme",
    desc: "Лучший игровой компьютер с оптимальной конфигурацией для FullHD и 2K.",
    price: "120 000 ₽",
    img: services3,
    config: [
      {
        name: " Процессор",
        value: "AMD Ryzen 5 7500F",
      },
      {
        name: "Материнская плата",
        value: "ASRock B650M Pro RS",
      },
      {
        name: "Видеокарта",
        value: "Palit GeForce RTX 4060 Ti Dual",
      },
      {
        name: "Оперативная память",
        value: "ADATA XPG Lancer Blade ",
      },
      {
        name: "Охлаждение",
        value: "DEEPCOOL AK400",
      },
      {
        name: "SSD",
        value: "ADATA LEGEND 900 1ТБ",
      },
      {
        name: "Блок питания",
        value: "MONTECH CENTURY 650",
      },
      {
        name: "Корпус",
        value: "ARDOR GAMING Rare Minicase MS1",
      },
    ],
    program: {
      name: "Операционная система",
      value: "Microsoft Windows 11 Home (без активации)",
    },
    testimonials: TESTIMONIALS,
  },
  {
    id: 4,
    title: "Pro",
    desc: "Твой новый игровой чемпион в минималистичном корпусе с дополнительным ЖК-экраном.",
    price: "150 000 ₽",
    img: services4,
    config: [
      {
        name: " Процессор",
        value: "AMD Ryzen 5 7500F",
      },
      {
        name: "Материнская плата",
        value: "ASRock B650M Pro RS",
      },
      {
        name: "Видеокарта",
        value: "GIGABYTE GeForce RTX 4070 SUPER WINDFORCE OC",
      },
      {
        name: "Оперативная память",
        value: "ADATA XPG Lancer Blade",
      },
      {
        name: "Охлаждение",
        value: "DEEPCOOL AK400",
      },
      {
        name: "SSD",
        value: "ADATA LEGEND 900 1ТБ",
      },
      {
        name: "Блок питания",
        value: "MONTECH CENTURY 650",
      },
      {
        name: "Корпус",
        value: "ARDOR GAMING Rare Minicase MS1",
      },
    ],
    program: {
      name: "Операционная система",
      value: "Microsoft Windows 11 Home (без активации)",
    },
    testimonials: TESTIMONIALS,
  },
];

export const SOCIALS = [
  {
    href: "https://t.me/delaem_pc",
    name: "telegram",
    icon: "la:telegram-plane",
  },
  { href: "https://wa.link/tsee1v", name: "whatsapp", icon: "la:whatsapp" },
  { href: "https://vk.com/delaem_pc", name: "vk", icon: "hugeicons:vk" },
];

export const BLOGS = [
  {
    title: "Зачем стримеры используют отдельный ПК для трансляций",
    desc: "Может показаться, что захват картинки с экрана и ее трансляция другим пользователям – простая и нетребовательная процедура, но в реальности это не так. Чтобы качество изображения было высоким, стримеры вынуждены использовать отдельный компьютер. Далее мы расскажем, как это работает и зачем профессионалам трансляция с двух ПК.",
    img: new1,
    date: "07.01.2025",
    type: "Статья",
  },
  {
    title: "Можно ли разогнать монитор и как это сделать",
    desc: "Про разгон процессора, видеокарты или модулей оперативной памяти слышали все, но мало кто знает, что разогнать можно еще и монитор. Сегодня мы расскажем, что это за процедура, зачем она нужна и как правильно ее провести.",
    img: new2,
    date: "07.01.2025",
    type: "Статья",
  },
  {
    title:
      "Оптические механические клавиатуры – что это такое, чем отличаются от обычной механики",
    desc: "Принято считать, что для гейминга больше всего подходят механические клавиатуры. Ведь у них очень мягкое и плавное нажатие, а клавиши срабатывают быстро. Это сильно повышает отзывчивость управления и упрощает игровой процесс в соревновательных онлайн-играх. Но что, если есть другой тип клавиатур, который для гейминга подходит больше? На самом деле такой тип есть. Сегодня мы вам расскажем об оптических клавиатурах – самых быстрых, мягких и долговечных геймерских манипуляторах.",
    img: new3,
    date: "07.01.2025",
    type: "Статья",
  },
];

export const FAQ = [
  {
    id: 1,
    title: "Как купить в рассрочку?",
    desc: "Рассрочка предоставляется банком партнёром, решение за 5 минут, оставить заявку можно через наш сайт",
  },
  {
    id: 2,
    title: "Можно ли сдать товар по гарантии без чека?",
    desc: "Да можно, нужно будет назвать дату покупки или скриншот из банка, что бы можно было быстрее найти ваш заказ",
  },
  {
    id: 3,
    title: "Услуга доставки",
    desc: "Доставка по РФ бесплатная,  осуществляется транспортной компанией CDEK.",
  },
];

export const CONTACT_CONTENT = {
  description: "Остались вопросы? Будем рады ответить на них",
  email: "delaempc@gmail.com",
  phone: "+79930807372",
  phoneTitle: "+7 993 080-73-72",
  address: "г.Ростов-на-Дону, ул. Просвещения, д.25",
  hoursWork: "с 9:00 до 18:00",
};
