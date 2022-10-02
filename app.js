const EventEmitter = require('events');

// console.log(EventEmitter);

const emisorProductos = new EventEmitter();

emisorProductos.on('compra',(total, numProductos)=>{
    console.log(`Total de la Compra $${total}.`);
    console.log(`Numero de productos $${numProductos}.`);

});

emisorProductos.emit('compra', 5000, 10);
emisorProductos.emit('compra', 8000, 3);
emisorProductos.emit('compra', 15000, 12);
emisorProductos.emit('compra', 3000, 17);
