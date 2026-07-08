const dockerCommands = [
  // --- Images ---
  {
    id: 'docker-pull',
    name: 'docker pull',
    command: 'docker pull',
    description: 'Télécharge une image depuis Docker Hub ou un registre',
    category: 'Images',
    example_code: 'docker pull ubuntu',
    keywords: ['télécharger', 'telecharger', 'download', 'récupérer', 'recuperer', 'image', 'pull'],
    examples: [
      {
        code: 'docker pull ubuntu',
        explanation: 'Télécharge la dernière version d\'Ubuntu, une distribution Linux populaire souvent utilisée comme base pour créer d\'autres conteneurs',
      },
      {
        code: 'docker pull nginx:latest',
        explanation: 'Télécharge la dernière version de Nginx, un serveur web haute performance',
      },
      {
        code: 'docker pull mysql:8.0',
        explanation: 'Télécharge MySQL version 8.0 spécifiquement, utile pour garantir la compatibilité',
      },
    ],
  },
  {
    id: 'docker-images',
    name: 'docker images',
    command: 'docker images',
    description: 'Liste toutes les images Docker disponibles localement',
    category: 'Images',
    example_code: 'docker images',
    keywords: ['liste', 'list', 'lister', 'afficher', 'voir', 'images', 'disponibles', 'local'],
    examples: [
      {
        code: 'docker images',
        explanation: 'Affiche toutes les images avec leurs tags, IDs, dates de création et tailles',
      },
      {
        code: 'docker images -a',
        explanation: 'Affiche aussi les images intermédiaires utilisées lors de la construction',
      },
    ],
    options: [
      { flag: '-a', description: 'Affiche toutes les images (y compris les intermédiaires)' },
      { flag: '-q', description: "Affiche uniquement les ID d'images" },
    ],
  },
  {
    id: 'docker-build',
    name: 'docker build',
    command: 'docker build',
    description: 'Construit une image à partir d\'un Dockerfile',
    category: 'Images',
    example_code: 'docker build -t mon-app:latest .',
    keywords: ['construire', 'build', 'créer', 'creer', 'compiler', 'image', 'Dockerfile'],
    examples: [
      {
        code: 'docker build -t mon-app:latest .',
        explanation: 'Construit une image nommée "mon-app" avec le tag "latest" à partir du Dockerfile dans le répertoire courant (.)',
      },
      {
        code: 'docker build -t mon-app:v1.0 -f Dockerfile.prod .',
        explanation: 'Construit avec un Dockerfile spécifique (Dockerfile.prod), utile quand vous avez plusieurs Dockerfiles pour différents environnements',
      },
      {
        code: 'docker build --no-cache -t mon-app .',
        explanation: 'Construit l\'image sans utiliser le cache, forçant la reconstruction complète - utile pour des builds propres',
      },
    ],
    options: [
      { flag: '-t', description: "Nom et tag de l'image" },
      { flag: '-f', description: 'Spécifie le Dockerfile à utiliser' },
      { flag: '--no-cache', description: 'Construit sans utiliser le cache' },
    ],
  },
  {
    id: 'docker-rmi',
    name: 'docker rmi',
    command: 'docker rmi',
    description: 'Supprime une ou plusieurs images',
    category: 'Images',
    example_code: 'docker rmi nginx',
    keywords: ['supprimer', 'effacer', 'remove', 'delete', 'image'],
    examples: [
      {
        code: 'docker rmi nginx',
        explanation: 'Supprime l\'image nginx de votre système local pour libérer de l\'espace',
      },
      {
        code: 'docker rmi -f mon-image:v1.0',
        explanation: 'Force la suppression même si l\'image est utilisée par un conteneur arrêté',
      },
      {
        code: 'docker rmi $(docker images -q)',
        explanation: 'Supprime toutes les images locales - attention, commande destructive !',
      },
    ],
    options: [
      { flag: '-f', description: 'Force la suppression' },
    ],
  },
  {
    id: 'docker-tag',
    name: 'docker tag',
    command: 'docker tag',
    description: 'Crée un tag pour une image',
    category: 'Images',
    example_code: 'docker tag mon-app:latest mon-app:v1.0',
    keywords: ['tag', 'étiquette', 'etiquette', 'version', 'image'],
    examples: [
      {
        code: 'docker tag mon-app:latest mon-app:v1.0',
        explanation: 'Crée une version taguée "v1.0" de votre image, utile pour le versioning',
      },
      {
        code: 'docker tag mon-image:latest registry.example.com/mon-image:latest',
        explanation: 'Prépare l\'image pour être poussée vers un registre privé en ajoutant l\'URL du registre',
      },
    ],
  },
  {
    id: 'docker-push',
    name: 'docker push',
    command: 'docker push',
    description: 'Pousse une image vers un registre Docker',
    category: 'Images',
    example_code: 'docker push mon-username/mon-app:latest',
    keywords: ['pousser', 'push', 'envoyer', 'publier', 'image', 'registre'],
    examples: [
      {
        code: 'docker push mon-username/mon-app:latest',
        explanation: 'Envoie votre image vers Docker Hub sous votre compte utilisateur',
      },
      {
        code: 'docker push registry.example.com/mon-app:v1.0',
        explanation: 'Envoie l\'image vers un registre Docker privé d\'entreprise',
      },
    ],
  },
  {
    id: 'docker-save',
    name: 'docker save',
    command: 'docker save',
    description: 'Exporte une ou plusieurs images vers un fichier tar',
    category: 'Images',
    example_code: 'docker save -o mon-image.tar mon-image:latest',
    keywords: ['exporter', 'export', 'sauvegarder', 'save', 'backup', 'archive', 'tar', 'image'],
    examples: [
      {
        code: 'docker save -o mon-image.tar mon-image:latest',
        explanation: 'Sauvegarde l\'image dans un fichier tar - utile pour transférer des images sans registre',
      },
      {
        code: 'docker save mon-image:latest | gzip > mon-image.tar.gz',
        explanation: 'Sauvegarde et compresse l\'image pour réduire la taille du fichier',
      },
      {
        code: 'docker save -o images.tar image1 image2 image3',
        explanation: 'Exporte plusieurs images dans un seul fichier tar',
      },
    ],
    options: [
      { flag: '-o', description: 'Spécifie le fichier de sortie' },
    ],
  },
  {
    id: 'docker-load',
    name: 'docker load',
    command: 'docker load',
    description: 'Charge des images depuis un fichier tar',
    category: 'Images',
    example_code: 'docker load -i mon-image.tar',
    keywords: ['charger', 'load', 'importer', 'import', 'restaurer', 'restore', 'tar', 'image'],
    examples: [
      {
        code: 'docker load -i mon-image.tar',
        explanation: 'Charge une image précédemment sauvegardée avec docker save',
      },
      {
        code: 'docker load < mon-image.tar',
        explanation: 'Alternative pour charger une image depuis un fichier tar',
      },
      {
        code: 'gunzip -c mon-image.tar.gz | docker load',
        explanation: 'Décompresse et charge une image compressée',
      },
    ],
    options: [
      { flag: '-i', description: 'Spécifie le fichier d\'entrée' },
      { flag: '-q', description: 'Supprime la sortie détaillée' },
    ],
  },
  {
    id: 'docker-import',
    name: 'docker import',
    command: 'docker import',
    description: 'Crée une image à partir d\'un tarball de système de fichiers',
    category: 'Images',
    example_code: 'docker import mon-filesystem.tar mon-image:latest',
    keywords: ['importer', 'import', 'créer', 'creer', 'tarball', 'filesystem', 'image'],
    examples: [
      {
        code: 'docker import mon-filesystem.tar mon-image:latest',
        explanation: 'Crée une nouvelle image à partir d\'un système de fichiers exporté',
      },
      {
        code: 'cat mon-filesystem.tar | docker import - mon-image:v1.0',
        explanation: 'Importe depuis stdin avec un tag spécifique',
      },
    ],
  },
  {
    id: 'docker-export',
    name: 'docker export',
    command: 'docker export',
    description: 'Exporte le système de fichiers d\'un conteneur vers un fichier tar',
    category: 'Images',
    example_code: 'docker export mon-conteneur -o conteneur.tar',
    keywords: ['exporter', 'export', 'sauvegarder', 'save', 'conteneur', 'container', 'filesystem', 'tar'],
    examples: [
      {
        code: 'docker export mon-conteneur -o conteneur.tar',
        explanation: 'Exporte tout le système de fichiers d\'un conteneur - utile pour la migration',
      },
      {
        code: 'docker export mon-conteneur | gzip > conteneur.tar.gz',
        explanation: 'Exporte et compresse le conteneur pour économiser de l\'espace',
      },
    ],
    options: [
      { flag: '-o', description: 'Spécifie le fichier de sortie' },
    ],
  },
  {
    id: 'docker-commit',
    name: 'docker commit',
    command: 'docker commit',
    description: 'Crée une nouvelle image à partir des modifications d\'un conteneur',
    category: 'Images',
    example_code: 'docker commit mon-conteneur mon-image:v2.0',
    keywords: ['créer', 'creer', 'create', 'commit', 'sauvegarder', 'save', 'modifications', 'conteneur', 'container', 'image'],
    examples: [
      {
        code: 'docker commit mon-conteneur mon-image:v2.0',
        explanation: 'Crée une nouvelle image incluant toutes les modifications faites dans le conteneur',
      },
      {
        code: 'docker commit -m "Ajout de la configuration" mon-conteneur mon-image:v2.0',
        explanation: 'Crée l\'image avec un message décrivant les changements',
      },
      {
        code: 'docker commit -a "Alain" mon-conteneur mon-image:v2.0',
        explanation: 'Spécifie l\'auteur des modifications',
      },
    ],
    options: [
      { flag: '-m', description: 'Message de commit' },
      { flag: '-a', description: 'Auteur (ex: "Nom <email>")' },
      { flag: '-p', description: 'Met en pause le conteneur pendant le commit' },
    ],
  },
  {
    id: 'docker-history',
    name: 'docker history',
    command: 'docker history',
    description: 'Affiche l\'historique des couches d\'une image',
    category: 'Images',
    example_code: 'docker history nginx',
    keywords: ['afficher', 'voir', 'display', 'show', 'historique', 'history', 'couches', 'layers', 'image'],
    examples: [
      {
        code: 'docker history nginx',
        explanation: 'Montre toutes les couches de l\'image et les commandes qui les ont créées',
      },
      {
        code: 'docker history --no-trunc mon-image',
        explanation: 'Affiche l\'historique complet sans tronquer les lignes longues',
      },
      {
        code: 'docker history --human=false mon-image',
        explanation: 'Affiche les tailles en octets au lieu du format lisible (MB, GB)',
      },
    ],
    options: [
      { flag: '--no-trunc', description: 'Ne tronque pas la sortie' },
      { flag: '-q', description: 'Affiche uniquement les IDs' },
    ],
  },
  {
    id: 'docker-search',
    name: 'docker search',
    command: 'docker search',
    description: 'Recherche des images sur Docker Hub',
    category: 'Images',
    example_code: 'docker search nginx',
    keywords: ['rechercher', 'search', 'chercher', 'trouver', 'find', 'images', 'Docker', 'Hub'],
    examples: [
      {
        code: 'docker search nginx',
        explanation: 'Recherche toutes les images contenant "nginx" sur Docker Hub',
      },
      {
        code: 'docker search --filter stars=100 nginx',
        explanation: 'Recherche les images nginx ayant au moins 100 étoiles',
      },
      {
        code: 'docker search --filter is-official=true ubuntu',
        explanation: 'Recherche uniquement les images officielles Ubuntu',
      },
      {
        code: 'docker search --limit 5 alpine',
        explanation: 'Limite les résultats aux 5 premières images trouvées',
      },
    ],
    options: [
      { flag: '--filter', description: 'Filtre les résultats (stars, is-official, is-automated)' },
      { flag: '--limit', description: 'Nombre maximum de résultats (défaut: 25)' },
    ],
  },

  // --- Containers ---
  {
    id: 'docker-run',
    name: 'docker run',
    command: 'docker run',
    description: 'Crée et démarre un nouveau conteneur à partir d\'une image',
    category: 'Containers',
    example_code: 'docker run nginx',
    keywords: ['créer', 'creer', 'create', 'démarrer', 'demarrer', 'start', 'lancer', 'exécuter', 'executer', 'conteneur', 'container', 'run'],
    examples: [
      {
        code: 'docker run nginx',
        explanation: 'Lance Nginx en mode interactif - bloque le terminal et affiche les logs',
      },
      {
        code: 'docker run -d -p 8080:80 --name mon-nginx nginx',
        explanation: 'Lance Nginx en arrière-plan (-d), accessible sur le port 8080 de votre machine, avec un nom personnalisé',
      },
      {
        code: 'docker run -it ubuntu bash',
        explanation: 'Lance Ubuntu en mode interactif avec un terminal bash - utile pour explorer ou tester',
      },
      {
        code: 'docker run -d -e MYSQL_ROOT_PASSWORD=secret mysql',
        explanation: 'Lance MySQL avec une variable d\'environnement pour définir le mot de passe root',
      },
    ],
    options: [
      { flag: '-d', description: 'Mode détaché (en arrière-plan)' },
      { flag: '-p', description: 'Mappe les ports (hôte:conteneur)' },
      { flag: '--name', description: 'Donne un nom au conteneur' },
      { flag: '-e', description: 'Définit des variables d\'environnement' },
      { flag: '-v', description: 'Monte un volume' },
      { flag: '-it', description: 'Mode interactif avec TTY' },
      { flag: '--rm', description: 'Supprime le conteneur après l\'arrêt' },
    ],
  },
  {
    id: 'docker-ps',
    name: 'docker ps',
    command: 'docker ps',
    description: 'Liste les conteneurs en cours d\'exécution',
    category: 'Containers',
    example_code: 'docker ps',
    keywords: ['liste', 'list', 'lister', 'afficher', 'voir', 'conteneurs', 'containers', 'exécution', 'execution', 'actifs', 'running'],
    examples: [
      {
        code: 'docker ps',
        explanation: 'Montre uniquement les conteneurs actuellement actifs',
      },
      {
        code: 'docker ps -a',
        explanation: 'Affiche tous les conteneurs, y compris ceux qui sont arrêtés',
      },
      {
        code: 'docker ps -q',
        explanation: 'Affiche uniquement les IDs des conteneurs - utile pour les scripts',
      },
    ],
    options: [
      { flag: '-a', description: 'Affiche tous les conteneurs (même arrêtés)' },
      { flag: '-q', description: 'Affiche uniquement les IDs' },
    ],
  },
  {
    id: 'docker-start',
    name: 'docker start',
    command: 'docker start',
    description: 'Démarre un ou plusieurs conteneurs arrêtés',
    category: 'Containers',
    example_code: 'docker start mon-conteneur',
    keywords: ['démarrer', 'demarrer', 'start', 'lancer', 'relancer', 'conteneurs', 'containers', 'arrêtés', 'arretes'],
    examples: [
      {
        code: 'docker start mon-conteneur',
        explanation: 'Redémarre un conteneur que vous aviez arrêté précédemment',
      },
      {
        code: 'docker start conteneur1 conteneur2',
        explanation: 'Démarre plusieurs conteneurs en une seule commande',
      },
    ],
  },
  {
    id: 'docker-stop',
    name: 'docker stop',
    command: 'docker stop',
    description: 'Arrête un ou plusieurs conteneurs en cours d\'exécution',
    category: 'Containers',
    example_code: 'docker stop mon-conteneur',
    keywords: ['arrêter', 'arreter', 'stop', 'stopper', 'conteneurs', 'containers', 'exécution', 'execution'],
    examples: [
      {
        code: 'docker stop mon-conteneur',
        explanation: 'Arrête proprement le conteneur en lui donnant 10 secondes pour terminer',
      },
      {
        code: 'docker stop $(docker ps -q)',
        explanation: 'Arrête tous les conteneurs en cours d\'exécution - utile pour un nettoyage rapide',
      },
    ],
  },
  {
    id: 'docker-restart',
    name: 'docker restart',
    command: 'docker restart',
    description: 'Redémarre un ou plusieurs conteneurs',
    category: 'Containers',
    example_code: 'docker restart mon-conteneur',
    keywords: ['redémarrer', 'redemarrer', 'restart', 'relancer', 'conteneurs', 'containers'],
    examples: [
      {
        code: 'docker restart mon-conteneur',
        explanation: 'Redémarre le conteneur - utile après avoir modifié la configuration',
      },
    ],
  },
  {
    id: 'docker-rm',
    name: 'docker rm',
    command: 'docker rm',
    description: 'Supprime un ou plusieurs conteneurs',
    category: 'Containers',
    example_code: 'docker rm mon-conteneur',
    keywords: ['supprimer', 'effacer', 'remove', 'delete', 'conteneurs', 'containers'],
    examples: [
      {
        code: 'docker rm mon-conteneur',
        explanation: 'Supprime définitivement un conteneur arrêté pour libérer de l\'espace',
      },
      {
        code: 'docker rm -f mon-conteneur',
        explanation: 'Force la suppression même si le conteneur est encore en cours d\'exécution',
      },
      {
        code: 'docker rm $(docker ps -aq)',
        explanation: 'Supprime tous les conteneurs (actifs et arrêtés) - attention, très destructif !',
      },
    ],
    options: [
      { flag: '-f', description: 'Force la suppression (même si en cours)' },
      { flag: '-v', description: 'Supprime aussi les volumes associés' },
    ],
  },
  {
    id: 'docker-exec',
    name: 'docker exec',
    command: 'docker exec',
    description: 'Exécute une commande dans un conteneur en cours d\'exécution',
    category: 'Containers',
    example_code: 'docker exec -it mon-conteneur bash',
    keywords: ['exécuter', 'executer', 'execute', 'lancer', 'commande', 'command', 'conteneur', 'container', 'bash', 'shell'],
    examples: [
      {
        code: 'docker exec mon-conteneur ls -la',
        explanation: 'Exécute la commande "ls -la" dans le conteneur pour voir les fichiers',
      },
      {
        code: 'docker exec -it mon-conteneur bash',
        explanation: 'Ouvre un terminal bash interactif dans le conteneur - comme faire SSH',
      },
      {
        code: 'docker exec -it mon-conteneur sh',
        explanation: 'Utilise "sh" au lieu de "bash" pour les conteneurs minimalistes comme Alpine',
      },
    ],
    options: [
      { flag: '-it', description: 'Mode interactif avec TTY' },
      { flag: '-d', description: 'Mode détaché' },
    ],
  },
  {
    id: 'docker-logs',
    name: 'docker logs',
    command: 'docker logs',
    description: 'Affiche les logs d\'un conteneur',
    category: 'Containers',
    example_code: 'docker logs mon-conteneur',
    keywords: ['afficher', 'voir', 'display', 'show', 'logs', 'journaux', 'conteneur', 'container', 'debug'],
    examples: [
      {
        code: 'docker logs mon-conteneur',
        explanation: 'Affiche tous les logs du conteneur depuis son démarrage',
      },
      {
        code: 'docker logs -f mon-conteneur',
        explanation: 'Suit les logs en temps réel, comme "tail -f" - pratique pour le debugging',
      },
      {
        code: 'docker logs --tail 100 mon-conteneur',
        explanation: 'Affiche uniquement les 100 dernières lignes de log pour éviter la surcharge',
      },
    ],
    options: [
      { flag: '-f', description: 'Suit les logs en temps réel' },
      { flag: '--tail', description: 'Affiche les N dernières lignes' },
      { flag: '--since', description: 'Affiche les logs depuis un timestamp' },
    ],
  },
  {
    id: 'docker-inspect',
    name: 'docker inspect',
    command: 'docker inspect',
    description: 'Affiche des informations détaillées sur un conteneur ou une image',
    category: 'Containers',
    example_code: 'docker inspect mon-conteneur',
    keywords: ['afficher', 'voir', 'display', 'show', 'informations', 'détails', 'details', 'détailées', 'detaillees', 'conteneur', 'container', 'image', 'inspect'],
    examples: [
      {
        code: 'docker inspect mon-conteneur',
        explanation: 'Affiche toutes les métadonnées du conteneur en format JSON - configuration, réseau, volumes, etc.',
      },
      {
        code: 'docker inspect --format="{{.NetworkSettings.IPAddress}}" mon-conteneur',
        explanation: 'Extrait uniquement l\'adresse IP du conteneur avec un format personnalisé',
      },
    ],
  },
  {
    id: 'docker-stats',
    name: 'docker stats',
    command: 'docker stats',
    description: 'Affiche l\'utilisation des ressources des conteneurs en temps réel',
    category: 'Containers',
    example_code: 'docker stats',
    keywords: ['afficher', 'voir', 'display', 'show', 'utilisation', 'ressources', 'cpu', 'mémoire', 'memoire', 'memory', 'conteneurs', 'containers', 'temps', 'réel', 'reel', 'statistiques'],
    examples: [
      {
        code: 'docker stats',
        explanation: 'Affiche CPU, mémoire, réseau et I/O disque de tous les conteneurs actifs - comme "top" pour Docker',
      },
      {
        code: 'docker stats mon-conteneur',
        explanation: 'Surveille les ressources d\'un conteneur spécifique uniquement',
      },
    ],
  },
  {
    id: 'docker-top',
    name: 'docker top',
    command: 'docker top',
    description: 'Affiche les processus en cours dans un conteneur',
    category: 'Containers',
    example_code: 'docker top mon-conteneur',
    keywords: ['afficher', 'voir', 'display', 'show', 'processus', 'processes', 'conteneur', 'container', 'top'],
    examples: [
      {
        code: 'docker top mon-conteneur',
        explanation: 'Liste tous les processus qui s\'exécutent actuellement dans le conteneur',
      },
    ],
  },
  {
    id: 'docker-cp',
    name: 'docker cp',
    command: 'docker cp',
    description: 'Copie des fichiers entre l\'hôte et un conteneur',
    category: 'Containers',
    example_code: 'docker cp mon-conteneur:/app/config.json ./config.json',
    keywords: ['copier', 'copy', 'transférer', 'transferer', 'fichiers', 'files', 'hôte', 'hote', 'host', 'conteneur', 'container'],
    examples: [
      {
        code: 'docker cp mon-conteneur:/app/config.json ./config.json',
        explanation: 'Extrait un fichier depuis le conteneur vers votre machine locale',
      },
      {
        code: 'docker cp ./fichier.txt mon-conteneur:/app/fichier.txt',
        explanation: 'Envoie un fichier de votre machine locale vers le conteneur',
      },
    ],
  },
  {
    id: 'docker-create',
    name: 'docker create',
    command: 'docker create',
    description: 'Crée un nouveau conteneur sans le démarrer',
    category: 'Containers',
    example_code: 'docker create --name mon-conteneur nginx',
    keywords: ['créer', 'creer', 'create', 'nouveau', 'conteneur', 'container', 'sans', 'démarrer', 'demarrer'],
    examples: [
      {
        code: 'docker create --name mon-conteneur nginx',
        explanation: 'Crée un conteneur mais ne le démarre pas - utile pour configurer avant de lancer',
      },
      {
        code: 'docker create -p 8080:80 -v /data:/app/data nginx',
        explanation: 'Crée un conteneur avec des ports et volumes configurés, prêt à être démarré',
      },
    ],
  },
  {
    id: 'docker-attach',
    name: 'docker attach',
    command: 'docker attach',
    description: 'S\'attache à un conteneur en cours d\'exécution',
    category: 'Containers',
    example_code: 'docker attach mon-conteneur',
    keywords: ['attacher', 'attach', 'connecter', 'connect', 'conteneur', 'container', 'console', 'terminal'],
    examples: [
      {
        code: 'docker attach mon-conteneur',
        explanation: 'S\'attache à la console du conteneur - vous voyez la sortie standard en temps réel',
      },
      {
        code: 'docker attach --sig-proxy=false mon-conteneur',
        explanation: 'S\'attache sans transmettre les signaux - Ctrl+C ne stoppera pas le conteneur',
      },
    ],
    options: [
      { flag: '--sig-proxy', description: 'Transmet tous les signaux au processus (défaut: true)' },
      { flag: '--no-stdin', description: 'Ne pas attacher STDIN' },
    ],
  },
  {
    id: 'docker-pause',
    name: 'docker pause',
    command: 'docker pause',
    description: 'Suspend tous les processus d\'un conteneur',
    category: 'Containers',
    example_code: 'docker pause mon-conteneur',
    keywords: ['suspendre', 'pause', 'geler', 'freeze', 'arrêter', 'arreter', 'temporairement', 'conteneur', 'container'],
    examples: [
      {
        code: 'docker pause mon-conteneur',
        explanation: 'Suspend le conteneur en gelant tous ses processus - utile pour libérer des ressources temporairement',
      },
      {
        code: 'docker pause conteneur1 conteneur2',
        explanation: 'Suspend plusieurs conteneurs en une seule commande',
      },
    ],
  },
  {
    id: 'docker-unpause',
    name: 'docker unpause',
    command: 'docker unpause',
    description: 'Reprend tous les processus d\'un conteneur suspendu',
    category: 'Containers',
    example_code: 'docker unpause mon-conteneur',
    keywords: ['reprendre', 'unpause', 'dégeler', 'degeler', 'unfreeze', 'continuer', 'conteneur', 'container'],
    examples: [
      {
        code: 'docker unpause mon-conteneur',
        explanation: 'Reprend l\'exécution d\'un conteneur précédemment mis en pause',
      },
      {
        code: 'docker unpause $(docker ps -q --filter "status=paused")',
        explanation: 'Reprend tous les conteneurs actuellement en pause',
      },
    ],
  },
  {
    id: 'docker-kill',
    name: 'docker kill',
    command: 'docker kill',
    description: 'Force l\'arrêt immédiat d\'un conteneur (SIGKILL)',
    category: 'Containers',
    example_code: 'docker kill mon-conteneur',
    keywords: ['tuer', 'kill', 'forcer', 'force', 'arrêter', 'arreter', 'stop', 'immédiat', 'immediat', 'conteneur', 'container'],
    examples: [
      {
        code: 'docker kill mon-conteneur',
        explanation: 'Arrête brutalement le conteneur sans lui laisser le temps de terminer proprement',
      },
      {
        code: 'docker kill --signal=SIGTERM mon-conteneur',
        explanation: 'Envoie un signal spécifique au conteneur au lieu de SIGKILL',
      },
      {
        code: 'docker kill $(docker ps -q)',
        explanation: 'Tue tous les conteneurs en cours d\'exécution - attention, très brutal !',
      },
    ],
    options: [
      { flag: '-s, --signal', description: 'Signal à envoyer (défaut: SIGKILL)' },
    ],
  },
  {
    id: 'docker-rename',
    name: 'docker rename',
    command: 'docker rename',
    description: 'Renomme un conteneur',
    category: 'Containers',
    example_code: 'docker rename ancien-nom nouveau-nom',
    keywords: ['renommer', 'rename', 'changer', 'nom', 'name', 'conteneur', 'container'],
    examples: [
      {
        code: 'docker rename ancien-nom nouveau-nom',
        explanation: 'Change le nom d\'un conteneur - utile pour une meilleure organisation',
      },
    ],
  },
  {
    id: 'docker-port',
    name: 'docker port',
    command: 'docker port',
    description: 'Affiche les mappages de ports d\'un conteneur',
    category: 'Containers',
    example_code: 'docker port mon-conteneur',
    keywords: ['afficher', 'voir', 'display', 'show', 'port', 'ports', 'mapping', 'conteneur', 'container'],
    examples: [
      {
        code: 'docker port mon-conteneur',
        explanation: 'Liste tous les ports exposés et leurs mappages sur l\'hôte',
      },
    ],
  },
  {
    id: 'docker-wait',
    name: 'docker wait',
    command: 'docker wait',
    description: 'Attend qu\'un conteneur se termine et affiche son code de sortie',
    category: 'Containers',
    example_code: 'docker wait mon-conteneur',
    keywords: ['attendre', 'wait', 'bloquer', 'block', 'terminer', 'finish', 'code', 'sortie', 'exit', 'conteneur', 'container'],
    examples: [
      {
        code: 'docker wait mon-conteneur',
        explanation: 'Bloque jusqu\'à ce que le conteneur s\'arrête et affiche son code de sortie',
      },
    ],
  },
  {
    id: 'docker-update',
    name: 'docker update',
    command: 'docker update',
    description: 'Modifie les contraintes de ressources d\'un conteneur',
    category: 'Containers',
    example_code: 'docker update --cpus 2 mon-conteneur',
    keywords: ['modifier', 'update', 'changer', 'ressources', 'resources', 'cpu', 'mémoire', 'memoire', 'memory', 'limites', 'limits', 'conteneur', 'container'],
    examples: [
      {
        code: 'docker update --cpus 2 mon-conteneur',
        explanation: 'Limite le conteneur à utiliser 2 CPUs maximum',
      },
    ],
    options: [
      { flag: '--cpus', description: 'Nombre de CPUs' },
      { flag: '--memory', description: 'Limite de mémoire' },
    ],
  },
  {
    id: 'docker-diff',
    name: 'docker diff',
    command: 'docker diff',
    description: 'Affiche les modifications apportées au système de fichiers d\'un conteneur',
    category: 'Containers',
    example_code: 'docker diff mon-conteneur',
    keywords: ['afficher', 'voir', 'display', 'show', 'modifications', 'changes', 'différences', 'differences', 'diff', 'fichiers', 'files', 'conteneur', 'container'],
    examples: [
      {
        code: 'docker diff mon-conteneur',
        explanation: 'Liste tous les fichiers ajoutés (A), modifiés (C) ou supprimés (D) dans le conteneur',
      },
    ],
  },

  // --- Volumes ---
  {
    id: 'docker-volume-create',
    name: 'docker volume create',
    command: 'docker volume create',
    description: 'Crée un nouveau volume',
    category: 'Volumes',
    example_code: 'docker volume create mon-volume',
    keywords: ['créer', 'creer', 'create', 'nouveau', 'volume', 'stockage'],
    examples: [
      {
        code: 'docker volume create mon-volume',
        explanation: 'Crée un volume nommé pour persister des données entre les redémarrages de conteneurs',
      },
    ],
  },
  {
    id: 'docker-volume-ls',
    name: 'docker volume ls',
    command: 'docker volume ls',
    description: 'Liste tous les volumes',
    category: 'Volumes',
    example_code: 'docker volume ls',
    keywords: ['liste', 'list', 'lister', 'afficher', 'voir', 'volumes', 'stockage'],
    examples: [
      {
        code: 'docker volume ls',
        explanation: 'Affiche tous les volumes Docker avec leurs noms et drivers',
      },
    ],
  },
  {
    id: 'docker-volume-inspect',
    name: 'docker volume inspect',
    command: 'docker volume inspect',
    description: 'Affiche des informations détaillées sur un volume',
    category: 'Volumes',
    example_code: 'docker volume inspect mon-volume',
    keywords: ['afficher', 'voir', 'display', 'show', 'informations', 'détails', 'details', 'détailées', 'detaillees', 'volume', 'inspect'],
    examples: [
      {
        code: 'docker volume inspect mon-volume',
        explanation: 'Montre le point de montage, le driver et les options du volume',
      },
    ],
  },
  {
    id: 'docker-volume-rm',
    name: 'docker volume rm',
    command: 'docker volume rm',
    description: 'Supprime un ou plusieurs volumes',
    category: 'Volumes',
    example_code: 'docker volume rm mon-volume',
    keywords: ['supprimer', 'effacer', 'remove', 'delete', 'volumes', 'stockage'],
    examples: [
      {
        code: 'docker volume rm mon-volume',
        explanation: 'Supprime définitivement un volume - attention, les données sont perdues !',
      },
    ],
  },
  {
    id: 'docker-volume-prune',
    name: 'docker volume prune',
    command: 'docker volume prune',
    description: 'Supprime tous les volumes non utilisés',
    category: 'Volumes',
    example_code: 'docker volume prune',
    keywords: ['supprimer', 'effacer', 'remove', 'nettoyer', 'clean', 'volumes', 'non', 'utilisés', 'utilises', 'prune'],
    examples: [
      {
        code: 'docker volume prune',
        explanation: 'Nettoie tous les volumes qui ne sont attachés à aucun conteneur - libère de l\'espace',
      },
    ],
    options: [
      { flag: '-f', description: 'Force la suppression sans confirmation' },
    ],
  },

  // --- Networks ---
  {
    id: 'docker-network-create',
    name: 'docker network create',
    command: 'docker network create',
    description: 'Crée un nouveau réseau',
    category: 'Networks',
    example_code: 'docker network create mon-reseau',
    keywords: ['créer', 'creer', 'create', 'nouveau', 'réseau', 'reseau', 'network'],
    examples: [
      {
        code: 'docker network create mon-reseau',
        explanation: 'Crée un réseau isolé pour que vos conteneurs puissent communiquer entre eux',
      },
    ],
  },
  {
    id: 'docker-network-ls',
    name: 'docker network ls',
    command: 'docker network ls',
    description: 'Liste tous les réseaux',
    category: 'Networks',
    example_code: 'docker network ls',
    keywords: ['liste', 'list', 'lister', 'afficher', 'voir', 'réseaux', 'reseaux', 'networks'],
    examples: [
      {
        code: 'docker network ls',
        explanation: 'Affiche tous les réseaux Docker avec leurs IDs, noms et drivers',
      },
    ],
  },
  {
    id: 'docker-network-inspect',
    name: 'docker network inspect',
    command: 'docker network inspect',
    description: 'Affiche des informations détaillées sur un réseau',
    category: 'Networks',
    example_code: 'docker network inspect mon-reseau',
    keywords: ['afficher', 'voir', 'display', 'show', 'informations', 'détails', 'details', 'détailées', 'detaillees', 'réseau', 'reseau', 'network', 'inspect'],
    examples: [
      {
        code: 'docker network inspect mon-reseau',
        explanation: 'Montre les conteneurs connectés, les sous-réseaux et la configuration IP complète de ce réseau',
      },
    ],
  }
];

export const sqlService = {
  getAllCommands: () => {
    return dockerCommands;
  },

  getCategories: () => {
    const categories = dockerCommands.map(cmd => cmd.category);
    return ['Toutes', ...new Set(categories)];
  },

  getCommandsByCategory: (category) => {
    if (!category || category === 'Toutes') {
      return dockerCommands;
    }
    return dockerCommands.filter(cmd => cmd.category === category);
  }
};