class Stack {
    constructor() {
        this.items = [];
    }

    // Añadir un elemento a la pila
    push(element) {
        this.items.push(element);
    }

    // Eliminar el elemento del tope de la pila
    pop() {
        if (this.isEmpty()) {
            return "La pila está vacía";
        }
        return this.items.pop();
    }

    // Ver el elemento del tope sin eliminarlo
    peek() {
        if (this.isEmpty()) {
            return "La pila está vacía";
        }
        return this.items[this.items.length - 1];
    }

    // Verificar si la pila está vacía
    isEmpty() {
        return this.items.length === 0;
    }

    // Ver el tamaño de la pila
    size() {
        return this.items.length;
    }

    // Limpiar la pila
    clear() {
        this.items = [];
    }
}

// Crear una instancia de Stack
let stack = new Stack();

// Añadir elementos a la pila
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Estado de la pila después de inserciones:", stack.items);

// Ver el elemento en el tope de la pila
console.log("Elemento en el tope:", stack.peek());

// Eliminar elementos de la pila
console.log("Elemento eliminado:", stack.pop());
console.log("Elemento eliminado:", stack.pop());

// Estado final de la pila
console.log("Estado final de la pila:", stack.items);

// Verificar si la pila está vacía
console.log("¿Está vacía la pila?", stack.isEmpty());
