export type Language = 'EN' | 'PL' | 'DE';

export const translations = {
  EN: {
    nav: {
      about: 'About Us',
      projects: 'Projects',
      careers: 'Careers',
      contact: 'Contact Us',
      lang: 'Language'
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
          location: 'Gdańsk / Regional',
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
      rights: '© 2026 Tak! Damy radę. All Rights Reserved.',
      location: 'Gdańsk, Poland'
    }
  },
  PL: {
    nav: {
      about: 'O nas',
      projects: 'Projekty',
      careers: 'Kariera',
      contact: 'Kontakt',
      lang: 'Język'
    },
    hero: {
      title: 'Budujemy Kręgosłup Polski.',
      subtext: 'Od potężnych węzłów autostradowych po kluczowe sieci dróg wiejskich, przecieramy szlaki dla połączonego narodu. Dołącz do zespołu, który napędza kraj.',
      btn1: 'Zobacz Oferty',
      btn2: 'Nasze Realizacje'
    },
    careers: {
      title: 'Dołącz do Naszego Zespołu',
      description: 'Poszukujemy oddanych profesjonalistów, którzy pomogą nam rozwinć polską infrastrukturę. Niezależnie od tego, czy jesteś doświadczonym operatorem, czy pracownikiem fizycznym, Twoje miejsce jest tutaj.',
      roles: [
        {
          title: 'Operator Maszyn Ciężkich',
          location: 'Cała Polska / Autostrady',
          description: 'Obsługa koparek i rozściełaczy przy dużych projektach autostradowych.'
        },
        {
          title: 'Specjalista Ekipy Drogowej',
          location: 'Gdańsk / Regionalne',
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
      rights: '© 2026 Tak! Damy radę. Wszelkie prawa zastrzeżone.',
      location: 'Gdańsk, Polska'
    }
  },
  DE: {
    nav: {
      about: 'Über uns',
      projects: 'Projekte',
      careers: 'Karriere',
      contact: 'Kontakt',
      lang: 'Sprache'
    },
    hero: {
      title: 'Polens Rückgrat bauen.',
      subtext: 'Von riesigen Autobahnkreuzen bis zu wichtigen Dorfstraßennetzen ebnen wir den Weg für eine vernetzte Nation. Werden Sie Teil des Teams, das das Land bewegt.',
      btn1: 'Stellenangebote ansehen',
      btn2: 'Unsere Arbeit'
    },
    careers: {
      title: 'Werden Sie Teil unseres Teams',
      description: 'Wir suchen engagierte Profis, die uns beim Ausbau der polnischen Infrastruktur helfen. Ob Experte für Maschinenbedienung oder Fachkraft für den Straßenbau – Ihr Platz ist hier.',
      roles: [
        {
          title: 'Baumaschinenführer',
          location: 'Landesweit / Autobahnen',
          description: 'Bedienung von Baggern und Fertigern bei großen Autobahnprojekten.'
        },
        {
          title: 'Straßenbau-Spezialist',
          location: 'Danzig / Regional',
          description: 'Bau und Instandhaltung von lokalen Wegen und Dorfstraßennetzen.'
        }
      ]
    },
    why: {
      title: 'Warum wir?',
      subtitle: 'Zuverlässigkeit & Sicherheit',
      features: [
        {
          title: 'Moderne Ausrüstung',
          description: 'Wir nutzen die neueste Technologie im Straßenbau.'
        },
        {
          title: 'Stabilität',
          description: 'Langfristige Verträge und wettbewerbsfähige polnische Gehälter.'
        },
        {
          title: 'Auswirkung',
          description: 'Wir verbessern das Leben von Stadtbewohnern und Dorfbewohnern gleichermaßen.'
        }
      ]
    },
    footer: {
      rights: '© 2026 Tak! Damy radę. Alle Rechte vorbehalten.',
      location: 'Danzig, Polen'
    }
  }
};
