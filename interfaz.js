// Simulamos una interfaz Electrodomestico
class Electrodomestico {
    encender() {
        throw new Error("El método 'encender()' debe ser implementado.");
    }

    apagar() {
        throw new Error("El método 'apagar()' debe ser implementado.");
    }
}

// Televisor implementa la "interfaz" Electrodomestico
class Televisor extends Electrodomestico {
    encender() {
        console.log("El televisor está encendido.");
    }

    apagar() {
        console.log("El televisor está apagado.");
    }
}

// Lavadora implementa la "interfaz" Electrodomestico
class Lavadora extends Electrodomestico {
    encender() {
        console.log("La lavadora está encendida.");
    }

    apagar() {
        console.log("La lavadora está apagada.");
    }
}

// Crear instancias y usar los métodos
const televisor = new Televisor();
televisor.encender(); // Output: El televisor está encendido.
televisor.apagar();   // Output: El televisor está apagado.

const lavadora = new Lavadora();
lavadora.encender();  // Output: La lavadora está encendida.
lavadora.apagar();    // Output: La lavadora está apagada.
