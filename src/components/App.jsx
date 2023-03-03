import { Route, Routes } from 'react-router-dom';
import s from './App.module.scss';
import { Layout } from './Layout/Layout';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/authOperation';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { lazy, Suspense, useEffect } from 'react';

const HomePage = lazy(() => import('pages/HomePage'));
const Register = lazy(() => import('pages/Register/RegisterPage'));
const Phonebook = lazy(() => import('./Phonebook/Phonebook'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <div>
      <div className={s.container}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/" element={<PublicRoute />}>
                <Route
                  path="/register"
                  element={<Register isLogin={false} />}
                />
                <Route path="/login" element={<Register isLogin={true} />} />
              </Route>
              <Route path="/" element={<PrivateRoute />}>
                <Route path="/contacts" element={<Phonebook />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};
