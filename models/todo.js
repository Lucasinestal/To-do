const Datastore = require('nedb'), db = new Datastore({ filename: '../todos.db', autoload: true});

getAll = () => {
    return new Promise ((resolve, reject) => {
        db.find({}, function(err, docs){
            if(err){
                resolve(err)
            } else {
                resolve(docs)
            }
        })
    })
}

createItem = () => {
    todoItem = {
        title: "Snickra ny säng",
        done: false
    }
    return new Promise ((resolve, reject) => {
        db.insert(todoItem, function (err, docs){
            if(err){
                reject(err);
            } else{
                resolve(docs)
            }
        })
    })
}

createItem();
