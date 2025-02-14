import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en FirstApp', () => {
  const title = "O mueres como héroe o vives lo suficiente para convertirte en villano";
  const subTitle = "El Caballero de la Noche"
  test('Debe hacer match con el snapshot', () => {
    const { container } = render(
      <FirstApp
        title={title}
      />
    );
    expect(container).toMatchSnapshot();
  });
  test('Debe de mostar el titulo', () => {
    render(
      <FirstApp
        title={title}
      />
    );
    expect(screen.getByText(title)).toBeTruthy();
    // screen.debug();
  });
  test('Debe de mostrar el titulo en un h1', () => {
    render(
      <FirstApp
        title={title}
      />
    );
    expect(screen.getByRole('heading', {level:1}).innerHTML).toContain(title);
  });
  test('Debe de mostrar el subtitulo', () => {
    render(
      <FirstApp
      title={title}
      subTitle={subTitle}
      />
    );
    expect(screen.getAllByText(subTitle).length).toBe(1);
  });
});