import { getHeroeById, getHeroesByOwner } from "../../src/basepruebas/base-pruebas/08-imp-exp";

describe('Pruebas en 08', () => {  
  test('getHeroById debe retornar un héroe por ID', () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });
  test('getHeroById debe retornar undefined si no existe', () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });

  test('getHeroesByOwner debe retornar un arreglo con los héroes de DC', () => {
    const owner = getHeroesByOwner('DC');
    const length = 3;
    const dcArray = [{ id: 1, name: 'Batman', owner: 'DC' },
    { id: 3, name: 'Superman', owner: 'DC' },
    { id: 4, name: 'Flash', owner: 'DC' }]

    expect(owner.length).toBe(length);
    expect(owner).toEqual(dcArray);
  });
  test('getHeroesByOwner debe retornar un arreglo con los héroes de Marvel', () => {
    const owner = getHeroesByOwner('Marvel');
    
    const marvelArray = [
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' }
    ];
    const length = marvelArray.length;

    expect(owner.length).toBe(length);
    expect(owner).toEqual(marvelArray);
  });
});
