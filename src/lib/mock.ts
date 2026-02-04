import img31 from '../assets/img/img31.jpg';
import img32 from '../assets/img/img32.jpg';
import img33 from '../assets/img/img33.jpg';
import img34 from '../assets/img/img34.jpg';
import img11 from '../assets/img/img11.jpg';
import img12 from '../assets/img/img12.jpg';
import img21 from '../assets/img/img21.jpg';
import img22 from '../assets/img/img22.jpg';
import img36 from '../assets/img/img36.jpg';
import img37 from '../assets/img/img37.jpg';
import img38 from '../assets/img/img38.jpg';
import img8 from '../assets/img/img8.jpg';
import img66 from '../assets/img/img66.jpg';
import img64 from '../assets/img/img64.jpg';
import img48 from '../assets/img/img48.jpg';
import img49 from '../assets/img/img49.jpg';
import img50 from '../assets/img/img50.jpg';
import img51 from '../assets/img/img51.jpg';
import img52 from '../assets/img/img52.jpg';
import img39 from '../assets/img/img39.jpg';
import img40 from '../assets/img/img40.jpg';
import img58 from '../assets/img/img58.jpg';
import img6 from '../assets/img/img6.jpg';
import img25 from '../assets/img/img25.jpg';
import img67 from '../assets/img/img67.jpg';
import img45 from '../assets/img/img45.jpg';
import img46 from '../assets/img/img46.jpg';
import img47 from '../assets/img/img47.jpg';
import img41 from '../assets/img/img41.jpg';
import img42 from '../assets/img/img42.jpg';
import img7 from '../assets/img/img7.jpg';
import img27 from '../assets/img/img27.jpg';
import img10 from '../assets/img/img10.jpg';
import img57 from '../assets/img/img57.jpg';



type Bien = {
  id: number;
  titre: string;
  description: string;
  prix: number;
  images: string[];
  localisation: string;
  superficie: number;
  chambre: string;
  salleDeBain: string;
  piscine: string;
  salon: string; 
  cuisine: string;
  typeBien: string;
};

