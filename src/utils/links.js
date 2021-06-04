// This is object, if you need array use Object.values(PROJECT_LINKS)
export const PROJECT_LINKS = {
  main: { title: "Главная", link: "/" },
  about: { title: "О проекте", link: "/about" },
  calendar: { title: "Календарь", link: "/calendar" },
  events: { title: "Куда пойти", link: "/events" },
  questions: { title: "Вопросы", link: "/questions" },
  readAndWatch: {
    title: "Читать и смотреть",
    link: "/read-and-watch",
    children: {
      guide: { title: "Справочник", link: "/guide" },
      video: { title: "Видео", link: "/video" },
      articles: { title: "Статьи", link: "/articles" },
      movies: { title: "Фильмы", link: "/movies" },
      books: { title: "Книги", link: "/books" },
    },
  },
  childrenRights: { title: "Права детей", link: "/children-rights" },
  stories: { title: "Истории", link: "/stories" },
  profile: { title: "Личный кабинет", link: "/profile" },
};

export const EXTERNAL_LINKS = [
  { title: "facebook", link: "http://facebook.com" },
  { title: "vkontakte", link: "http://vk.com" },
  { title: "instagram", link: "http://instagram.com" },
  { title: "youtube", link: "http://youtube.com" },
];
