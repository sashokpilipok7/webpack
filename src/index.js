import Post from './Post'
import './style/index.css'
import json from './assets/json'

const post = new Post({title: 'wepback title'})

console.log('post to string', post.toString())

console.log(json, 'json')