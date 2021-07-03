import express from 'express'

const app = express()

app.get('/hello', (req: express.Request, res: express.Response) => {
  res.send('Hello World!')
})

app.listen(8888, () => {
  console.log('SERVER IS RUNNED!')
})
