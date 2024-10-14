// Clase base
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    // Método que será sobrescrito por las subclases
    hacerSonido() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

// Subclase Perro
class Perro extends Animal {
    // Sobrescribe el método hacerSonido
    hacerSonido() {
        console.log(`${this.nombre} ladra. ¡Guau!`);
    }
}

// Subclase Gato
class Gato extends Animal {
    // Sobrescribe el método hacerSonido
    hacerSonido() {
        console.log(`${this.nombre} maúlla. ¡Miau!`);
    }
}

// Subclase Vaca
class Vaca extends Animal {
    // Sobrescribe el método hacerSonido
    hacerSonido() {
        console.log(`${this.nombre} muge. ¡Muuu!`);
    }
}

// Crear una lista de animales
const animales = [
    new Perro('Rex'),
    new Gato('Michi'),
    new Vaca('Lola')
];

// Polimorfismo: Llamar al mismo método hacerSonido en diferentes tipos de objetos
animales.forEach(animal => {
    animal.hacerSonido(); // Cada animal tiene su propia implementación
});
