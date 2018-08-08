var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mogoose.model.('Todo',{
    text:{
        rtpe:String
    },
    completed:{
        type:Boolean
    },
    completedAt:{
        type:Number
    }
})

var newTodo = new Todo({
    text: 'cook dinner'
})

newTodo.save().then((doc => {
    
}))