import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/navbar.module.css';

export default function Layout({ children }) {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.logo}>
            Performance Lab
          </div>
          
          <button 
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className={styles.menuIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className={styles.menuIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          
          <nav className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>
              CSR Example
            </Link>
            <Link href="/ssr-example" className={styles.navLink}>
              SSR Example
            </Link>
            <Link href="/ssg-example" className={styles.navLink}>
              SSG Example
            </Link>
            <Link href="/performance-dashboard" className={styles.navLink}>
              Performance Dashboard
            </Link>
            <Link href="/optimization-document" className={styles.navLink}>
              Optimization Document
            </Link>
          </nav>
        </div>
        
        <div className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
          <nav className={styles.mobileNavLinks}>
            <Link href="/" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
              CSR Example
            </Link>
            <Link href="/ssr-example" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
              SSR Example
            </Link>
            <Link href="/ssg-example" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
              SSG Example
            </Link>
            <Link href="/performance-dashboard" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
              Performance Dashboard
            </Link>
            <Link href="/optimization-document" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
              Optimization Document
            </Link>
          </nav>
        </div>
      </header>
      
      <main className={styles.mainContent}>
        {mounted ? children : null}
      </main>
      
      <footer className={styles.footer}>
        <p className={styles.footerText}>React Performance Optimization Project</p>
        <p className={styles.footerSubtext}>Built with Next.js and CSS Modules</p>
      </footer>
    </div>
  );
}