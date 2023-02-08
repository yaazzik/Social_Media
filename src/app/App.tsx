import "./styles/index.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/AppRuoter";
import {Navbar} from "widgets/Navbar";
import {useTheme} from "app/providers/ThemeProvider";

export const App = () => {

  const {theme} = useTheme()

  return (
    <div className={classNames('app', {},[theme])}>
      <Navbar />
      <AppRouter />
    </div>
  )
}