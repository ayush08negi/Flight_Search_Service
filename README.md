# welcome to flighst serveice

## Project serup 
  - clone the project on your local 
  - execute `npm install` on the same path as of your root direcorry of the downloaded project.
  - create a `.env` file in the root directory and add the following environment variable.
  - `PORT = 3000`
  - Inside the `src/config` FOLDER CREATE A NEW FILE `config.json` and then add the following piece of json.


 {
  "development": {
    "username": <Your root>,
    "password": <Your password>,
    "database": "flight_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
    }
  }


  ```
  - Once you've added your db config as listed above, go to the src folder from your terminal and execute `npm sequelize db:create`
  and then execute

  `npx sequelize db:migrate`

  ```

## DB design
  - Airplane Table
  - Flight
  - City


## Tables

### City -> id, name,created_at,updated_at
### Airport -> id,name,address,city_id,created_At,updated_At
    Relationship ->City has many airport s and Airport belongs to a city (one to many)

    ```
    npx sequelize model:generate --name Airport --attributes name:String,address:String,city_Id:integer
    ```