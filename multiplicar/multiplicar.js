const fs = require('fs'); //la libreria existe en node File System
var colors = require('colors');

let listarTabla=(base, limite =10)=>{
    console.log('============'.green);
    console.log(`tablal de ${base}==`.green)
    console.log('============'.green);
    for(let i=1; i<=limite;i++){
       console.log(`${base}* ${i} = ${base*i}\n`);
        
        }



}

let crearArchivo =(base ,limite= 10)=>{
return new Promise(( resolve,reject)=>{
    if(!Number(base)){
        reject(`El valor introducido ${base} no es un numero `);
    }
    let data= ''

    for(let i=1; i<=limite;i++){
    data+= `${base}* ${i} = ${base*i}\n`;
    
    }
    
    
    fs.writeFile(`tablas/tabla-${base}.txt`,data, (err) => {
      if (err) reject(err)
      else
      resolve(`tabla-${base}.txt`);
    
    });

});


}

module.exports ={
 crearArchivo, listarTabla}


