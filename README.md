<p align="center"><a href="https://nodejs.org/en/" target="_blank"><img src="https://nodejs.org/static/images/logo.svg" width="270"></a></p>

# 🎬 Movies API

Back-end application developed with NodeJs, for integration with MongoDB database.

## 🧬 Cloning this project

1. To clone this project with command line you must have <a href="https://git-scm.com/downloads">Git</a> installed on your machine. On your terminal run:

```
git clone https://github.com/Gustav-Dev17/movies-backend.git
```

2. Access the root folder:

```
cd movies-backend
```

## 💿 Installing dependencies

1. You must have <a href="https://yarnpkg.com/getting-started/install/">Yarn</a> or NPM installed so you can install the dependencies that this project demands. In the root directory, run:

```
yarn
```

in case you have NPM instead, just run:

```
npm install
```


## 🚀 Running this API locally

1. Duplicate the file <code>.env.example</code> and rename one of them to <code>.env</code>

2. Add the environment variables in the newly created <code>.env</code> file

```
DATABASE_URL =
SECRET = 
```

3. Generate prisma schema with:

```
npx prisma generate
```

4. Sync the database with the prisma schema with:

```
npx prisma db push
```

5. To run this API, run one of the following commands below:

```
yarn dev
```

or

```
npm run dev
```

## 🌿 API Routes

### 1. Login routes
1.1 Log user in: <code>POST</code>  /login
```
{
    "email": "usermail@email.com",
    "password": "1234"
}
```
ℹ The application gets the user's id since the login, dispensing the need to add the user's id in the application's routes.
### 2. User routes
2.1 Create user: <code>POST</code>  /user
```
{
    "name": "Markus Persson",
    "email": "markus_persson2112@outlook.com",
    "password": "12345"
}
```
2.2 Read user: <code>GET</code>  /user
</br><i>Return example:</i>
```
{
    "id": "63122b9a213b12451580e909",
    "role": "user",
    "name": "Markus Persson",
    "email": "markus_persson2112@outlook.com",
    "password": "$2a$08$4ZH4bOlbCj3nofYFJ2585ulwFMejnohNvomrTWjedfX0cQXaw7Pza",
    "created_at": "2022-09-02T16:13:14.103Z",
    "updated_at": "2022-09-02T16:13:14.103Z"
}
```
2.3 Read all users: <code>GET</code>  /users
</br><i>Return example:</i>
```
[
    {
        "id": "63122b9a213b12451580e909",
        "role": "admin",
        "name": "Gustav-Dev17",
        "email": "gustav-dev17@gmail.com",
        "password": "$2a$08$4ZH4bOlbCj3nofYFJ2585ulwFMejnohNvomrTWjedfX0cQXaw7Pza",
        "created_at": "2022-09-02T16:13:14.103Z",
        "updated_at": "2022-09-02T16:13:14.103Z"
    },
    {
        "id": "63151aca4be411c7455c7604",
        "role": "user",
        "name": "Markus Persson",
        "email": "markus_persson2112@outlook.com",
        "password": "$2a$08$4ZH4bOlbCj3nofYFJ2585ulwFMejnohNvomrTWjedfX0cQXaw7Pza",
        "created_at": "2022-09-02T16:13:14.103Z",
        "updated_at": "2022-09-02T16:13:14.103Z"
    }
]
```
2.4 Update user: <code>PATCH</code>  /user
```
{
    "name": "Markus Persson",
    "email": "markus_persson2112@outlook.com",
    "password": "12345678"
}
```
2.5 Delete user: <code>DELETE</code>  /user
</br><i>Return:</i> 204 No Content
</br>⚠️ Note that this also deletes on cascade all movies the deleted user has added

