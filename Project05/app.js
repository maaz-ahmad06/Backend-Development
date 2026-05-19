const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/create', async (req, res) => {
    let user = await userModel.create({
        username: 'maaz',
        age: 21,
        email: 'maaz@gmail.com'
    });
    res.send(user);
});

app.get('/post/create', async (req, res) => {
    let post = await postModel.create({
        postdata: "hello how are you",
        user: "69398f3f4bc23b00373c70cb",
    });
    
    let user = await userModel.findOne({_id: "69398f3f4bc23b00373c70cb"});
    user.posts.push(post._id);
    await user.save();
    res.send({post, user});
});

app.listen(3000);