import express from "express";
import 'dotenv/config'
import  cors  from "cors";
import { router as routerUsers } from "./routes/usersRoutes";
import { router as routerArtist } from "./routes/tattoArtistsRoutes";
import { AppDataSource } from "./db";
import { router as routerAppointments} from "./routes/appointmentsRoutes";
import { router as routerTattoo} from "./routes/tattoRouters";

const app = express()

app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 4004

// routes
app.use('/user', routerUsers)
app.use('/artist' , routerArtist)
app.use('/appointments', routerAppointments)
app.use('/tattoo', routerTattoo)

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
