import { render, screen } from '@testing-library/react';
import App from './App';

describe('Affichage principal de l’application', () => {

  it('doit afficher le titre du TP', () => {
    render(<App />);
    
    const titre = screen.getByText(/consommation d’une api avec react/i);
    
    expect(titre).toBeInTheDocument();
  });

  it('doit afficher les sections articles et utilisateurs', () => {
    render(<App />);
    
    const articles = screen.getByText(/articles chargés avec fetch/i);
    const users = screen.getByText(/utilisateurs chargés avec axios/i);
    
    expect(articles).toBeInTheDocument();
    expect(users).toBeInTheDocument();
  });

});
