const estatusPedido = () =>{
const estatus = Math.random() < 0.8;
console.log(estatus);
return estatus;
};

// for (let i = 0; i < 10; i++){
//     console.log(estatusPedido());
// }

const miPedidoDePizza = new  Promise((resolve,reject) => {
setTimeout(() => {
if (estatusPedido()){
  resolve('Pedido exitoso su Pizza esta en camino');
} else {
  reject('Surgio un problema con su pedido por favor intente nuevamente');
}
}, 5000);
});

// const  manejarPedidoexitoso =(mensajeDeConfirmacion) => {
//   console.log(mensajeDeConfirmacion)
// };

// const  manejarPedidofallido =(mensajeDeFalla) => {
//   console.log(mensajeDeFalla)
// };

// miPedidoDePizza.then(manejarPedidoexitoso,manejarPedidofallido);

//Refactorizando
miPedidoDePizza
.then((mensajeDeConfirmacion) => {
  console.log(mensajeDeConfirmacion)
})
.then(null, (mensajeDeError)=> {
  console.log(mensajeDeError);
});
