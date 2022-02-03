# biljettsystem
PVK Project 2022

## How to run
In order for the whole application to work, you need to run the client and the server.

To get up and running fast, run these commands (assuming you have docker installed):

### Client side
```
docker build -t pvk_client:1.0.0 client
docker run -d -p 3000:3000 --name pvk_client pvk_client:1.0.0
```

More information can be found [here](/client/README.md).

### Server side
```
docker build -t pvk_server:1.0.0 server
docker run -d -p 7050:80 --name pvk_server pvk_server:1.0.0
```

More information can be found [here](/server/README.md).

### Docker
Useful docker commands:
* `docker ps -a` - list all containers
* `docker images` - list all images
* `docker rm <container id>` - remove a container
* `docker rmi <image name>` - remove a image


## When both frontend and backend is running in background...
You can now make server side actions via the client side UI. Navigate to API Testing. 

Note: POST and DELETE requests do not work well with demos like this, as our data is stored in a C# class and not in a database, causing our data to get wiped out every time we make a new call. Further development here depends on database implementation.
