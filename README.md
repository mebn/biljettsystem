## To see the API specification in swagger:
- Go to https://editor.swagger.io/
- Paste the ticketsAPI.yaml code into the editor! The API specification will appear on the right hand side of the page.


# biljettsystem
PVK Project 2022

## How to run
In order for the whole application to work properly, you need to run the client, server and database at the same time.

### Pre requirements
Make sure you have [docker](https://www.docker.com/products/docker-desktop) and [docker-compose](https://docs.docker.com/compose/install/) installed before running any commands.

### Start
To get up and running fast, run this command from the root directory:

```
docker-compose up
```

Then navigate to http://localhost:3000/.

To only start one service, run `docker-compose up <service>`. For example, to only start the client, run `docker-compose up client`.

Shutdown with `docker-compose down <service>`.

### Close
To exit out of the terminal, press `ctrl+c`, then run this command:

```
docker-compose down
```

### Problems?
If you have problems, try this:

* Delete all `node_modules` folders.
* Delete `database/pgdata` folder (this will delete your local database changes).
* Run `docker-compose up --build` to force a rebuild for all services.
