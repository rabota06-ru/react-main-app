import { Route, Routes, Navigate } from 'react-router-dom';
import { routes } from 'pages/routes';
import { News } from 'pages/news';
import { Profile } from 'pages/profile';
import { AuthorizedLayout } from 'layouts/authorized-layout';
import { Favorites } from 'pages/favorites';
import { Events } from 'pages/events';

function App() {
  const isAuth = true;

  return (
    <div className="app">
      <AuthorizedLayout>
        <Routes>
          <Route path={routes.profile} element={<Profile />} />
          <Route path={routes.news} element={<News />} />
          <Route path={routes.favorites} element={<Favorites />} />
          <Route path={routes.events} element={<Events />} />
          <Route path="*" element={<Navigate to={routes.news} />} />
        </Routes>
      </AuthorizedLayout>
    </div>
  );
}

export default App;
