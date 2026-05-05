import { useState } from 'react';
import { Search } from 'lucide-react';
import { DockerCommandCard } from './components/DockerCommandCard';
import { dockerCommands } from './data/dockerCommands';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Toutes' },
    { id: 'images', label: 'Images' },
    { id: 'containers', label: 'Conteneurs' },
    { id: 'volumes', label: 'Volumes' },
    { id: 'networks', label: 'Réseaux' },
    { id: 'system', label: 'Système' },
    { id: 'compose', label: 'Docker Compose' },
  ];

  // Fonction pour normaliser le texte (enlève les accents et met en minuscules)
  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  const filteredCommands = dockerCommands.filter((cmd) => {
    const normalizedSearch = normalizeText(searchTerm);
    
    // Recherche dans la commande
    const matchesCommand = normalizeText(cmd.command).includes(normalizedSearch);
    
    // Recherche dans la description
    const matchesDescription = normalizeText(cmd.description).includes(normalizedSearch);
    
    // Recherche dans les mots-clés
    const matchesKeywords = cmd.keywords.some((keyword) =>
      normalizeText(keyword).includes(normalizedSearch)
    );
    
    // Recherche dans les exemples
    const matchesExamples = cmd.examples.some((example) =>
      normalizeText(example.code).includes(normalizedSearch) ||
      normalizeText(example.explanation).includes(normalizedSearch)
    );
    
    const matchesSearch =
      matchesCommand || matchesDescription || matchesKeywords || matchesExamples;
    
    const matchesCategory =
      selectedCategory === 'all' || cmd.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900">
      {/* Header */}
      <header className="bg-gray-800/50 shadow-sm border-b border-gray-700 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 text-white"
                fill="currentColor"
              >
                <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">
                Commandes Docker
              </h1>
              <p className="text-gray-300 mt-1">
                Guide de référence complet des commandes Docker
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher une commande..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-gray-800"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-gray-800/50 text-gray-200 hover:bg-gray-700 border border-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 text-gray-400">
          {filteredCommands.length} commande{filteredCommands.length > 1 ? 's' : ''} trouvée{filteredCommands.length > 1 ? 's' : ''}
        </div>

        {/* Commands Grid */}
        <div className="grid gap-4">
          {filteredCommands.map((cmd) => (
            <DockerCommandCard key={cmd.id} command={cmd} />
          ))}
        </div>

        {filteredCommands.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Aucune commande ne correspond à votre recherche
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
