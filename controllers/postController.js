const posts = require("../data/posts");

function index(req, res) {
  let filteredPosts = posts;
  if (req.query.tag) {
    filteredPosts = posts.filter((post) => post.tags.includes(req.query.tag));
  }
  res.json(filteredPosts);
}

function show(req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({
      error: true,
      message: "Post non trovato",
    });
  }
  res.json(post);
}

function destroy(req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      error: true,
      message: "post non trovato",
    });
  }

  posts.splice(posts.indexOf(post), 1);
  console.log(posts);
  res.sendStatus(204);
}

module.exports = { index, show, destroy };
