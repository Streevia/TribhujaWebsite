import React from 'react';
import { Link } from "react-router-dom";
import Picture from './Picture';
import { sysCredit } from '../utils/credits';
import { analytics } from '../utils/analytics';
import RERACompliance, { CONTACT_ADDRESS_FONT_SIZE } from './RERACompliance';

const Footer = ({ onDownloadBrochure, onDownloadPriceSheet, onDownloadPaymentPlan, onSiteVisit }) => {
  const socialLinks = [

{
name:"Instagram",
url:"https://www.instagram.com/zuarigangothritribhuja/?hl=en",
icon:(
<svg viewBox="0 0 24 24">
<path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2.2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6zM18 6.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/>
</svg>
)
},

{
name:"Facebook",
url:"https://www.facebook.com/p/Zuari-Gangothri-Tribhuja-61572568545177/",
icon:(
<svg viewBox="0 0 24 24">
<path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.7.3-1 1-1z"/>
</svg>
)
},

{
name:"YouTube",
url:"https://www.youtube.com/channel/UCX-B_mF7mVjX7loup_7gCAA",
icon:(
<svg viewBox="0 0 24 24">
<path d="M23 7s-.2-1.7-.9-2.4C21.3 3.7 20.4 3.7 20 3.6 17.2 3.4 12 3.4 12 3.4s-5.2 0-8 .2c-.4.1-1.3.1-2.1 1C1.2 5.3 1 7 1 7S.8 9 .8 11v2c0 2 .2 4 .2 4s.2 1.7.9 2.4c.8.9 1.8.9 2.2 1 1.6.2 7.9.2 7.9.2s5.2 0 8-.2c.4-.1 1.3-.1 2.1-1 .7-.7.9-2.4.9-2.4s.2-2 .2-4v-2c0-2-.2-4-.2-4zM10 15.5v-7l6 3.5-6 3.5z"/>
</svg>
)
}

];
  return (
    <footer className="site-footer" style={{ 
      position: 'relative', 
      backgroundColor: '#0A0A0A', 
      padding: '40px 0', 
      overflow: 'hidden',
      borderTop: '1px solid rgba(184,115,51,0.2)'
    }}>
      {/* TEXTURED COPPER BACKGROUND */}
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: 'url(/assets/images/copper.webp)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          opacity: 0.25,
          mixBlendMode: 'soft-light',
          pointerEvents: 'none'
        }} 
      />
      <div className="site-footer-inner" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 5vw',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: window.innerWidth < 768 ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '40px'
      }}>
        <div style={{ textAlign: window.innerWidth < 768 ? 'center' : 'left' }}>
          <Picture
            src="/assets/images/logo.webp"
            mobileSrc="/assets/images/logo-320w.webp"
            alt="Tribhuja"
            width="320"
            height="83"
            style={{ height: 'clamp(40px, 8vw, 50px)', width: 'auto', display: 'block', margin: window.innerWidth < 768 ? '0 auto' : '0' }}
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <span className="footer-address" style={{
            color: 'rgba(237, 230, 218, 0.7)',
            fontSize: CONTACT_ADDRESS_FONT_SIZE,
            letterSpacing: '0.08em',
            display: 'block',
            lineHeight: 1.6
          }}>
            Kollur, ORR Exit 2, Hyderabad, Telangana<br />
            <a href="tel:+919000358004" style={{ color: 'rgba(237, 230, 218, 0.7)', textDecoration: 'none' }}>+91 90003 58004</a>
          </span>
        </div>

        <div style={{ 
          textAlign: window.innerWidth < 768 ? 'center' : 'right',
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          justifyContent: window.innerWidth < 768 ? 'center' : 'flex-end',
          flexDirection: window.innerWidth < 480 ? 'column' : 'row'
        }}>
          <button
            onClick={() => {
              analytics.trackButtonClick('Book Site Visit', 'Footer');
              onSiteVisit();
            }}
            className="footer-cta-btn"
            style={{
              background: '#B87333',
              border: '1px solid #B87333',
              color: '#0A0A0A',
              padding: '12px 24px',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 700,
              cursor: 'pointer',
              transition: '0.3s all',
              borderRadius: '2px'
            }}
          >
            Book Site Visit
          </button>
          <button
            onClick={() => {
              analytics.trackButtonClick('Download Brochure', 'Footer');
              onDownloadBrochure();
            }}
            className="footer-cta-btn secondary"
            style={{
              background: 'transparent',
              border: '1px solid #B87333',
              color: '#B87333',
              padding: '12px 24px',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 600,
              cursor: 'pointer',
              transition: '0.3s all',
              borderRadius: '2px'
            }}
          >
            Download Brochure
          </button>
          <button
            onClick={() => {
              analytics.trackButtonClick('Download Price Sheet', 'Footer');
              onDownloadPriceSheet();
            }}
            className="footer-cta-btn secondary"
            style={{
              background: 'transparent',
              border: '1px solid #B87333',
              color: '#B87333',
              padding: '12px 24px',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 600,
              cursor: 'pointer',
              transition: '0.3s all',
              borderRadius: '2px'
            }}
          >
            Price Sheet
          </button>
          <button
            onClick={() => {
              analytics.trackButtonClick('Download Payment Plan', 'Footer');
              onDownloadPaymentPlan();
            }}
            className="footer-cta-btn secondary"
            style={{
              background: 'transparent',
              border: '1px solid #B87333',
              color: '#B87333',
              padding: '12px 24px',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 600,
              cursor: 'pointer',
              transition: '0.3s all',
              borderRadius: '2px'
            }}
          >
            Payment Plan
          </button>
        </div>
      </div>

      <nav className="footer-nav">
