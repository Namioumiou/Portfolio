import { Component } from '@angular/core';
import { AnimatedImageComponent } from '../animated-image/animated-image.component';

export interface GameImage {
  src: string;
  title?: string;
  frames?: string[];
  frameInterval?: number;
}

export interface Mechanic {
  title: string;
  description: string;
  images?: GameImage[];
}

export interface GameSection {
  title: string;
  text: string;
}

export interface Game {
  title: string;
  description: string;
  tags: string[];
  sideImage?: string;
  bgColor: string;
  images?: GameImage[];
  sections?: GameSection[];
  mechanics?: Mechanic[];
}

@Component({
  selector: 'app-game-cards',
  standalone: true,
  imports: [AnimatedImageComponent],
  templateUrl: './game-cards.component.html',
})
export class GameCardsComponent {
  games: Game[] = [
    {
      title: 'Colors of Dreams',
      description: 'Un enfant s\'échappe de la réalité en dessinant un monde où la vie est plus douce pour lui. Le garçon va explorer ce monde et faire la connaissance de nombreux personnages. Il pourra alors choisir de les aider ou de passer son chemin. Mais chaque action aura des conséquences.',
      tags: ['Unity', '2D', 'Narratif', 'Choix multiples', 'Sombre', 'Projet de groupe ecole'],
      bgColor: '#4F008F',
      sideImage: 'jeux/colorsofdreams/logo1.webp',
      images: [
        {src: 'jeux/colorsofdreams/arbre.webp',
        title: 'Sprite d\'un arbre + animation de coupe',
        frames: [
          'jeux/colorsofdreams/arbre1.webp',
          'jeux/colorsofdreams/arbre1chop1.webp',
          'jeux/colorsofdreams/arbre1chop2.webp',
          'jeux/colorsofdreams/arbre1chop3.webp',
          'jeux/colorsofdreams/arbre1_2souche.webp',
        ],
        frameInterval: 300,
      },
        { title: 'Buisson', src: 'jeux/colorsofdreams/buisson1.webp' },
        { title: 'Personnage principal', src: 'jeux/colorsofdreams/VisageV1.webp' }
      ],
      mechanics: [
        {
          title: 'Dessin interactif',
          description: 'Le joueur peut dessiner dans le monde pour interagir avec l\'environnement. Grâce à une IA de reconnaissance des dessins, le joueur pourrait par exemple dessiner une hache et couper un arbre.',
          images: [],
        },
      ],
    },
    {
      title: 'My Melody',
      description: 'Les 3 clés, reines du royaume de la musique, ont mystérieusement disparu. Une jeune note voit alors le jour et se fait embarquer dans une quête à laquelle elle n\'était pas prête à faire face.',
      tags: ['Metroidvania', 'Musique'],
      bgColor: '#373737',
      sideImage: 'jeux/mymelody/Illustration2chara2.webp',
      images: [
        { title: 'Recherche évolution du personnage', src: 'jeux/mymelody/melodypng.webp' },
      ],
      mechanics: [
        {
          title: 'Mélodies',
          description: 'Le joueur peut ouvrir une interface et jouer des mélodies à l\'aide des flèches directionnelles afin de bénéficier de différents effets. Une autre utilisation serait que le joueur devrait analyser la mélodie jouée lors d\'un combat de boss afin de la reproduire avec sa partition pour faciliter le combat. Les mélodies pourraient également être utilisées à certains endroits pour découvrir de nouveaux passages ou résoudre des énigmes.',
          images: [
            { title: 'Jouer une mélodie', src: 'jeux/mymelody/musicinterface.webp' },
            { title: 'Affichage de la mélodie en jeu', src: 'jeux/mymelody/musicinterfaceplay.webp' },
          ],
        },
      ],
    },
    {
      title: 'Come Home',
      description: 'Une jeune fille se réveille seul dans sa maison qui paraît abandonnée sans aucun souvenir de ce qu\'il c\'est passé. En explorant les lieux, elle découvre que son petit frère est également là, mais il l\'a fuit pour une raison inconnue. Elle va alors explorer les lieux pour retrouver son frère et découvrir la vérité sur ce qui s\'est passé.',
      tags: ['Narratif', 'Horreur', 'RPG'],
      bgColor: '#8E3B46',
      mechanics: [
        {
          title: 'Mémoires',
          description: 'Le joueur joue lors de sa première partie la petite fille, lors de son aventure ses déplacements seront mémorisés et lorsque le joueur incarnera le petit garçon lors de la seconde partie, les déplacements de la petite fille seront rejoués en temps réel. Le joueur devra alors faire attention à ne pas croiser la petite fille pour ne pas se faire attraper.',
          images: [],
        },
      ],
    },
    {
      title: 'Symphony of Seasons',
      description: 'Une jeune bard parcourt le monde afin de devenir la plus grande musicienne de tous les temps. En chemin, elle fera la rencontre de gens qu\'elle aidera avec sa musique et qui l\'aideront en retour.',
      tags: ['Narratif', 'Musique', 'RPG', 'Contemplatif'],
      bgColor: '#1A6318',
      mechanics: [
        {
          title: 'Musique',
          description: 'Le joueur peut jouer de la musique à l\'aide d\'une interface dédiée. En fonction de la musique jouée, différents effets se produiront sur l\'environnement ou les personnages. Par exemple, jouer une mélodie joyeuse pourrait faire fleurir les plantes et attirer des animaux, tandis qu\'une mélodie triste pourrait faire pleuvoir et faire monter les eaux.',
          images: [],
        },
      ],
    },
  ];

}
