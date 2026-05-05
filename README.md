# Gestion de ton container Docker pour docker-guide

## 1 Préparer l’environnement

**Supprimer les anciens containers**

```bash
docker stop docker-guide
docker rm docker-guide
```

**(Optionnel) Supprimer l’image pour rebuild proprement**

```bash
docker rmi docker-guide:latest
```

## 2 Build de l’image

Depuis le dossier contenant ton **Dockerfile** :

```bash
docker build -t docker-guide:latest .
```

- `-t docker-guide:latest` -- nom de l’image

- `.` -- contexte de build (dossier courant)

## 3 Créer et démarrer le container

```bash
docker run -d \
  --name docker-guide \
  -p 3005:80 \
  docker-guide:latest
```

- `--name docker-guide` -- nom fixe pour docker start/stop

- `-p 3005:80` -- expose ton container sur localhost:3005

- `-d` -- démarre en arrière-plan

## 4 Vérifier que le container tourne

```bash
docker ps
```

**Exemple attendu :**

```bash
CONTAINER ID   IMAGE                  PORTS              NAMES
xxxxxxx        docker-guide:latest   0.0.0.0:3005->80   docker-guide
```

## 5 Gestion du container

### Démarrer / arrêter / redémarrer

```bash
docker start docker-guide
docker stop docker-guide
docker restart docker-guide
```

### Voir les logs en temps réel

```bash
docker logs -f docker-guide
```

## 6 Accéder au site

**Ouvre ton navigateur et accède à :**

> **[http://localhost:3005](http://localhost:3005)**

Ton application Docker Guide est maintenant accessible !

## 7 Gestion des changements de code

### Option A — Développement rapide avec volume

**Si tu modifies souvent ton code, tu peux monter ton dossier local dans le container :**

```bash
docker run -d \
  --name docker-guide \
  -p 3005:80 \
  -v $(pwd):/usr/src/app \
  docker-guide:latest
```

- Les changements sur ton PC sont immédiatement visibles dans le container

- Pratique pour du développement quotidien

**Adapter `/usr/src/app` au chemin où ton Dockerfile copie le code**

### Option B — Rebuild pour les changements majeurs

**Si tu modifies le Dockerfile ou les dépendances :**

```bash
docker stop docker-guide
docker rm docker-guide
docker build -t docker-guide:latest .
docker run -d --name docker-guide -p 3005:80 docker-guide:latest
```

- Cette méthode est plus propre

- Elle prend en compte toutes les modifications dans le Dockerfile ou les dépendances

## 8 Recommandation

| **Situation** | **Méthode** |
|---------------|-------------|
| Développement rapide | Option A (volume) |
| Modifications Dockerfile / production | Option B (rebuild) |