import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';
// import cls from './ProfilePage.module.scss';

const reducers: ReducerList = {
    profile: profileReducer,
};
interface ProfilePageProps {
  className?: string;
}
const ProfilePage = ({ className }:ProfilePageProps) => {
    const { t } = useTranslation('profilePage');

    return (
        <DynamicModuleLoader reducers={reducers} removeOnUnmount>
            <div className={classNames(className, {}, [])}>
                {t('Страница профиля')}
            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
