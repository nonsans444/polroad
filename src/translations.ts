export type Language = 'EN' | 'PL' | 'DE';

export const translations = {
  EN: {
    nav: {
      about: 'About Us',
      projects: 'Projects',
      careers: 'Infrastructure',
      contact: 'Contact Us',
      lang: 'Change Language',
      home: 'Home'
    },
    hero: {
      title: "Building Poland's Backbone.",
      subtext: "From massive highway interchanges to essential village road networks, we pave the way for a connected nation. Dedicated to excellence in Polish infrastructure.",
      btn1: 'About Road Tech',
      btn2: 'Our Work'
    },
    announcement: {
      tag: 'New Opportunity',
      title: 'Hiring: Painter Helper',
      description: 'We are currently looking for a hard-working Painter Helper to join our team in Gdańsk. No prior experience required, just reliability.',
      btn: 'Contact for details'
    },
    careers: {
      title: 'Our Road Construction Expertise',
      description: "While we are not currently hiring for major roles, we continue to lead Poland's infrastructure development through specialized expertise in various road construction domains.",
      roles: [
        {
          title: 'Heavy Machinery Tech',
          location: 'Highway Engineering',
          description: 'Advanced asphalt paving technology and high-performance machinery usage for national motorways.'
        },
        {
          title: 'Regional Path Design',
          location: 'Local Communities',
          description: 'Developing sustainable road solutions for villages and regional paths to boost local connectivity.'
        }
      ]
    },
    why: {
      title: 'Why Choose Us?',
      subtitle: 'Reliability, Safety & Patriotism',
      features: [
        {
          title: 'Modern Equipment',
          description: 'We utilize the latest European technology in road construction for maximum durability.'
        },
        {
          title: 'Stability',
          description: 'A proven track record of long-term contracts and contributing to the Polish economy.'
        },
        {
          title: 'National Impact',
          description: 'Improving lives and connectivity for all Polish citizens, from cities to the smallest villages.'
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
      careers: 'Infrastruktura',
      contact: 'Kontakt',
      lang: 'Zmień Język',
      home: 'Start'
    },
    hero: {
      title: 'Budujemy Kręgosłup Polski.',
      subtext: 'Od potężnych węzłów autostradowych po kluczowe sieci dróg wiejskich, przecieramy szlaki dla połączonego narodu. Oddani doskonałości w polskiej infrastrukturze.',
      btn1: 'O Technologii',
      btn2: 'Nasze Realizacje'
    },
    announcement: {
      tag: 'Nowa Ogłoszenie',
      title: 'Zatrudnimy: Pomocnik Malarza',
      description: 'Obecnie poszukujemy pracowitego Pomocnika Malarza do naszego zespołu w Gdańsku. Doświadczenie nie jest wymagane, liczy się rzetelność.',
      btn: 'Kontakt po szczegóły'
    },
    careers: {
      title: 'Nasza Wiedza Ekspercka',
      description: 'Obecnie nie prowadzimy rekrutacji na główne stanowiska, ale niezmiennie przewodzimy rozwojowi polskiej infrastruktury dzięki specjalistycznej wiedzy.',
      roles: [
        {
          title: 'Technologia Maszyn',
          location: 'Inżynieria Autostrad',
          description: 'Zaawansowana technologia układania asfaltu i wykorzystanie wysokowydajnych maszyn na autostradach krajowych.'
        },
        {
          title: 'Drogi Regionalne',
          location: 'Lokalne Społeczności',
          description: 'Tworzenie trwałych rozwiązań drogowych dla wsi i ścieżek regionalnych w celu zwiększenia łączności lokalnej.'
        }
      ]
    },
    why: {
      title: 'Dlaczego My?',
      subtitle: 'Niezawodność, Bezpieczeństwo i Patriotyzm',
      features: [
        {
          title: 'Nowoczesny Sprzęt',
          description: 'Wykorzystujemy najnowsze europejskie technologie w budownictwie drogowym dla maksymalnej trwałości.'
        },
        {
          title: 'Stabilność',
          description: 'Udokumentowana historia długoterminowych kontraktów i wkład w polską gospodarkę.'
        },
        {
          title: 'Wpływ Narodowy',
          description: 'Poprawa jakości życia i łączności dla wszystkich obywateli Polski, od miast po najmniejsze wsie.'
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
      careers: 'Infrastruktur',
      contact: 'Kontakt',
      lang: 'Sprache ändern',
      home: 'Start'
    },
    hero: {
      title: 'Polens Rückgrat bauen.',
      subtext: 'Von riesigen Autobahnkreuzen bis zu wichtigen Dorfstraßennetzen ebnen wir den Weg für eine vernetzte Nation. Höchste Qualität in der polnischen Infrastruktur.',
      btn1: 'Über Straßentechnik',
      btn2: 'Unsere Arbeit'
    },
    announcement: {
      tag: 'Neues Angebot',
      title: 'Gesucht: Malhelfer',
      description: 'Wir suchen derzeit einen fleißigen Malhelfer zur Verstärkung unseres Teams in Danzig. Keine Vorerfahrung erforderlich, nur Zuverlässigkeit.',
      btn: 'Kontakt für Details'
    },
    careers: {
      title: 'Unsere Expertise im Straßenbau',
      description: 'Obwohl wir derzeit keine Stellen für Führungspositionen ausschreiben, führen wir die Entwicklung der polnischen Infrastruktur durch spezielles Know-how weiter an.',
      roles: [
        {
          title: 'Maschinentechnik',
          location: 'Autobahnbau',
          description: 'Fortschrittliche Asphaltiertechnik und Einsatz von Hochleistungsmaschinen für nationale Autobahnen.'
        },
        {
          title: 'Regionale Wegeplanung',
          location: 'Lokale Gemeinschaften',
          description: 'Entwicklung nachhaltiger Straßenlösungen für Dörfer und regionale Wege zur Stärkung der lokalen Vernetzung.'
        }
      ]
    },
    why: {
      title: 'Warum wir?',
      subtitle: 'Zuverlässigkeit, Sicherheit & Patriotismus',
      features: [
        {
          title: 'Moderne Ausrüstung',
          description: 'Wir nutzen modernste europäische Technologie im Straßenbau für maximale Langlebigkeit.'
        },
        {
          title: 'Stabilität',
          description: 'Eine nachgewiesene Erfolgsbilanz bei langfristigen Verträgen und ein Beitrag zur polnischen Wirtschaft.'
        },
        {
          title: 'Nationaler Einfluss',
          description: 'Verbesserung des Lebens und der Konnektivität für alle polnischen Bürger, von Städten bis hin zu den kleinsten Dörfern.'
        }
      ]
    },
    footer: {
      rights: '© 2026 Tak! Damy radę. Alle Rechte vorbehalten.',
      location: 'Danzig, Polen'
    }
  }
};
