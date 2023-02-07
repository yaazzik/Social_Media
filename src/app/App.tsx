import "./styles/index.scss"
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/AppRuoter";
import {Navbar} from "widgets/Navbar";

export const App = () => {

  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {},[theme])}>
      <Navbar />
      <button onClick={toggleTheme}>Сменить тему</button>
      <AppRouter />
    </div>
  )
}