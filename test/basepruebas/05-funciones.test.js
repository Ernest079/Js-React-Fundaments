import { getUser, getUsuarioActivo } from "../../src/basepruebas/base-pruebas/05-funciones";

describe('Pruebas en 05-FUnciones', () => {
    test('getUser debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        expect(testUser).toEqual(user);
    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Ernesto';
        const testActive = {
            uid: 'ABC567',
            username: name
        };
        expect(testActive).toEqual(getUsuarioActivo(name));
    });
});


