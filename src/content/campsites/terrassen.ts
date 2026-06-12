import type { CampsiteConfig } from "../types";

/**
 * Terrassencamping Ossiach Martinz — Ossiach am Ossiacher See, Kärnten.
 * Alle Texte/Fakten belegt aus terrassen.camping.at (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene Fotos des Platzes in /public/campsites/terrassen/
 * (jedes Bild per Vision geprüft). EHRLICH: der Platz liegt terrassenförmig DIREKT
 * am Ossiacher See, mit direktem Wasserzugang, Badesteg und eigenem Fischwasser —
 * das ist durch Quelle + Logo ("Direkt am Ossiacher See") belegt. Reale Camping-
 * Preisliste 2026 von der Quelle übernommen → keine Platzhalter. Mobilheim-/
 * Familienkabinen-Preise (außer Privatbad € 15/Tag) standen NICHT in den
 * gescrapten Seiten → priceFrom dort weggelassen. Keine eindeutige Auszeichnung →
 * awards leer. Keine Koordinaten in der Quelle → coords weggelassen (Karte aus,
 * Adresse sichtbar).
 */
const IMG = "/campsites/terrassen";

export const terrassen: CampsiteConfig = {
  name: "Terrassencamping Ossiach Martinz",
  shortName: "Terrassencamping",
  slug: "terrassen",
  ort: "Ossiach",
  region: "Kärnten",
  brandKind: "Camping am Ossiacher See",
  see: "Ossiacher See",
  regionLong: "Urlaubsregion Ossiacher See · Kärnten · Österreich",

  claim: "Dein Familienurlaub direkt am Ossiacher See",
  claimEmphasis: "direkt am Ossiacher See",
  intro:
    "Unser terrassenförmig angelegter Platz öffnet den Blick auf den Ossiacher See und die umliegende Bergwelt — ein familiengeführter Ort mit direktem Zugang zum Wasser, an dem man ankommt und sich wohlfühlt.",

  logo: { src: `${IMG}/logo-terrassencamping.png`, alt: "Terrassen Camping Ossiacher See Logo" },

  statement: {
    text: "Bereits in dritter Generation führen wir unseren Campingplatz mit viel Liebe, Tradition und echter Herzlichkeit.",
    emphasis: "echter Herzlichkeit",
  },

  pillars: [
    { title: "Terrassen direkt am See", text: "Der terrassenförmig angelegte Platz liegt direkt am Ossiacher See — mit weitem Blick auf Wasser und Bergkulisse.", image: { src: `${IMG}/terrassen-am-see.webp`, alt: "Luftaufnahme der Terrassen des Campingplatzes direkt am Ossiacher See" } },
    { title: "Eigenes Restaurant", text: "Regional, frisch und mit Liebe zubereitet: Wildspezialitäten von Chef Bruno und Juniorchefin Johanna sowie Bio-Rindfleisch aus dem Mölltal.", image: { src: `${IMG}/restaurant-wildgericht.webp`, alt: "Regionales Wildgericht aus dem hauseigenen Restaurant am Terrassencamping" } },
    { title: "lake.bike & Aktiv", text: "Als lake.bike BaseCamp ist der Platz idealer Ausgangspunkt für Trails, Touren und herrliche Tage am und auf dem See.", image: { src: `${IMG}/biker-bank-seeblick.webp`, alt: "Zwei Mountainbiker mit Blick auf den Ossiacher See" } },
  ],

  usps: [
    "Direkt am Ossiacher See",
    "Eigenes Restaurant mit regionaler Küche",
    "lake.bike BaseCamp – Trails am Platz",
    "Gratis WLAN am gesamten Gelände",
    "Eigenes Fischwasser (38 ha)",
    "Hunde willkommen",
  ],

  trust: {
    heading: "Worauf du dich am Terrassencamping verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Familie Martinz in dritter Generation, mit eigenem Restaurant, Supermarkt am Platz und direktem Zugang zum Ossiacher See — ein Ort, an dem Natur, Ruhe und familiäre Wärme zusammenkommen.",
  },

  // Camping.info zeigt eine Gäste-Bewertung (4,3 „Sehr gut"), das ist jedoch keine
  // eindeutige Auszeichnung des Platzes → ehrlich leer (Band zeigt nur USP-Pills).
  awards: [],

  saison: { von: "April", bis: "November" },

  hero: {
    aerial: { src: `${IMG}/hero-luftaufnahme.webp`, alt: "Luftaufnahme: Terrassencamping Ossiach direkt am Ossiacher See mit Bergkulisse" },
  },

  camping: {
    heading: "Dein Campingurlaub am Ossiacher See",
    intro:
      "Auf insgesamt 280 großzügigen Stellplätzen genießt du viel Platz, Ruhe und vor allem den direkten Zugang zum Wasser — ideal für entspannte Badetage, Sonnenuntergänge am Ufer oder einfach zum Abschalten.",
    features: [
      { title: "Terrassierte Stellplätze", text: "Schön angelegte Stellplätze auf Terrassen mit Blick auf See und Berge — für Wohnmobil, Wohnwagen und Zelt.", image: { src: `${IMG}/stellplatz-terrasse.webp`, alt: "Wohnmobile auf den terrassierten Stellplätzen am Terrassencamping" } },
      { title: "Direkt am Wasser", text: "Liegewiese und direkter Seezugang: ein Sprung ins herrliche Nass ist nie weit.", image: { src: `${IMG}/liegewiese-seezugang.webp`, alt: "Liegewiese mit direktem Zugang zum türkisen Ossiacher See" } },
      { title: "Platz für jeden Geschmack", text: "Stellplatzkategorien von Komfort über Terrasse bis zur 1. Reihe am See — du wählst die Lage, die zu dir passt.", image: { src: `${IMG}/stellplaetze-liegewiese.webp`, alt: "Sonnige Stellplätze und Liegewiese am Terrassencamping" } },
      { title: "Stellplatz mit Seeblick", text: "Großzügige Wiesenplätze mit Blick auf den See und die Berge — Natur pur direkt vor dem Wohnmobil.", image: { src: `${IMG}/wohnmobil-seeblick.webp`, alt: "Wohnmobil auf einem Stellplatz mit Blick auf den Ossiacher See" } },
      { title: "Badesteg am See", text: "Eigene Stege laden zum Sonnen, Baden und Sprung ins Wasser ein — Seeleben direkt am Platz.", image: { src: `${IMG}/badesteg.webp`, alt: "Gäste am Badesteg des Terrassencamping am Ossiacher See" } },
      { title: "Moderne Sanitäranlagen", text: "Gepflegte, moderne Sanitäranlagen mit großzügig gestaltetem Kinderbereich — Komfort für die ganze Familie.", image: { src: `${IMG}/sanitaeranlagen-familie.webp`, alt: "Familie an den modernen Sanitäranlagen am Terrassencamping" } },
    ],
  },

  mobilheime: {
    heading: "Unsere Mieteinrichtungen",
    intro:
      "Lieber feste Wände als Zelt? Vom exklusiven Premium-Mobilheim direkt am Wasser bis zum Mobilheim Comfort und dem privaten Familienbad — komfortabel ausgestattet und bereit zum Ankommen.",
    items: [
      { name: "Premium Mobilheim", kind: "Mobilheim · direkt am See", text: "Auf 34 m² Platz für bis zu sechs Personen: drei Schlafzimmer, voll ausgestattete Küche mit Geschirrspüler und Nespresso, Klimaanlage, TV und eigene Sonnenterrasse mit direktem Seezugang.", image: { src: `${IMG}/premium-mobilheim-vom-see.webp`, alt: "Premium Mobilheime des Terrassencamping direkt am Ufer des Ossiacher Sees" }, features: ["bis 6 Personen", "3 Schlafzimmer", "direkter Seezugang"] },
      { name: "Mobilheim Comfort", kind: "Mobilheim", text: "Modern eingerichtet für bis zu vier Personen: zwei Schlafzimmer, Bad mit Dusche und WC, Klimaanlage und Wohnküche. Von der großen überdachten Terrasse genießt du den Blick auf den Ossiacher See.", image: { src: `${IMG}/mobilheim-comfort-terrasse.webp`, alt: "Überdachte Terrasse des Mobilheim Comfort mit Liegen und Seeblick" }, features: ["bis 4 Personen", "2 Schlafzimmer", "Klimaanlage"] },
      { name: "Private Familienkabine", kind: "Privatbad · zum Mieten", text: "Noch mehr Komfort: Sichere dir dein eigenes Privatbad mit Dusche und WC — ganz für dich allein, neben den Sanitärhäusern.", image: { src: `${IMG}/familienkabine-privatbad.webp`, alt: "Private Familienkabine mit Dusche und zwei Waschbecken" }, priceFrom: 15, features: ["privates Bad", "Dusche & WC", "exklusiv für dich"] },
    ],
  },

  kinder: {
    heading: "Für die ganze Familie",
    intro:
      "Den ganzen Tag am Wasser spielen, neue Freundschaften schließen und Natur erleben: Ab 22. Mai 2026 sorgt das Animationsteam Viola und Lara für ein abwechslungsreiches Kinderprogramm.",
    features: [
      { title: "Strand & Spielen", text: "Sandstrand am See, Spiel und jede Menge Platz zum Toben — beim Campen wird der Familienurlaub zum echten Abenteuer.", image: { src: `${IMG}/familie-strand-spielen.webp`, alt: "Mutter und Kinder spielen am Sandstrand des Ossiacher Sees" } },
      { title: "Sport am Platz", text: "Beachvolleyball, Tischtennis, Tennis und Fußball — auf dem Sportgelände kommt die ganze Familie in Bewegung.", image: { src: `${IMG}/beachvolleyball.webp`, alt: "Beachvolleyball auf dem Sportgelände am Terrassencamping" } },
      { title: "Familienzeit am See", text: "Gemeinsame Stunden am Wasser, Sonne und Bergblick — hier dürfen Kinder einfach Kinder sein.", image: { src: `${IMG}/familie-am-strand.webp`, alt: "Familie am Strand des Ossiacher Sees in der Abendsonne" } },
    ],
  },

  aktivitaeten: {
    heading: "Aktiv am Ossiacher See",
    intro:
      "Ob auf dem Trail, im Wasser oder mit der Angel — rund um das Terrassencamping direkt am Ossiacher See wird es nie langweilig.",
    items: [
      { title: "Mountainbiken", text: "Als lake.bike BaseCamp ist der Platz idealer Ausgangspunkt für Trails am Ossiacher Tauern — der Cody-, Miki- und Mini-Trail liegen direkt oberhalb.", image: { src: `${IMG}/lake-bike-trails.webp`, alt: "Mountainbike-Trails oberhalb des Terrassencamping am Ossiacher See" } },
      { title: "Baden & Schwimmen", text: "Der direkte Seezugang macht den Ossiacher See zum Badeparadies — erfrischende Stunden im herrlichen Nass direkt am Platz.", image: { src: `${IMG}/baden-im-see.webp`, alt: "Badegäste im klaren Wasser des Ossiacher Sees" } },
      { title: "Fischen im eigenen Fischwasser", text: "Karpfen, Hechte, Zander, Reinanken und mehr: Vom Steg oder mit einem Boot befischst du das 38 ha große eigene Fischwasser direkt vom Campingplatz aus.", image: { src: `${IMG}/fischen-steg.webp`, alt: "Steg am Ossiacher See – Fischen im eigenen Fischwasser" } },
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      { title: "Mit dem Auto", text: "Über Villach an den Ossiacher See nach Ossiach — Ostriach 67, A-9570 Ossiach." },
      { title: "Mit Bahn & Bus", text: "Bahnhof Villach Hbf, weiter mit Bus oder Transfer nach Ossiach am Ossiacher See." },
      { title: "Mit dem Flugzeug", text: "Flughafen Klagenfurt (KLU) in rund 30 Minuten Fahrt, Ljubljana als Alternative." },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Ossiacher See",
    headingEmphasis: "Ossiacher See",
    intro:
      "Terrassen am Wasser, Bergblick, Sonnenuntergänge am Steg und gemütliche Stunden im Restaurant — ein paar Eindrücke vom Terrassencamping in Ossiach.",
    tag: "April bis November",
    moreCount: 12,
    images: [
      { src: `${IMG}/sonnenuntergang-steg.webp`, alt: "Sonnenuntergang am Steg über dem Ossiacher See" },
      { src: `${IMG}/luft-panorama-see.webp`, alt: "Luftpanorama des Ossiacher Sees mit dem Campingplatz am Ufer" },
      { src: `${IMG}/restaurant-ambiente.webp`, alt: "Gäste im hauseigenen Restaurant am Terrassencamping" },
      { src: `${IMG}/premium-mobilheim-wohnraum.webp`, alt: "Heller Wohnraum eines Premium Mobilheims am Terrassencamping" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wähle Zeitraum, Stellplatz und Personen — Familie Martinz meldet sich mit deiner persönlichen Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise Frühlings-/Herbstsaison für 2 Personen · zzgl. Ortstaxe (€ 2,70/Pers./Nacht ab 18 J.), Umweltabgabe (€ 4,90/Nacht) & Strom (€ 0,90/kWh) · je nach Saison & Belegung",
    highlight: {
      title: "Gratis WLAN & Langzeit-Vorteil",
      text: "WLAN ist am gesamten Gelände inklusive, und ab 14 Nächten gibt es 20 % auf die Stellplatzgebühr.",
    },
    categories: [
      // Reale Preisliste Terrassencamping 2026 (Quelle: /de/camping). perNight = Stellplatz
      // + 2 Erwachsene (je 10,50) in der günstigsten Frühlings-/Herbstsaison; perExtraGuest
      // = Erwachsenen-Satz dieser Saison. Personen-/Neben-Gebühren laut priceNote.
      { id: "komfort", label: "Stellplatz Komfort", perNight: 37, perExtraGuest: 10.5 },
      { id: "terrasse", label: "Stellplatz Terrasse", perNight: 41, perExtraGuest: 10.5 },
      { id: "ersteReihe", label: "1. Reihe / Terrasse 5+6", perNight: 43, perExtraGuest: 10.5 },
    ],
  },

  kontakt: {
    coords: { lat: 46.663579, lng: 13.974444 },
    tel: "+43 4243 436",
    telHref: "tel:+434243436",
    mail: "martinz@camping.at",
    adresse: "Ostriach 67 · A-9570 Ossiach · Kärnten",
  },

  // story-Sektion bewusst weggelassen: Die Template-Story nutzt fixe, generische
  // Video-Clips (/story/clip*.mp4), die NICHT vom Terrassencamping stammen — würde
  // gegen die Provenienz-/Ehrlichkeitsregel verstoßen. Inhalt (3. Generation,
  // Kulinarik) ist stattdessen in statement/trust/pillars untergebracht.

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Terrassierte Stellplätze", href: "#camping" },
        { label: "Direkt am Wasser", href: "#camping" },
        { label: "Sanitäranlagen", href: "#camping" },
      ],
    },
    {
      label: "Mieten",
      href: "#mobilheime",
      children: [
        { label: "Premium Mobilheim", href: "#mobilheime" },
        { label: "Mobilheim Comfort", href: "#mobilheime" },
        { label: "Familienkabine", href: "#mobilheime" },
      ],
    },
    {
      label: "Familie",
      href: "#kinder",
      children: [
        { label: "Strand & Spielen", href: "#kinder" },
        { label: "Sport am Platz", href: "#kinder" },
        { label: "Kinderanimation", href: "#kinder" },
      ],
    },
    {
      label: "Aktiv",
      href: "#aktivitaeten",
      children: [
        { label: "Mountainbiken", href: "#aktivitaeten" },
        { label: "Baden & Schwimmen", href: "#aktivitaeten" },
        { label: "Fischen", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default terrassen;
