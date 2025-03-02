'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import BingoGrid from './components/BingoGrid';
import Navigation from './components/Navigation';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Exemple de données (à remplacer par vos vraies données)
const participants = [
  {
    name: "Nicolas",
    grid: [
      "Doublé Ferrari (constructeur + pilote)",
      "7 safety cars",
      "Alpine + de point qu'Aston Martin",
      "Dohan remplacé avant la trêve",
      "Gasly gagne 1 grand prix",
      "Double Ferrari a monza",
      "Hadjar + de point que stroll",
      "Norris ne finit pas sur le podium à la fin de la saison",
      "Yuki par chez red bull dans l'année"
    ]
  },
  {
    name: "Théo",
    grid: [
      "Stroll a le plus de dnf de la saison",
      "Charles + de points qu'hamilton",
      "Aucun crash ocon gasly (contact direct)",
      "Tout les rookie devant stroll classement général",
      "Hamilton cède une place a charles",
      "Tsunoda remplace Lawson",
      "Max marque plus de point qu'Alpine",
      "Double dnf Ferrari a monza",
      "Fin d'un gp avec la moitié des participants en dnf"
    ]
  },
  {
    name: "Kilian",
    grid: [
      "Antonelli premier podium sur les 4 premières courses",
      "Stroll pas + de 10 points",
      "Combat de chien chez Ferrari",
      "Conflit entre les pilotes Alpine",
      "McLaren fait 10 livrées différentes",
      "Williams top 5 écurie",
      "CL16 crash à Monaco",
      "Hamilton podium à Monza",
      "Hadjar 1er Français de la saison"
    ]
  },
  {
    name: "Léo",
    grid: [
      "Deux pilotes font le même temps pour la pôle",
      "Hamilton remercie toute l'équipe ferrari pour le travail acharné pour sa première victoire avant monaco",
      "Hadjar fait au moins un top 5",
      "Hadjar fini devant Yuki au championnat",
      "Alpine casse au moins deux moteurs",
      "Bortoleto ne marque pas de points",
      "oscar remporte son go à domicile",
      "Les trois premiers pilotes se battent pour le championnat jusque abu dhabi",
      "ocon fait + 10 q3"
    ]
  },
  {
    name: "Elouan",
    grid: [
      "Lando fini devant max au championnat",
      "Doghan se fait remplacer avant le GP8 par colapinto",
      "5 ou + doublé Ferrari",
      "Sauber n'inscrit pas un point",
      "Lawson ça va être un flop",
      "Mercedes fini 3 eme",
      "Au moins 5 grand prix ou y a drapeau rouge dans les 3 premiers tours",
      "Au moins 5 grand prix avec pas mal de pluie",
      "Un pilote reçoit une pénalité pour avoir dépassé les limites de piste dans le dernier tour d'une course"
    ]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <Navigation />
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        className="w-full"
      >
        {participants.map((participant, index) => (
          <SwiperSlide key={index}>
            <BingoGrid
              participant={participant.name}
              initialGrid={participant.grid}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
