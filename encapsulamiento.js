class ControlRemoto {
    // Propiedad privada (no accesible desde afuera)
    #canalActual;

    constructor() {
        this.#canalActual = 1; // Canal inicial es 1
    }

    // Método público para cambiar de canal
    cambiarCanal(nuevoCanal) {
        if (nuevoCanal > 0 && nuevoCanal <= 100) {
            this.#canalActual = nuevoCanal;
            console.log(`El canal ha sido cambiado a ${this.#canalActual}`);
        } else {
            console.log("Canal no válido.");
        }
    }

    // Método público para ver el canal actual (sin modificarlo)
    verCanalActual() {
        console.log(`Estás viendo el canal ${this.#canalActual}`);
    }
}

// Crear una instancia de ControlRemoto
const control = new ControlRemoto();

// Cambiar el canal
control.cambiarCanal(5);  // Output: El canal ha sido cambiado a 5

// Ver el canal actual
control.verCanalActual();  // Output: Estás viendo el canal 5

// Intentar acceder a la propiedad privada (esto no funcionará)
//console.log(control.#canalActual);  // Error: Propiedad privada