export const biensMock: Bien[] = [
  {
    id: 1,
    titre: "Appartement moderne au cœur de la ville",
    description: "Un appartement spacieux avec 3 chambres, une cuisine équipée et un balcon offrant une vue imprenable sur la ville.",
    prix: 120000,
    images: [img21, img22],
    localisation: "Bankolo, Yaounde",
    superficie: 80,
    chambre: "3",
    salleDeBain: "1",
    piscine: "1",
    salon: "1",
    cuisine: "1",
    typeBien: "appartement",
  },
    { 
    id: 2,
    titre: "Maison de campagne",
    description: "Une charmante maison de campagne avec 4 chambres, un jardin et une cuisine traditionnelle.",
    prix: 450000,
    images: [img11,img12],
    localisation: "Souza, Cameroun",
    superficie: 120,
    chambre: "2",
    salleDeBain: "2",
    piscine: "0",
    salon: "1",
    cuisine: "1",
    typeBien: "maison",
  },
   {
    id: 3,
    titre: "Maison luxieuse avec piscine",
    description: "Une maison luxueuse avec une piscine , 4 chambres, un jardin et une cuisine moderne.",
    prix: 85000000,
    images: [img31, img32, img33, img34],
    localisation: "Bastos, Yaounde",
    superficie: 300,
    chambre: "4",
    salleDeBain: "2",
    piscine: "1",
    salon: "2",
    cuisine: "2",
    typeBien: "maison",
  },
  {
     id: 4,
     titre: "Terrain en campagne",
     description: "Un terrain constructible de 500 m² situé dans un quartier calme et éloigné de la ville.",
     prix: 7500000,
     images: [img57],
     localisation: "Eyang, Yaounde",
     superficie: 500,
     chambre: "0",
     salleDeBain: "0",
     piscine: "0",
     salon: "0",
      cuisine: "0",
     typeBien: "terrain",
   },
    {
     id: 5,
     titre: "Studio moderne",
     description: "Un studio moderne avec une chambre, une petite cuisine et une petite salle de bain.",
     prix: 120000,
     images: [img36, img37, img38],
     localisation: "Mendong, Yaounde",
     superficie: 30,
     chambre: "1",
     salleDeBain: "1",
     piscine: "0",
     salon: "1",
      cuisine: "1",
     typeBien: "studio",
    },
    {
     id: 6,
     titre: "Maison vue sur la mer",
     description: "Une maison avec vue sur la mer, 2 chambres, une cuisine équipée et un balcon.",
     prix: 3000000,
     images: [img8],
     localisation: "Kribi, Cameroun",
     superficie: 70,
     chambre: "2",
      salleDeBain: "1",
     piscine: "0",
     salon: "1",
      cuisine: "1",
     typeBien: "maison",
    },
    {
     id: 7,
     titre: "Villa de luxe avec jardin",
     description: "Une villa de luxe avec un grand jardin, 5 chambres et une cuisine.",
       prix: 75000000,
     images: [img66],
     localisation: "Akwa, Douala",
     superficie: 450,
     chambre: "5",
     salleDeBain: "2",
     piscine: "1",
     salon: "2",
     cuisine: "1",
     typeBien: "villa",
    },
    {
     id: 8,
     titre: "Terrain agricole",
     description: "Un terrain agricole de 1000 m² avec un sol fertile pour la culture.",
     prix: 15000000,
     images: [img64],
     localisation: "Eyang, Yaounde",
     superficie: 1000,
     chambre: "0",
     salleDeBain: "0",
     piscine: "0",
     salon: "0",
     cuisine: "0",
     typeBien: "terrain",
   },

   {
     id: 9,
     titre: "Studio moderne",
     description: "Un studio moderne avec une chambre, une petite cuisine et une petite salle de bain.",
     prix: 150000,
     images: [img48, img49, img50, img51],
     localisation: "Eyang, Yaounde",
     superficie: 35,
     chambre: "1",
      salleDeBain: "1",
     piscine: "0",
     salon: "1",
     cuisine: "1",
     typeBien: "studio",
   },

   {
     id: 10,
     titre: "Maison moderne",
     description: "Une maison moderne avec chambre, et une cuisine.",
     prix: 40000000,
     images: [img52],
     localisation: "Dschang, Yaounde",
     superficie: 120,
     chambre: "3",
     salleDeBain: "2",
     piscine: "0",
     salon: "2",
     cuisine: "1",
     typeBien: "maison",
   },

   {
     id: 11,
     titre: "Appartement moderne",
     description: "Un appartement moderne avec une chambre, une cuisine équipée et un balcon.",
     prix: 500000,
     images: [img39, img40],
     localisation: "Eyang, Yaounde",
     superficie: 65,
     chambre: "1",
     salleDeBain: "1",
     piscine: "0",
     salon: "1",
     cuisine: "1",
     typeBien: "appartement",
   },
   {
     id: 12,
     titre: "Terrain en ville",
     description: "Un terrain en ville de 400 m².",
     prix: 15000000,
     images: [img58],
     localisation: "Ebolowa, Cameroun",
     superficie: 400,
     chambre: "0",
     salleDeBain: "0",
     piscine: "0",
     salon: "0",
     cuisine: "0",
     typeBien: "terrain",
     },

     {
     id: 13,
     titre: "Villa avec piscine",
     description: "Une villa avec une piscine, 4 chambres, un jardin et une cuisine moderne.",
     prix: 155000000,
     images: [img6],
     localisation: "Bastos, Cameroun",   
     superficie: 400,
     chambre: "4",
     salleDeBain: "2",
     piscine: "1",
     salon: "2",
     cuisine: "1",
     typeBien: "villa",
   },
   {
     id: 14,
     titre: "Appartement moderne",
     description:
         "Un appartement moderne avec une chambre, une cuisine équipée et un balcon.",
     prix: 500000,
     images: [img25],
     localisation: "Eyang, Yaounde",
     superficie: 85,
     chambre: "2",
     salleDeBain: "2",
     piscine: "0",
     salon: "1",
     cuisine: "1",
     typeBien: "appartement",
   },
   {
     id: 15,
     titre: "Maison de ville",
     description: "Une maison de ville avec 3 chambres, un petit jardin et une cuisine.",
     prix: 35000000,
     images: [img67],
     localisation: "Logpom, Douala",
     superficie: 150,
     chambre: "3",
     salleDeBain: "2",
     piscine: "0",
     salon: "1",
     cuisine: "1",
     typeBien: "maison",
   },

   {
     id: 16,
     titre: "Appartement",
     description: "Un appartement moderne, 2 chambres, une cuisine et un balcon.",
     prix: 320000,
     images: [img45, img46],
     localisation: "Nlongkack, Yaounde",
     superficie: 70,
     chambre: "2", 
     salleDeBain: "1",
     piscine: "0",
     salon: "1",
     cuisine: "1",
     typeBien: "appartement",

   },

   {
     id: 17,
     titre: "Appartement moderne",
     description: "Un appartement moderne avec 2 chambres et une cuisine.",
     prix: 18000000,
     images: [img47, img41, img42],
     localisation: "Bastos, Yaounde",
     superficie: 74,
     chambre: "3", 
     salleDeBain: "3",
     piscine: "0",
     salon: "1",
     cuisine: "1",
     typeBien: "appartement",

   },
   {
     id: 18,
     titre: "Grande maison",
     description: "Une maison avec 4 chambres, 2 salles de bain et une cuisine.",
     prix: 130000000,
     images: [img7],
     localisation: "Logbessou, Douala",
     superficie: 200,
     chambre: "5",
     salleDeBain: "4",
     piscine: "1",
     salon: "2",
     cuisine: "2",
     typeBien: "maison",
   },

   {
     id: 19,
     titre: "Appartement",
     description: "Un appartement avec 3 chambres, une cuisine équipée et un balcon.",
     prix: 280000,
     images: [img27],
     localisation: "Eyang, Yaounde",
     superficie: 80,
     chambre: "1",
     salleDeBain: "1",
     piscine: "0",
     salon: "1",
     cuisine: "1",
     typeBien: "appartement",

   },

   {
     id: 20,
     titre: "Villa de luxe",
     description: "Une villa de luxe avec une piscine, 6 chambres, un grand jardin et une cuisine moderne.",
     prix: 90000000,
     images: [img10],
     localisation: "Bali, Douala",
     superficie: 600,
     chambre: "4",
     salleDeBain: "3",
     piscine: "1",
     salon: "1",
     cuisine: "1",
     typeBien: "villa",
   },
];