const server = require("./aap.js")
const Port = process.env.PORT || 5000;



server.listen(Port,()=>{
    console.log(`server is running on ${Port}`);
})