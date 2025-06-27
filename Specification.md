# Spécification fonctionnelle – Simulation du Chaos : Bille dans un bol

## 🎯 Objectif

Illustrer le comportement chaotique d’un système mécanique simple : deux billes tombant et rebondissant dans un bol parabolique. Montrer qu’une infime différence de conditions initiales entraîne des trajectoires rapidement divergentes.

---

## 👁️ Vue utilisateur

### Affichage à l’écran

- Un **bol stylisé** vu en coupe (courbe parabolique).
- **Deux billes** de couleurs différentes.
- Une **ligne continue** tracée derrière chaque bille pour représenter sa trajectoire.
- Un bouton **“Lancer”** pour démarrer la simulation.

---

## 🧠 Comportement

### Conditions initiales

- Générées **aléatoirement** et **très proches** entre les deux billes.
- L’utilisateur ne les contrôle pas.

### Simulation

- Animation physique avec :
  - Gravité
  - Surface du bol modélisée par \( y = ax^2 \)
  - Rebonds sur les parois
- Pas de contrôle de la vitesse, ni de variation d’affichage.
- Pas d’option de zoom, ralenti, ni export.

---

## 🔁 Interaction utilisateur

| Action            | Effet                                                       |
| ----------------- | ----------------------------------------------------------- |
| Clic sur “Lancer” | Efface la simulation en cours et relance une nouvelle paire |
| Rien d’autre      | L’interface est volontairement minimale                     |

---

## 🧱 Contraintes techniques

- Application conçue pour **ordinateur uniquement** (≥1024px)
- Interface **visuelle uniquement** (pas de texte explicatif intégré)
- Les deux billes ont **des couleurs différentes**
- **Pas d’option d’export** ni de sauvegarde

---

## ✅ Résumé des choix

| Élément                    | Choix retenu             |
| -------------------------- | ------------------------ |
| Nombre de billes           | 2                        |
| Conditions initiales       | Aléatoires, très proches |
| Trajectoire                | Ligne continue           |
| Action “Lancer”            | Redémarre et relance     |
| Vitesse                    | Fixe                     |
| Représentation du bol      | Ligne stylisée           |
| Texte explicatif           | Aucun                    |
| Support                    | Ordinateur uniquement    |
| Différenciation des billes | Couleurs distinctes      |
| Export de simulation       | Aucun                    |
