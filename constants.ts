import { Flavor, Pack } from './types';

export const FLAVORS: Flavor[] = [
  { id: 1, name: "Suya", description: "Le goût fumé et épicé des grillades ouest-africaines.", color: "bg-red-100" },
  { id: 2, name: "Poivre de Penja", description: "Un poivre blanc volcanique aux arômes musqués.", color: "bg-gray-200" },
  { id: 3, name: "Gingembre Citron", description: "Une explosion de fraîcheur acidulée et piquante.", color: "bg-yellow-100" },
  { id: 4, name: "Pili-Pili", description: "Pour les braves : la chaleur intense du piment rouge.", color: "bg-red-200" },
  { id: 5, name: "Kankan", description: "Le mélange secret du Burkina : arachide et épices.", color: "bg-orange-100" },
  { id: 6, name: "Poulet Braisé", description: "La saveur réconfortante du dimanche midi.", color: "bg-amber-100" },
  { id: 7, name: "Curry Madras", description: "Un voyage aromatique intense et coloré.", color: "bg-yellow-200" },
  { id: 8, name: "Ail & Fines Herbes", description: "Un classique revisité avec des herbes locales.", color: "bg-green-100" },
  { id: 9, name: "Paprika Fumé", description: "Douceur rouge et notes boisées.", color: "bg-red-50" },
  { id: 10, name: "Sel Marin", description: "La simplicité pure de l'Atlantique.", color: "bg-blue-100" },
];

export const PACKS: Pack[] = [
  {
    id: "decouverte",
    name: "Pack Découverte",
    price: "3 000 FCFA",
    quantity: "10 Sachets",
    features: ["Assortiment de 10 saveurs", "Idéal pour goûter", "Livraison rapide"],
    isPopular: false
  },
  {
    id: "chef",
    name: "Pack Grand Chef",
    price: "5 500 FCFA",
    quantity: "20 Sachets",
    features: ["Double dose de plaisir", "Bonus : Sauce Piment offerte", "Priorité livraison"],
    isPopular: true
  }
];