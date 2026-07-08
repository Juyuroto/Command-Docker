import React, { useState } from 'react';
import { sqlService } from '../services/dockerService';
import Navbar from '../components/Navbar';
import CommandCard from '../components/CommandCard';

function Home() {
  const [activeCategory, setActiveCategory] = useState('Toutes');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = sqlService.getCategories();
  
  let filteredCommands = sqlService.getCommandsByCategory(activeCategory);

  if (searchTerm.trim() !== '') {
    filteredCommands = filteredCommands.filter(cmd => 
      cmd.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <>
      <Navbar 
        categories={categories} 
        activeCategory={activeCategory} 
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSearchTerm('');
        }} 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <main className="main-content">
        <h2 className="category-title">
          {searchTerm ? `Résultats pour "${searchTerm}"` : activeCategory} ({filteredCommands.length})
        </h2>
        
        <div className="commands-grid">
          {filteredCommands.length > 0 ? (
            filteredCommands.map(cmd => (
              <CommandCard key={cmd.id} cmd={cmd} />
            ))
          ) : (
            <p style={{ color: '#7f8c8d', fontStyle: 'italic', marginTop: '1rem' }}>
              Aucune commande ne correspond à votre recherche.
            </p>
          )}
        </div>
      </main>
    </>
  );
}

export default Home;