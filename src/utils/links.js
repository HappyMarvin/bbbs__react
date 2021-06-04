// EN: This is object, if you need array use Object.values(PROJECT_LINKS)
// RU: Маршруты сайта - это объект, если нужен массив, используйте Object.values(PROJECT_LINKS)
export const PROJECT_LINKS = {
  main: { title: "Главная", link: "/" },
  about: { title: "О проекте", link: "/about", footer: true },
  calendar: {
    title: "Календарь",
    link: "/calendar",
    footer: true,
    header: true,
  },
  events: {
    title: "Куда пойти",
    link: "/events",
    footer: true,
    header: true,
  },
  questions: {
    title: "Вопросы",
    link: "/questions",
    footer: true,
    header: true,
  },
  readAndWatch: {
    title: "Читать и смотреть",
    link: "/read-and-watch",
    footer: true,
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
    footer: true,
    header: true,
  },
  stories: {
    title: "Истории",
    link: "/stories",
    footer: true,
    header: true,
  },
  profile: { title: "Личный кабинет", link: "/profile" },
};

// RU: Ссылки на соц сети
export const SOCIAL_LINKS = [
  { title: "facebook", link: "http://facebook.com" },
  { title: "vkontakte", link: "http://vk.com" },
  { title: "instagram", link: "http://instagram.com" },
  { title: "youtube", link: "http://youtube.com" },
];

// RU: помочь деньгами
export const HELP_MONEY_LINK =
  "https://www.nastavniki.org/campaign/pomoch-dengami/";

// RU: Яндекс Практикум
export const YANDEX_PRAKTIKUM_LINK = "https://praktikum.yandex.ru/";

// RU: Дизайн
export const DESIGN_LINK = "https://krkr.design/";
