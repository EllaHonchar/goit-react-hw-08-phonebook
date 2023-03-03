import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logOut } from 'redux/authOperation';
import s from '../Layout/Layout.module.scss';

export function Layout() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const user = useSelector(state => state.auth.user);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <>
      <header>
        <nav className={s.layout}>
          <NavLink to="/" className={s.title}>
            PHONEBOOK
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink to="/contacts" className={s.title}>
                Contacts
              </NavLink>
              <span> Hello, dear {user?.name}</span>
              <button type="button" onClick={handleLogout}>
                Log out
              </button>
            </>
          ) : (
            <>
              <NavLink to="/register" className={s.title}>
                Sign Up
              </NavLink>
              <NavLink to="/login" className={s.title}>
                Sign In
              </NavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
