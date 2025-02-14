import { getImagen } from "../../src/basepruebas/base-pruebas/11-async-await"

describe('Puebas en 11', () => {
  test('getIMagen debe retornar un URL de la imagen', async() => {
    const url = await getImagen();
    expect(typeof url).toBe('string');
  });
});