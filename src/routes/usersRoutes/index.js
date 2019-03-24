const express = require('express')
const User  =  require('../../models/user')
const userRouter = express.Router()


userRouter.get('/',(req,res) => {
    User.find({}, (err,users) =>{
        if(err) res.status(500).send(err)
        else  res.json(users)
    })
})
.post('/', (req, res) => {
    let user = new User(req.body)
    user.save()
    res.status(201).json(user)
})

userRouter.use('/:id', (req,res, next) => {
    User.findById( req.params.id, (err, user) => {
        if(err){
            res.status(500).send(err)
        } else {
            req.user = user
            next()
        }
    })
    
})

userRouter.route('/:id')
    .get((req, res) => {
        res.json(req.user)
    })
    .put((req,res) => {
        req.user.title = req.body.title
        req.user.content = req.body.content
        req.user.save()
        res.json(req.user)
    })
    .patch((req, res) => {
        if(req.body.id){
            delete req.body.id
        }
        for(let b in req.body) {
            req.user[b] = req.body[b]
        }
        req.user.save()
        res.json(req.user)
    })
    .delete((req, res) => {
        req.user.remove(err => {
            if(err){
                res.status(500).send(err)
            }else{
                res.status(204).send('User Removed!')
            }
        })
    })
 module.exports = userRouter