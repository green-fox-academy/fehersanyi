const express = require('express');
const app = express();
const PORT = 3000;

const postController = require('./controller/controll');

app.use(express.json());

app.post('/posts', postController.addRedditPost);
app.get('/posts', postController.getRedditPost);
app.put('/posts/:id/upvote', postController.upVotePost);
app.put('/posts/:id/downvote', postController.downVotePost);


app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});