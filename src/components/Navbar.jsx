import React, { useState, useEffect } from 'react';
import { analytics } from '../utils/analytics';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isSolid, setIsSolid] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = React.useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    analytics.trackButtonClick('Logo Click', 'Navbar');
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      if (currentY < 80) {
        // Always show at the very top
        setIsVisible(true);
        setIsSolid(false);
      } else {
        setIsSolid(true);
        if (diff > 5) {
          // Scrolling down — hide
          setIsVisible(false);
        } else if (diff < -5) {
          // Scrolling up — show
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        background: isSolid ? 'rgba(8, 8, 8, 0.6)' : 'transparent',
        backdropFilter: isSolid ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isSolid ? 'blur(16px)' : 'none',
        borderBottom: isSolid ? '0.5px solid rgba(184, 115, 51, 0.15)' : 'transparent',
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), background 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div
        className="nb"
        onClick={handleLogoClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleLogoClick(); } }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '4px',
          cursor: 'pointer'
        }}
      >
        {/* TRIBHUJA Logo */}
        <picture>
          <source
            type="image/webp"
            srcSet="/assets/images/logo-320w.webp 320w, /assets/images/logo-640w.webp 640w"
            sizes="(max-width: 768px) 160px, 320px"
          />
          <img
            src="/assets/images/logo-320w.png"
            alt="Tribhuja Apartments Kollur Hyderabad"
            width="320"
            height="83"
            className="nw-logo tribhuja-logo"
            loading="eager"
            decoding="async"
            style={{ display: 'block' }}
          />
        </picture>

        {/* Zuari | Gangothri Logo */}
        <picture>
          <source
            type="image/webp"
            srcSet="/assets/images/combinedcop-280w.webp 280w, /assets/images/combinedcop-560w.webp 560w"
            sizes="(max-width: 768px) 120px, 280px"
          />
          <img
            src="/assets/images/combinedcop-280w.png"
            alt="Zuari Tribhuja Hyderabad"
            width="280"
            height="42"
            className="nw-logo zuari-logo"
            loading="eager"
            decoding="async"
            style={{ display: 'block' }}
          />
        </picture>
      </div>
      <div className="header-nav" aria-label="Main navigation">
        <Link to="/" aria-current={location.pathname === '/' ? 'page' : undefined}>Home</Link>
        <Link to="/blog" aria-current={location.pathname.startsWith('/blog') ? 'page' : undefined}>Blog</Link>
        <Link to="/contact" aria-current={location.pathname === '/contact' ? 'page' : undefined}>Contact</Link>
      </div>
      <style>{`
        .header-nav { display:flex; align-items:center; gap:clamp(16px, 3vw, 42px); margin-left:auto; padding-left:24px; }
        .header-nav a { color:rgba(237,230,218,.72); text-decoration:none; text-transform:uppercase; letter-spacing:.18em; font:500 .68rem 'DM Sans',sans-serif; transition:color .25s ease; }
        .header-nav a:hover, .header-nav a[aria-current="page"] { color:#D69A60; }
        @media (max-width:600px) {
          nav { padding:0 18px; }
          .nb { transform:scale(.78); transform-origin:left center; }
          .header-nav { gap:12px; padding-left:4px; }
          .header-nav a { font-size:.56rem; letter-spacing:.08em; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
