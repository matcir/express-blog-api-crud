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

function store(req, res) {
  //creo un nuovo id incrementando l'id dell'ultimo elemento dell'array
  const newId = posts[posts.length - 1].id + 1;

  //creo il nuovo post
  const newPost = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags,
  };

  posts.push(newPost);
  console.log(posts);

  res.status(201).json(newPost);
}

function update(req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({
      error: true,
      message: "Post non trovato",
    });
  }

  //aggiorno la pizza
  post.title = req.body.title;
  post.content = req.body.content;
  post.image = req.body.image;
  post.tags = req.body.tags;

  console.log(posts);

  res.json(post);
}

module.exports = { index, show, destroy, store, update };
