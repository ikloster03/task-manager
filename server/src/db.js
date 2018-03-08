import mongoose from 'mongoose'
import config from  '../config/config'

export default {
    connect( cb ) {
        mongoose.Promise = global.Promise

        mongoose.connect(config.dbURL, config.dbOptions)

        mongoose.connection
            .once('open', () => {
               cb()
            })
            .on('error', error => console.warn(error))
    }
}