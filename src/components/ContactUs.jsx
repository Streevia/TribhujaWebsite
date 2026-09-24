import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { analytics } from '../utils/analytics';

const LEAD_API_URL = 'https://zuari.my.salesforce-sites.com/services/apexrest/WebsiteLead/';

const ContactUs = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const updateField = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim() || !form.phone.trim()) {
      setError('Please enter your name and phone number.');
      return;
    }

    setSubmitting(true);

    const payload = {
      lastName: form.name.trim().slice(0, 80),
      mobile: form.phone.trim(),
      project: 'Zuari Gangothri Tribhuja',
      source: 'Website',
      subSource: 'Contact Us Page',
    };

    if (form.email.trim()) payload.email = form.email.trim();
    if (form.message.trim()) payload.description = form.message.trim().slice(0, 80);

    try {
      const res = await fetch(LEAD_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const raw = await res.text();
      let successful = res.ok;

      try {
        const data = JSON.parse(raw);
        if (typeof data?.success === 'boolean') successful = data.success;
        if (!successful && data?.message) throw new Error(data.message);
      } catch (parseError) {
        if (raw.trim().toUpperCase().startsWith('FAIL')) throw new Error(raw.trim());
      }

      if (!successful) throw new Error('Submission failed. Please try again.');

      analytics.trackFormSubmit('contact_us');
      navigate('/thank-you');
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <Navbar />

      <main>
        <section className="contact-hero">
          <div className="contact-container">
            <Link to="/" className="contact-back">← Back to Tribhuja</Link>
            <span className="contact-kicker">Contact Tribhuja</span>
            <h1>Start a conversation about your next home.</h1>
            <p>Speak with our team about residences, availability, site visits, pricing and project information.</p>
          </div>
        </section>

        <section className="contact-content">
          <div className="contact-container contact-grid">
            <div className="contact-details">
              <span className="contact-kicker">Connect with us</span>
              <h2>We are here to help.</h2>
              <p className="contact-intro">
                Tribhuja is a premium residential community in Kollur, Hyderabad. Reach us directly or share your details and our team will get in touch.
              </p>

              <div className="contact-info-list">
                <a href="tel:+919000358004" onClick={() => analytics.trackButtonClick('Phone Call', 'Contact Page')}>
                  <span>Call us</span>
                  <strong>+91 90003 58004</strong>
                </a>

                <a href="https://wa.link/kjfrpd" target="_blank" rel="noopener noreferrer" onClick={() => analytics.trackButtonClick('WhatsApp Chat', 'Contact Page')}>
                  <span>WhatsApp</span>
                  <strong>Chat with our team</strong>
                </a>

                <div>
                  <span>Project location</span>
                  <strong>Kollur, Hyderabad</strong>
                </div>
              </div>
            </div>

            <div className="contact-form-panel">
              <span className="contact-kicker">Enquire now</span>
              <h2>Tell us how we can help.</h2>

              <form onSubmit={handleSubmit} className="contact-form">
                <label>
                  <span>Name *</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    autoComplete="name"
                    maxLength={80}
                    required
                    placeholder="Your name"
                  />
                </label>

                <div className="contact-field-row">
                  <label>
                    <span>Phone *</span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={updateField}
                      autoComplete="tel"
                      required
                      placeholder="Your phone number"
                    />
                  </label>

                  <label>
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={updateField}
                      autoComplete="email"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>

                <label>
                  <span>Message</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={updateField}
                    rows="5"
                    maxLength={80}
                    placeholder="Site visit, pricing, availability or anything else..."
                  />
                </label>

                {error && <div className="contact-error" role="alert">{error}</div>}

                <button type="submit" disabled={submitting}>
                  {submitting ? 'Submitting…' : 'Submit enquiry'}
                </button>

                <p className="contact-consent">
                  By submitting this form, you agree to be contacted regarding Tribhuja and related project information.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer showCtas={false} />
      <style>{contactStyles}</style>
    </div>
  );
};

