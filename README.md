# Docker Commands Cheatsheet

Un petit outil qui liste les commandes Docker les plus utiles avec description et exemple pour chacune.

L'objectif : avoir un aide-mémoire rapide sous la main, plutôt que de chercher dans la doc à chaque fois.

## Utilisation (via Docker)

```bash
git clone https://github.com/Juyuroto/Command-Docker
cd Command-Docker
mv .env.example .env
docker compose up --build -d
```

Puis rends-toi sur : [http://localhost:Votre_Port](http://localhost:Votre_Port)

## Arrêter le projet

```bash
docker compose down
```

## Config

Pense à adapter les variables dans le fichier `.env` selon ton environnement avant de lancer `docker compose up`.