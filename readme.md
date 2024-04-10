# Projet RPG Gladiateur en JavaScript
## Description
Bienvenue dans notre projet de jeu RPG où vous contrôlerez cinq personnages gladiateurs uniques, chacun avec ses propres caractéristiques et compétences. Le but du jeu est de survivre à travers dix tours d’affrontements intenses. Le personnage avec le plus de points de vie (hp) à la fin des dix tours sera déclaré vainqueur.

## Personnages et Classes
Chaque personnage possède trois attributs principaux :

*+ hp (health points) : Les points de vie. Un personnage est éliminé s’il atteint 0 hp.
*+ dmg (damage) : Les points de dégât. Chaque personnage peut effectuer une attaque simple infligeant des dégâts précis à une cible.
*+ mana : Les points de mana permettent d’utiliser des attaques spéciales. Chaque sortilège spécial a un coût en mana.  
Nous avons cinq classes distinctes :  

#### Fighter : Équilibré avec une attaque spéciale “Dark Vision”.
#### Paladin : Puissant et défensif avec une attaque spéciale “Healing Lighting”.
#### Monk : Capable de se guérir avec une attaque spéciale “heal”.
#### Berzerker : Attaquant féroce avec une attaque spéciale “Rage”.
#### Assassin : Fourbe avec une attaque spéciale “Shadow hit”.
Chaque classe a une attaque spéciale unique qui coûte un certain nombre de points de mana.

## Système de Jeu
Le jeu se déroule entièrement dans la console. Une classe Game gère le déroulement du jeu, y compris le nombre de tours restants (turnLeft) et la logique pour déterminer le gagnant.

## Déroulement d’un Tour
La méthode startTurn est activée, annonçant le numéro du tour.
Les personnages jouent chacun leur tour, dans un ordre aléatoire.
Ils peuvent choisir d’utiliser leur attaque normale ou spéciale contre un ennemi.
Après chaque action, les détails de l’attaque sont loggés.
À la fin du tour, skipTurn est appelé pour décrémenter le nombre de tours restants.
Si un seul joueur reste en vie, il est déclaré gagnant.
La partie commence avec la fonction startGame.

## Statistiques des Personnages
Les personnages ont une méthode takeDamage pour recevoir des dégâts, une méthode dealDamage pour attaquer, et un attribut status qui peut être playing, winner, ou loser. Lorsqu’un personnage élimine un autre, il regagne 20 points de mana.

## Commencer le Jeu
Pour lancer le jeu, exécutez la fonction startGame dans la console. Vous pouvez également utiliser la méthode watchStats à tout moment pour afficher les statistiques des personnages et planifier votre stratégie.

Ce README fournit un aperçu de base du jeu. Pour plus de détails sur l’implémentation et les règles spécifiques, veuillez consulter les fichiers de code source correspondants. Bon jeu ! 🎮
