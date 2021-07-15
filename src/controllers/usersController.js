const fs = require('fs');
const multer = require('multer');
const usersModel = require('../model/usersModel');
const bcrypt = require('bcryptjs');

let usersController = {
    login: (req,res)=>{
        res.render('users/login');
    },
    register: (req,res)=>{
        res.render('users/register');
    },
    createNewUser:(req, res)=>{
        const {name, lastName, phoneNumber, email, password} = req.body;
        
        const {file} = req;

        const photo = '/images/pp/default.png';
        if(file){
            photo = '/images/pp/' + file.filename;
        }

        //hashear
        const hashPassword = bcrypt.hashSync(password)

        const user = {
            name, 
            lastName, 
            phoneNumber, 
            email, 
            password: hashPassword,
            photo
        }
        usersModel.create(user);
        res.redirect('/');
    },
    processLogin(req, res){
        const {email, remember } = req.body;
    
        const user = usersModel.findByField('email', email);
        delete user['password'];

        req.session.logged = user;
        
        res.redirect('/');
    },
    profile(req, res){
        res.render('users/profile');
    }
}

module.exports = usersController