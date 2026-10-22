
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Picture from './Picture';

const posts = [
  {
    slug: 'flats-for-sale-in-kollur-complete-buyer-guide-2026',
    category: 'Home Buyer Guide',
    title: 'Flats for Sale in Kollur: Complete Home Buyer’s Guide (2026)',
    excerpt:
      'Explore this complete buyer’s guide to flats in Kollur, including connectivity, apartment configurations, pricing, RERA verification and amenities.',
    image: '/assets/images/guide-2026.webp',
    date: 'October 2026',
  },
  {
    slug: 'why-kollur-is-hyderabad-next-residential-hotspot',
    category: 'Location',
    title: "10 Reasons Kollur Is Becoming Hyderabad's Next Residential Hotspot",
    excerpt:
      'Discover how ORR connectivity, employment hubs, expanding residential communities and planned infrastructure are shaping Kollur’s residential appeal.',
    image: '/assets/images/kollur-reasons.webp',
    date: 'October 2026',
  },
];

const Blog = () => {
  return (
    <div className="editorial-page">
      <Navbar />

      <main>
        <section className="editorial-hero">
          <div className="editorial-hero-glow" />

          <div className="editorial-container editorial-hero-inner">
            <Link to="/" className="editorial-back">
              ← Back to Tribhuja
            </Link>

            <span className="editorial-kicker">Tribhuja Journal</span>

            <h1>
              Stories about space, place and the life around home.
            </h1>

            <p>
              Explore perspectives on Kollur, contemporary high-rise living,
              thoughtful design and the experiences that shape life at
              Tribhuja.
            </p>
          </div>
        </section>

        <section className="blog-section">
          <div className="editorial-container">
            <div className="blog-heading-row">
              <div>
                <span className="editorial-kicker">Latest stories</span>
                <h2>From the Tribhuja journal</h2>
              </div>

              <p>
                Ideas and insights for people considering a home in
                Hyderabad&apos;s western growth corridor.
              </p>
            </div>

            <div className="blog-grid">
              {posts.map((post) => (
                <article className="blog-card" key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="blog-card-image"
                    aria-label={`Read ${post.title}`}
                  >
                    <Picture
                      src={post.image}
                      alt={post.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Link>

                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span>{post.category}</span>
                      <span>{post.date}</span>
                    </div>

                    <h3>
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p>{post.excerpt}</p>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="blog-card-link"
                    >
                      Read article <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="blog-cta-panel">
              <div>
                <span className="editorial-kicker">Your next chapter</span>

                <h2>
                  Discover what life at Tribhuja could look like.
                </h2>
              </div>

              <Link to="/contact" className="editorial-primary-btn">
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer showCtas={false} />

      <style>{pageStyles}</style>
    </div>
  );
};

const pageStyles = `
  .editorial-page {
    min-height: 100vh;
    background: #080806;
    color: #EDE6DA;
    font-family: 'DM Sans', sans-serif;
  }

  .editorial-container {
    width: min(1240px, calc(100% - 56px));
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  .editorial-hero {
    position: relative;
    min-height: 62vh;
    display: flex;
    align-items: flex-end;
    padding: 150px 0 90px;
    overflow: hidden;
    background: linear-gradient(
      145deg,
      #080806 15%,
      #15100c 100%
    );
  }

  .editorial-hero:before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('/tribhuja-react/assets/images/copper.webp');
    background-size: cover;
    background-position: center;
    opacity: .16;
    mix-blend-mode: screen;
  }

  .editorial-hero-glow {
    position: absolute;
    width: 620px;
    height: 620px;
    border-radius: 50%;
    right: -180px;
    top: -180px;
    background: radial-gradient(
      circle,
      rgba(184, 115, 51, .18),
      transparent 68%
    );
  }

  .editorial-hero-inner {
    max-width: 1240px;
  }

  .editorial-back {
    display: inline-block;
    margin-bottom: 54px;
    color: rgba(237, 230, 218, .52);
    text-decoration: none;
    font-size: .72rem;
    letter-spacing: .16em;
    text-transform: uppercase;
    transition: .3s;
  }

  .editorial-back:hover {
    color: #B87333;
  }

  .editorial-kicker {
    display: block;
    color: #B87333;
    font-size: .68rem;
    letter-spacing: .28em;
    text-transform: uppercase;
    margin-bottom: 18px;
  }

  .editorial-hero h1 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(3.2rem, 7vw, 7rem);
    line-height: .94;
    max-width: 980px;
    margin: 0 0 28px;
  }

  .editorial-hero p {
    max-width: 680px;
    margin: 0;
    color: rgba(237, 230, 218, .6);
    font-size: 1rem;
    line-height: 1.9;
  }

  .blog-section {
    padding: 100px 0;
    background: #080806;
  }

  .blog-heading-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 60px;
    margin-bottom: 52px;
  }

  .blog-heading-row h2,
  .blog-cta-panel h2 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(2.4rem, 4vw, 4.4rem);
    line-height: 1;
    margin: 0;
  }

  .blog-heading-row > p {
    max-width: 420px;
    color: rgba(237, 230, 218, .48);
    line-height: 1.8;
    margin: 0;
  }

  .blog-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;
  }

  .blog-card {
    min-width: 0;
    border: 1px solid rgba(184, 115, 51, .17);
    background: #0c0c0a;
    overflow: hidden;
    transition:
      transform .4s ease,
      border-color .4s ease;
  }

  .blog-card:hover {
    transform: translateY(-6px);
    border-color: rgba(184, 115, 51, .5);
  }

  .blog-card-image {
    height: 340px;
    overflow: hidden;
    background: #111;
    display: block;
  }

  .blog-card-image img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    opacity: .78;
    transition:
      transform .7s ease,
      opacity .4s ease;
  }

  .blog-card:hover .blog-card-image img {
    transform: scale(1.04);
    opacity: .95;
  }

  .blog-card-body {
    padding: 30px 32px 34px;
  }

  .blog-card-meta {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 12px;
    color: #B87333;
    font-size: .62rem;
    letter-spacing: .15em;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .blog-card h3 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 400;
    font-size: clamp(1.8rem, 2.5vw, 2.4rem);
    line-height: 1.12;
    margin: 0 0 18px;
    color: #EDE6DA;
  }

  .blog-card h3 a {
    color: inherit;
    text-decoration: none;
  }

  .blog-card h3 a:hover {
    color: #D69A60;
  }

  .blog-card p {
    color: rgba(237, 230, 218, .58);
    font-size: .92rem;
    line-height: 1.8;
    margin: 0 0 26px;
  }

  .blog-card-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #B87333;
    text-decoration: none;
    font-size: .68rem;
    letter-spacing: .14em;
    text-transform: uppercase;
  }

  .blog-card-link:hover {
    color: #E0A66F;
  }

  .blog-cta-panel {
    margin-top: 90px;
    border-top: 1px solid rgba(184, 115, 51, .18);
    border-bottom: 1px solid rgba(184, 115, 51, .18);
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }

  .editorial-primary-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    padding: 0 28px;
    border: 1px solid #B87333;
    background: #B87333;
    color: #080806;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: .18em;
    font-size: .66rem;
    font-weight: 700;
    white-space: nowrap;
    transition: .3s;
  }

  .editorial-primary-btn:hover {
    background: transparent;
    color: #B87333;
  }

  @media (max-width: 900px) {
    .blog-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 20px;
    }

    .blog-heading-row {
      align-items: flex-start;
      flex-direction: column;
      gap: 20px;
    }

    .blog-card-image {
      height: 270px;
    }

    .blog-card-body {
      padding: 24px;
    }

    .blog-cta-panel {
      align-items: flex-start;
      flex-direction: column;
    }

    .editorial-hero {
      min-height: auto;
    }
  }

 
  @media (max-width: 640px) {
    .editorial-container {
      width: calc(100% - 36px);
    }

    .editorial-hero {
      padding: 130px 0 70px;
    }

    .editorial-back {
      margin-bottom: 40px;
    }

    .blog-section {
      padding: 70px 0;
    }

    .blog-grid {
      grid-template-columns: 1fr;
      gap: 26px;
    }

    .blog-card-image {
      height: 250px;
    }

    .blog-card-body {
      padding: 24px 22px 28px;
    }

    .blog-cta-panel {
      margin-top: 60px;
      padding: 45px 0;
    }

    .editorial-primary-btn {
      width: 100%;
    }
  }
`;

export default Blog;