### 3. Movie routes
3.1 Create movie: <code>POST</code>  /movie
```
{
    "status": "Watched",
    "title": "Deadpool",
    "origin": ["United States"],
    "description": "Description of the movie.",
    "genre": ["Comedy", "Action"],
    "duration": "108 min",
    "release_year": "2016",
    "box_office": "US$ 782.6 million",
    "cast": ["Ryan Reynolds", "Morena Baccarin", "", "Ed Skrein", "T.J. Miller", "Gina Carano", "Brianna Hildebrand"],
    "studio": ["20th Century Fox", "Marvel Entertainment", "Kinberg Genre", "The Donners' Company", "TSG Entertainment"],
    "available_on": ["Star+", "Prime Video"]
}
```
3.2 Read movie: <code>GET</code>  /movie/:id
</br><i>Return example:</i>
```
{
    "status": "Watched",
    "title": "Deadpool",
    "origin": ["United States"],
    "description": "Description of the movie.",
    "genre": ["Comedy", "Action"],
    "duration": "108 min",
    "release_year": "2016",
    "box_office": "US$ 782.6 million",
    "cast": ["Ryan Reynolds", "Morena Baccarin", "", "Ed Skrein", "T.J. Miller", "Gina Carano", "Brianna Hildebrand"],
    "studio": ["20th Century Fox", "Marvel Entertainment", "Kinberg Genre", "The Donners' Company", "TSG Entertainment"],
    "available_on": ["Star+", "Prime Video"]
}
```
3.3 Read all movies: <code>GET</code>  /movies
</br><i>Return example:</i>
```
[
    {
        "id": "63151cc84be411c7455c7606",
        "status": "Watched",
        "title": "The Amityville Horror",
        "origin": ["United States"],
        "description": "description of the movie",
        "genre": ["Horror", "Drama", "Suspense"],
        "duration": "94 min",
        "release_year": "2005",
        "box_office": "US$ 107.5 million",
        "cast": ["Ryan Reynolds", "Melissa George", "Jesse James", "Jimmy Bennett", "Chloë Grace Moretz", "Rachel Nichols", "Philip Baker Hall", "Isabel Conner"],
        "studio": ["Dimension Films", "Platinum Dunes", "Radar Pictures", "Metro-Goldwyn-Mayer"],
        "available_on": ["Prime Video"],
        "userId": "63122b9a213b12451580e909"
    },
    {
        "id": "63151e254be411c7455c7607",
        "status": "watched",
        "title": "Deadpool",
        "origin": ["United States"],
        "description": "description of the movie",
        "genre": ["Comedy", "Action"],
        "duration": "108 min",
        "release_year": "2016",
        "box_office": "US$ 782.6 million",
        "cast": ["Ryan Reynolds", "Morena Baccarin", "Ed Skrein", "T.J. Miller", "Gina Carano", "Brianna Hildebrand"],
        "studio": ["20th Century Fox", "Marvel Entertainment", "Kinberg Genre", "The Donners' Company", "TSG Entertainment"],
        "available_on": ["Star+"],
        "userId": "63122b9a213b12451580e909"
    }
]
```
3.4 Read all user's movies : <code>GET</code>  /user/movies
</br><i>Return example:</i>
```
[
    {
        "id": "63151e254be411c7455c7607",
        "status": "watched",
        "title": "Deadpool",
        "origin": ["United States"],
        "description": "description of the movie",
        "genre": ["Comedy", "Action"],
        "duration": "108 min",
        "release_year": "2016",
        "box_office": "US$ 782.6 million",
        "cast": ["Ryan Reynolds", "Morena Baccarin", "Ed Skrein", "T.J. Miller", "Gina Carano", "Brianna Hildebrand"],
        "studio": ["20th Century Fox", "Marvel Entertainment", "Kinberg Genre", "The Donners' Company", "TSG Entertainment"],
        "available_on": ["Star+"],
        "userId": "63122b9a213b12451580e909"
    }
]
```
3.5 Update movie: <code>PATCH</code>  /movie/:id
```
{
    "status": "Watched",
    "title": "Deadpool",
    "origin": ["United States"],
    "description": "Description of the movie.",
    "genre": ["Comedy", "Action"],
    "duration": "108 min",
    "release_year": "2016",
    "box_office": "US$ 782.6 million",
    "cast": ["Ryan Reynolds", "Morena Baccarin", "", "Ed Skrein", "T.J. Miller", "Gina Carano", "Brianna Hildebrand"],
    "studio": ["20th Century Fox", "Marvel Entertainment", "Kinberg Genre", "The Donners' Company", "TSG Entertainment"],
    "available_on": ["Star+"]
}
```
3.6 Delete movie: <code>DELETE</code>  /movie/:id
</br><i>Return:</i> 204 No Content


## 🛠️ Technologies used in this project
<ul>
<li><a href="https://www.typescriptlang.org/">Typescript</a> – Javascript superset, adding static typing and other features</li>

<li><a href="https://nodejs.org/en/">NodeJS</a> – Javascript execution environment outside the browser</li>

<li><a href="https://expressjs.com/pt-br/">ExpressJs</a> – Framework for NodeJs web applications</li>

<li><a href="https://www.prisma.io/">Prisma ORM</a> – ORM that makes working with databases easy for application developers and features</li>

<li><a href="https://www.mongodb.com/">MongoDB</a> – Open source NoSQL database management program</li>

<li>And more...</li>
</ul>
