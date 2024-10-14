// Clase abstracta Vehiculo (no se puede instanciar directamente)
class Vehiculo {
    constructor(ruedas) {
        this.ruedas = ruedas;
    }

    // Método normal
    verRuedas() {
        console.log(`Este vehículo tiene ${this.ruedas} ruedas.`);
    }

    // Método abstracto (sin implementación, las subclases deben definirlo)
    mover() {
        throw new Error("El método 'mover()' debe ser implementado en la subclase.");
    }
}

// Subclase Coche que extiende de Vehiculo
class Coche extends Vehiculo {
    constructor() {
        super(4); // Los coches tienen 4 ruedas
    }

    // Implementación del método abstracto
    mover() {
        console.log("El coche se mueve con motor.");
    }
}

// Subclase Bicicleta que extiende de Vehiculo
class Bicicleta extends Vehiculo {
    constructor() {
        super(2); // Las bicicletas tienen 2 ruedas
    }

    // Implementación del método abstracto
    mover() {
        console.log("La bicicleta se mueve pedaleando.");
    }
}

// Crear instancias de las subclases
const coche = new Coche();
const bicicleta = new Bicicleta();

// Usar los métodos
coche.verRuedas(); // Output: Este vehículo tiene 4 ruedas.
coche.mover();     // Output: El coche se mueve con motor.

bicicleta.verRuedas(); // Output: Este vehículo tiene 2 ruedas.
bicicleta.mover();     // Output: La bicicleta se mueve pedaleando.
