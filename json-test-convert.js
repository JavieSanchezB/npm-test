
let cursos={
    "titulo": "Curso de Node.js",
    "numVistas": 5000,
    "numLikes": 3000,
    "temas":[
       "JavaScript",
       "Node.js" 
    ],
    "esPublico":true

};
//objeto -> a un string 
//Cadena de Caracteres en Formato JSON
let infoCursoJSON = JSON.stringify(cursos);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);


// string -> objeto
//Cadena de Caracteres en Formato JSON

let infoCursoJSONObjeto = JSON.parse(infoCursoJSON);
console.log(infoCursoJSONObjeto);
console.log(typeof infoCursoJSONObjeto);

