
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Picture from './Picture';

const posts = {
  'flats-for-sale-in-kollur-complete-buyer-guide-2026': {
    category: 'Home Buyer Guide',
    title: 'Flats for Sale in Kollur: Complete Home Buyer’s Guide (2026)',
    excerpt:
      'A complete guide to evaluating flats in Kollur, comparing configurations, understanding pricing, verifying RERA registration and choosing the right residential community.',
    image: '/assets/images/guide-2026.webp',
    date: 'October 2026',
    metaTitle:
      'Flats for Sale in Kollur: A Complete Buyer Guide 2026 | Tribhuja Life',
    metaDescription:
      "Find flats for sale in Kollur with this 2026 buyer's guide to location benefits, amenities, connectivity, and key factors to consider before buying.",
    sections: [
      {
        heading: 'Why Are Homebuyers Considering Kollur?',
        text: `Kollur's location is one of its strongest considerations. Its proximity to the ORR gives residents access to several parts of Hyderabad, while continued development around the western corridor is expanding the area's residential relevance.

The wider infrastructure outlook also matters. HMDA's metropolitan-region planning now extends towards the proposed Regional Ring Road (RRR), a planned approximately 354-km expressway intended to connect major highways around Hyderabad. Such large-scale infrastructure can influence where future residential and commercial activity develops.

However, future infrastructure should be treated as a supporting factor, not the sole reason to buy. If you are considering flats in Kollur, Hyderabad, check your actual commute, access to schools and healthcare, nearby daily conveniences and the quality of roads connecting the project to major routes.`,
      },
      {
        heading: 'How Should You Evaluate Flats in Kollur?',
        text: `When comparing apartments for sale in Kollur, don't start with the amenities list. Start with the apartment itself.

A home advertised with a larger area isn't necessarily more spacious in everyday use. Compare the carpet area, room dimensions, storage, balcony space, natural light and ventilation.

Then look at the community. The ratio of open space to built-up area, parking planning, pedestrian movement and accessibility to amenities can influence how comfortable the development feels once it is fully occupied.

Finally, assess the surrounding location. A project may have an impressive internal environment, but its real convenience depends on how easily you can reach work, education, shopping and healthcare.`,
      },
      {
        heading: '2 BHK vs 3 BHK: Which Makes More Sense?',
        text: `The right configuration isn't determined by the number of people living in the home today.

2 BHK flats in Kollur can be an efficient choice for couples and smaller families. But a 3 BHK can provide considerably more flexibility for a growing family, particularly when one room needs to double as a home office, guest room or study.

This makes the decision less about “Which is bigger?” and more about “How will this home function five years from now?”

If you expect your family or work-from-home requirements to change, paying for additional usable space today may prevent another move later.`,
      },
      {
        heading: 'Why Price per Sq. Ft. Can Be Misleading',
        text: `One of the easiest mistakes when comparing new flats in Kollur is choosing the project with the lowest quoted price per square foot.

The headline price doesn't necessarily represent the final purchase cost. Registration and taxes, parking, maintenance deposits, interiors and other project-specific charges can significantly change your overall expenditure.

More importantly, compare usable space and specifications against the total cost. A lower-priced apartment isn't necessarily better value if you receive less usable space or have to spend considerably more on upgrades later.`,
      },
      {
        heading: 'Why RERA Verification Matters',
        text: `Before booking any property, verify its registration and project details through TG-RERA.

TG-RERA has taken action in cases involving projects being marketed without the required registration and approvals, including a case concerning promotional activity related to a purported Kollur project.

Advertisements and sales presentations should never replace independent verification. Check the project's registration details, promoter information, sanctioned plans and declared completion timeline before making a financial commitment.`,
      },
      {
        heading: 'How to Evaluate Amenities',
        text: `The number of amenities can make luxury apartments in Kollur look impressive, but more does not automatically mean better. Instead, consider whether the amenities support your actual lifestyle.

For a family with children, play areas and sports facilities may have more everyday value than facilities that are rarely used. For working professionals, fitness facilities, landscaped spaces and recreational areas may be more relevant.

Also consider where the amenities are located and how much open space the project provides around them. An amenity is valuable only when residents can comfortably access and use it.`,
      },
      {
        heading: 'Should You Buy a Flat in Kollur in 2026?',
        text: `Ultimately, the best flats in Kollur aren't simply the ones with the biggest floor plans or the longest amenities list. They are the homes that continue to make sense for your daily life, finances and future needs.

Tribhuja by Zuari Gangothri offers premium 3 & 4 BHK residences across a 9.16-acre development, with 9 high-rise towers, 55+ amenities and a 1 lakh sq. ft. clubhouse. Located near ORR Exit 2, the project is positioned about 2 minutes from the exit; it combines spacious residences with strong connectivity for everyday living.

For buyers evaluating flats in Kollur, a site visit to Tribhuja can help you experience the layouts, planning and location before making your decision.`,
      },
    ],
  },

  'why-kollur-is-hyderabad-next-residential-hotspot': {
    category: 'Location',
    title: "10 Reasons Kollur Is Becoming Hyderabad's Next Residential Hotspot",
    excerpt:
      'Discover how ORR connectivity, employment hubs, residential development, lifestyle amenities and planned infrastructure are shaping Kollur’s residential appeal in 2026.',
    image: '/assets/images/kollur-reasons.webp',
    date: 'October 2026',
    metaTitle:
      "Why Kollur Is Hyderabad's Next Residential Hotspot | Tribhuja Life",
    metaDescription:
      'Learn why Kollur is becoming a residential hotspot in Hyderabad, with better connectivity, growing infrastructure, and modern housing options for homebuyers.',
    sections: [
      {
        heading: 'Introduction',
        text: `Hyderabad is expanding westward. While areas such as Gachibowli, HITEC City, Financial District and Kokapet have already become established destinations, the next wave of residential development is moving towards locations that can offer connectivity to these hubs along with newer housing options.

Kollur is emerging as one of those locations. But calling it a residential hotspot only makes sense when there are tangible reasons behind the growth.

From direct ORR connectivity and access to employment hubs to expanding residential development, lifestyle infrastructure and proposed future connectivity, here are 10 factors shaping the Kollur real estate story in 2026.`,
      },
      {
        heading: '1. Direct Access to the ORR Through Exit 2',
        text: `One of Kollur's strongest advantages is its direct access to ORR Exit 2. Located inside the Outer Ring Road, Kollur gives residents access to one of Hyderabad's most important road networks without depending entirely on inner-city routes.

The ORR connects the locality with major employment and commercial zones across West Hyderabad while also providing a direct route towards the airport. For daily commuters, this connectivity matters because it opens up multiple directions of travel rather than connecting residents to just one major road.`,
      },
      {
        heading: "2. Close to Hyderabad's Major Employment Corridor",
        text: `Kollur's residential demand is supported by its access to the Financial District, Nanakramguda, Gachibowli and the wider HITEC City corridor.

The Financial District is home to major technology and financial services employers, including campuses of companies such as Amazon, Microsoft, Google, Apple and Wells Fargo. Gachibowli and HITEC City are farther but remain accessible through the ORR and connecting roads.

That creates an important residential advantage. Kollur is not waiting for an employment ecosystem to appear. It is already positioned within the larger West Hyderabad employment corridor.`,
      },
      {
        heading: '3. West Hyderabad Is Expanding Beyond Its Established Pockets',
        text: `Kokapet and Neopolis are adding another layer to West Hyderabad's growth. The development of Neopolis as a large-scale mixed-use district is expanding the commercial and residential footprint beyond established destinations such as the Financial District.

Kollur's position along this broader western corridor places it within the catchment of this expansion. For buyers, this matters because residential demand often follows the expansion of jobs, commercial spaces and supporting infrastructure.`,
      },
      {
        heading: '4. More Residential Choices Are Entering the Market',
        text: `The growth of Kollur residential projects is visible in the number of new developments entering the market. Multiple apartment and gated community projects are offering 2, 3 and larger configurations, giving buyers greater choice in terms of budget, floor plans and lifestyle.

But rising supply also means buyers need to compare carefully. The growth of a locality does not automatically make every project a good investment. Location within the locality, connectivity, community planning, specifications and long-term liveability all matter.`,
      },
      {
        heading: '5. The Price–Space Equation',
        text: `Established western markets command a premium because of their mature infrastructure and proximity to employment hubs. Kollur offers buyers an opportunity to look for larger or newer homes within the broader West Hyderabad ecosystem without necessarily paying the same entry price associated with the most established premium locations.

For families, this can make the difference between compromising on space and choosing a home with an additional bedroom, larger living areas or better community facilities. This combination of location, space and newer development is one of the factors making Kollur property increasingly relevant to homebuyers.`,
      },
      {
        heading: '6. New Communities Are Being Designed Around Lifestyle',
        text: `A large part of Kollur's current housing supply consists of newer developments. This gives buyers the opportunity to consider communities designed around more than just the home itself.

Landscaped spaces, fitness facilities, recreation zones, children's areas, sports facilities and community spaces are becoming important parts of newer residential developments.

For example, Tribhuja by Zuari Gangothri is planned across 9.16 acres with 55+ lifestyle amenities, creating a larger community environment rather than simply a collection of residential towers. The advantage is not simply the number of amenities listed in a brochure. It is having everyday recreation, fitness and leisure facilities within the community itself.`,
      },
      {
        heading: '7. The Airport Is Connected Through the ORR',
        text: `Kollur's ORR access also benefits frequent travellers. Rajiv Gandhi International Airport can be reached through the ORR, making the locality relevant for professionals and families who travel regularly.

Travel time can vary significantly depending on traffic, time of day and the exact starting point, but the ORR provides a more direct network towards the airport than relying entirely on inner-city routes. For frequent travellers, this connectivity can become an important factor when choosing where to live.`,
      },
      {
        heading: '8. Lifestyle Infrastructure Is Extending Beyond the Home',
        text: `Kollur's growth is not only about residential towers and roads. The area also benefits from lifestyle infrastructure that supports an increasingly community-oriented way of living.

One notable example is the 23 km solar cycle track accessible from the Tribhuja community. For residents, infrastructure like this can turn the neighbourhood itself into an extension of the community's lifestyle, creating opportunities for cycling, outdoor activity and recreation beyond the boundaries of the home.

This is particularly relevant as newer homebuyers increasingly evaluate a location based on how they can spend their time outside their four walls.`,
      },
      {
        heading: '9. Infrastructure Growth Extends Beyond the ORR',
        text: `Kollur's future isn't dependent on one infrastructure project. Hyderabad's broader metropolitan planning includes the proposed Regional Ring Road and radial connectivity intended to improve movement between peripheral areas and major highways.

The locality is also positioned around proposed future transportation infrastructure, including a proposed high-speed bullet train corridor.

While proposed infrastructure should always be viewed as a future possibility rather than a guaranteed benefit, such projects indicate the broader scale of connectivity being planned around Hyderabad's expanding western and southern growth corridors. For Kollur, this creates an important distinction. The locality is developing within a wider infrastructure network rather than in isolation.`,
      },
      {
        heading: '10. There Is Already Measurable Market Activity',
        text: `The Kollur property market isn't merely a future proposition. Current property market data shows continued residential activity and price movement in the locality.

Housing.com has reported approximately 14% year-on-year growth in its current Kollur price trend data. That does not mean prices will continue rising at the same rate. Instead, it indicates that buyer and developer activity is already influencing the market.

For investors, this makes entry price, project quality and timing more important than simply assuming appreciation is guaranteed.`,
      },
      {
        heading: '11. The Growth Story Is Supported by End-User Demand',
        text: `Ultimately, sustainable residential growth needs people who actually want to live there. Kollur has several of the ingredients that can support this: direct ORR Exit 2 access, proximity to major West Hyderabad employment hubs, access to Kokapet and Neopolis, expanding housing supply and newer community developments.

The addition of lifestyle infrastructure such as the 23 km solar cycle track further strengthens the appeal for end users looking beyond just commute time. That creates a more meaningful growth story than simply saying infrastructure is coming.

For anyone considering why to invest in Kollur, the real question should be whether these factors will continue translating into housing demand.`,
      },
      {
        heading: 'Why Consider Tribhuja in Kollur?',
        text: `Kollur isn't attractive simply because it is an upcoming locality. Its appeal comes from a combination of ORR Exit 2 connectivity, access to major employment hubs, proximity to Kokapet and Neopolis, expanding infrastructure and growing residential development.

Within this evolving location, Tribhuja by Zuari Gangothri is planned across 9.16 acres, offering 3 & 4 BHK residences, 55+ lifestyle amenities and a 1 lakh+ sq. ft. clubhouse.

Its location near ORR Exit 2, inside the ring road, places residents within a well-connected part of Kollur. The community also offers direct access to a 23 km solar cycle track, bringing an outdoor lifestyle element into the larger residential experience.

With a proposed high-speed bullet train corridor adding to the area's future infrastructure story, Tribhuja sits within a location that is being shaped by both present connectivity and planned future development.

Because the opportunity in Kollur isn't simply about buying into a growing location. It is about choosing the right home within a location that is becoming increasingly connected to Hyderabad's larger growth story.`,
      },
    ],
  },

  'best-3-4-bhk-flats-in-west-hyderabad-why-it-stands-out': {
    category: 'Home Buyer Guide',
    title: 'Best 3 & 4 BHK Flats for Sale in Hyderabad: Why West Hyderabad Leads',
    excerpt: 'For buyers exploring 3 & 4 BHK flats for sale in Hyderabad, West Hyderabad stands out for its employment hubs, social infrastructure and expanding residential destinations.',
    image: '/assets/images/west-hyderabad-leads.webp',
    date: 'October 2026',
    metaTitle: 'Best 3 & 4 BHK Flats in West Hyderabad: Why It Stands Out',
    metaDescription: 'Explore why West Hyderabad leads the demand for 3 and 4 BHK flats in Hyderabad, with excellent connectivity, modern amenities and lifestyle benefits.',
    sections: [
      {
        heading: 'Why West Hyderabad Attracts Homebuyers',
        text: `West Hyderabad's appeal is closely linked to its employment centres. The Financial District, Gachibowli and HITEC City attract professionals across technology, finance and other industries, creating demand for housing within commuting distance.\n\nConnectivity is another advantage. The Outer Ring Road (ORR) connects residential areas across the western corridor with employment hubs and other parts of Hyderabad.\n\nFor buyers, this creates an opportunity to evaluate locations beyond established commercial centres. Kollur, for instance, offers access to ORR Exit 2 and a residential setting away from some of the denser business districts.\n\nHowever, proximity should be assessed using actual road routes and travel times. A location that saves time on your daily commute can be more practical than one that simply carries a premium address.`,
      },
      {
        heading: 'Why Choose a 3 or 4 BHK Apartment?',
        text: `The right apartment configuration depends on how your family uses its space.\n\n3 BHK flats in West Hyderabad can accommodate a family that needs separate bedrooms, a guest room or a dedicated workspace without necessarily requiring a larger home.\n\nA 4 BHK offers greater flexibility for multigenerational families, additional workspaces or households planning for future needs.\n\nWhen evaluating the best 3 BHK flats Hyderabad has to offer, compare usable layouts, bedroom dimensions, ventilation and storage rather than relying on the advertised area alone.\n\nSimilarly, buyers considering 4 BHK flats in West Hyderabad should assess whether the additional space justifies the purchase price and ongoing maintenance costs.`,
      },
      {
        heading: 'What Makes a Premium Apartment Worth Buying?',
        text: `Not every large apartment qualifies as a practical luxury home. Look beyond the interiors and evaluate the features that affect everyday comfort.\n\nPrivacy and natural light: Corner units, window placement and the distance between neighbouring apartments can influence ventilation and privacy.\n\nOpen spaces: Landscaped areas and walking paths provide room for recreation beyond the apartment.\n\nLifestyle amenities: A clubhouse, swimming pool, gymnasium and sports facilities can reduce the need to travel for leisure and fitness.\n\nCommute and convenience: Check road access to your workplace, schools, hospitals and shopping destinations.\n\nLong-term costs: Compare the purchase price, maintenance charges, construction specifications and project approvals.\n\nThese considerations can help narrow your search for luxury flats in Hyderabad and identify properties that offer genuine everyday benefits rather than attractive marketing claims.`,
      },
      {
        heading: 'Why Consider Tribhuja by Zuari Gangotri?',
        text: `For buyers exploring luxury apartments in West Hyderabad, Tribhuja by Zuari Gangothri in Kollur combines spacious residences with measurable planning features and road connectivity.\n\nThe project spans approximately 9.16 acres and offers 3 and 4 BHK residences ranging from 1,679 to 3,126 sq. ft. Its published highlights include 78% corner flats, 72% open space, a 1 lakh sq. ft. clubhouse and more than 50 lifestyle amenities.\n\nIts location offers practical access to key destinations:\n\nORR Exit 2: Approximately 2 minutes.\n\nFinancial District: Approximately 15 minutes.\n\nHITEC City: Approximately 25 minutes.\n\nGachibowli: Approximately 25 minutes.\n\nRajiv Gandhi International Airport: Approximately 40 minutes.\n\nThese are indicative project-published travel times, not guaranteed journey durations. Traffic conditions and the exact destination can affect actual commute times. The project's planning also addresses factors that matter inside the home. Corner-unit layouts can provide additional exposure to natural light, while the emphasis on open space creates room for shared recreational facilities.\n\nFor buyers comparing spacious flats in Hyderabad, Tribhuja offers an option to evaluate through three practical measures: the space available within each configuration, the facilities provided within the community and the time required to reach everyday destinations.`,
      },
      {
        heading: 'How to Choose the Right Home',
        text: `West Hyderabad offers several residential options, but the right purchase depends on how well a property matches your needs.\n\nCompare 3 and 4 BHK configurations, assess your commute during peak hours and verify the amenities, maintenance costs and approvals before committing.\n\nIf your priority is a spacious home with lifestyle facilities and access to the western employment corridor, Tribhuja apartments in Kollur are worth exploring. Review the available floor plans and pricing, then arrange a site visit to assess the layouts, surroundings and commute for yourself.\n\nThe best home is not simply the one with the largest floor plan. It is the one that gives your family the space it needs without making everyday life more complicated.`,
      },
    ],
  },

  'gated-communities-vs-apartments-in-kollur-which-is-better': {
    category: 'Community Living',
    title: 'Gated Communities in Kollur vs Standalone Apartments: Which Is Better?',
    excerpt: 'For homebuyers exploring apartments in Kollur, the choice between a standalone apartment and a gated community can shape everyday family life.',
    image: '/assets/images/gated-communities.webp',
    date: 'October 2026',
    metaTitle: 'Gated Communities vs Apartments in Kollur: Which Is Better?',
    metaDescription: 'Explore the differences between gated communities and standalone apartments in Kollur, comparing amenities, security, privacy and everyday convenience.',
    sections: [
      {
        heading: 'Security That Supports Everyday Living',
        text: `Security is not just about having a door that locks. It also involves managing access to the residential premises and creating a more organised environment for residents. Many gated communities in Kollur feature controlled entry points, security personnel and visitor management systems. These measures can help families feel more comfortable about movement within the community.\n\nStandalone apartments can also provide security, but arrangements depend on the building and its management. For families with children, the additional advantage of a well-managed gated community is the opportunity to combine appropriate security measures with designated recreational spaces. While no residential format guarantees complete safety, thoughtful planning can make everyday living more convenient.`,
      },
      {
        heading: 'Amenities That Become Part of Your Routine',
        text: `Think about how often you postpone a workout because the gym is too far away or skip an evening walk because finding a suitable outdoor space is inconvenient. One of the key benefits of gated communities is having lifestyle facilities within the residential premises. Depending on the project, these may include a gymnasium, swimming pool, clubhouse, landscaped gardens and children's play areas.\n\nStandalone apartments may offer essential facilities, but extensive recreational amenities are less common in buildings with limited space. For families, this difference matters over time. Children have designated areas to play, adults have convenient options for fitness and recreation, and weekends can include activities without requiring another trip across the city. The value lies not in the number of amenities advertised but in how easily they fit into your everyday life.`,
      },
      {
        heading: 'More Than an Apartment: Space for the Whole Family',
        text: `A comfortable home needs to work for everyone who lives in it. Children need opportunities to play. Adults may want space to walk or exercise. Older family members may appreciate accessible outdoor areas where they can spend time comfortably. Well-planned gated community flats in Kollur can bring these needs together through landscaped spaces, walking paths and shared recreational facilities.\n\nIn a standalone building, the residential experience is largely centred around the apartment itself, with outdoor activities often depending on nearby public spaces. This does not mean every gated community offers the same experience. The quality and accessibility of its open spaces matter. However, when these spaces are thoughtfully planned, they can extend the usefulness of your home beyond its four walls.`,
      },
      {
        heading: 'Community Living Without Leaving Home',
        text: `A residential community can influence how people spend their time outside their apartments. Shared spaces create opportunities for children to meet other children, neighbours to interact and families to participate in community activities. These connections develop naturally when residents have places to spend time together.\n\nStandalone apartments can foster close relationships too, but a smaller building may offer fewer shared spaces for recreation and interaction. For buyers searching for family apartments in Kollur, this is worth considering. A home is a long-term commitment, and the environment around it can become an important part of family life.`,
      },
      {
        heading: 'Is a Gated Community Worth the Maintenance Cost?',
        text: `Gated communities may have higher maintenance charges because of their security arrangements, landscaping, common infrastructure and lifestyle amenities. However, comparing properties solely on monthly maintenance can overlook what those charges provide. Consider the cost of accessing external gyms, recreational facilities and other services if they are not available within your residential premises. Also consider the time and travel involved.\n\nA gated community is worth the additional expense when its facilities genuinely support your lifestyle. Before purchasing, compare the maintenance charges, services included and management quality to understand the overall value.`,
      },
      {
        heading: 'Why Consider Tribhuja by Zuari Gangotri?',
        text: `For buyers exploring the best gated communities in Kollur, Tribhuja by Zuari Gangothri offers 3 and 4 BHK residences designed around space, natural light, ventilation and privacy.\n\nThe development features:\n\nSpacious residences: Apartment sizes ranging from 1,679 to 3,126 sq. ft.\n\nPrivacy oriented planning: 78% corner units.\n\nOpen surroundings: 72% open spaces.\n\nLifestyle facilities: A clubhouse spanning over 1 lakh sq. ft. and more than 55 lifestyle amenities.\n\nStrategic connectivity: Located approximately 400 metres from ORR Exit 2 at Kollur.\n\nFor professionals commuting to Hyderabad's western IT corridor, access to the ORR provides a useful connection towards the Financial District, Gachibowli and HITEC City. The location also offers access towards Neopolis, making it worth considering for buyers balancing workplace commutes with family life.\n\nFor homebuyers comparing secure apartments in Kollur, Tribhuja brings together spacious layouts, recreational facilities, privacy focused planning and connectivity within a planned residential development.`,
      },
      {
        heading: 'The Better Choice for Your Next Home',
        text: `Standalone apartments can meet essential housing needs. But if you are buying a home for your family, it is worth considering what your investment will offer beyond the apartment itself. A well-planned gated community can bring together security arrangements, recreational facilities, open spaces and opportunities for community living in one residential environment.\n\nInstead of asking only how much space you are buying, ask how that space and its surroundings will support your family's everyday life. If these are the priorities that matter to you, exploring Tribhuja by Zuari Gangothri could be a worthwhile next step.`,
      },
    ],
  },
};

