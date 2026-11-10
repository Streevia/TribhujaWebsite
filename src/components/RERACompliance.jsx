import React from 'react';

// Telangana RERA advertising directive (Proceedings dated 07.07.2025,
// clauses i, vi, vii) requires this block's font-size to be >= the
// project's on-page contact/address text. Both are pinned to this
// constant so they can never drift out of compliance independently.
export const CONTACT_ADDRESS_FONT_SIZE = '0.72rem';
const RERA_BLOCK_FONT_SIZE = '0.75rem'; // >= CONTACT_ADDRESS_FONT_SIZE

const RERA_NUMBERS = ['P01100010650', 'P01100010651', 'P01100010652'];
const LAYOUT_PERMISSION_NO = '060766/20A/R1/U6/HMDA/29042023';
const RERA_WEBSITE = 'https://rera.telangana.gov.in';

const baseTextStyle = {
  fontFamily: "'DM Sans', sans-serif",
  color: '#EDE6DA',
  lineHeight: 1.6,
};

// variant="badge" is placed absolutely within the Hero section (scrolls
// away with it, per design call); variant="block" is the full footer
// version that appears on every page.
const RERACompliance = ({ variant = 'block' }) => {
  const isBadge = variant === 'badge';

  return (
    <div
      className={`rera-compliance rera-compliance--${variant}`}
      style={{
        ...baseTextStyle,
        fontSize: RERA_BLOCK_FONT_SIZE,
        background: '#0E0E0F',
        border: '1px solid #B87333',
        borderRadius: '2px',
        padding: isBadge ? '10px 14px' : '18px 24px',
        maxWidth: isBadge ? '260px' : '640px',
        ...(isBadge
          ? {
              position: 'absolute',
              top: '100px',
              right: '12px',
              zIndex: 20,
            }
          : { margin: '0 auto' }),
      }}
    >
      <div style={{ marginBottom: '4px' }}>
        Layout / Building Permission No.: {LAYOUT_PERMISSION_NO}
      </div>
      <div style={{ marginBottom: '4px' }}>
        TG RERA Registration No.: {RERA_NUMBERS.join(', ')}
      </div>
      <div style={{ marginBottom: isBadge ? 0 : '10px' }}>
        Website:{' '}
        <a
          href={RERA_WEBSITE}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#B87333', textDecoration: 'underline' }}
        >
          {RERA_WEBSITE}
        </a>
      </div>

      {!isBadge && (
        <>
          <div style={{ marginBottom: '4px' }}>
            Promoted by Zuari Infraworld &amp; Gangothri Infraedge Pvt. Ltd.
          </div>
          <div>
            Project location: Kollur, ORR Exit 2, Hyderabad, Telangana — as per approved plan.
            {' '}Registered office: [Registered office address — insert].
          </div>
        </>
      )}
    </div>
  );
};

export default RERACompliance;
