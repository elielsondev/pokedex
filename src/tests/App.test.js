import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Verificando se componentes abaixo são exibidos na tela:', () => {
  it('O titulo do header é Pokedexpédia', () => {
    render(<App />);
    const tituloDoHeader = screen.getByRole('heading', { name: /pokedexpédia/i })
    expect(tituloDoHeader).toBeInTheDocument();
  });

  it('O input de pesquisa dos pokemons é exibido:', () => {
    render(<App />);
    const inputDeBusca = screen.getByRole('searchbox');
    expect(inputDeBusca).toBeInTheDocument();
  });

  it('O button de pesquisar dos pokemons é exibido:', () => {
    render(<App />);
    const buttonDeBusca = screen.getByRole('button', {
      name: /pesquisar/i
    })
    expect(buttonDeBusca).toBeInTheDocument();
  });
});
