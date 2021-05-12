import 'dotenv/config'
import express from 'express'
import BullBoard from 'bull-board'
import Queue from './app/lib/Queue'
import UserController from './app/controllers/UserControllers'

const app = express()
BullBoard.setQueues(Queue.queues.map(queue => queue.bull))

app.use(express.json())

app.use("/admin/queues", BullBoard.UI)
app.post("/users", UserController.store)

app.listen(process.env.PORT, () =>{
  console.log(`Servidor rodando na porta ${process.env.PORT}`)
})