const detailStyles = `
.detail-page {
  min-height: 100vh;
  background: #080806;
  color: #EDE6DA;
  font-family: 'DM Sans', sans-serif;
}

.detail-container {
  width: min(1180px, calc(100% - 56px));
  margin: 0 auto;
}

.detail-hero {
  padding: 160px 0 72px;
  background: linear-gradient(145deg, #080806 15%, #15100c 100%);
  border-bottom: 1px solid rgba(184, 115, 51, .12);
}

.detail-back {
  display: inline-block;
  margin-bottom: 58px;
  color: rgba(237, 230, 218, .5);
  text-decoration: none;
  font-size: .7rem;
  letter-spacing: .15em;
  text-transform: uppercase;
}

.detail-back:hover,
.detail-bottom-link:hover {
  color: #E0A66F;
}

.detail-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  color: #B87333;
  font-size: .68rem;
  letter-spacing: .15em;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.detail-hero h1 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  font-size: clamp(3rem, 6.4vw, 6.8rem);
  line-height: .96;
  max-width: 1060px;
  margin: 0 0 30px;
}

.detail-intro {
  max-width: 760px;
  color: rgba(237, 230, 218, .7);
  font-size: 1.05rem;
  line-height: 1.9;
  margin: 0;
}

.detail-image-wrap {
  padding: 54px 0 0;
}

.detail-image {
  height: min(62vw, 650px);
  min-height: 380px;
  overflow: hidden;
  background: #111;
  border: 1px solid rgba(184, 115, 51, .15);
}

.detail-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: .9;
  display: block;
}

.detail-article {
  padding: 82px 0 110px;
}

.detail-copy {
  width: min(760px, calc(100% - 40px));
  margin: 0 auto;
}

.detail-toc {
  margin: 0 0 64px;
  padding: 30px;
  border: 1px solid rgba(184, 115, 51, .25);
  background: rgba(255, 255, 255, .02);
}

.detail-toc h2 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  font-size: 2rem;
  margin: 0 0 20px;
}

.detail-toc ol {
  padding-left: 22px;
  margin: 0;
}

.detail-toc li {
  padding: 7px 0;
  color: #B87333;
}

.detail-toc a {
  color: rgba(237, 230, 218, .75);
  text-decoration: none;
  font-size: .9rem;
  line-height: 1.7;
}

.detail-toc a:hover {
  color: #B87333;
}

.detail-copy section.detail-content-section {
  margin-bottom: 52px;
  scroll-margin-top: 110px;
}

.detail-copy h2 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  font-size: clamp(2rem, 4vw, 3.3rem);
  line-height: 1.05;
  margin: 0 0 20px;
}

.detail-copy p {
  font-size: 1rem;
  line-height: 1.95;
  color: rgba(237, 230, 218, .72);
  margin: 0;
  white-space: pre-line;
}

.detail-cta {
  margin: 80px 0 48px;
  padding: 46px 0;
  border-top: 1px solid rgba(184, 115, 51, .2);
  border-bottom: 1px solid rgba(184, 115, 51, .2);
}

.detail-kicker {
  display: block;
  color: #B87333;
  font-size: .66rem;
  letter-spacing: .24em;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.detail-primary-btn {
  display: inline-flex;
  min-height: 50px;
  padding: 0 28px;
  align-items: center;
  justify-content: center;
  background: #B87333;
  border: 1px solid #B87333;
  color: #080806;
  text-decoration: none;
  font-size: .66rem;
  font-weight: 700;
  letter-spacing: .18em;
  text-transform: uppercase;
  transition: .3s;
}

.detail-primary-btn:hover {
  background: transparent;
  color: #B87333;
}

.detail-bottom-link {
  color: #B87333;
  text-decoration: none;
  font-size: .68rem;
  letter-spacing: .14em;
  text-transform: uppercase;
}

.not-found {
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 160px 0 80px;
}

.not-found h1 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  font-size: clamp(3rem, 7vw, 6rem);
  margin: 0 0 30px;
}

@media (max-width: 640px) {
  .detail-container {
    width: calc(100% - 36px);
  }

  .detail-hero {
    padding: 130px 0 56px;
  }

  .detail-back {
    margin-bottom: 42px;
  }

  .detail-meta {
    gap: 14px;
  }

  .detail-image-wrap {
    padding-top: 28px;
  }

  .detail-image {
    height: 58vw;
    min-height: 250px;
  }

  .detail-article {
    padding: 60px 0 80px;
  }

  .detail-copy {
    width: 100%;
  }

  .detail-copy section.detail-content-section {
    margin-bottom: 42px;
  }

  .detail-toc {
    padding: 22px;
    margin-bottom: 45px;
  }

  .detail-cta {
    margin-top: 60px;
  }
}
`;

