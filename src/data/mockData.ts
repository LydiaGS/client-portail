import { User, Project, Formation, Event, Notification, Document, TimelineItem, Badge } from '../types';

export const badges: Badge[] = [
  { id: '1', name: 'Premier Pas', icon: '🎯', description: 'Première connexion' },
  { id: '2', name: 'Codeur', icon: '💻', description: 'Première leçon complétée' },
  { id: '3', name: 'Designer', icon: '🎨', description: 'Premier projet design' },
  { id: '4', name: 'Expert Web', icon: '🚀', description: 'Formation web terminée' },
  { id: '5', name: 'Maître', icon: '👑', description: 'Toutes les formations terminées' },
];

export const currentUser: User = {
  id: '1',
  name: 'Alexandre Martin',
  email: 'alexandre@example.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alexandre',
  role: 'client',
  level: 5,
  xp: 2450,
  badges: [badges[0], badges[1], badges[2]],
};

export const projects: Project[] = [
  {
    id: '1',
    name: 'Site E-commerce',
    description: 'Boutique en ligne moderne avec panier et paiement',
    status: 'in-progress',
    progress: 65,
    previewUrl: 'https://example.com/preview',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-03-20'),
    steps: [
      { id: '1', title: 'Maquettes', description: 'Design des pages principales', status: 'validated', order: 1, needsValidation: true, validatedAt: new Date('2024-02-01') },
      { id: '2', title: 'Intégration HTML/CSS', description: 'Développement frontend', status: 'validated', order: 2, needsValidation: true, validatedAt: new Date('2024-02-15') },
      { id: '3', title: 'Fonctionnalités', description: 'Panier et paiement', status: 'in-progress', order: 3, needsValidation: true },
      { id: '4', title: 'Tests & Déploiement', description: 'Tests finaux et mise en ligne', status: 'pending', order: 4, needsValidation: true },
    ],
  },
  {
    id: '2',
    name: 'Portfolio Personnel',
    description: 'Site vitrine pour présenter vos réalisations',
    status: 'review',
    progress: 90,
    previewUrl: 'https://example.com/portfolio',
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-03-18'),
    steps: [
      { id: '5', title: 'Design', description: 'Création de la charte graphique', status: 'validated', order: 1, needsValidation: true, validatedAt: new Date('2024-02-10') },
      { id: '6', title: 'Développement', description: 'Intégration complète', status: 'validated', order: 2, needsValidation: true, validatedAt: new Date('2024-03-01') },
      { id: '7', title: 'Optimisation', description: 'SEO et performances', status: 'completed', order: 3, needsValidation: true },
    ],
  },
];

export const formations: Formation[] = [
  {
    id: '1',
    title: 'HTML',
    type: 'web',
    progress: 85,
    totalLessons: 15,
    completedLessons: 13,
    xpReward: 300,
    badge: badges[1],
  },
  {
    id: '2',
    title: 'CSS',
    type: 'web',
    progress: 70,
    totalLessons: 20,
    completedLessons: 14,
    xpReward: 350,
    badge: badges[1],
  },
  {
    id: '3',
    title: 'JavaScript',
    type: 'web',
    progress: 60,
    totalLessons: 25,
    completedLessons: 15,
    xpReward: 500,
    badge: badges[3],
  },
  {
    id: '4',
    title: 'Développement Web',
    type: 'web',
    progress: 45,
    totalLessons: 30,
    completedLessons: 14,
    xpReward: 600,
    badge: badges[3],
  },
  {
    id: '5',
    title: 'Adobe InDesign',
    type: 'design',
    progress: 55,
    totalLessons: 18,
    completedLessons: 10,
    xpReward: 400,
    badge: badges[2],
  },
  {
    id: '6',
    title: 'Adobe Photoshop',
    type: 'design',
    progress: 75,
    totalLessons: 22,
    completedLessons: 17,
    xpReward: 450,
    badge: badges[2],
  },
  {
    id: '7',
    title: 'Adobe Illustrator',
    type: 'design',
    progress: 40,
    totalLessons: 20,
    completedLessons: 8,
    xpReward: 400,
    badge: badges[2],
  },
  {
    id: '8',
    title: 'Première Pro',
    type: 'design',
    progress: 30,
    totalLessons: 16,
    completedLessons: 5,
    xpReward: 380,
  },
  {
    id: '9',
    title: 'Cinema 4D (C4D)',
    type: 'design',
    progress: 20,
    totalLessons: 24,
    completedLessons: 5,
    xpReward: 550,
  },
  {
    id: '10',
    title: 'Infinity',
    type: 'design',
    progress: 15,
    totalLessons: 12,
    completedLessons: 2,
    xpReward: 300,
  },
  {
    id: '11',
    title: 'After Effect',
    type: 'design',
    progress: 35,
    totalLessons: 28,
    completedLessons: 10,
    xpReward: 500,
  },
  {
    id: '12',
    title: 'Figma',
    type: 'design',
    progress: 80,
    totalLessons: 15,
    completedLessons: 12,
    xpReward: 350,
    badge: badges[2],
  },
];

