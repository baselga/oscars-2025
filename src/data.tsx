export const PLAYERS = {
  ruth: {
    name: "Ruth",
    photo: "players/ruth.jpeg",
  },
  sara: {
    name: "Sara",
    photo: "players/sara.jpeg",
  },
  antonio: {
    name: "Antonio",
    photo: "players/antonio.jpeg",
  },
  toñi: {
    name: "Toñi",
    photo: "players/tonyi.jpeg",
  },
} as const;

export type PlayerKeys = keyof typeof PLAYERS;

export type Category = {
  name: string;
  nominees: Nominee[];
};

export type Nominee = {
  name: string;
  votes: PlayerKeys[];
  winner: boolean;
  photo?: string;
};

export const DATA: Category[] = [
  {
    name: "Mejor Película",
    nominees: [
      {
        name: "A Complete Unknown",
        votes: [],
        winner: false,
        photo: "photos/01-mejorPelicula/ACompleteUnkown.JPG",
      },
      {
        name: "Anora",
        votes: [],
        winner: true,
        photo: "photos/01-mejorPelicula/Anora.JPG",
      },
      {
        name: "Aún estoy aquí",
        votes: [],
        winner: false,
        photo: "photos/01-mejorPelicula/AúnEstoyAquí.JPG",
      },
      {
        name: "Cónclave",
        votes: ["antonio"],
        winner: false,
        photo: "photos/01-mejorPelicula/Conclave.JPG",
      },
      {
        name: "Dune: parte dos",
        votes: [],
        winner: false,
        photo: "photos/01-mejorPelicula/DuneParteDos.JPG",
      },
      {
        name: "Emilia Pérez",
        votes: [],
        winner: false,
        photo: "photos/01-mejorPelicula/EmiliaPérez.JPG",
      },
      {
        name: "La sustancia",
        votes: ["toñi"],
        winner: false,
        photo: "photos/01-mejorPelicula/LaSustancia.JPG",
      },
      {
        name: "Nickel Boys",
        votes: [],
        winner: false,
        photo: "photos/01-mejorPelicula/NickelBoys.JPG",
      },
      {
        name: "The Brutalist",
        votes: ["ruth", "sara"],
        winner: false,
        photo: "photos/01-mejorPelicula/TheBrutalist.JPG",
      },
      {
        name: "Wicked",
        votes: [],
        winner: false,
        photo: "photos/01-mejorPelicula/Wicked.JPG",
      },
    ],
  },
  {
    name: "Mejor Director",
    nominees: [
      {
        name: "Sean Baker, por 'Anora'",
        votes: ["toñi"],
        photo: "photos/02-mejorDirector/SeanBaker.JPG",
        winner: true,
      },
      {
        name: "Brady Corbet, 'The Brutalist'",
        votes: ["sara", "antonio"],
        photo: "photos/02-mejorDirector/BradyCorbet.JPG",
        winner: false,
      },
      {
        name: "James Mangold, 'A Complete Unknown'",
        votes: [],
        photo: "photos/02-mejorDirector/JamesMangold.JPG",
        winner: false,
      },
      {
        name: "Jacques Audiard, 'Emilia Pérez'",
        votes: [],
        photo: "photos/02-mejorDirector/JacquesAudiard.JPG",
        winner: false,
      },
      {
        name: "Coralie Fargeat, 'La sustancia'",
        votes: ["ruth"],
        winner: false,
        photo: "photos/02-mejorDirector/CoralieFargeat.JPG",
      },
    ],
  },
  {
    name: "Mejor Actriz Principal",
    nominees: [
      {
        name: "Cynthia Erivo por 'Wicked'",
        votes: [],
        winner: false,
        photo: "photos/03-mejorActrizPPAL/CynthiaErivo.JPG",
      },
      {
        name: "Karla Sofía Gascón por 'Emilia Pérez'",
        votes: [],
        photo: "photos/03-mejorActrizPPAL/KarlaGascón.JPG",
        winner: false,
      },
      {
        name: "Mikey Madison por 'Anora'",
        votes: [],
        photo: "photos/03-mejorActrizPPAL/MikeyMadison.JPG",
        winner: true,
      },
      {
        name: "Demi Moore por 'La sustancia'",
        votes: ["sara", "antonio", "toñi", "ruth"],
        photo: "photos/03-mejorActrizPPAL/DemiMoore.JPG",
        winner: false,
      },
      {
        name: "Fernanda Torres por 'Aún estoy aquí'",
        votes: [],
        photo: "photos/03-mejorActrizPPAL/FernandaTorres.JPG",
        winner: false,
      },
    ],
  },
  {
    name: "Mejor Actor Principal",
    nominees: [
      {
        name: "Adrian Brody, por 'The Brutalist'",
        votes: ["sara", "antonio", "toñi"],
        winner: true,
        photo: "photos/04-mejorActorPPAL/AdrienBrody.JPG",
      },
      {
        name: "Timothée Chalamet, por 'A Complete Unknown'",
        votes: ["ruth"],
        photo: "photos/04-mejorActorPPAL/TimothéeChalamet.JPG",
        winner: false,
      },
      {
        name: "Colman Domingo, por 'Las vidas de Sing Sing'",
        votes: [],
        photo: "photos/04-mejorActorPPAL/ColmanDomingo.JPG",
        winner: false,
      },
      {
        name: "Ralph Fiennes, por 'Cónclave'",
        votes: [],
        photo: "photos/04-mejorActorPPAL/RalphFiennes.JPG",
        winner: false,
      },
      {
        name: "Sebastian Stan, por 'El aprendiz'",
        votes: [],
        photo: "photos/04-mejorActorPPAL/SebastianStan.JPG",
        winner: false,
      },
    ],
  },
  {
    name: "Mejor Actriz de Reparto",
    nominees: [
      {
        name: "Monica Barbaro, por 'A complete Unknown'",
        votes: [],
        photo: "photos/5. FOTOS MEJOR ACTRIZ REPARTO/MonicaBarbaro.JPG",
        winner: false,
      },
      {
        name: "Ariana Grande, por 'Wicked'",
        votes: [],
        photo: "photos/5. FOTOS MEJOR ACTRIZ REPARTO/ArianaGrande.JPG",
        winner: false,
      },
      {
        name: "Felicity Jones, por 'The Brutalist'",
        votes: [],
        photo: "photos/5. FOTOS MEJOR ACTRIZ REPARTO/FelicityJones.JPG",
        winner: false,
      },
      {
        name: "Isabella Rossellini, por 'Cónclave'",
        votes: ["sara", "toñi"],
        photo: "photos/5. FOTOS MEJOR ACTRIZ REPARTO/IsabellaRossellini.JPG",
        winner: false,
      },
      {
        name: "Zoe Saldaña, por 'Emilia Pérez'",
        votes: ["antonio", "ruth"],
        photo: "photos/5. FOTOS MEJOR ACTRIZ REPARTO/ZoeSaldaña.JPG",
        winner: true,
      },
    ],
  },
  {
    name: "Mejor Actor de Reparto",
    nominees: [
      {
        name: "Yura Borisov, por 'Anora'",
        votes: [],
        photo: "photos/5. FOTOS MEJOR ACTOR REPARTO/YuraBorisov.JPG",
        winner: false,
      },
      {
        name: "Kieran Culkin, por 'A Real Pain'",
        votes: ["toñi", "ruth"],
        photo: "photos/5. FOTOS MEJOR ACTOR REPARTO/KieranCulkin.JPG",
        winner: true,
      },
      {
        name: "Edward Norton, 'A Complete Unknown'",
        votes: [],
        photo: "photos/5. FOTOS MEJOR ACTOR REPARTO/EdwardNorton.JPG",
        winner: false,
      },
      {
        name: "Guy Pearce, 'The Brutalist'",
        votes: ["sara", "antonio"],
        photo: "photos/5. FOTOS MEJOR ACTOR REPARTO/GuyPearce.JPG",
        winner: false,
      },
      {
        name: "Jeremy Strong, por 'The Apprentice'",
        votes: [],
        photo: "photos/5. FOTOS MEJOR ACTOR REPARTO/JeremyStrong.JPG",
        winner: false,
      },
    ],
  },
  {
    name: "Mejor Película Internacional",
    nominees: [
      {
        name: "'Aún estoy aquí', Brasil",
        votes: ["sara"],
        photo: "photos/6. FOTOS MEJOR PELI INTERNACIONAL/AúnEstoyAquí.JPG",
        winner: true,
      },
      {
        name: "'La chica de la aguja', Dinamarca",
        votes: [],
        photo: "photos/6. FOTOS MEJOR PELI INTERNACIONAL/LaChicaDeLaAguja.JPG",
        winner: false,
      },
      {
        name: "'Emilia Pérez', Francia",
        votes: ["antonio", "toñi", "ruth"],
        photo: "photos/6. FOTOS MEJOR PELI INTERNACIONAL/EmiliaPérez.JPG",
        winner: false,
      },
      {
        name: "'La semilla de la higuera sagrada', Alemania",
        votes: [],
        photo:
          "photos/6. FOTOS MEJOR PELI INTERNACIONAL/LaSemillaDeLaHigueraSagrada.JPG",
        winner: false,
      },
      {
        name: "'Flow, un mundo que salvar', Letonia",
        votes: [],
        photo: "photos/6. FOTOS MEJOR PELI INTERNACIONAL/Flow.JPG",
        winner: false,
      },
    ],
  },
  {
    name: "Mejor Película de Animación",
    nominees: [
      {
        name: "Flow",
        votes: [],
        photo: "photos/7. FOTOS MEJOR PELI ANIMACIÓN/Flow.JPG",
        winner: true,
      },
      {
        name: "Del Revés 2",
        votes: ["toñi"],
        photo: "photos/7. FOTOS MEJOR PELI ANIMACIÓN/DelRevés2.JPG",
        winner: false,
      },
      {
        name: "Memorias de un Caracol",
        votes: [],
        photo: "photos/7. FOTOS MEJOR PELI ANIMACIÓN/MemoriasDeUnCaracol.JPG",
        winner: false,
      },
      {
        name: "Wallace y Gromit: La venganza se sirve con plumas",
        votes: [],
        photo: "photos/7. FOTOS MEJOR PELI ANIMACIÓN/WallaceYGromit.JPG",
        winner: false,
      },
      {
        name: "Robot Salvaje",
        votes: ["sara", "antonio", "ruth"],
        photo: "photos/7. FOTOS MEJOR PELI ANIMACIÓN/RobotSalvaje.JPG",
        winner: false,
      },
    ],
  },
  {
    name: "Mejor Documental",
    nominees: [
      {
        name: "Black Box Diaries",
        votes: [],
        photo: "photos/8. FOTOS MEJOR DOCUMENTAL/BlackBoxDiaries.JPG",
        winner: false,
      },
      {
        name: "No Other Land",
        votes: ["sara", "antonio", "toñi"],
        photo: "photos/8. FOTOS MEJOR DOCUMENTAL/NoOtherLand.JPG",
        winner: true,
      },
      {
        name: "Porcelain War",
        votes: [],
        photo: "photos/8. FOTOS MEJOR DOCUMENTAL/PorcelainWar.JPG",
        winner: false,
      },
      {
        name: "Soundtrack to a Coup d’Etat",
        votes: ["ruth"],
        photo: "photos/8. FOTOS MEJOR DOCUMENTAL/SoundtrackToACopudEtat.JPG",
        winner: false,
      },
      {
        name: "Sugarcane",
        votes: [],
        photo: "photos/8. FOTOS MEJOR DOCUMENTAL/Sugarcane.JPG",
        winner: false,
      },
    ],
  },
  {
    name: "Mejor Montaje",
    nominees: [
      {
        name: "Anora",
        votes: [],
        photo: "photos/9. FOTOS MEJOR MONTAJE/Anora.JPG",
        winner: true,
      },
      {
        name: "The Brutalist",
        votes: ["sara", "antonio", "toñi", "ruth"],
        photo: "photos/9. FOTOS MEJOR MONTAJE/TheBrutalist.JPG",
        winner: false,
      },
      {
        name: "Cónclave",
        votes: [],
        photo: "photos/9. FOTOS MEJOR MONTAJE/Conclave.JPG",
        winner: false,
      },
      {
        name: "Emilia Pérez",
        votes: [],
        photo: "photos/9. FOTOS MEJOR MONTAJE/EmiliaPérez.JPG",
        winner: false,
      },
      {
        name: "Wicked",
        votes: [],
        photo: "photos/9. FOTOS MEJOR MONTAJE/Wicked.JPG",
        winner: false,
      },
    ],
  },
  {
    name: "Mejor Fotografía",
    nominees: [
      {
        name: "The Brutalist",
        votes: ["toñi"],
        photo: "photos/10. FOTOS MEJOR FOTOGRAFÍA/TheBrutalist.JPG",
        winner: true,
      },
      {
        name: "Dune: Parte dos",
        votes: ["sara", "ruth"],
        photo: "photos/10. FOTOS MEJOR FOTOGRAFÍA/DuneParteDos.JPG",
        winner: false,
      },
      {
        name: "Emilia Pérez",
        votes: [],
        photo: "photos/10. FOTOS MEJOR FOTOGRAFÍA/EmiliaPérez.JPG",
        winner: false,
      },
      {
        name: "María Callas",
        votes: [],
        photo: "photos/10. FOTOS MEJOR FOTOGRAFÍA/MariaCallas.JPG",
        winner: false,
      },
      {
        name: "Nosferatu",
        votes: ["antonio"],
        photo: "photos/10. FOTOS MEJOR FOTOGRAFÍA/Nosferatu.JPG",
        winner: false,
      },
    ],
  },
  {
    name: "Mejor Guion Adaptado",
    nominees: [
      {
        name: "A Complete Unknown",
        votes: ["ruth"],
        photo: "photos/11. FOTOS MEJOR GUION ADAPTADO/ACompleteUnkown.JPG",
        winner: false,
      },
      {
        name: "Cónclave'",
        votes: ["sara", "antonio", "toñi"],
        photo: "photos/11. FOTOS MEJOR GUION ADAPTADO/Conclave.JPG",
        winner: true,
      },
      {
        name: "Emilia Pérez",
        votes: [],
        photo: "photos/11. FOTOS MEJOR GUION ADAPTADO/EmiliaPérez.JPG",
        winner: false,
      },
      {
        name: "Nickel Boys",
        votes: [],
        photo: "photos/11. FOTOS MEJOR GUION ADAPTADO/NickelBoys.JPG",
        winner: false,
      },
      {
        name: "Las vidas de Sing Sing",
        votes: [],
        photo: "photos/11. FOTOS MEJOR GUION ADAPTADO/SingSing.JPG",
        winner: false,
      },
    ],
  },
  {
    name: "Mejor Guion Original",
    nominees: [
      {
        name: "Anora",
        votes: [],
        photo: "photos/12. FOTOS MEJOR GUION ORIGINAL/Anora.JPG",
        winner: true,
      },
      {
        name: "The Brutalist",
        votes: ["sara", "toñi"],
        photo: "photos/12. FOTOS MEJOR GUION ORIGINAL/TheBrutalist.JPG",
        winner: false,
      },
      {
        name: "A Real Pain",
        votes: [],
        photo: "photos/12. FOTOS MEJOR GUION ORIGINAL/ARealPain.JPG",
        winner: false,
      },
      {
        name: "September 5",
        votes: [],
        photo: "photos/12. FOTOS MEJOR GUION ORIGINAL/September5.JPG",
        winner: false,
      },
      {
        name: "La sustancia",
        votes: ["antonio", "ruth"],
        photo: "photos/12. FOTOS MEJOR GUION ORIGINAL/LaSustancia.JPG",
        winner: false,
      },
    ],
  },
  {
    name: "Mejor Sonido",
    nominees: [
      {
        name: "A Complete Unknown",
        votes: [],
        photo: "photos/13. FOTOS MEJOR SONIDO/ACompleteUnkown.JPG",
        winner: false,
      },
      {
        name: "Dune: Parte dos",
        votes: ["sara", "antonio", "toñi"],
        photo: "photos/13. FOTOS MEJOR SONIDO/DuneParteDos.JPG",
        winner: true,
      },
      {
        name: "Emilia Pérez",
        votes: [],
        photo: "photos/13. FOTOS MEJOR SONIDO/EmiliaPérez.JPG",
        winner: false,
      },
      {
        name: "Wicked",
        votes: ["ruth"],
        photo: "photos/13. FOTOS MEJOR SONIDO/Wicked.JPG",
        winner: false,
      },
      {
        name: "Robot Salvaje",
        votes: [],
        photo: "photos/13. FOTOS MEJOR SONIDO/RobotSalvaje.JPG",
        winner: false,
      },
    ],
  },
  {
    name: "Mejor Banda Sonora",
    nominees: [
      {
        name: "The Brutalist",
        votes: [],
        photo: "photos/14. FOTOS MEJOR BANDA SONORA/TheBrutalist.JPG",
        winner: true,
      },
      {
        name: "Emilia Perez",
        votes: ["sara"],
        photo: "photos/14. FOTOS MEJOR BANDA SONORA/EmiliaPérez.JPG",
        winner: false,
      },
      {
        name: "Cónclave",
        votes: [],
        photo: "photos/14. FOTOS MEJOR BANDA SONORA/Conclave.JPG",
        winner: false,
      },
      {
        name: "Wicked",
        votes: ["toñi", "ruth"],
        photo: "photos/14. FOTOS MEJOR BANDA SONORA/Wicked.JPG",
        winner: false,
      },
      {
        name: "The Wild Robot",
        votes: ["antonio"],
        photo: "photos/14. FOTOS MEJOR BANDA SONORA/RobotSalvaje.JPG",
        winner: false,
      },
    ],
  },
  {
    name: "Mejor Canción Original",
    nominees: [
      {
        name: "'El mal', de Emilia Pérez",
        votes: ["sara"],
        photo: "photos/15. FOTOS MEJOR CANCIÓN ORIGINAL/SixTripleEight.JPG",
        winner: true,
      },
      {
        name: "'The Journey', de Seis triple ocho",
        votes: ["antonio"],
        photo: "photos/15. FOTOS MEJOR CANCIÓN ORIGINAL/EmiliaPérez.JPG",
        winner: false,
      },
      {
        name: "'Like a bird', de Las vidas de Sing Sing",
        votes: [],
        photo: "photos/15. FOTOS MEJOR CANCIÓN ORIGINAL/SingSing.JPG",
        winner: false,
      },
      {
        name: "'Mi camino', de Emilia Pérez",
        votes: ["toñi", "ruth"],
        photo: "photos/15. FOTOS MEJOR CANCIÓN ORIGINAL/EmiliaPérez.JPG",
        winner: false,
      },
      {
        name: "'Never Too Late', de Elton John: Never Too Late",
        votes: [],
        photo: "photos/15. FOTOS MEJOR CANCIÓN ORIGINAL/EltonJohn.JPG",
        winner: false,
      },
    ],
  },
  {
    name: "Mejor Diseño de Producción",
    nominees: [
      {
        name: "The Brutalist",
        votes: [],
        winner: false,
        photo: "photos/16. FOTOS MEJOR DISEÑO DE PRODUCCIÓN/TheBrutalist.JPG",
      },
      {
        name: "Cónclave",
        votes: [],
        winner: false,
        photo: "photos/16. FOTOS MEJOR DISEÑO DE PRODUCCIÓN/Conclave.JPG",
      },
      {
        name: "Dune: Parte dos",
        votes: ["sara", "antonio", "toñi"],
        photo: "photos/16. FOTOS MEJOR DISEÑO DE PRODUCCIÓN/DuneParteDos.JPG",
        winner: false,
      },
      {
        name: "Nosferatu",
        votes: ["ruth"],
        photo: "photos/16. FOTOS MEJOR DISEÑO DE PRODUCCIÓN/Nosferatu.JPG",
        winner: false,
      },
      {
        name: "Wicked",
        votes: [],
        photo: "photos/16. FOTOS MEJOR DISEÑO DE PRODUCCIÓN/Wicked.JPG",
        winner: true,
      },
    ],
  },
] as const;
