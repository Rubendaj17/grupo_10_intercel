const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const usersModel = require('../model/usersModel');
const fs = require('fs');
const path = require('path');

let usersController = {
    login: (req,res)=>{
        res.render('users/login');
    },
    register: (req,res)=>{
        res.render('users/register');
    },
    createNewUser:(req, res)=>{
        let photo = '/images/pp/default.png';
        const formValidation = validationResult(req)
        const valuesFromUser = req.body
        const {file} = req;

        if(file){
            photo = '/images/pp/' + file.filename;
        }

        if (!formValidation.isEmpty()){
            photoPath = path.join(__dirname,'../../public', photo)

            file ? fs.unlinkSync(photoPath) : ''

            return res.render('users/register', {valuesFromUser, errors: formValidation.mapped()})
        }
        
        const {name, lastName, phoneNumber, email, password} = req.body;
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
        
        delete user ['password']
        
        req.session.logged = user;
        
        res.redirect('/');
    },
    processLogin(req, res){
        const formValidation = validationResult(req)
        const valuesFromUser = req.body;
        
        if (!formValidation.isEmpty()){
            return res.render('users/login', {valuesFromUser, errors: formValidation.mapped()})
        }
        
        const {email, remember } = req.body;
        
        const user = usersModel.findByField('email', email);

        delete user['password'];

        req.session.logged = user;

        if (remember){
            res.cookie('user', user.id, {maxAge:50*6000, signed:true})
        }

        res.redirect('/');
    },
    profile(req, res){
        //const user = res.locals.logged
        res.render('users/profile');
    },
    logout(req, res){
        
        req.session.destroy();
        res.clearCookie('user');
        res.redirect('/');

    }
}

module.exports = usersController