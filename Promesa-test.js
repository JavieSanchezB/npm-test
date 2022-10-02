const PromesaCumplida= true;

const miPromesa = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(PromesaCumplida){
      resolve('Promesa cumplidad')
    } else {
      reject('Promesa rechazada ...')
    }
  }, 5000);
});

// miPromesa.then((valor)=>{
//   console.log(valor);
// });

const manejarPromesaCumplida = (valor) => {
  console.log(valor);
};

const manejarPromesaRechazada = (razonderechazo) => {
  console.log(razonderechazo);
};

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);