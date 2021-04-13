# Node / Express / Sequelize REST API Starter

This is a small sample project to help others get more familiar with developing a REST API using Node, Express and Sequelize.

This project is a work in progress.

Some files not in use, yet:

* ./config/config.js
* ./models/index.js

The files you should look at to learn:

* ./app.js -> pulls in the routers
* ./routers/ -> each router pulls in a Model
* ./models/ -> each model pulls in the sequelize instance from ./database.js
* ./database.js -> this pulls in the configuration
* ./config.js -> simple db config object

## Get Started

Summary:

1. Clone the project
2. Run `NPM Install`
3. Install the <a href="https://github.com/sequelize/cli" target="_blank">Sequelize CLI</a>
4. Wire up your database in ./config.js (not ./config/config.js)
5. Run migrations using the Sequelize CLI
6. Import 'Node API.postman_collection.json' to Postman
7. Use Postman to test routes

```bash

git clone https://github.com/patrickodacre/node_api_sequelize_starter YOUR_PROJECT

cd YOUR_PROJECT

npm install

npm install -g sequelize-cli

```

After you config your database

```base

sequelize db:migrate

```