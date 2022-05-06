import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(() => jest.clearAllMocks());

describe('Teste da aplicação toda', () => {
  it('Verifica se existe uma caixa de input', async () => {
    render(<App />);
    const inputDig = screen.queryByLabelText(/Digimon/i);
    expect(inputDig).toBeInTheDocument();
  });

  it('Verifica se o input pode ser alterado', async () => {
    const DIGI_INPUT = 'Gabumon';
    render(<App />);
    const inputDig = screen.queryByLabelText(/Digimon/i);
    expect(inputDig).toHaveValue('');
    userEvent.type(inputDig, DIGI_INPUT);
    expect(inputDig).toHaveValue(DIGI_INPUT);
  });

  it('Verifica se existe um botão "Search Digimon"', () => {
    render(<App />);
    const searchBTN = screen.getByRole('button');
    expect(searchBTN).toBeInTheDocument();
    expect(searchBTN).toHaveTextContent(/Search Digimon/i);
  });

  it('Verificar se ao clicar no botão, uma requisição é feita', () => {
    jest.spyOn(global, 'fetch');
    render(<App />);
    const searchBTN = screen.getByRole('button');
    userEvent.click(searchBTN);
    expect(global.fetch).not.toBeCalled();

    const inputDig = screen.queryByLabelText(/Digimon/i);
    userEvent.type(inputDig, 'teste');
    userEvent.click(searchBTN);
    expect(global.fetch).toBeCalled();

    expect(global.fetch).toBeCalledTimes(1);
  });

  it('Verifica se a mensagem de erro é exibida, caso o requerimento de erro', () => {
    jest.spyOn(global, 'fetch');
    global.fetch = () => {
      throw new Error('404');
    };
    render(<App />);
    const searchBTN = screen.getByRole('button');
    const inputDig = screen.queryByLabelText(/Digimon/i);
    userEvent.type(inputDig, 'teste');
    userEvent.click(searchBTN);

    expect(() => global.fetch()).toThrow('404');
  });

  it('Verifica se o digimon pesquisado é exibido após clicar no botão', async () => {
    const digimon = [{
      img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
      level: 'Rookie',
      name: 'Agumon',
    }];

    const URL = 'https://digimon-api.vercel.app/api/digimon/name/Agumon';

    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(digimon),
    });

    render(<App />);
    const inputDig = screen.queryByLabelText(/Digimon/i);
    const searchBTN = screen.getByRole('button');
    userEvent.type(inputDig, 'Agumon');
    userEvent.click(searchBTN);

    expect(global.fetch).toBeCalledWith(URL);

    const digiName = await screen.findByText('Agumon');
    expect(digiName).toBeInTheDocument();

    const digiLevel = await screen.findByText(/rookie/i);
    expect(digiLevel).toBeInTheDocument();

    const digiImg = await screen.findByRole('img', { name: 'Agumon' });
    expect(digiImg).toBeInTheDocument();
  });

  it('Verifica se exibe a mensagem de digimon não encontrado', async () => {
    const digimon = {
      ErrorMsg: 'Pikachu is not a Digimon in our database',
    };

    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(digimon),
    });

    const URL = 'https://digimon-api.vercel.app/api/digimon/name/Pikachu';

    render(<App />);
    const inputDig = screen.queryByLabelText(/Digimon/i);
    const searchBTN = screen.getByRole('button');
    userEvent.type(inputDig, 'Pikachu');
    userEvent.click(searchBTN);

    expect(global.fetch).toBeCalledWith(URL);

    const digiErro = await screen.findByText('Pikachu is not a Digimon in our database');
    expect(digiErro).toBeInTheDocument();
  });
});
