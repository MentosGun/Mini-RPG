# Mini-programme - RPG
## Écrire un jeu de combat entre un groupe de joueurs et un monstre.
### Les règles
- Possibilité de jouer à plusieurs, demande au lancement du programme le nombre de joueurs
- Chaque joueur doit saisir son nom avant la partie.
- Chaque joueur doit choisir sa classe de personnage (guerrier, mage, etc…) avant la partie.
- Les joueurs jouent chacun leurs tours.
- À la fin de chaque tour, le monstre attaque le joueur qui vient de jouer.
- Quand un joueur arrive à 0 de point de vie, il est KO et son tour est ignoré.
- Si tous les joueurs sont à 0 point de vie, la partie est perdu.

### Classes de personnage
Une classe de personnage donne les caractéristiques suivantes au joueur :
- Le nombre de points de vie
- Le nombre de dégâts d’attaque
Pour le moment, seules 3 classes de personnages sont à créer :

|Classe|PVs|Dégâts|
|-|-|-|
|Guerrier|200|10|
|Mage|100|20|
|Soigneur|50|5|
###Le monstre
Le monstre a les caractéristiques suivantes et celles-ci sont choisies aléatoirement au début du
combat selon le tableau ci-dessous :

||PVs|Dégâts|
|-|-|-|
|Minimum|50|5|
|Maximum|300|20|
Lors de sa phase d’attaque, le monstre à une chance de 10% de faire une attaque critique. Une
attaque critique est de 2 fois ses dégâts normaux.
Déroulement du tour d’un joueur
À chaque tour, les informations suivantes sont affichées :
- Le nom du joueur qui doit jouer le tour.
- La vie restante de tous les joueurs.
- La vie restante du monstre.
Le joueur peut ensuite choisir l’une des actions suivantes, en fonction de sa classe :

|Classe|Attaquer le monstre|Se soigner de 5 PVs|Soigner un joueur de 30 PVs|
|-|-|-|-|
|Guerrier|X||||
|Mage|X|X||
|Soigneur|X||X|
### Fin du combat
Si le monstre est battu, un message de victoire est affiché avec un récapitulatif des PVs de chaque
joueur.
Il est ensuite proposé de lancer un nouveau combat contre un nouveau monstre.
