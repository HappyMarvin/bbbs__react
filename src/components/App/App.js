import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import "./App.css";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Calendar from "../Calendar/Calendar";
import Loader from "../Loader/Loader";
import Events from "../Events/Events";
import Questions from "../Questions/Questions";
import ReadAndWatch from "../ReadAndWatch/ReadAndWatch";
import Guide from "../Guide/Guide";
import Books from "../Books/Books";
import Video from "../Video/Video";
import Articles from "../Articles/Articles";
import Movies from "../Movies/Movies";
import ChildrenRights from "../ChildrenRights/ChildrenRights";
import Stories from "../Stories/Stories";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";

import { PROJECT_LINKS } from "../../utils/links";
import { TIME_DELAY } from "../../utils/constants";
import UserContext from "../../contexts/UserContext";
import Popup from "../Popup/Popup";
import PopupChooseCity from "../PopupChooseCity/PopupChooseCity";
import PopupLogin from "../PopupLogin/PopupLogin";

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isPopupChooseCityOpen, setIsPopupChooseCityOpen] =
    React.useState(false);
  const [isPopupLoginOpen, setIsPopupLoginOpen] = React.useState(false);
  const history = useHistory();
  const [user, setUser] = React.useState({ login: false });

  const handleCheckToken = () => {
    // TO DO: проверка, что пользователь залогинин
    // token храниться в localStorage или в cookie ???
    setIsLoading(true);
    // TO DO: запрос на сервер для проверки токена
    setTimeout(() => {
      // при положительном ответе от сервера
      handleGetUser();
      // при отрицательном ответе от сервера
      // setIsLoading(false);
    }, TIME_DELAY);
  };

  const handleGetUser = (token) => {
    // TO DO: запрос на сервер для получения данных пользователя по token
    setIsLoading(true);
    setTimeout(() => {
      // предполагаемый ответ сервера
      const res = {
        id: 1,
        user: 1,
        city: { id: 2, name: "Воронеж", isPrimary: false },
      };
      setUser({ ...user, ...res, login: true });
      setIsLoading(false);
    }, TIME_DELAY);
  };

  const handleLogin = (userData, endLoading) => {
    const testData = {
      ...userData,
      id: 1,
      user: 1,
      city: { id: 2, name: "Тест", isPrimary: false },
    };
    setTimeout(() => {
      setUser({ ...testData, login: true });
      endLoading();
    }, TIME_DELAY);
  };

  const handleChangeUserCity = (city, endLoading) => {
    // TO DO: запрос на сервер для смены города пользователя
    setTimeout(() => {
      setUser({ ...user, city });
      endLoading();
    }, TIME_DELAY);
  };

  const handleLogout = () => {
    // удалить token из localStorage или cookie
    setUser({ login: false });
  };

  const openPopupChooseCity = () => {
    setIsPopupChooseCityOpen(true);
  };

  const handleAccountButtonClick = () => {
    user.login
      ? history.push(PROJECT_LINKS.profile.link)
      : setIsPopupLoginOpen(true);
  };

  React.useEffect(() => {
    handleCheckToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <UserContext.Provider
        value={{
          ...user,
          handleChangeUserCity,
          handleLogin,
          handleLogout,
          openPopupChooseCity,
          handleAccountButtonClick,
        }}
      >
        {isLoading && <Loader />}
        <Header mix="app__section" />
        <Switch>
          <Route exact path={PROJECT_LINKS.main.link}>
            <Main mix="app__content app__section" />
          </Route>
          <Route exact path={PROJECT_LINKS.about.link}>
            <About mix="app__content app__section" />
          </Route>
          <Route exact path={PROJECT_LINKS.calendar.link}>
            <Calendar mix="app__content" />
          </Route>
          <Route exact path={PROJECT_LINKS.events.link}>
            <Events mix="app__content app__section" />
          </Route>
          <Route exact path={PROJECT_LINKS.questions.link}>
            <Questions mix="app__content app__section" />
          </Route>
          <Route exact path={PROJECT_LINKS.readAndWatch.link}>
            <ReadAndWatch mix="app__content app__section" />
          </Route>
          <Route
            exact
            path={`${PROJECT_LINKS.readAndWatch.link}${PROJECT_LINKS.readAndWatch.children.guide.link}`}
          >
            <Guide mix="app__content app__section" />
          </Route>
          <Route
            exact
            path={`${PROJECT_LINKS.readAndWatch.link}${PROJECT_LINKS.readAndWatch.children.video.link}`}
          >
            <Video mix="app__content app__section" />
          </Route>
          <Route
            exact
            path={`${PROJECT_LINKS.readAndWatch.link}${PROJECT_LINKS.readAndWatch.children.articles.link}`}
          >
            <Articles mix="app__content app__section" />
          </Route>
          <Route
            exact
            path={`${PROJECT_LINKS.readAndWatch.link}${PROJECT_LINKS.readAndWatch.children.movies.link}`}
          >
            <Movies mix="app__content app__section" />
          </Route>
          <Route
            exact
            path={`${PROJECT_LINKS.readAndWatch.link}${PROJECT_LINKS.readAndWatch.children.books.link}`}
          >
            <Books mix="app__content app__section" />
          </Route>
          <Route exact path={PROJECT_LINKS.childrenRights.link}>
            <ChildrenRights mix="app__content app__section" />
          </Route>
          <Route exact path={PROJECT_LINKS.stories.link}>
            <Stories mix="app__content app__section" />
          </Route>
          <Route exact path={PROJECT_LINKS.profile.link}>
            <Profile mix="app__content app__section" />
          </Route>
          <Route path="*">
            <NotFound mix="app__content app__section" />
          </Route>
        </Switch>
        <Footer />
        {isPopupChooseCityOpen && (
          <Popup
            component={PopupChooseCity}
            isOpen={isPopupChooseCityOpen}
            onClose={() => setIsPopupChooseCityOpen(false)}
          />
        )}
        {isPopupLoginOpen && (
          <Popup
            component={PopupLogin}
            isOpen={isPopupLoginOpen}
            onClose={() => setIsPopupLoginOpen(false)}
          />
        )}
      </UserContext.Provider>
    </div>
  );
}

export default App;
