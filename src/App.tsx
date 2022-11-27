import { Route, Routes, Navigate } from 'react-router-dom';
import { routes } from 'pages/routes';
import { News } from 'pages/news';
import { Profile } from 'pages/profile';
import { AuthorizedLayout } from 'layouts/authorized-layout';
import { Favorites } from 'pages/favorites';
import { Events } from 'pages/events';
import { PageLayout } from 'layouts/page-layout';

function App() {
  const isAuth = true;

  return (
    <div className="app">
      <AuthorizedLayout>
        <Routes>
          <Route path={routes.profile} element={<PageLayout title="Профиль" Page={Profile} />} />
          <Route path={routes.news} element={<PageLayout title="Новости" Page={News} />} />
          <Route
            path={routes.favorites}
            element={<PageLayout title="Закладки" Page={Favorites} />}
          />
          <Route
            path={routes.events}
            element={<PageLayout title="График Мероприятий" Page={Events} />}
          />
          <Route path="*" element={<Navigate to={routes.news} />} />
        </Routes>
      </AuthorizedLayout>
    </div>
  );
}

export default App;
