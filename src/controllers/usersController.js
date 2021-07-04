const multer = require('multer');
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const usersModel = require('../model/usersModel');

let usersController = {
    login: (req,res)=>{
        res.render('users/login');
    },
    register: (req,res)=>{
        res.render('users/register');
    },
    createNewUser:(req, res)=>{

        const formValidation = validationResult(req)
        const valuesFromUser = req.body
        
        console.log(valuesFromUser)
        console.log(formValidation);
        if (!formValidation.isEmpty()){
            return res.render('users/register', {valuesFromUser, errors: formValidation.mapped()})
        }
        
        const {name, lastName, phoneNumber, email, password} = req.body;
        
        const {file} = req;
        
        const photo = '/images/pp/default.png';
        if(file){
            photo = '/images/pp/' + file.filename;
        }
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
        const formValidation = validationResult(req)
        const valuesFromUser = req.body
        
        if (!formValidation.isEmpty()){
            return res.render('users/login', {valuesFromUser, errors: formValidation.mapped()})
        }
        
        const {email, remember } = req.body;
        
        const user = usersModel.findByField('email', email);

        delete user['password'];

        req.session.logged = user;

        if (remember){
            res.cookie('user', user.id, {maxAge:5*6000, signed:true})
        }

        res.redirect('/');
    },
    profile(req, res){
        res.render('users/profile');
    }
}

module.exports = usersController