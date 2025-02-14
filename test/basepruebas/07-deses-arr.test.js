import { retornaArreglo } from "../../src/basepruebas/base-pruebas/07-deses-arr";

describe('Pruebas en 07', () => {
    test('Debe retornar un string y un numero', () => {
        const [letters, numbers] = retornaArreglo();
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
    });
});



