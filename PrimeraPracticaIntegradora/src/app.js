import express from "express";
import handlebars from "express-handlebars"
import { __dirname } from "./utils.js"
import productsRouter from "./routes/products.router.js"
import cartRouter from "./routes/cart.router.js"
import viewsRouter from "./routes/views.router.js"
import './db/configDB.js'


const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//handlebars
app.engine('handlebars', handlebars.engine())
app.set("views", __dirname + "/views")
app.set("view engine", "handlebars")

//routes
app.use('/api/products', productsRouter)
app.use('/app/cart', cartRouter)
app.use('/', viewsRouter)


app.listen(8080, ()=>{
    console.log("Escuchando al puerto 8080")
})