export type Language = 'EN' | 'PL';

export const translations = {
  EN: {
    nav: {
      about: 'About Us',
      projects: 'Projects',
      careers: 'Careers',
      contact: 'Contact Us',
      lang: 'POLSKI',
      langCode: 'PL'
    },
    hero: {
      title: "Building Poland's Backbone.",
      subtext: "From massive highway interchanges to essential village road networks, we pave the way for a connected nation. Join the team that moves the country.",
      btn1: 'View Openings',
      btn2: 'Our Work'
    },
    careers: {
      title: 'Join Our Workforce',
      description: "We are looking for dedicated professionals to help us expand Poland's infrastructure. Whether you are an expert operator or a manual specialist, your place is here.",
      roles: [
        {
          title: 'Heavy Machinery Operator',
          location: 'Nationwide / Highways',
          description: 'Operating excavators and pavers on major motorway projects.'
        },
        {
          title: 'Road Crew Specialist',
          location: 'Local Villages / Regional',
          description: 'Building and maintaining local paths and village road networks.'
        }
      ]
    },
    why: {
      title: 'Why Choose Us?',
      subtitle: 'Reliability & Safety',
      features: [
        {
          title: 'Modern Equipment',
          description: 'We use the latest technology in road construction.'
        },
        {
          title: 'Stability',
          description: 'Long-term contracts and competitive Polish salaries.'
        },
        {
          title: 'Impact',
          description: 'We improve the lives of city residents and villagers alike.'
        }
      ]
    },
    footer: {
      rights: '© 2026 PolRoad Construction. All Rights Reserved.'
    }
  },
  PL: {
    nav: {
      about: 'O nas',
      projects: 'Projekty',
      careers: 'Kariera',
      contact: 'Kontakt',
      lang: 'ENGLISH',
      langCode: 'EN'
    },
    hero: {
      title: 'Budujemy Kręgosłup Polski.',
      subtext: 'Od potężnych węzłów autostradowych po kluczowe sieci dróg wiejskich, przecieramy szlaki dla połączonego narodu. Dołącz do zespołu, który napędza kraj.',
      btn1: 'Zobacz Oferty',
      btn2: 'Nasze Realizacje'
    },
    careers: {
      title: 'Dołącz do Naszego Zespołu',
      description: 'Poszukujemy oddanych profesjonalistów, którzy pomogą nam rozwijać polską infrastrukturę. Niezależnie od tego, czy jesteś doświadczonym operatorem, czy pracownikiem fizycznym, Twoje miejsce jest tutaj.',
      roles: [
        {
          title: 'Operator Maszyn Ciężkich',
          location: 'Cała Polska / Autostrady',
          description: 'Obsługa koparek i rozściełaczy przy dużych projektach autostradowych.'
        },
        {
          title: 'Specjalista Ekipy Drogowej',
          location: 'Lokalne Wioski / Regionalne',
          description: 'Budowa i utrzymanie lokalnych ścieżek oraz wiejskich sieci drogowych.'
        }
      ]
    },
    why: {
      title: 'Dlaczego My?',
      subtitle: 'Niezawodność i Bezpieczeństwo',
      features: [
        {
          title: 'Nowoczesny Sprzęt',
          description: 'Korzystamy z najnowszych technologii w budownictwie drogowym.'
        },
        {
          title: 'Stabilność',
          description: 'Długoterminowe kontrakty i konkurencyjne polskie wynagrodzenia.'
        },
        {
          title: 'Wpływ',
          description: 'Poprawiamy jakość życia zarówno mieszkańców miast, jak i wsi.'
        }
      ]
    },
    footer: {
      rights: '© 2026 PolRoad Budownictwo. Wszelkie prawa zastrzeżone.'
    }
  }
};
