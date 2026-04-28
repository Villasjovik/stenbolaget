/**
 * ╔══════════════════════════════════════════════╗
 * ║  PITCH CONFIG — STENBOLAGET                  ║
 * ║  Reference only — index.html är manuellt    ║
 * ║  modifierad från grevinnans-rum-canonical.   ║
 * ╚══════════════════════════════════════════════╝
 */
module.exports = {

  slug:      'stenbolaget',
  pageTitle: 'Villa Sjövik × Stenbolaget — Samarbetsförslag',
  year:      '2026',

  influencer: {
    name:    'Villa Sjövik',
    logo:    'villasjovik.svg',
    email:   'kontakt@villasjovik.se',
    phone:   '070–65 66 596',
    handle:  '@villasjovik',
    website: 'villasjovik.se',
    contact: 'Carin Norberg',
  },

  brand: {
    name: 'Stenbolaget',
    logo: 'logos/stenbolaget.png',
    contact: 'Josefine Sjögren, Digital Marketing Manager',
  },

  product: {
    name: 'Glimmerskiffer Steppingstone',
    artNr: '1325050',
    retailPrice: 332,
    url: 'https://stenbolaget.se/products/glimmerskiffer-steppingstone',
  },

  pricing: {
    productionFee: 18500,
    stones: 80,
    productValueRetail: 80 * 332, // 26 560 kr
  },

  audience: {
    gender: { kvinnor: 95.2, män: 4.8 },
    age: {
      '13–17': 0.0,
      '18–24': 0.4,
      '25–34': 5.5,
      '35–44': 16.4,
      '45–54': 30.2,
      '55–64': 32.5,
      '65+':   14.9,
    },
    interpretation: 'Husägare 35–64, primärt kvinnor som driver inredningsbeslut — exakt Stenbolagets retail-kund.',
  },

  spar: [
    { num: '01', title: 'Vägen genom trädgården', body: 'Stenarna lagda som ett medvetet stråk. Huvudvideon (60–90 sek) följer steget från altan ut i grönskan.' },
    { num: '02', title: 'Materialets karaktär',    body: 'Editorial närbilder. Regn på sten, glimmer i solnedgång. Materialet som designobjekt.' },
    { num: '03', title: 'Innan & efter',           body: 'Trädgårdsdelen som fanns vs. färdigt projekt. Stenbolagets produkt som lösningen.' },
  ],

  partners: {
    label: 'Tidigare samarbeten',
    logos: [
      { name: 'lexington',    file: 'logos/lexington.png',    alt: 'Lexington'       },
      { name: 'mille_notti',  file: 'logos/mille_notti.avif', alt: 'Mille Notti'     },
      { name: 'tinekhome',    file: 'logos/tinekhome.jpg',    alt: 'TineK'           },
      { name: 'vedum',        file: 'logos/vedum.png',        alt: 'Vedum Kök & Bad' },
      { name: 'markslojd',    file: 'logos/markslojd.avif',   alt: 'Markslöjd'       },
      { name: 'husqvarna',    file: 'logos/husqvarna.jpg',    alt: 'Husqvarna'       },
    ],
  },
};