const contactStyles = `
  .contact-page{min-height:100vh;background:#080806;color:#EDE6DA;font-family:'DM Sans',sans-serif;}
  .contact-container{width:min(1240px,calc(100% - 56px));margin:0 auto;position:relative;z-index:2;}
  .contact-hero{position:relative;padding:170px 0 95px;overflow:hidden;background:linear-gradient(145deg,#080806,#15100c);border-bottom:1px solid rgba(184,115,51,.14);}
  .contact-hero:after{content:'';position:absolute;inset:0;background-image:url('/tribhuja-react/assets/images/copper.webp');background-size:cover;background-position:center;opacity:.13;mix-blend-mode:screen;}
  .contact-back{display:inline-block;margin-bottom:52px;color:rgba(237,230,218,.52);text-decoration:none;font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;position:relative;z-index:3;}
  .contact-back:hover{color:#B87333;}
  .contact-kicker{display:block;color:#B87333;font-size:.68rem;letter-spacing:.28em;text-transform:uppercase;margin-bottom:18px;}
  .contact-hero h1{font-family:'Cormorant Garamond',serif;font-weight:300;font-size:clamp(3.2rem,7vw,6.6rem);line-height:.95;max-width:900px;margin:0 0 26px;}
  .contact-hero p{max-width:650px;color:rgba(237,230,218,.56);line-height:1.85;margin:0;}
  .contact-content{padding:100px 0;}
  .contact-grid{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:90px;align-items:start;}
  .contact-details h2,.contact-form-panel h2{font-family:'Cormorant Garamond',serif;font-weight:300;font-size:clamp(2.5rem,4vw,4.2rem);line-height:1;margin:0 0 24px;}
  .contact-intro{color:rgba(237,230,218,.5);line-height:1.85;max-width:520px;margin-bottom:44px;}
  .contact-info-list{border-top:1px solid rgba(184,115,51,.18);}
  .contact-info-list>a,.contact-info-list>div{display:flex;justify-content:space-between;gap:30px;align-items:center;padding:24px 0;border-bottom:1px solid rgba(184,115,51,.18);text-decoration:none;color:inherit;}
  .contact-info-list span{font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(237,230,218,.42);}
  .contact-info-list strong{font-family:'Cormorant Garamond',serif;font-size:1.25rem;font-weight:400;color:#EDE6DA;text-align:right;}
  .contact-info-list a:hover strong{color:#B87333;}
  .contact-form-panel{border:1px solid rgba(184,115,51,.2);background:#0d0d0a;padding:46px;box-shadow:0 30px 80px rgba(0,0,0,.22);}
  .contact-form{display:flex;flex-direction:column;gap:22px;margin-top:34px;}
  .contact-field-row{display:grid;grid-template-columns:1fr 1fr;gap:18px;}
  .contact-form label{display:flex;flex-direction:column;gap:9px;}
  .contact-form label>span{font-size:.6rem;text-transform:uppercase;letter-spacing:.17em;color:rgba(237,230,218,.48);}
  .contact-form input,.contact-form textarea{width:100%;box-sizing:border-box;background:#080806;border:1px solid rgba(184,115,51,.2);color:#EDE6DA;padding:15px 16px;font-family:'DM Sans',sans-serif;font-size:.9rem;outline:none;transition:border-color .3s;background-clip:padding-box;}
  .contact-form textarea{resize:vertical;min-height:130px;}
  .contact-form input:focus,.contact-form textarea:focus{border-color:#B87333;}
  .contact-form input::placeholder,.contact-form textarea::placeholder{color:rgba(237,230,218,.25);}
  .contact-form button{min-height:52px;background:#B87333;border:1px solid #B87333;color:#080806;text-transform:uppercase;letter-spacing:.2em;font-size:.67rem;font-weight:700;cursor:pointer;transition:.3s;}
  .contact-form button:hover:not(:disabled){background:transparent;color:#B87333;}
  .contact-form button:disabled{opacity:.6;cursor:not-allowed;}
  .contact-error{padding:12px 14px;border:1px solid rgba(210,90,70,.4);color:#e7a091;background:rgba(210,90,70,.08);font-size:.8rem;line-height:1.5;}
  .contact-consent{margin:0;color:rgba(237,230,218,.32);font-size:.68rem;line-height:1.6;}
  @media(max-width:900px){.contact-grid{grid-template-columns:1fr;gap:60px}.contact-content{padding:75px 0}.contact-hero{padding:150px 0 75px}}
  @media(max-width:640px){.contact-container{width:min(100% - 36px,1240px)}.contact-form-panel{padding:28px 20px}.contact-field-row{grid-template-columns:1fr}.contact-info-list>a,.contact-info-list>div{align-items:flex-start;flex-direction:column;gap:8px}.contact-info-list strong{text-align:left}.contact-hero{padding:130px 0 65px}.contact-back{margin-bottom:40px}}
`;

export default ContactUs;
