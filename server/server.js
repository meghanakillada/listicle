import express from 'express'
import dotenv from './config/dotenv.js'
import itemsRouter from './routes/items.js'

const app = express()
app.use('/items', itemsRouter)
app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Listicle</h1>')
  })
  const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})