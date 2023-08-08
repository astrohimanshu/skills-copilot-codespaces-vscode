// Create web server application
// 1. Import express
const express = require('express');
// 2. Create an express application
const app = express();
// 3. Create a port
const port = 3000;
// 4. Create a route
app.get('/', (req, res) => {
  res.send('Hello world');
});
// 5. Listen to port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
// 6. Create a route for comments
app.get('/comments', (req, res) => {
  res.send('This is a comments route');
});
// 7. Create a route for comments
app.get('/comments/:id', (req, res) => {
  res.send(`This is a comments route for ${req.params.id}`);
});
// 8. Create a route for comments
app.get('/comments/:id/:postId', (req, res) => {
  res.send(`This is a comments route for ${req.params.id} and ${req.params.postId}`);
});
// 9. Create a route for comments
app.get('/comments/:id/:postId', (req, res) => {
  res.send(`This is a comments route for ${req.params.id} and ${req.params.postId}`);
});
// 10. Create a route for comments
app.get('/comments/:id/:postId/:userId', (req, res) => {
  res.send(`This is a comments route for ${req.params.id} and ${req.params.postId} and ${req.params.userId}`);
});
// 11. Create a route for comments
app.get('/comments/:id/:postId/:userId/:commentId', (req, res) => {
  res.send(`This is a comments route for ${req.params.id} and ${req.params.postId} and ${req.params.userId} and ${req.params.commentId}`);
});
// 12. Create a route for comments
app.get('/comments/:id/:postId/:userId/:commentId/:likeId', (req, res) => {
  res.send(`This is a comments route for ${req.params.id} and ${req.params.postId} and ${req.params.userId} and ${req.params.commentId} and ${req.params.likeId}`);
});
// 13. Create a route for comments
app.get('/comments/:id/:postId/:userId/:commentId/:likeId/:dislike