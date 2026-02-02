require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData={
  "login": "stuti1211",
  "id": 166818108,
  "node_id": "U_kgDOCfFxPA",
  "avatar_url": "https://avatars.githubusercontent.com/u/166818108?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/stuti1211",
  "html_url": "https://github.com/stuti1211",
  "followers_url": "https://api.github.com/users/stuti1211/followers",
  "following_url": "https://api.github.com/users/stuti1211/following{/other_user}",
  "gists_url": "https://api.github.com/users/stuti1211/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/stuti1211/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/stuti1211/subscriptions",
  "organizations_url": "https://api.github.com/users/stuti1211/orgs",
  "repos_url": "https://api.github.com/users/stuti1211/repos",
  "events_url": "https://api.github.com/users/stuti1211/events{/privacy}",
  "received_events_url": "https://api.github.com/users/stuti1211/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Stuti Kumari",
  "company": "@stuti-bee",
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2024-04-12T10:54:02Z",
  "updated_at": "2026-02-01T09:15:42Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
  res.send("stuti")
})

app.get('/login',(req,res)=>{
  res.send('<h1> please login stuti</h1>')
})

app.get('/youtube',(req,res)=>{
   res.send('<h2> chai aur code</h2>')
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${port}`)
})
 
