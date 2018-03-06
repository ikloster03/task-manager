import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import config from '../config/config'

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


app.listen(process.env.PORT || config.port,
    () => console.log(`Server start on port ${config.port} ...`))