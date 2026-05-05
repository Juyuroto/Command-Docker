import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function DockerCommandCard({ command }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const categoryColors = {
    images: 'bg-purple-900/50 text-purple-300 border border-purple-700',
    containers: 'bg-blue-900/50 text-blue-300 border border-blue-700',
    volumes: 'bg-green-900/50 text-green-300 border border-green-700',
    networks: 'bg-orange-900/50 text-orange-300 border border-orange-700',
    system: 'bg-red-900/50 text-red-300 border border-red-700',
    compose: 'bg-indigo-900/50 text-indigo-300 border border-indigo-700',
  };

  const categoryLabels = {
    images: 'Images',
    containers: 'Conteneurs',
    volumes: 'Volumes',
    networks: 'Réseaux',
    system: 'Système',
    compose: 'Compose',
  };

  return (
    <div className="bg-gray-800/50 rounded-lg shadow-md border border-gray-700 p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all hover:border-gray-600 backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                categoryColors[command.category]
              }`}
            >
              {categoryLabels[command.category]}
            </span>
          </div>
          <code className="text-lg font-mono font-semibold text-blue-400">
            {command.command}
          </code>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-4">{command.description}</p>

      {/* Options */}
      {command.options && command.options.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-100 mb-2">Options courantes :</h4>
          <div className="space-y-2">
            {command.options.map((option, idx) => (
              <div key={idx} className="flex gap-3">
                <code className="text-sm font-mono bg-gray-900/50 px-2 py-1 rounded text-blue-400 font-semibold border border-gray-700">
                  {option.flag}
                </code>
                <span className="text-sm text-gray-400">{option.description}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Examples */}
      {command.examples.length > 0 && (
        <div>
          <h4 className="font-semibold text-gray-100 mb-2">
            Exemple{command.examples.length > 1 ? 's' : ''} :
          </h4>
          <div className="space-y-3">
            {command.examples.map((example, idx) => (
              <div key={idx} className="space-y-2">
                <div className="relative bg-black/50 text-gray-100 rounded-lg p-3 pr-12 border border-gray-700">
                  <code className="text-sm font-mono block overflow-x-auto">
                    {example.code}
                  </code>
                  <button
                    onClick={() => copyToClipboard(example.code, idx)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-700 rounded transition-colors"
                    title="Copier"
                  >
                    {copiedIndex === idx ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
                <p className="text-sm text-gray-400 italic pl-3 border-l-2 border-blue-500">
                  {example.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
