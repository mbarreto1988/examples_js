class Deque {
    constructor() {
        this.items = [];
    }

    // Añadir un elemento al frente
    pushFront(element) {
        this.items.unshift(element); // Añade al inicio
    }

    // Añadir un elemento al final
    pushBack(element) {
        this.items.push(element); // Añade al final
    }

    // Eliminar y retornar un elemento del frente
    popFront() {
        if (this.isEmpty()) {
            return "Deque is empty";
        }
        return this.items.shift(); // Elimina del inicio
    }

    // Eliminar y retornar un elemento del final
    popBack() {
        if (this.isEmpty()) {
            return "Deque is empty";
        }
        return this.items.pop(); // Elimina del final
    }

    // Ver el primer elemento
    front() {
        if (this.isEmpty()) {
            return "Deque is empty";
        }
        return this.items[0]; // Primer elemento
    }

    // Ver el último elemento
    back() {
        if (this.isEmpty()) {
            return "Deque is empty";
        }
        return this.items[this.items.length - 1]; // Último elemento
    }

    // Verificar si la deque está vacía
    isEmpty() {
        return this.items.length === 0;
    }

    // Ver el tamaño de la deque
    size() {
        return this.items.length;
    }

    // Imprimir todos los elementos de la deque
    printDeque() {
        console.log(this.items.toString());
    }
}

// Ejemplo de uso
const deque = new Deque();

// Añadir elementos al final
deque.pushBack(10);
deque.pushBack(20);
deque.pushBack(30);
console.log("Después de añadir al final:");
deque.printDeque(); // 10, 20, 30

// Añadir elementos al frente
deque.pushFront(5);
deque.pushFront(1);
console.log("Después de añadir al frente:");
deque.printDeque(); // 1, 5, 10, 20, 30

// Eliminar del frente
deque.popFront();
console.log("Después de eliminar del frente:");
deque.printDeque(); // 5, 10, 20, 30

// Eliminar del final
deque.popBack();
console.log("Después de eliminar del final:");
deque.printDeque(); // 5, 10, 20

// Ver el primer y último elemento
console.log("Primer elemento:", deque.front()); // 5
console.log("Último elemento:", deque.back());  // 20

// Verificar si está vacía
console.log("¿La deque está vacía?:", deque.isEmpty()); // false

// Ver el tamaño
console.log("Tamaño de la deque:", deque.size()); // 3
