import { Injectable, signal, computed } from '@angular/core';

type Lang = 'fr' | 'en';

const T = {
  fr: {
    langBtn: 'EN',
    nav: { home: 'Accueil', about: 'A propos', contact: 'Contact' },
    home: { btnGame: 'Jeu', btnDrawing: 'Dessin', btnLogo: 'Logo' },
    about: { 
      title: 'A propos de moi', 
      download: 'Télécharger le CV', 
      description: 'Bonjour ! Je m\'appelle Ambre Rouillon et je suis actuellement dans des études d\'informatique, mais mon objectif est de devenir game designer. J\'ai envie de pouvoir créer des jeux dont les joueurs ce souviendront et qui les toucherons. J\'adore apprendre de nouvelles choses, je n\'hésite pas à aller voir des conférences sur certains aspects de la création d\'un jeu ou a suivre des formations en ligne afin de m\'améliorer et de pouvoir réaliser mes idées de la meilleure manière possible.'
    },
    contact: {
      title: 'Contactez-moi',
      name: 'Nom', namePlaceholder: 'Ton prénom et nom',
      email: 'Email', emailPlaceholder: 'ton@email.com',
      message: 'Message', messagePlaceholder: 'Ton message...',
      send: 'Envoyer', sending: 'Envoi en cours...',
      success: 'Message envoyé avec succès !',
      error: 'Une erreur est survenue. Réessaie ou contacte-moi directement par mail.',
      required: 'Ce champ est requis.',
      minName: 'Minimum 2 caractères.',
      minMessage: 'Minimum 10 caractères.',
      invalidEmail: 'Adresse email invalide.',
    },
    game: { synopsis: 'Synopsis', mechanic: 'Mécanique clé' },
    logo: { palette: 'Palette', otherVersions: 'Autres versions', inspiration: 'Inspiration' },
    tags: {
      'Narratif': 'Narratif', 'Choix multiples': 'Choix multiples', 'Sombre': 'Sombre',
      'Projet de groupe ecole': 'Projet de groupe ecole', 'Musique': 'Musique',
      'Horreur': 'Horreur', 'Contemplatif': 'Contemplatif',
    } as Record<string, string>,
    games: [
      {
        description: 'Un enfant s\'échappe de la réalité en dessinant un monde où la vie est plus douce pour lui. Le garçon va explorer ce monde et faire la connaissance de nombreux personnages. Il pourra alors choisir de les aider ou de passer son chemin, mais chaque action aura des conséquences.',
        imageTitles: ['Sprite d\'un arbre + animation de coupe', 'Buisson', 'Personnage principal'],
        mechanics: [
          { title: 'Dessin interactif', description: 'Le joueur peut dessiner dans le monde pour interagir avec l\'environnement. Grâce à une IA de reconnaissance des dessins, le joueur pourrait par exemple dessiner une hache et couper un arbre.', imageTitles: [] },
        ],
      },
      {
        description: 'Les 3 clés, reines du royaume de la musique, ont mystérieusement disparu. Une jeune note voit alors le jour et se fait embarquer dans une quête à laquelle elle n\'était pas prête à faire face.',
        imageTitles: ['Recherche évolution du personnage'],
        mechanics: [
          { title: 'Mélodies', description: 'Le joueur peut ouvrir une interface et jouer des mélodies à l\'aide des flèches directionnelles afin de bénéficier de différents effets. Une autre utilisation serait que le joueur devrait analyser la mélodie jouée lors d\'un combat de boss afin de la reproduire avec sa partition pour faciliter le combat. Les mélodies pourraient également être utilisées à certains endroits pour découvrir de nouveaux passages ou résoudre des énigmes.', imageTitles: ['Jouer une mélodie', 'Affichage de la mélodie en jeu'] },
        ],
      },
      {
        description: 'Une jeune fille se réveille seul dans sa maison qui paraît abandonnée, sans aucun souvenir de ce qu\'il c\'est passé. En explorant les lieux, elle découvre que son petit frère est également là, mais il l\'a fuit pour une raison inconnue. Elle va alors explorer les lieux pour retrouver son frère et découvrir la vérité sur ce qui s\'est passé.',
        imageTitles: [],
        mechanics: [
          { title: 'Mémoires', description: 'Le joueur joue lors de sa première partie la petite fille. Lors de son aventure ses déplacements seront mémorisés et lorsque le joueur incarnera le petit garçon lors de la seconde partie, les déplacements de la petite fille seront rejoués en temps réel. Le joueur devra alors faire attention à ne pas croiser la petite fille pour ne pas se faire attraper.', imageTitles: [] },
        ],
      },
      {
        description: 'Une jeune bard parcourt le monde afin de devenir la plus grande musicienne de tous les temps. En chemin, elle fera la rencontre de gens qu\'elle aidera avec sa musique et qui l\'aideront en retour.',
        imageTitles: [],
        mechanics: [
          { title: 'Musique', description: 'Le joueur peut jouer de la musique à l\'aide d\'une interface dédiée. En fonction de la musique jouée, différents effets se produiront sur l\'environnement ou les personnages. Par exemple, jouer une mélodie joyeuse pourrait faire fleurir les plantes et attirer des animaux, tandis qu\'une mélodie triste pourrait faire pleuvoir et faire monter les eaux.', imageTitles: [] },
        ],
      },
    ],
    logos: [
      { description: 'Option de logo créée pour une équipe d\'esport. Le client souhaitait un logo qui évoque l\'eau.' },
      { description: 'Logo réalisé pour une application d\'activités.' },
    ],
  },
  en: {
    langBtn: 'FR',
    nav: { home: 'Home', about: 'About', contact: 'Contact' },
    home: { btnGame: 'Game', btnDrawing: 'Drawing', btnLogo: 'Logo' },
    about: { 
      title: 'About me', 
      download: 'Download CV', 
      description: 'Hi ! My name is Ambre Rouillon and I am currently studying computer science, but my goal is to become a game designer. I want to be able to create games that players will remember and that will touch them. I love learning new things, I don’t hesitate to go to conferences on certain aspects of creating a game or to take online training in order to improve and be able to realize my ideas in the best possible way.' 
    },
    contact: {
      title: 'Contact me',
      name: 'Name', namePlaceholder: 'Your name',
      email: 'Email', emailPlaceholder: 'your@email.com',
      message: 'Message', messagePlaceholder: 'Your message...',
      send: 'Send', sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'An error occurred. Please try again or contact me directly by email.',
      required: 'This field is required.',
      minName: 'Minimum 2 characters.',
      minMessage: 'Minimum 10 characters.',
      invalidEmail: 'Invalid email address.',
    },
    game: { synopsis: 'Synopsis', mechanic: 'Key mechanic' },
    logo: { palette: 'Palette', otherVersions: 'Other versions', inspiration: 'Inspiration' },
    tags: {
      'Narratif': 'Narrative', 'Choix multiples': 'Multiple choices', 'Sombre': 'Dark',
      'Projet de groupe ecole': 'School group project', 'Musique': 'Music',
      'Horreur': 'Horror', 'Contemplatif': 'Contemplative',
    } as Record<string, string>,
    games: [
      {
        description: 'A child escapes reality by drawing a world where life is better for him. The boy explores this world and meets many characters. He can choose to help them or walk away, but every action has consequences.',
        imageTitles: ['Tree sprite + chop animation', 'Bush', 'Main character'],
        mechanics: [
          { title: 'Interactive drawing', description: 'The player can draw in the world to interact with the environment. Using a drawing recognition AI, the player could for example draw an axe and chop down a tree.', imageTitles: [] },
        ],
      },
      {
        description: 'The 3 keys, queens of the music kingdom, have mysteriously disappeared. A young note comes to life and finds herself embarked on a quest she was not ready to face.',
        imageTitles: ['Character design evolution'],
        mechanics: [
          { title: 'Melodies', description: 'The player can open an interface and play melodies using the arrow keys to gain different effects. Another use would be that the player must analyze the melody played during a boss fight and reproduce it with their score to ease the battle. Melodies could also be used in certain places to discover new passages or solve puzzles.', imageTitles: ['Playing a melody', 'In-game melody display'] },
        ],
      },
      {
        description: 'A young girl wakes up alone in her abandoned house, without any memory of what happened. While exploring the place, she discovers that her little brother is also there, but he has been avoiding her for an unknown reason. She then goes to explore the place to find her brother and discover the truth about what happened.',
        imageTitles: [],
        mechanics: [
          { title: 'Memories', description: 'The player plays the little girl during his first game. During his adventure, his movements will be memorized and when the player incarnates the little boy in the second part, the movements of the little girl will be replayed in real time. The player will then have to be careful not to run into the little girl so as not to get caught.', imageTitles: [] },
        ],
      },
      {
        description: 'A young bard travels the world in order to become the greatest musician of all time. On the way, she will meet people who she will help with her music and who will help her in return.',
        imageTitles: [],
        mechanics: [
          { title: 'Music', description: 'The player can play music through a dedicated interface. Depending on the melody played, different effects occur in the environment or on characters. For example, a joyful melody could make plants bloom and attract animals, while a sad melody could make it rain and raise the water level.', imageTitles: [] },
        ],
      },
    ],
    logos: [
      { description: 'Logo option created for an esport team. The client wanted a logo that evokes water.' },
      { description: 'Logo created for an activity app.' },
    ],
  },
};

@Injectable({ providedIn: 'root' })
export class LangService {
  lang = signal<Lang>('fr');
  t = computed(() => T[this.lang()]);
  toggle() { this.lang.set(this.lang() === 'fr' ? 'en' : 'fr'); }
}
