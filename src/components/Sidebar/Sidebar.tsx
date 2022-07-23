import React from 'react';
import styles from './Sidebar.module.scss';
import samanthaImg from '../../assets/png/samantha.png';
import { Link, useLocation } from 'react-router-dom';

const sidebarNavLinks = [
  'dashboard',
  'expenses',
  'wallets',
  'summary',
  'accounts',
  'settings',
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.profileDetails}>
            <div className={styles.profileImageDiv}>
              <img src={samanthaImg} alt="Profile" />
              <p className={styles.notifications}>4</p>
            </div>
            <p className={styles.userName}>Lorem</p>
            <p className={styles.userEmail}>Lorem@email.com</p>
          </div>
          <nav className={styles.sidebarNav}>
            <ul>
              {sidebarNavLinks.map((sidebarNavLink) => (
                <li key={sidebarNavLink} className={styles.sidebarNavItem}>
                  <Link
                    className={
                      location.pathname === `/${sidebarNavLink}`
                        ? styles.sidebarNavLinkActive
                        : styles.sidebarNavLink
                    }
                    to={`/${sidebarNavLink}`}
                  >
                    {sidebarNavLink.charAt(0).toUpperCase() +
                      sidebarNavLink.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};
