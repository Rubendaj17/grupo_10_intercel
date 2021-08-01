const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const usersModel = require('../model/usersModel');

const { User } = require('../database/models')
const fs = require('fs');
const path = require('path');

let usersController = {
    login: (req,res)=>{
        res.render('users/login');
    },
    register: (req,res)=>{
        res.render('users/register');
    },
    createNewUser: async (req, res)=>{
        let photo = '/images/pp/default.png';
    
        const formValidation = validationResult(req)
    
        const valuesFromUser = req.body
    
        const { file } = req;

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
        
        const newUser = {
            name, 
            lastName, 
            phoneNumber, 
            email, 
            password: hashPassword,
            photo,
            idCategory : 2
        }
               
        const user = await User.create({ ...newUser })
        
        delete user ['password']
        
        req.session.logged = user;
        
        res.redirect('/');
    },
    processLogin: async (req, res) => {
        const formValidation = validationResult(req)
        const valuesFromUser = req.body;
        
        if (!formValidation.isEmpty()){
            return res.render('users/login', {valuesFromUser, errors: formValidation.mapped()})
        }
        
        const {email, remember } = req.body;
        //busca en base de datos el user con dicho mail
        const user = await db.User.findOne({
            where: {email}
        });

        delete user['password'];

        req.session.logged = user;

        if (remember){
            res.cookie('user', user.id, {maxAge:5*60000, signed:true})
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