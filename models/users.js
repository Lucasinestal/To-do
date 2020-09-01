const Datastore = require('nedb'), db = new Datastore({ filename: 'users.db', autoload: true});

getAll = () => {
    return new Promise ((resolve, reject) => {
        db.find({}, function(err, docs){
            if(err){
                reject(err)
            } else {
                resolve(docs)
            }
        })
    })
}

getUserById = (id) => {
    return new Promise ((resolve, reject) => {
        db.findOne({ _id: id }, function (err, docs) {
            if (err) {
                reject(err);
            } else {
                resolve(docs);
            }
        })
    })
}

createUser = (newUser) => {
    return new Promise ((resolve, reject) => {
        db.insert(newUser, function (err, docs){
            if(err){
                reject(err);
            } else{
                resolve(docs)
            }
        })
    })
}

updateUser = (id, body) => {
    return new Promise ((resolve, reject) => {
        db.update({ _id: id }, { $set: { title: body.title, done: true, usersId: body.userId } }, { multi: true }, function (err, numReplaced) {
            if (err) {
                reject(err);
            } else {
                db.find({ _id: id }, function (err, docs) {
                    resolve(docs);
                });
            }
        })
    })
}

deleteUser = (id) => {
    return new Promise ((resolve, reject) => {
        db.remove({ _id: id }, function (err, numDeleted){
            if (err){
                reject(err)
            } else {
                resolve(numDeleted)
            }
        })
    })
}

//funktionalitet för register & login user 




module.exports = { getAll, getUserById, createUser, updateUser, deleteUser }