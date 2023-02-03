import "./styles/index.scss"
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

export const App = () => {

  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {},[theme])}>
      <button onClick={toggleTheme}>Сменить тему</button>
      <br/>
      <Link to={'/'}>Главная</Link>
      <br/>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={ <AboutPage /> }/>
          <Route path={'/'} element={ <MainPage /> }/>
        </Routes>
      </Suspense>
    </div>
  )
}