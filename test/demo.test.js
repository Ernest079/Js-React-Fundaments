describe('Pruebas en <DemoComponent/>', () => { 
  test('Esta prueba no debe de fallar', () => {
    //1. Inicialización
    const message1 = "Hola Mundo";
    //2. Estimulo
    const message2 = message1.trim();
    //3. Comportamiento esperado
    // expect(message1).toBe(message2)
    expect(message1).toBe(message2);
  });
});

