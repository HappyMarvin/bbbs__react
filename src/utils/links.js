// EN: This is object, if you need array use Object.values(PROJECT_LINKS)
// RU: Маршруты сайта - это объект, если нужен массив, используйте Object.values(PROJECT_LINKS)
export const PROJECT_LINKS = {
  main: { title: "Главная", link: "/" },
  about: { title: "О проекте", link: "/about", nav: true },
  calendar: {
    title: "Календарь",
    link: "/calendar",
    nav: true,
    header: true,
  },
  events: {
    title: "Куда пойти",
    link: "/events",
    nav: true,
    header: true,
  },
  questions: {
    title: "Вопросы",
    link: "/questions",
    nav: true,
    header: true,
  },
  readAndWatch: {
    title: "Читать и смотреть",
    link: "/read-and-watch",
    nav: true,
    header: true,
    children: {
      guide: { title: "Справочник", link: "/guide" },
      video: { title: "Видео", link: "/video" },
      articles: { title: "Статьи", link: "/articles" },
      movies: { title: "Фильмы", link: "/movies" },
      books: { title: "Книги", link: "/books" },
    },
  },
  childrenRights: {
    title: "Права детей",
    link: "/children-rights",
    nav: true,
    header: true,
  },
  stories: {
    title: "Истории",
    link: "/stories",
    nav: true,
    header: true,
  },
  profile: { title: "Личный кабинет", link: "/profile" },
};

// RU: Ссылки на соц сети
export const SOCIAL_LINKS = [
  {
    title: "facebook",
    link: "https://www.facebook.com/BigBrothers.BigSisters.Russia/",
  },
  {
    title: "vkontakte",
    link: "https://vk.com/big.brothers.big.sisters",
  },
  {
    title: "instagram",
    link: "https://www.instagram.com/nastavniki_org/",
  },
  {
    title: "youtube",
    link: "https://www.youtube.com/user/Nastavniki",
  },
];

// RU: Яндекс Практикум
export const YANDEX_PRAKTIKUM_LINK = "https://praktikum.yandex.ru/";

// RU: Дизайн
export const DESIGN_LINK = "https://krkr.design/";

// RU: Ссылка для лого
export const LOGO_LINK = "https://www.nastavniki.org/o-nas/ob-organizaczii/";

// RU: помочь деньгами / пожертвования
export const HELP_MONEY_LINK =
  "https://www.nastavniki.org/campaign/pomoch-dengami/";

// RU: наставничество
export const MENTORING_LINK =
  "https://www.nastavniki.org/volontyorstvo/kak-stat-volonterom/";

// RU: партнерство
export const PARTHERSHIP_LINK =
  "https://www.nastavniki.org/oficzialno/korporativnyim-partnyoram/";
