
const settings = {}

settings.MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING
settings.MONGOOSE_SETTINGS = {
    poolSize: 10, 
    bufferMaxEntries: 0, 
    reconnectTries: 5000, 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useNewUrlParser: true
}
settings.ENCRYPT_KEY = process.env.ENCRYPT_KEY ? process.env.ENCRYPT_KEY : 'test-password'

module.exports = settings

