import React from "react";
import Picture from "./Picture";
import { motion } from "framer-motion";

const LocationSection = () => {
  const advantages = [
    {
      title: "RGIA Airport",
      value: "25",
      unit: "MIN",
      description:
        "Signal-free corridor. No traffic lights between here and the runway.",
    },
    {
      title: "ORR Exit 2",
      value: "02",
      unit: "MIN",
      description:
        "Eight lanes. The city's circulatory system at your doorstep.",
    },
    {
      title: "Financial District",
      value: "10",
      unit: "MIN",
      description:
        "Straight-line corridor to the South. Where the economy clocks in.",
    },
    {
      title: "IT Corridor",
      value: "15",
      unit: "MIN",
      description: "Amazon, Microsoft, Google, ISB, Infosys, TCS, Cognizant.",
    },
    {
      title: "Cycling Track",
      value: "02",
      unit: "MIN",
      description:
        "23 km solar-covered cycling track from Nanakramguda to Kollur.",
    },
    {
      title: "Lifestyle Access",
      value: "",
      unit: "",
      description:
        "Close to international schools, hospitals and premium malls.",
    },
  ];

  return (
    <section
      id="location"
      style={{
        background: "#050505",
        color: "var(--cream)",
        padding: "80px 0",
      }}
    >
      <div className="location-container">
        <div className="location-grid">
          {/* LEFT COLUMN */}

          <div>
            <div className="location-map-wrapper">
              <Picture
                src="/assets/images/new.webp"
                mobileSrc="/assets/images/new-mobile.webp"
                alt="Tribhuja location map near ORR Exit 2 Hyderabad"
                width="401"
                height="598"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.85,
                }}
              />

              <div className="map-overlay" />

              <a
                href="https://maps.app.goo.gl/Qy7tNvFo9GxVnFQp6"
                target="_blank"
                rel="noopener noreferrer"
                className="direction-btn"
              >
                <svg width="13" height="13" viewBox="0 0 24 24">
                  <path
                    fill="#fff"
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  />
                </svg>
                Get Directions →
              </a>
            </div>

            {/* PROJECT ADDRESS */}

            <div className="project-address">
              <div className="address-icon">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="#B87333"
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  />
                </svg>
              </div>

              <div>
                <h3>Project Address</h3>

                <p>
                  Tribhuja by Zuari Infraworld &amp; Gangothri Infraedge
                  <br />
                  Kollur Village, Near ORR Exit 2,
                  <br />
                  Hyderabad, Telangana - 502300, India
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}

          <div className="location-content">
            <div className="line" />

            <h2 className="hl">The Kollur</h2>

            <a
              href="https://maps.app.goo.gl/Qy7tNvFo9GxVnFQp6"
              target="_blank"
              rel="noopener noreferrer"
              className="location-link"
            >
              Kollur, ORR Exit 2, Hyderabad →
            </a>

            <p className="intro">
              The neighbourhood was ready before the towers rose.
            </p>

            <div className="stats-box">
              <strong>500</strong>

              <span>FT ORR FRONTAGE</span>
            </div>

            <div className="advantage-grid">
              {advantages.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="advantage-card"
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                >
                  <h3>{item.title}</h3>

                  <div className="distance">
                    {item.value && (
                      <>
                        <span>{item.value}</span>

                        <small>{item.unit}</small>
                      </>
                    )}
                  </div>

                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bottom-line" />
          </div>
        </div>
      </div>

      <style>{`

.location-container{
max-width:1400px;
margin:auto;
padding:0 5vw;
}


.location-grid{

display:grid;
grid-template-columns:1.1fr 1fr;
gap:60px;

}


.location-map-wrapper{

position:relative;
min-height:700px;

border:1px solid rgba(184,115,51,.25);

overflow:hidden;

}



.map-overlay{

position:absolute;
inset:0;

background:
linear-gradient(
to right,
#050505 0%,
transparent 25%,
transparent 75%,
#050505 100%
);

}



.direction-btn{

position:absolute;
bottom:25px;
left:50%;

transform:translateX(-50%);

background:#B87333;

color:white;

padding:12px 24px;

display:flex;
align-items:center;
gap:8px;

font-size:.7rem;

letter-spacing:.2em;

text-transform:uppercase;

text-decoration:none;

}



.project-address{

margin-top:25px;

padding:25px;

display:flex;

gap:15px;

border:1px solid rgba(184,115,51,.25);

background:rgba(255,255,255,.02);

}



.address-icon{

padding-top:5px;

}



.project-address h3{

margin:0 0 10px;

font-family:'Cormorant Garamond';

font-size:1.5rem;

}



.project-address p{

margin:0;

font-family:'DM Sans';

font-size:.85rem;

line-height:1.7;

color:rgba(240,226,200,.7);

}



.location-content{

display:flex;

flex-direction:column;

gap:25px;

}



.line,
.bottom-line{

width:60px;
height:1px;
background:#B87333;

}



.hl{

font-size:clamp(2rem,4vw,2.6rem);

margin:0;

}



.location-link{

color:#B87333;

font-size:.7rem;

letter-spacing:.25em;

text-transform:uppercase;

text-decoration:none;

}



.intro{

line-height:1.7;

color:rgba(240,226,200,.85);

}



.stats-box strong{

font-family:'Cormorant Garamond';

font-size:3rem;

display:block;

}



.stats-box span{

font-size:.7rem;

letter-spacing:.2em;

color:#B87333;

}



.advantage-grid{

display:grid;

grid-template-columns:repeat(2,1fr);

gap:20px;

}



.advantage-card{

padding:25px;

border:1px solid rgba(184,115,51,.18);

background:rgba(255,255,255,.02);

transition:.3s;

}



.advantage-card:hover{

border-color:#B87333;

transform:translateY(-5px);

}



.advantage-card h3{

font-family:'Cormorant Garamond';

font-size:1.5rem;

margin:0 0 15px;

}



.distance span{

font-family:'Cormorant Garamond';

font-size:2rem;

}



.distance small{

color:#B87333;

letter-spacing:.2em;

margin-left:8px;

}



.advantage-card p{

font-size:.85rem;

line-height:1.6;

color:rgba(240,226,200,.65);

}



@media(max-width:1024px){

.location-grid{

grid-template-columns:1fr;

}


.location-map-wrapper{

aspect-ratio:401/598;

min-height:auto;

}

}



@media(max-width:768px){

.advantage-grid{

grid-template-columns:1fr;

}


.project-address{

padding:20px;

}

}

`}</style>
    </section>
  );
};

export default LocationSection;
