const { Router } = require('express');
const router = Router();
const { createPost } = require('../controller/postController');
const upload = require('../multer/multer');

// Correct usage of upload middleware
router.post('/posts', upload.single('post'), createPost);

module.exports = router;
