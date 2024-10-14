// Clase base o superclase
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    // Método de la superclase
    hacerSonido() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

// Clase derivada o subclase
class Perro extends Animal {
    constructor(nombre, raza) {
        // Llamamos al constructor de la clase base (superclase)
        super(nombre);
        this.raza = raza;
    }

    // Método de la subclase
    ladrar() {
        console.log(`${this.nombre} está ladrando. ¡Guau!`);
    }

    // Sobreescribir el método hacerSonido de la superclase
    hacerSonido() {
        console.log(`${this.nombre}, que es un ${this.raza}, hace un sonido de perro.`);
    }
}

// Crear una instancia de la clase base
let animal = new Animal('Animal');
animal.hacerSonido(); // Output: Animal hace un sonido.

// Crear una instancia de la subclase
let perro = new Perro('Max', 'Labrador');
perro.hacerSonido(); // Output: Max, que es un Labrador, hace un sonido de perro.
perro.ladrar(); // Output: Max está ladrando. ¡Guau!
