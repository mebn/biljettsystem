# biljettsystem
PVK Project 2022

## How to run
In order for the whole application to work properly, you need to run both the client and the server at the same time.

### Pre requirements
Make sure you have [docker](https://www.docker.com/products/docker-desktop) and [docker-compose](https://docs.docker.com/compose/install/) installed before running any commands.

### Start
To get up and running fast, run this command from the root directory:

```
docker-compose up
```

Then navigate to http://localhost:3000/. Hot reload for the client does not work on windows (some problem with WSL2).

To only start one service, run `docker-compose up <service>`. For example, to only start the client, run `docker-compose up client`.

Shutdown with `docker-compose down <service>`.

### Close
To exit out of the terminal, press `ctrl+c`, then run this command:

```
docker-compose down
```

### Other commands
* `docker-compose up --build` - force a rebuild.

## When both frontend and backend is running in background...
You can now make server side actions via the client side UI. Navigate to API Testing. 

Note: POST and DELETE requests do not work well with demos like this, as our data is stored in a C# class and not in a database, causing our data to get wiped out every time we make a new call. Further development here depends on database implementation.
