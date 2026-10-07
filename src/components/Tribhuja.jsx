import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Picture from './Picture';

const ParallaxItem = ({ item, i }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [
      i % 2 === 0 ? 50 : -50,
      i % 2 === 0 ? -50 : 50,
    ]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.95, 1, 0.95]
  );

  const isWide = i === 0 || i === 3;

  let height = '60vh';

  if (i === 0) {
    height = '70vh';
  } else if (i === 3) {
    height = '80vh';
  } else if (i > 3) {
    height = '50vh';
  }

  /**
   * Send selected category to LifestyleExplorer.
   */
  const goToExplorer = (event) => {
    if (event) {
      event.stopPropagation();
    }

    if (!item.category) return;

    window.dispatchEvent(
      new CustomEvent('scroll-to-explorer', {
        detail: {
          category: item.category,
        },
      })
    );
  };

  return (
    <motion.div
      ref={ref}
      className={`amenity-card ${isWide ? 'wide' : ''}`}
      style={{
        y,
        scale,
        gridColumn: isWide ? 'span 2' : 'span 1',
        position: 'relative',
        height,
        overflow: 'hidden',
        borderRadius: '2px',
        background: '#111',
        border: '0.5px solid rgba(184,115,51,0.1)',
        cursor: item.category ? 'pointer' : 'default',
      }}
      whileHover={{
        scale: 0.99,
        borderColor: 'rgba(184,115,51,0.4)',
      }}
      onClick={item.category ? goToExplorer : undefined}
    >
      <Picture
        src={item.img}
        mobileSrc={item.mobileImg}
        alt={item.alt || item.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.7,
        }}
      />

      <div
        className="amenity-card-inner"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <div
            style={{
              flex: '1 1 auto',
              minWidth: 0,
            }}
          >
            <h3
              className="hl"
              style={{
                margin: 0,
              }}
            >
              {item.title}
            </h3>

            {item.caption && (
              <p
                className="amenity-caption"
                style={{
                  margin: '10px 0 0',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 'clamp(0.95rem, 1.4vw, 1.2rem)',
                  lineHeight: 1.4,
                  color: 'rgba(170, 112, 58, 1)',
                  maxWidth: '36ch',
                }}
              >
                {item.caption}
              </p>
            )}
          </div>

          {item.category && (
            <motion.button
              type="button"
              onClick={goToExplorer}
              whileHover={{
                backgroundColor: 'rgba(184,115,51,0.15)',
              }}
              whileTap={{
                scale: 0.97,
              }}
              style={{
                padding: '14px 22px',
                minHeight: '44px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',

                border: '1px solid #B87333',
                color: '#B87333',
                borderRadius: '50px',

                fontSize: '0.6rem',
                fontFamily: 'inherit',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',

                background: 'rgba(184,115,51,0.05)',
                flexShrink: 0,
                cursor: 'pointer',
              }}
            >
              Explore Experience &rarr;
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Tribhuja = () => {
  const amenities = [
    {
      title: 'The Arrival',
      img: '/tribhuja-react/assets/images/arrival.webp',
      mobileImg: '/tribhuja-react/assets/images/arrival-mobile.webp',

      alt:
        'Luxury 3 & 4 BHK apartments in Kollur Hyderabad — Zuari Gangothri Tribhuja arrival',

      caption:
        "Your first step into a life that's been waiting.",
    },

    {
      title: 'Club Tribhuja',
      img: '/tribhuja-react/assets/images/club.webp',
      mobileImg: '/tribhuja-react/assets/images/club-mobile.webp',

      // MUST match EXPLORER_DATA key
      category: 'clubhouse',

      alt:
        'Tribhuja clubhouse amenities — apartments with clubhouse in Kollur Hyderabad',

      caption:
        'Every hour of Club Tribhuja has somewhere to go.',
    },

    {
      title: 'The Grounds',
      img: '/tribhuja-react/assets/images/out.webp',
      mobileImg: '/tribhuja-react/assets/images/out-mobile.webp',

      // IMPORTANT
      // This now matches EXPLORER_DATA.outdoor
      category: 'outdoor',

      alt:
        'Gated community apartments Kollur — Tribhuja grounds across 9.16 acres with 76% open ground',

      caption:
        'What was left alone, was left on purpose',
    },

    {
      title: 'The Rise',
      img: '/tribhuja-react/assets/images/sky.webp',
      mobileImg: '/tribhuja-react/assets/images/sky-mobile.webp',

      // IMPORTANT
      // This now matches EXPLORER_DATA.terrace
      category: 'terrace',

      alt:
        'High rise apartments Hyderabad — Tribhuja nine towers, new launch in Kollur near ORR Exit 2',

      caption:
        '120 meters of vertical life',
    },

    {
      title: 'The Home',
      img: '/tribhuja-react/assets/images/bedroom.webp',
      mobileImg: '/tribhuja-react/assets/images/bedroom-mobile.webp',

      // MUST match EXPLORER_DATA key
      category: 'home',

      alt:
        '3 BHK apartment interiors Kollur — Tribhuja flats with good ventilation and Vastu-compliant design',

      caption:
        'Open to the sun. Kind to the air. Faithful to the quiet.',
    },
  ];

  return (
    <section
      id="tribhuja"
      style={{
        background: '#080806',
      }}
    >
      {/* SECTION HEADER */}
      <div
        className="ps-inner"
        style={{
          paddingTop: '60px',
          paddingBottom: '0px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '10px',
            padding: '0 20px',
          }}
        >
          <Picture
            src="/tribhuja-react/assets/images/logo-320w.png"
            alt="Tribhuja logo"
            width="320"
            height="83"
            sourceProps={{
              srcSet:
                '/tribhuja-react/assets/images/logo-320w.webp 320w, /tribhuja-react/assets/images/logo-640w.webp 640w',
              sizes: '(max-width: 768px) 90vw, 460px',
            }}
            style={{
              height: 'auto',
              width: '100%',
              maxWidth: '460px',
              display: 'block',
              opacity: 0.9,
            }}
          />
        </div>
      </div>

      {/* AMENITIES MOSAIC */}
      <div
        className="ps-inner"
        style={{
          paddingBottom: '30px',
        }}
      >
        <div
          className="amenities-mosaic"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridAutoFlow: 'dense',
            gap: '30px',
          }}
        >
          {amenities.map((item, i) => (
            <ParallaxItem
              key={item.title}
              item={item}
              i={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tribhuja;
