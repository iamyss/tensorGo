module.exports = {
    MONGO_URL: `mongodb://${process.env.MONGO_URL || "localhost:27017"}/userdata`
    //Use "mongodb://mongo:27017/ToDoList" when using docker
    
}