import { Route, Routes, Navigate } from 'react-router-dom';
import { NavBar } from 'components/nav-bar';
import { routes } from 'pages/routes';
import { News } from 'pages/news';
import { Profile } from 'pages/profile';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path={routes.news} element={<News />} />
        <Route path={routes.profile} element={<Profile />} />
        <Route path="*" element={<Navigate to={routes.news} />} />
      </Routes>
    </div>
  );
}

export default App;