export const events: Event[] = [
  { id: '1', title: 'Réunion de suivi', description: 'Point sur le projet e-commerce', date: new Date('2024-03-25T14:00:00'), type: 'meeting' },
  { id: '2', title: 'Deadline Portfolio', description: 'Livraison finale du portfolio', date: new Date('2024-03-28T18:00:00'), type: 'deadline' },
  { id: '3', title: 'Formation React', description: 'Session live sur les hooks', date: new Date('2024-03-30T10:00:00'), type: 'formation' },
];

export const notifications: Notification[] = [
  { id: '1', title: 'Étape validée !', message: 'Votre étape "Intégration HTML/CSS" a été validée', type: 'success', read: false, createdAt: new Date('2024-03-20T10:30:00') },
  { id: '2', title: 'Nouveau document', message: 'Un nouveau PDF de cours est disponible', type: 'info', read: false, createdAt: new Date('2024-03-19T15:00:00') },
  { id: '3', title: 'Badge débloqué !', message: 'Félicitations ! Vous avez obtenu le badge "Designer"', type: 'success', read: true, createdAt: new Date('2024-03-18T09:00:00') },
];

export const documents: Document[] = [
  { id: '1', title: 'Cours HTML', type: 'pdf', category: 'formation', url: '#', size: '2.5 MB', createdAt: new Date('2024-03-15') },
  { id: '2', title: 'Cours CSS', type: 'pdf', category: 'formation', url: '#', size: '3.2 MB', createdAt: new Date('2024-03-12') },
  { id: '3', title: 'Guide JavaScript', type: 'pdf', category: 'formation', url: '#', size: '4.1 MB', createdAt: new Date('2024-03-10') },
  { id: '4', title: 'Cours Développement Web', type: 'pdf', category: 'formation', url: '#', size: '5.5 MB', createdAt: new Date('2024-03-08') },
  { id: '5', title: 'Guide Adobe InDesign', type: 'pdf', category: 'formation', url: '#', size: '3.8 MB', createdAt: new Date('2024-03-05') },
  { id: '6', title: 'Cours Adobe Photoshop', type: 'pdf', category: 'formation', url: '#', size: '4.5 MB', createdAt: new Date('2024-03-03') },
  { id: '7', title: 'Guide Adobe Illustrator', type: 'pdf', category: 'formation', url: '#', size: '3.9 MB', createdAt: new Date('2024-03-01') },
  { id: '8', title: 'Cours Première Pro', type: 'pdf', category: 'formation', url: '#', size: '4.2 MB', createdAt: new Date('2024-02-28') },
  { id: '9', title: 'Guide Cinema 4D', type: 'pdf', category: 'formation', url: '#', size: '6.1 MB', createdAt: new Date('2024-02-25') },
  { id: '10', title: 'Cours After Effect', type: 'pdf', category: 'formation', url: '#', size: '5.3 MB', createdAt: new Date('2024-02-22') },
  { id: '11', title: 'Guide Figma', type: 'pdf', category: 'formation', url: '#', size: '2.8 MB', createdAt: new Date('2024-02-20') },
  { id: '12', title: 'Devis E-commerce', type: 'devis', category: 'administratif', url: '#', size: '156 KB', createdAt: new Date('2024-01-15') },
  { id: '13', title: 'Facture #001', type: 'facture', category: 'administratif', url: '#', size: '89 KB', createdAt: new Date('2024-02-01') },
  { id: '14', title: 'Contrat de prestation', type: 'contrat', category: 'administratif', url: '#', size: '234 KB', createdAt: new Date('2024-01-10') },
];

export const timelineItems: TimelineItem[] = [
  { id: '1', projectId: '1', projectName: 'Site E-commerce', stepTitle: 'Maquettes', status: 'validated', submittedAt: new Date('2024-01-30'), validatedAt: new Date('2024-02-01') },
  { id: '2', projectId: '1', projectName: 'Site E-commerce', stepTitle: 'Intégration HTML/CSS', status: 'validated', submittedAt: new Date('2024-02-13'), validatedAt: new Date('2024-02-15') },
  { id: '3', projectId: '1', projectName: 'Site E-commerce', stepTitle: 'Fonctionnalités', status: 'pending', submittedAt: new Date('2024-03-18') },
  { id: '4', projectId: '2', projectName: 'Portfolio Personnel', stepTitle: 'Optimisation', status: 'pending', submittedAt: new Date('2024-03-19') },
];
