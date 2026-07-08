import React from 'react';

function Navbar({ categories, activeCategory, onSelectCategory, searchTerm, onSearchChange }) {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-title">Docker Cheat Sheet and Helper</h1>
        
        <div className="categories-container">
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => onSelectCategory(cat)}
              className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="search-container">
          <input 
            type="text" 
            placeholder="Rechercher une commande" 
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;