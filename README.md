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

## 🛠️ Technologies used in this project
<ul>
<li><a href="https://www.typescriptlang.org/">Typescript</a> – Javascript superset, adding static typing and other features</li>

<li><a href="https://nodejs.org/en/">NodeJS</a> – Javascript execution environment outside the browser</li>

<li><a href="https://expressjs.com/pt-br/">ExpressJs</a> – Framework for NodeJs web applications</li>

<li><a href="https://www.prisma.io/">Prisma ORM</a> – ORM that makes working with databases easy for application developers and features</li>

<li><a href="https://www.prisma.io/">MongoDB</a> – Open source NoSQL database management program</li>

<li>And more...</li>
</ul>
