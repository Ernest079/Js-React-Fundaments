import { getSaludo } from "../../src/basepruebas/base-pruebas/02-template-string";

describe('Pruebas en template string', () => { 
  test('Get saludo debe retornar "Hola Ernesto"', () => {
    const name = "Ernesto";
    const message = getSaludo(name);
  });

});