import { Express } from "express"; 
const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
  console.log(`Se ha iniciado el servidor en el puerto ${PORT}`)
})
