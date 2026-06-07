const app = require("./src/app")

app.listen(3000 , ()=>{
    console.log(`App running on port ${process.env.PORT}`)
})

