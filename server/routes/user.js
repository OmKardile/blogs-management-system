const express = require('express')
const bcrypt = require('bcrypt')

const pool = require('../utils/db')
const result = require('../utils/result')

const router = express.Router()
 const SaltRounds = 10

router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    const sql = 'SELECT * FROM users WHERE email =?'
    pool.query(sql,[email],(err,data)=>{
        if(err)
            res.send(result.createResult('err'))
        else if(data.length == 0)
            res.send(result.createResult('Invalid Email'))
        else{
            bcrypt.compare(password,data[0].password,(err,passwordStatus)=>{
               if(passwordStatus){
                 const user = {
                    uid : data[0].uid,
                    fullname: data[0].fullname,
                    email: data[0].email,
                    mobile: data[0].mobile
                 }
                 res.send(result.createResult(null,user))
               } 
               else
                res.send(result.createResult('Invalid Password'))
            })
        }
    })
})
router.post('/signup',(req,res)=>{
  const {fullname,email,password,mobile} = req.body
  const sql = 'INSERT INTO users(fullname,email,password,mobile) VALUES (?,?,?,?)'
  bcrypt.hash(password,SaltRounds,(err,hashedPassword)=>{
    if(hashedPassword)
        pool.query(sql,[fullname,email,hashedPassword,mobile],(err,data)=>{
       res.send(result.createResult(err,data))
        })
        else
            res.send(result.createResult(err))
  })
})
 module.exports = router