for (var i = 0; i<3; i++){
    setTimeout(function(){
        console.log(i);
        
    }, 1000 + 1)
}



function makeItBark(name) {
    function Dog(name) {
        this.name = name;
        this.bark = function() {
            return this.name + ' says woof hey';
        };
    }

    let scooby = new Dog(name);
    return scooby.bark();
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const name = readLine();

    const result = makeItBark(name);

    ws.write(result + '\n');

    ws.end();
}
