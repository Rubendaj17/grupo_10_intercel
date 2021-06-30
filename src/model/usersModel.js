const fs = require('fs');
const path = require('path');

module.exports = {
    fileName: path.resolve(__dirname, "../data/users.json"),

    readFile(){
        const usersJSON = fs.readFileSync(this.fileName, 'utf-8');
        return JSON.parse(usersJSON);
    },
    writeFile(newData){
        const dataJSON = JSON.stringify(newData, null, 2);
        return fs.writeFileSync(this.fileName, dataJSON);
    },
    generateID(){
        const users = this.readFile();
        const lastUser = users.pop();
        return lastUser.id + 1;
    },

    findByField (field, value){
        const users = this.readFile();
        const userFound = users.find(user => user[field] == value);
        return userFound
    },

    
    create(user){
        user.id = this.generateID();
        
        const users = this.readFile();
        const usersUpdated = [...users, user];
        this.writeFile(usersUpdated);
        return user;
    }

}
