const express = require('express');
const app = express();
require('dotenv').config()
console.log(process.env)

// Use environment variable PORT or default to 3000
const port = process.env.PORT || 4000;
const githubData = 
  {
    "login": "VishalShrimali",
    "id": 122674193,
    "node_id": "U_kgDOB0_cEQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/122674193?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/VishalShrimali",
    "html_url": "https://github.com/VishalShrimali",
    "followers_url": "https://api.github.com/users/VishalShrimali/followers",
    "following_url": "https://api.github.com/users/VishalShrimali/following{/other_user}",
    "gists_url": "https://api.github.com/users/VishalShrimali/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/VishalShrimali/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/VishalShrimali/subscriptions",
    "organizations_url": "https://api.github.com/users/VishalShrimali/orgs",
    "repos_url": "https://api.github.com/users/VishalShrimali/repos",
    "events_url": "https://api.github.com/users/VishalShrimali/events{/privacy}",
    "received_events_url": "https://api.github.com/users/VishalShrimali/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Vishal Shrimali",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2023-01-14T11:02:29Z",
    "updated_at": "2024-12-20T17:35:19Z"
  };

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/login', (req, res) => {
  res.send('Hello, Vishal Welcome!');
});
app.get('/github', (req, res) => {
  res.status(200).json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${port}`);
});