const BlogDetail = () => {
  const { slug } = useParams();
  const post = posts[slug];

  useEffect(() => {
    if (!post) {
      document.title = 'Story Not Found | Tribhuja Life';
      return;
    }

    document.title = post.metaTitle;

    let descriptionTag = document.querySelector(
      'meta[name="description"]'
    );

    const originalDescription = descriptionTag
      ? descriptionTag.getAttribute('content')
      : null;

    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute('content', post.metaDescription);

    return () => {
      if (originalDescription !== null) {
        descriptionTag.setAttribute('content', originalDescription);
      } else {
        descriptionTag.remove();
      }
    };
  }, [post]);

  if (!post) {
    return (
      <div className="detail-page">
        <Navbar />

        <main className="not-found">
          <div className="detail-container">
            <span className="detail-kicker">Tribhuja Journal</span>
            <h1>Story not found.</h1>
            <Link to="/blog" className="detail-primary-btn">
              Back to blog
            </Link>
          </div>
        </main>

        <Footer showCtas={false} />
        <style>{detailStyles}</style>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <Navbar />

      <main>
        <section className="detail-hero">
          <div className="detail-container">
            <Link to="/blog" className="detail-back">
              ← Back to journal
            </Link>

            <div className="detail-meta">
              <span>{post.category}</span>
              <span>{post.date}</span>
            </div>

            <h1>{post.title}</h1>

            <p className="detail-intro">{post.excerpt}</p>
          </div>
        </section>

        <section className="detail-image-wrap">
          <div className="detail-container">
            <div className="detail-image">
              <Picture
                src={post.image}
                alt={post.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </section>

        <article className="detail-article">
          <div className="detail-copy">
            <div className="detail-toc" aria-label="Table of contents">
              <h2>Table of Contents</h2>

              <ol>
                {post.sections.map((section, index) => (
                  <li key={section.heading}>
                    <a href={`#blog-section-${index}`}>
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {post.sections.map((section, index) => (
              <section
                key={section.heading}
                id={`blog-section-${index}`}
                className="detail-content-section"
              >
                <h2>{section.heading}</h2>
                <p>{section.text}</p>
              </section>
            ))}

            <div className="detail-cta">
              <span className="detail-kicker">Explore Tribhuja</span>

              <h2>
                Interested in discovering more about the project?
              </h2>

              <Link to="/contact" className="detail-primary-btn">
                Contact us
              </Link>
            </div>

            <Link to="/blog" className="detail-bottom-link">
              ← Read more stories
            </Link>
          </div>
        </article>
      </main>

      <Footer showCtas={false} />
      <style>{detailStyles}</style>
    </div>
  );
};

export default BlogDetail;
