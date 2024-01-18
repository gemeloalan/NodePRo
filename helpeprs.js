const {writeFileSync} = require('fs');
const createArchivo  = async (base = 5, l = false)=>{
    try {
        
        let salida = '';
        for (let i = 1; i<=10; i++) {
            
            salida += `${base} x ${i} = ${base * i}\n`;
        }
    writeFileSync(`salida/tabla-${base}.txt`, salida);
     return console.log(`tabla-${base}.txt creado`);
    } catch (error) {
        throw error;
    }

}
module.exports = {
    createArchivo
}
