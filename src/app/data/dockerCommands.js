export const dockerCommands = [
  // Images
  {
    id: 'docker-pull',
    command: 'docker pull',
    description: 'Télécharge une image depuis Docker Hub ou un registre',
    category: 'images',
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
    command: 'docker images',
    description: 'Liste toutes les images Docker disponibles localement',
    category: 'images',
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
    command: 'docker build',
    description: 'Construit une image à partir d\'un Dockerfile',
    category: 'images',
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
    command: 'docker rmi',
    description: 'Supprime une ou plusieurs images',
    category: 'images',
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
    command: 'docker tag',
    description: 'Crée un tag pour une image',
    category: 'images',
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
    command: 'docker push',
    description: 'Pousse une image vers un registre Docker',
    category: 'images',
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
    command: 'docker save',
    description: 'Exporte une ou plusieurs images vers un fichier tar',
    category: 'images',
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
    command: 'docker load',
    description: 'Charge des images depuis un fichier tar',
    category: 'images',
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
    command: 'docker import',
    description: 'Crée une image à partir d\'un tarball de système de fichiers',
    category: 'images',
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
    command: 'docker export',
    description: 'Exporte le système de fichiers d\'un conteneur vers un fichier tar',
    category: 'images',
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
    command: 'docker commit',
    description: 'Crée une nouvelle image à partir des modifications d\'un conteneur',
    category: 'images',
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
      { flag: '-a', description: 'Auteur (ex: "Nom <email>")'  },
      { flag: '-p', description: 'Met en pause le conteneur pendant le commit' },
    ],
  },
  {
    id: 'docker-history',
    command: 'docker history',
    description: 'Affiche l\'historique des couches d\'une image',
    category: 'images',
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
    command: 'docker search',
    description: 'Recherche des images sur Docker Hub',
    category: 'images',
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

  // Containers
  {
    id: 'docker-run',
    command: 'docker run',
    description: 'Crée et démarre un nouveau conteneur à partir d\'une image',
    category: 'containers',
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
    command: 'docker ps',
    description: 'Liste les conteneurs en cours d\'exécution',
    category: 'containers',
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
    command: 'docker start',
    description: 'Démarre un ou plusieurs conteneurs arrêtés',
    category: 'containers',
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
    command: 'docker stop',
    description: 'Arrête un ou plusieurs conteneurs en cours d\'exécution',
    category: 'containers',
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
    command: 'docker restart',
    description: 'Redémarre un ou plusieurs conteneurs',
    category: 'containers',
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
    command: 'docker rm',
    description: 'Supprime un ou plusieurs conteneurs',
    category: 'containers',
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
    command: 'docker exec',
    description: 'Exécute une commande dans un conteneur en cours d\'exécution',
    category: 'containers',
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
    command: 'docker logs',
    description: 'Affiche les logs d\'un conteneur',
    category: 'containers',
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
    command: 'docker inspect',
    description: 'Affiche des informations détaillées sur un conteneur ou une image',
    category: 'containers',
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
    command: 'docker stats',
    description: 'Affiche l\'utilisation des ressources des conteneurs en temps réel',
    category: 'containers',
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
    command: 'docker top',
    description: 'Affiche les processus en cours dans un conteneur',
    category: 'containers',
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
    command: 'docker cp',
    description: 'Copie des fichiers entre l\'hôte et un conteneur',
    category: 'containers',
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
    command: 'docker create',
    description: 'Crée un nouveau conteneur sans le démarrer',
    category: 'containers',
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
    command: 'docker attach',
    description: 'S\'attache à un conteneur en cours d\'exécution',
    category: 'containers',
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
    command: 'docker pause',
    description: 'Suspend tous les processus d\'un conteneur',
    category: 'containers',
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
    command: 'docker unpause',
    description: 'Reprend tous les processus d\'un conteneur suspendu',
    category: 'containers',
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
    command: 'docker kill',
    description: 'Force l\'arrêt immédiat d\'un conteneur (SIGKILL)',
    category: 'containers',
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
    command: 'docker rename',
    description: 'Renomme un conteneur',
    category: 'containers',
    keywords: ['renommer', 'rename', 'changer', 'nom', 'name', 'conteneur', 'container'],
    examples: [
      {
        code: 'docker rename ancien-nom nouveau-nom',
        explanation: 'Change le nom d\'un conteneur - utile pour une meilleure organisation',
      },
      {
        code: 'docker rename mon-conteneur mon-app-web',
        explanation: 'Donne un nom plus descriptif à votre conteneur',
      },
    ],
  },
  {
    id: 'docker-port',
    command: 'docker port',
    description: 'Affiche les mappages de ports d\'un conteneur',
    category: 'containers',
    keywords: ['afficher', 'voir', 'display', 'show', 'port', 'ports', 'mapping', 'conteneur', 'container'],
    examples: [
      {
        code: 'docker port mon-conteneur',
        explanation: 'Liste tous les ports exposés et leurs mappages sur l\'hôte',
      },
      {
        code: 'docker port mon-conteneur 80',
        explanation: 'Affiche uniquement le mapping du port 80 du conteneur',
      },
    ],
  },
  {
    id: 'docker-wait',
    command: 'docker wait',
    description: 'Attend qu\'un conteneur se termine et affiche son code de sortie',
    category: 'containers',
    keywords: ['attendre', 'wait', 'bloquer', 'block', 'terminer', 'finish', 'code', 'sortie', 'exit', 'conteneur', 'container'],
    examples: [
      {
        code: 'docker wait mon-conteneur',
        explanation: 'Bloque jusqu\'à ce que le conteneur s\'arrête et affiche son code de sortie',
      },
      {
        code: 'docker wait conteneur1 conteneur2',
        explanation: 'Attend que plusieurs conteneurs se terminent - utile dans les scripts',
      },
    ],
  },
  {
    id: 'docker-update',
    command: 'docker update',
    description: 'Modifie les contraintes de ressources d\'un conteneur',
    category: 'containers',
    keywords: ['modifier', 'update', 'changer', 'ressources', 'resources', 'cpu', 'mémoire', 'memoire', 'memory', 'limites', 'limits', 'conteneur', 'container'],
    examples: [
      {
        code: 'docker update --cpus 2 mon-conteneur',
        explanation: 'Limite le conteneur à utiliser 2 CPUs maximum',
      },
      {
        code: 'docker update --memory 512m mon-conteneur',
        explanation: 'Limite la mémoire du conteneur à 512 MB',
      },
      {
        code: 'docker update --restart=always mon-conteneur',
        explanation: 'Change la politique de redémarrage pour qu\'il redémarre toujours',
      },
      {
        code: 'docker update --cpus 2 --memory 1g conteneur1 conteneur2',
        explanation: 'Applique les mêmes limites à plusieurs conteneurs',
      },
    ],
    options: [
      { flag: '--cpus', description: 'Nombre de CPUs' },
      { flag: '--memory', description: 'Limite de mémoire' },
      { flag: '--restart', description: 'Politique de redémarrage' },
    ],
  },
  {
    id: 'docker-diff',
    command: 'docker diff',
    description: 'Affiche les modifications apportées au système de fichiers d\'un conteneur',
    category: 'containers',
    keywords: ['afficher', 'voir', 'display', 'show', 'modifications', 'changes', 'différences', 'differences', 'diff', 'fichiers', 'files', 'conteneur', 'container'],
    examples: [
      {
        code: 'docker diff mon-conteneur',
        explanation: 'Liste tous les fichiers ajoutés (A), modifiés (C) ou supprimés (D) dans le conteneur',
      },
    ],
  },

  // Volumes
  {
    id: 'docker-volume-create',
    command: 'docker volume create',
    description: 'Crée un nouveau volume',
    category: 'volumes',
    keywords: ['créer', 'creer', 'create', 'nouveau', 'volume', 'stockage'],
    examples: [
      {
        code: 'docker volume create mon-volume',
        explanation: 'Crée un volume nommé pour persister des données entre les redémarrages de conteneurs',
      },
      {
        code: 'docker volume create --name data-volume',
        explanation: 'Crée un volume avec un nom explicite - même résultat que l\'exemple précédent',
      },
    ],
  },
  {
    id: 'docker-volume-ls',
    command: 'docker volume ls',
    description: 'Liste tous les volumes',
    category: 'volumes',
    keywords: ['liste', 'list', 'lister', 'afficher', 'voir', 'volumes', 'stockage'],
    examples: [
      {
        code: 'docker volume ls',
        explanation: 'Affiche tous les volumes Docker avec leurs noms et drivers',
      },
      {
        code: 'docker volume ls -q',
        explanation: 'Affiche uniquement les noms des volumes - pratique pour les scripts',
      },
    ],
  },
  {
    id: 'docker-volume-inspect',
    command: 'docker volume inspect',
    description: 'Affiche des informations détaillées sur un volume',
    category: 'volumes',
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
    command: 'docker volume rm',
    description: 'Supprime un ou plusieurs volumes',
    category: 'volumes',
    keywords: ['supprimer', 'effacer', 'remove', 'delete', 'volumes', 'stockage'],
    examples: [
      {
        code: 'docker volume rm mon-volume',
        explanation: 'Supprime définitivement un volume - attention, les données sont perdues !',
      },
      {
        code: 'docker volume rm volume1 volume2',
        explanation: 'Supprime plusieurs volumes en une seule commande',
      },
    ],
  },
  {
    id: 'docker-volume-prune',
    command: 'docker volume prune',
    description: 'Supprime tous les volumes non utilisés',
    category: 'volumes',
    keywords: ['supprimer', 'effacer', 'remove', 'nettoyer', 'clean', 'volumes', 'non', 'utilisés', 'utilises', 'prune'],
    examples: [
      {
        code: 'docker volume prune',
        explanation: 'Nettoie tous les volumes qui ne sont attachés à aucun conteneur - libère de l\'espace',
      },
      {
        code: 'docker volume prune -f',
        explanation: 'Supprime sans demander de confirmation - utile pour l\'automatisation',
      },
    ],
    options: [
      { flag: '-f', description: 'Force la suppression sans confirmation' },
    ],
  },

  // Networks
  {
    id: 'docker-network-create',
    command: 'docker network create',
    description: 'Crée un nouveau réseau',
    category: 'networks',
    keywords: ['créer', 'creer', 'create', 'nouveau', 'réseau', 'reseau', 'network'],
    examples: [
      {
        code: 'docker network create mon-reseau',
        explanation: 'Crée un réseau isolé pour que vos conteneurs puissent communiquer entre eux',
      },
      {
        code: 'docker network create --driver bridge mon-reseau',
        explanation: 'Crée explicitement un réseau de type "bridge" (c\'est le type par défaut)',
      },
    ],
  },
  {
    id: 'docker-network-ls',
    command: 'docker network ls',
    description: 'Liste tous les réseaux',
    category: 'networks',
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
    command: 'docker network inspect',
    description: 'Affiche des informations détaillées sur un réseau',
    category: 'networks',
    keywords: ['afficher', 'voir', 'display', 'show', 'informations', 'détails', 'details', 'détailées', 'detaillees', 'réseau', 'reseau', 'network', 'inspect'],
    examples: [
      {
        code: 'docker network inspect mon-reseau',
        explanation: 'Montre la configuration du réseau et tous les conteneurs qui y sont connectés',
      },
    ],
  },
  {
    id: 'docker-network-connect',
    command: 'docker network connect',
    description: 'Connecte un conteneur à un réseau',
    category: 'networks',
    keywords: ['connecter', 'connect', 'ajouter', 'add', 'conteneur', 'container', 'réseau', 'reseau', 'network'],
    examples: [
      {
        code: 'docker network connect mon-reseau mon-conteneur',
        explanation: 'Ajoute un conteneur existant à un réseau - permet la communication avec d\'autres conteneurs du réseau',
      },
    ],
  },
  {
    id: 'docker-network-disconnect',
    command: 'docker network disconnect',
    description: 'Déconnecte un conteneur d\'un réseau',
    category: 'networks',
    keywords: ['déconnecter', 'deconnecter', 'disconnect', 'retirer', 'remove', 'conteneur', 'container', 'réseau', 'reseau', 'network'],
    examples: [
      {
        code: 'docker network disconnect mon-reseau mon-conteneur',
        explanation: 'Retire un conteneur d\'un réseau - il ne pourra plus communiquer avec les autres conteneurs de ce réseau',
      },
    ],
  },
  {
    id: 'docker-network-rm',
    command: 'docker network rm',
    description: 'Supprime un ou plusieurs réseaux',
    category: 'networks',
    keywords: ['supprimer', 'effacer', 'remove', 'delete', 'réseaux', 'reseaux', 'networks'],
    examples: [
      {
        code: 'docker network rm mon-reseau',
        explanation: 'Supprime un réseau qui n\'est plus utilisé par aucun conteneur',
      },
    ],
  },
  {
    id: 'docker-network-prune',
    command: 'docker network prune',
    description: 'Supprime tous les réseaux non utilisés',
    category: 'networks',
    keywords: ['supprimer', 'effacer', 'remove', 'nettoyer', 'clean', 'réseaux', 'reseaux', 'networks', 'non', 'utilisés', 'utilises', 'prune'],
    examples: [
      {
        code: 'docker network prune',
        explanation: 'Nettoie tous les réseaux qui n\'ont aucun conteneur connecté',
      },
      {
        code: 'docker network prune -f',
        explanation: 'Supprime sans confirmation - pratique pour les scripts de nettoyage',
      },
    ],
  },

  // System
  {
    id: 'docker-version',
    command: 'docker version',
    description: 'Affiche la version de Docker',
    category: 'system',
    keywords: ['afficher', 'voir', 'display', 'show', 'version', 'Docker'],
    examples: [
      {
        code: 'docker version',
        explanation: 'Montre les versions du client et du serveur Docker installés',
      },
    ],
  },
  {
    id: 'docker-info',
    command: 'docker info',
    description: 'Affiche des informations système sur Docker',
    category: 'system',
    keywords: ['afficher', 'voir', 'display', 'show', 'informations', 'info', 'système', 'systeme', 'system', 'Docker'],
    examples: [
      {
        code: 'docker info',
        explanation: 'Affiche des détails complets : nombre de conteneurs, images, configuration, drivers, etc.',
      },
    ],
  },
  {
    id: 'docker-system-df',
    command: 'docker system df',
    description: 'Affiche l\'utilisation de l\'espace disque par Docker',
    category: 'system',
    keywords: ['afficher', 'voir', 'display', 'show', 'utilisation', 'espace', 'disque', 'disk', 'space', 'taille', 'size', 'Docker'],
    examples: [
      {
        code: 'docker system df',
        explanation: 'Montre combien d\'espace disque est utilisé par les images, conteneurs et volumes',
      },
      {
        code: 'docker system df -v',
        explanation: 'Affiche les détails pour chaque image, conteneur et volume individuellement',
      },
    ],
  },
  {
    id: 'docker-system-prune',
    command: 'docker system prune',
    description: 'Supprime toutes les ressources non utilisées (conteneurs, images, réseaux)',
    category: 'system',
    keywords: ['supprimer', 'effacer', 'remove', 'nettoyer', 'clean', 'nettoyage', 'cleanup', 'ressources', 'non', 'utilisées', 'utilises', 'prune'],
    examples: [
      {
        code: 'docker system prune',
        explanation: 'Grand nettoyage ! Supprime les conteneurs arrêtés, réseaux inutilisés et images pendantes',
      },
      {
        code: 'docker system prune -a',
        explanation: 'Nettoyage complet incluant aussi toutes les images non utilisées par des conteneurs',
      },
      {
        code: 'docker system prune -a --volumes',
        explanation: 'Nettoyage extrême : inclut aussi les volumes - attention aux données !',
      },
    ],
    options: [
      { flag: '-a', description: 'Supprime aussi les images non utilisées' },
      { flag: '--volumes', description: 'Supprime aussi les volumes' },
      { flag: '-f', description: 'Force sans confirmation' },
    ],
  },
  {
    id: 'docker-login',
    command: 'docker login',
    description: 'Se connecte à un registre Docker',
    category: 'system',
    keywords: ['connecter', 'connect', 'login', 'connexion', 'authentification', 'registre', 'registry', 'Docker', 'Hub'],
    examples: [
      {
        code: 'docker login',
        explanation: 'Se connecte à Docker Hub avec vos identifiants pour pouvoir push/pull des images privées',
      },
      {
        code: 'docker login registry.example.com',
        explanation: 'Se connecte à un registre Docker privé d\'entreprise',
      },
      {
        code: 'docker login -u mon-username',
        explanation: 'Se connecte avec un nom d\'utilisateur spécifique (le mot de passe sera demandé)',
      },
    ],
  },
  {
    id: 'docker-logout',
    command: 'docker logout',
    description: 'Se déconnecte d\'un registre Docker',
    category: 'system',
    keywords: ['déconnecter', 'deconnecter', 'disconnect', 'logout', 'déconnexion', 'deconnexion', 'registre', 'registry', 'Docker'],
    examples: [
      {
        code: 'docker logout',
        explanation: 'Se déconnecte de Docker Hub pour des raisons de sécurité',
      },
      {
        code: 'docker logout registry.example.com',
        explanation: 'Se déconnecte d\'un registre privé spécifique',
      },
    ],
  },
  {
    id: 'docker-events',
    command: 'docker events',
    description: 'Affiche les événements Docker en temps réel',
    category: 'system',
    keywords: ['afficher', 'voir', 'display', 'show', 'événements', 'evenements', 'events', 'temps', 'réel', 'reel', 'real-time', 'activité', 'activite', 'Docker'],
    examples: [
      {
        code: 'docker events',
        explanation: 'Affiche tous les événements Docker en continu - utile pour monitorer l\'activité',
      },
      {
        code: 'docker events --since "2024-01-01"',
        explanation: 'Affiche les événements depuis une date spécifique',
      },
      {
        code: 'docker events --filter "type=container"',
        explanation: 'Affiche uniquement les événements liés aux conteneurs',
      },
      {
        code: 'docker events --filter "event=start" --filter "event=stop"',
        explanation: 'Affiche uniquement les événements de démarrage et d\'arrêt',
      },
    ],
    options: [
      { flag: '--since', description: 'Affiche les événements depuis un timestamp' },
      { flag: '--until', description: 'Affiche les événements jusqu\'à un timestamp' },
      { flag: '--filter', description: 'Filtre les événements' },
    ],
  },

  // Docker Compose
  {
    id: 'docker-compose-up',
    command: 'docker compose up',
    description: 'Démarre les services définis dans docker-compose.yml',
    category: 'compose',
    keywords: ['démarrer', 'demarrer', 'start', 'lancer', 'up', 'services', 'docker-compose', 'compose'],
    examples: [
      {
        code: 'docker compose up',
        explanation: 'Démarre tous les services définis dans docker-compose.yml en mode interactif',
      },
      {
        code: 'docker compose up -d',
        explanation: 'Démarre les services en arrière-plan - vous gardez le contrôle du terminal',
      },
      {
        code: 'docker compose up --build',
        explanation: 'Reconstruit les images avant de démarrer - utile après des modifications du code',
      },
    ],
    options: [
      { flag: '-d', description: 'Mode détaché (en arrière-plan)' },
      { flag: '--build', description: 'Reconstruit les images avant de démarrer' },
      { flag: '--force-recreate', description: 'Recrée les conteneurs' },
    ],
  },
  {
    id: 'docker-compose-down',
    command: 'docker compose down',
    description: 'Arrête et supprime les conteneurs, réseaux définis dans docker-compose.yml',
    category: 'compose',
    keywords: ['arrêter', 'arreter', 'stop', 'supprimer', 'effacer', 'remove', 'down', 'conteneurs', 'containers', 'réseaux', 'reseaux', 'networks', 'services', 'docker-compose', 'compose'],
    examples: [
      {
        code: 'docker compose down',
        explanation: 'Arrête proprement et nettoie tous les services - les volumes persistent',
      },
      {
        code: 'docker compose down --volumes',
        explanation: 'Arrête et supprime aussi les volumes - attention, les données sont perdues !',
      },
      {
        code: 'docker compose down --rmi all',
        explanation: 'Arrête et supprime aussi toutes les images construites',
      },
    ],
    options: [
      { flag: '--volumes', description: 'Supprime aussi les volumes' },
      { flag: '--rmi all', description: 'Supprime toutes les images' },
    ],
  },
  {
    id: 'docker-compose-ps',
    command: 'docker compose ps',
    description: 'Liste les conteneurs du projet Compose',
    category: 'compose',
    keywords: ['liste', 'list', 'lister', 'afficher', 'voir', 'conteneurs', 'containers', 'services', 'projet', 'project', 'Compose', 'docker-compose'],
    examples: [
      {
        code: 'docker compose ps',
        explanation: 'Affiche le statut de tous les services définis dans votre docker-compose.yml',
      },
      {
        code: 'docker compose ps -a',
        explanation: 'Inclut aussi les services arrêtés dans la liste',
      },
    ],
  },
  {
    id: 'docker-compose-logs',
    command: 'docker compose logs',
    description: 'Affiche les logs des services',
    category: 'compose',
    keywords: ['afficher', 'voir', 'display', 'show', 'logs', 'journaux', 'services', 'docker-compose', 'compose'],
    examples: [
      {
        code: 'docker compose logs',
        explanation: 'Affiche les logs de tous les services avec des couleurs pour les différencier',
      },
      {
        code: 'docker compose logs -f',
        explanation: 'Suit les logs en temps réel de tous les services - pratique pour le debugging',
      },
      {
        code: 'docker compose logs web',
        explanation: 'Affiche uniquement les logs du service "web"',
      },
    ],
    options: [
      { flag: '-f', description: 'Suit les logs en temps réel' },
    ],
  },
  {
    id: 'docker-compose-exec',
    command: 'docker compose exec',
    description: 'Exécute une commande dans un service en cours d\'exécution',
    category: 'compose',
    keywords: ['exécuter', 'executer', 'execute', 'lancer', 'commande', 'command', 'service', 'exécution', 'execution', 'docker-compose', 'compose'],
    examples: [
      {
        code: 'docker compose exec web bash',
        explanation: 'Ouvre un terminal bash dans le service "web" pour explorer ou debugger',
      },
      {
        code: 'docker compose exec db psql -U postgres',
        explanation: 'Se connecte à PostgreSQL dans le service "db" avec l\'utilisateur postgres',
      },
    ],
  },
  {
    id: 'docker-compose-build',
    command: 'docker compose build',
    description: 'Construit ou reconstruit les services',
    category: 'compose',
    keywords: ['construire', 'build', 'reconstruire', 'rebuild', 'compiler', 'services', 'docker-compose', 'compose'],
    examples: [
      {
        code: 'docker compose build',
        explanation: 'Reconstruit toutes les images des services qui ont un Dockerfile',
      },
      {
        code: 'docker compose build --no-cache',
        explanation: 'Reconstruit complètement sans utiliser le cache - build propre',
      },
      {
        code: 'docker compose build web',
        explanation: 'Reconstruit uniquement le service "web"',
      },
    ],
  },
  {
    id: 'docker-compose-restart',
    command: 'docker compose restart',
    description: 'Redémarre les services',
    category: 'compose',
    keywords: ['redémarrer', 'redemarrer', 'restart', 'relancer', 'services', 'docker-compose', 'compose'],
    examples: [
      {
        code: 'docker compose restart',
        explanation: 'Redémarre tous les services - utile après des changements de configuration',
      },
      {
        code: 'docker compose restart web',
        explanation: 'Redémarre uniquement le service "web" sans affecter les autres',
      },
    ],
  },
  {
    id: 'docker-compose-stop',
    command: 'docker compose stop',
    description: 'Arrête les services sans les supprimer',
    category: 'compose',
    keywords: ['arrêter', 'arreter', 'stop', 'stopper', 'services', 'docker-compose', 'compose'],
    examples: [
      {
        code: 'docker compose stop',
        explanation: 'Arrête tous les services mais garde les conteneurs - vous pouvez les redémarrer avec "start"',
      },
      {
        code: 'docker compose stop web',
        explanation: 'Arrête uniquement le service "web"',
      },
    ],
  },
  {
    id: 'docker-compose-start',
    command: 'docker compose start',
    description: 'Démarre les services existants',
    category: 'compose',
    keywords: ['démarrer', 'demarrer', 'start', 'lancer', 'services', 'existants', 'docker-compose', 'compose'],
    examples: [
      {
        code: 'docker compose start',
        explanation: 'Redémarre les services qui ont été arrêtés avec "stop"',
      },
      {
        code: 'docker compose start web',
        explanation: 'Démarre uniquement le service "web" qui était arrêté',
      },
    ],
  },
  {
    id: 'docker-compose-pull',
    command: 'docker compose pull',
    description: 'Télécharge les images des services définis dans docker-compose.yml',
    category: 'compose',
    keywords: ['télécharger', 'telecharger', 'download', 'pull', 'images', 'services', 'docker-compose', 'compose'],
    examples: [
      {
        code: 'docker compose pull',
        explanation: 'Télécharge toutes les images définies dans le fichier compose sans démarrer les services',
      },
      {
        code: 'docker compose pull web db',
        explanation: 'Télécharge uniquement les images des services "web" et "db"',
      },
      {
        code: 'docker compose pull --ignore-pull-failures',
        explanation: 'Continue même si certaines images ne peuvent pas être téléchargées',
      },
    ],
    options: [
      { flag: '--ignore-pull-failures', description: 'Ignore les erreurs de téléchargement' },
      { flag: '-q', description: 'Mode silencieux' },
    ],
  },
  {
    id: 'docker-compose-push',
    command: 'docker compose push',
    description: 'Pousse les images des services vers un registre',
    category: 'compose',
    keywords: ['pousser', 'push', 'envoyer', 'publier', 'images', 'services', 'registre', 'docker-compose', 'compose'],
    examples: [
      {
        code: 'docker compose push',
        explanation: 'Envoie toutes les images construites vers le registre configuré',
      },
      {
        code: 'docker compose push web',
        explanation: 'Pousse uniquement l\'image du service "web"',
      },
    ],
  },
  {
    id: 'docker-compose-config',
    command: 'docker compose config',
    description: 'Valide et affiche la configuration Compose',
    category: 'compose',
    keywords: ['valider', 'validate', 'afficher', 'show', 'configuration', 'config', 'vérifier', 'verifier', 'docker-compose', 'compose'],
    examples: [
      {
        code: 'docker compose config',
        explanation: 'Affiche la configuration complète après résolution des variables et extensions',
      },
      {
        code: 'docker compose config --services',
        explanation: 'Liste uniquement les noms des services définis',
      },
      {
        code: 'docker compose config --volumes',
        explanation: 'Liste uniquement les volumes définis',
      },
      {
        code: 'docker compose -f docker-compose.yml -f docker-compose.prod.yml config',
        explanation: 'Valide et fusionne plusieurs fichiers compose pour voir le résultat final',
      },
    ],
    options: [
      { flag: '--services', description: 'Liste les services' },
      { flag: '--volumes', description: 'Liste les volumes' },
      { flag: '-q', description: 'Valide sans afficher la configuration' },
    ],
  },
  {
    id: 'docker-compose-rm',
    command: 'docker compose rm',
    description: 'Supprime les conteneurs de services arrêtés',
    category: 'compose',
    keywords: ['supprimer', 'effacer', 'remove', 'delete', 'conteneurs', 'containers', 'services', 'arrêtés', 'arretes', 'docker-compose', 'compose'],
    examples: [
      {
        code: 'docker compose rm',
        explanation: 'Supprime tous les conteneurs arrêtés du projet',
      },
      {
        code: 'docker compose rm -f',
        explanation: 'Force la suppression sans demander de confirmation',
      },
      {
        code: 'docker compose rm -s -v web',
        explanation: 'Arrête puis supprime le service "web" avec ses volumes anonymes',
      },
    ],
    options: [
      { flag: '-f', description: 'Force la suppression sans confirmation' },
      { flag: '-s', description: 'Arrête les conteneurs avant de les supprimer' },
      { flag: '-v', description: 'Supprime aussi les volumes anonymes' },
    ],
  },
  {
    id: 'docker-compose-run',
    command: 'docker compose run',
    description: 'Exécute une commande ponctuelle dans un nouveau conteneur de service',
    category: 'compose',
    keywords: ['exécuter', 'executer', 'execute', 'lancer', 'run', 'commande', 'command', 'ponctuelle', 'service', 'docker-compose', 'compose'],
    examples: [
      {
        code: 'docker compose run web bash',
        explanation: 'Lance un shell bash dans un nouveau conteneur du service "web" - utile pour le debugging',
      },
      {
        code: 'docker compose run --rm web npm test',
        explanation: 'Exécute les tests et supprime automatiquement le conteneur après',
      },
      {
        code: 'docker compose run -p 8080:80 web',
        explanation: 'Lance le service avec un mapping de port personnalisé',
      },
      {
        code: 'docker compose run --no-deps web',
        explanation: 'Lance uniquement le service "web" sans démarrer ses dépendances',
      },
    ],
    options: [
      { flag: '--rm', description: 'Supprime le conteneur après exécution' },
      { flag: '--no-deps', description: 'Ne démarre pas les services dépendants' },
      { flag: '-d', description: 'Mode détaché' },
      { flag: '-p', description: 'Publie un port' },
    ],
  },
  {
    id: 'docker-compose-create',
    command: 'docker compose create',
    description: 'Crée les conteneurs des services sans les démarrer',
    category: 'compose',
    keywords: ['créer', 'creer', 'create', 'conteneurs', 'containers', 'services', 'sans', 'démarrer', 'demarrer', 'docker-compose', 'compose'],
    examples: [
      {
        code: 'docker compose create',
        explanation: 'Crée tous les conteneurs définis mais ne les démarre pas',
      },
      {
        code: 'docker compose create web',
        explanation: 'Crée uniquement le conteneur du service "web"',
      },
    ],
  },
  {
    id: 'docker-compose-kill',
    command: 'docker compose kill',
    description: 'Force l\'arrêt immédiat des services',
    category: 'compose',
    keywords: ['tuer', 'kill', 'forcer', 'force', 'arrêter', 'arreter', 'immédiat', 'immediat', 'services', 'docker-compose', 'compose'],
    examples: [
      {
        code: 'docker compose kill',
        explanation: 'Arrête brutalement tous les services sans leur laisser le temps de terminer proprement',
      },
      {
        code: 'docker compose kill web',
        explanation: 'Tue uniquement le service "web"',
      },
      {
        code: 'docker compose kill -s SIGINT',
        explanation: 'Envoie un signal spécifique aux services',
      },
    ],
    options: [
      { flag: '-s', description: 'Signal à envoyer (défaut: SIGKILL)' },
    ],
  },
  {
    id: 'docker-compose-pause',
    command: 'docker compose pause',
    description: 'Suspend les services',
    category: 'compose',
    keywords: ['suspendre', 'pause', 'geler', 'freeze', 'services', 'docker-compose', 'compose'],
    examples: [
      {
        code: 'docker compose pause',
        explanation: 'Suspend tous les services en gelant leurs processus',
      },
      {
        code: 'docker compose pause web db',
        explanation: 'Suspend uniquement les services "web" et "db"',
      },
    ],
  },
  {
    id: 'docker-compose-unpause',
    command: 'docker compose unpause',
    description: 'Reprend les services suspendus',
    category: 'compose',
    keywords: ['reprendre', 'unpause', 'dégeler', 'degeler', 'unfreeze', 'continuer', 'services', 'docker-compose', 'compose'],
    examples: [
      {
        code: 'docker compose unpause',
        explanation: 'Reprend l\'exécution de tous les services suspendus',
      },
      {
        code: 'docker compose unpause web',
        explanation: 'Reprend uniquement le service "web"',
      },
    ],
  },
  {
    id: 'docker-compose-top',
    command: 'docker compose top',
    description: 'Affiche les processus en cours dans les services',
    category: 'compose',
    keywords: ['afficher', 'voir', 'display', 'show', 'processus', 'processes', 'services', 'docker-compose', 'compose'],
    examples: [
      {
        code: 'docker compose top',
        explanation: 'Liste tous les processus actifs dans tous les services',
      },
      {
        code: 'docker compose top web',
        explanation: 'Affiche uniquement les processus du service "web"',
      },
    ],
  },
  {
    id: 'docker-compose-port',
    command: 'docker compose port',
    description: 'Affiche le port public pour un port de service',
    category: 'compose',
    keywords: ['afficher', 'voir', 'display', 'show', 'port', 'ports', 'public', 'service', 'docker-compose', 'compose'],
    examples: [
      {
        code: 'docker compose port web 80',
        explanation: 'Affiche sur quel port de l\'hôte le port 80 du service "web" est mappé',
      },
      {
        code: 'docker compose port --index=2 web 80',
        explanation: 'Affiche le port pour la deuxième instance du service "web" (si scale > 1)',
      },
    ],
    options: [
      { flag: '--index', description: 'Index du conteneur si plusieurs instances' },
      { flag: '--protocol', description: 'Protocole tcp ou udp' },
    ],
  },
  {
    id: 'docker-compose-images',
    command: 'docker compose images',
    description: 'Liste les images utilisées par les services',
    category: 'compose',
    keywords: ['liste', 'list', 'lister', 'afficher', 'voir', 'images', 'services', 'docker-compose', 'compose'],
    examples: [
      {
        code: 'docker compose images',
        explanation: 'Affiche toutes les images utilisées par les services du projet avec leurs tailles',
      },
      {
        code: 'docker compose images web',
        explanation: 'Affiche uniquement l\'image utilisée par le service "web"',
      },
    ],
  },
];
