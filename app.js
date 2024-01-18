
const {  createArchivo } = require('./helpeprs');
const argv = require('./config/yargs');


createArchivo(argv.b ,argv.l).then(e=>console.log('Se logro'))
.catch(e=>console.log(e));