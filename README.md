# Certifigo

Certifigo est une application de génération de certificats professionnels. Elle permet aux entreprises, formateurs et organisations de créer des certificats personnalisés en quelques clics.

## 🚀 Fonctionnalités principales à venir

- **Génération de certificats** : Création et personnalisation facile.
- **Import CSV** : Génération en masse de plusieurs certificats.
- **Export PDF** : Téléchargement des certificats au format PDF.
- **Stockage des données** : Sauvegarde automatique des informations.
- **QR Code intégré** : Vérification rapide de l'authenticité du certificat.

---

## 💻 Installation & Démarrage

### Prérequis

- **Node.js 18**
- **Angular 16+**

### Installation

```bash
# Clone du repo
git clone https://github.com/ton-repo/certifigo.git
cd certifigo

# Installation des dépendances
pnpm install
```

### Lancement en local

```bash
pnpm start
```

L'application sera disponible sur `http://localhost:4200/`.

---

## 🔧 Développement

### Stack technique

- **Angular 16+**
- **TypeScript**
- **RxJS**
- **HTML/CSS**

### Structure du projet

```
📂 src/
 ├── app/
 │   ├── components/   # Composants Angular
 │   ├── services/     # Services pour la gestion des données
 │   ├── models/       # Modèles de données
 │   ├── assets/       # Images et fichiers statiques
 │   ├── styles/       # Styles globaux
 │   ├── app.component.ts # Composant principal
 ├── main.ts          # Bootstrap de l'application (sans NgModule)
```

### Déploiement

```bash
ng build --prod
```

Les fichiers générés seront disponibles dans `dist/`.

---
