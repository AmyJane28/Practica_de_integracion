import mongoose from "mongoose";


const URI = "mongodb+srv://ajanemata:J4xIXyOJO06eszMI@cluster0.nvred09.mongodb.net/ecommerce?retryWrites=true&w=majority"
mongoose.connect(URI)
.then(()=>console.log("Conectado a la base de datos"))
.catch((error) => console.log(error))