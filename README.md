# biljettsystem
PVK Project 2022

## How to run
In order for the whole application to work, you need to run both the client and the server at the same time.

### Pre requirements
Make sure you have [docker](https://www.docker.com/products/docker-desktop) and [docker-compose](https://docs.docker.com/compose/install/) installed before running any commands.

### Start
To get up and running fast, run this command from the root directory:

```
docker-compose up
```

Then navigate to http://localhost:3000/. Live reloading is supported, so no need to rerun the command after each code change.

### Close
To exit out of the terminal, press `ctrl+c`, then run this command:

```
docker-compose down
```

## When both frontend and backend is running in background...
You can now make server side actions via the client side UI. Navigate to API Testing. 

Note: POST and DELETE requests do not work well with demos like this, as our data is stored in a C# class and not in a database, causing our data to get wiped out every time we make a new call. Further development here depends on database implementation.
