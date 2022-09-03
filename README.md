<p align="center"><a href="https://nodejs.org/en/" target="_blank"><img src="https://nodejs.org/static/images/logo.svg" width="270"></a></p>

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

1. You must have Yarn or NPM installed so you can install the dependencies that this project demands. In the root directory, run:

```
yarn
```

in case you have NPM instead, just run:

```
npm install
```


## 🚀 Running this API on localhost

1.  generate prisma schema with:

```
npx prisma generate
```

2.  sync the database with the prisma schema with:

```
npx prisma db push
```

3.  to run this API, run one of the following commands below:

```
yarn dev
```

or

```
npm run dev
```