<Link to="/">
HOME
</Link>

<Link to="/contact">
CONTACT US
</Link>
</nav>

      <div className="footer-socials">


{
socialLinks.map(item=>(

<a

key={item.name}

href={item.url}

target="_blank"

rel="noopener noreferrer"
  >

{item.icon}

</a>
))
}
</div>

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1400px',
        margin: '32px auto 0',
        padding: '0 5vw'
      }}>
        <RERACompliance variant="block" />
      </div>

      {/* Brand-triad credit — sitewide Zuari + Gangothri signal
          for SEO knowledge graph and for the reader. */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1400px',
        margin: '40px auto 0',
        padding: '24px 5vw 0',
        borderTop: '1px solid rgba(184, 115, 51, 0.1)',
        textAlign: 'center'
      }}>
        <span className="footer-developers" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 'min(0.75rem, 3.5vw)',
          color: 'rgba(237, 230, 218, 0.38)',
          letterSpacing: '0.02em'
        }}>
          A residence by Zuari Infraworld and Gangothri Infraedge
        </span>
      </div>

      <div className="footer-copyright-container" style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1400px',
        margin: '32px auto 0',
        padding: '0 5vw 24px',
        textAlign: 'center',
        paddingLeft: '17vw',
      }}>
        <div className="footer-copyright" style={{
          fontSize: '0.6rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase'
        }}>
          <span className="copyright-text" style={{ color: 'rgba(237, 230, 218, 0.5)' }}>
            &copy; {new Date().getFullYear()} Tribhuja by Zuari Infraworld &amp; Gangothri Infraedge. - All rights reserved.
          </span>
          <span style={{ color: 'transparent', userSelect: 'all' }}>
            {sysCredit}
          </span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer-copyright-container { padding-left: 16vw; }
        .footer-cta-btn:hover {
          background: #B87333 !important;
          color: #0A0A0A !important;
        }
        @media (max-width: 768px) {
          .footer-copyright-container { padding-left: 5vw !important; }
          .footer-copyright { letter-spacing: 0.05em !important; }
          .copyright-text { 
            display: inline-block;
            white-space: nowrap; 
            font-size: clamp(6px, 2vw, 9.6px);
          }
        }
      `}} />
      <style>{`

.footer-nav{

display:flex;

justify-content:center;

gap:45px;

margin-top:30px;

}



.footer-nav a{

color:#aaa;

text-decoration:none;

letter-spacing:3px;

font-size:12px;

}



.footer-socials{

display:flex;

justify-content:center;

gap:18px;

margin-top:30px;

}



.footer-socials a{

width:38px;

height:38px;

border:1px solid #b87333;

display:flex;

align-items:center;

justify-content:center;

}

.footer-socials svg{
width:18px;
height:18px;
fill:#b87333;
}

.footer-divider{
margin-top:40px;
border-top:1px solid rgba(255,255,255,.08);
}




`}</style>
    </footer>
  );
};

export default Footer;
