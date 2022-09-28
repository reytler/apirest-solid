import { app } from "./app";
const PORT = 3333
app.listen(PORT,()=>{
    console.log(`Aplicação rodando no endereço http://localhost:${PORT}`)
})