import express from "express";
import { router as routerUsers } from "./routes/usersRoutes";
import { router as routerArtist } from "./routes/tattoArtistsRoutes";
import { AppDataSource } from "./db";

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 4004

// routes
app.use('/user', routerUsers)
app.use('/artist' , routerArtist)

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
    
    app.listen(PORT, () => {
      console.log(`Server running ${PORT}`);
    })
  })
  .catch(error => {
    console.log(error)
  })
