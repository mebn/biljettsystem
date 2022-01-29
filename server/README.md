# Server
ASP.NET Core webAPI for cross platform RESTful API Server.

## How to run
### Install necessary programs
#### Alternative 1
Download and install `.NET Core` from [here](https://dotnet.microsoft.com/en-us/download/dotnet). (Has to be `.NET Core core`, not `.NET x.x`)

#### Alternative 2
Install visual studio for [Windows](https://visualstudio.microsoft.com/vs/) or [macOS](https://visualstudio.microsoft.com/vs/mac/) where `dotnet` etc are build in.

### Start the server
1. Move to `~/biljettsystem/server`
1. Run `dotnet run`
1. Your server is now running at port `5000`. I strongly recommend using [postman](https://www.postman.com/downloads/) for API testing. Try, for example `localhost:5000/api/people` as a GET request, or simply enter the link on the browser. Alternatively use [swagger](https://localhost:5000/swagger) for API testing in browser.

### Docker
1. To build the docker image, run: `docker build -t pvk_server:1.0.0 .` where `1.0.0` can be replaced with another version.
1. To start the docker container detached, run: `docker run -d -p 8080:80 --name pvk_server pvk_server:1.0.0`, where `pvk_server:1.0.0` is the image from step 1. Port `8080` can be replaced with any open port.
1. To stop the docker container from running, run: `docker stop pvk_server`.

Useful docker commands:
* `docker ps -a` - list all containers
* `docker images` - list all images
* `docker rm <container id>` - remove a container
* `docker rmi <image name>` - remove a image

## Resources
* https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-6.0&tabs=visual-studio-code

* https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-javascript?view=aspnetcore-6.0

* https://youtu.be/sWJayOop4k8

### Connect PostgreSQL
* https://medium.com/@agavatar/webapi-with-net-core-and-postgres-in-visual-studio-code-8b3587d12823

### Docker
* https://docs.docker.com/samples/dotnetcore/
