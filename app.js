const mongoose = require('mongoose');
const app = require('./index')
const swaggerDocs = require('./libs/swagger/swagger');

const PORT = process.env.PORT || 5000
swaggerDocs(app,PORT);

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`server is running on ${PORT}`)))
    .catch((error)=>console.log(error.message))
mongoose.set('useFindAndModify',false);

module.exports = app;