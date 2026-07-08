import React, { useState } from 'react';

function CommandCard({ cmd }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(cmd.example_code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="command-card">
      <div className="card-header">
        <h3 className="card-title">{cmd.name}</h3>
        <span className="card-badge">{cmd.category}</span>
      </div>
      
      <p className="card-description">{cmd.description}</p>
      
      <div className="code-container">
        <div className="code-label">EXEMPLE :</div>
        
        <button 
          onClick={handleCopy} 
          className={`copy-btn ${copied ? 'copied' : ''}`}
        >
          {copied ? 'Copié !' : 'Copier'}
        </button>

        <pre className="code-block">
          <code>{cmd.example_code}</code>
        </pre>
      </div>
    </div>
  );
}

export default CommandCard;