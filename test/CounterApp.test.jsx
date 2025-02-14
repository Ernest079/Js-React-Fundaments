import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en CounterApp', () => {
  const value = 10;
  test('Debe de hacer macth con el snapshot', () => {
    const {container} = render (
      <CounterApp
        value = {value}
      />
    );
    expect(container).toMatchSnapshot();
  });
  test('Debe de mostrar le valor inicial de 100', () => {
    render (
      <CounterApp
        value = {100}
      />
    );
    expect(screen.getByText(100)).toBeTruthy();
  });

  test('Debe de incrementar con el bóton +1', () => {
    render (
      <CounterApp
        value = {value}
      />
    );
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('11')).toBeTruthy();
  });
  test('Debe decrementar con el bóton -1', () => {
    render (
      <CounterApp
        value = {value}
      />
    );
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText('9')).toBeTruthy();
  });
  test('Debe de funcionar el boton de Reset', () => {
    render (
      <CounterApp
        value = {value}
      />
    );
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    // expect(screen.getByText('14')).toBeTruthy();
    fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
    // fireEvent.click(screen.getByText('Reset'));
    expect(screen.getByText(value)).toBeTruthy();
  });
});