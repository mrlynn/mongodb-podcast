import { posts } from '../../cache/data'

export default (req, res) => {
   const results = req.query.q ? posts.filter(post => (post.title.toLowerCase().includes(req.query.q) ||post.excerpt.toLowerCase().includes(req.query.q) )) : []
   res.statusCode = 200
   console.log("Q: ", req.query.q)
   res.setHeader('Content-Type', 'application/json')
   res.end(JSON.stringify({results: [results]}))
}