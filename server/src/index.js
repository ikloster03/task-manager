import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import config from '../config/config'
import db from './db'
import list from 'modules/list/routes'
import task from 'modules/task/routes'

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

app.use('/list', list)
app.use('/task', task)


db.connect( () => {
    app.listen(process.env.PORT || config.port,
        () => console.log(`Server start on port ${config.port} ...`))
})
