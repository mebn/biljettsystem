# Server
ASP.NET Core webAPI for cross platform RESTful API Server.

## How to run
The easiest way to run the server is with `docker-compose up` from the root directory. More info [here](/README.md).

### Install necessary programs
#### Alternative 1
Download and install `.NET Core` from [here](https://dotnet.microsoft.com/en-us/download/dotnet). (Has to be `.NET Core`, not `.NET x.x`)

#### Alternative 2
Install visual studio for [Windows](https://visualstudio.microsoft.com/vs/) or [macOS](https://visualstudio.microsoft.com/vs/mac/) where `dotnet` etc are build in.

### Start the server
1. Move to `~/biljettsystem/server`.
1. Run `dotnet run`.
1. Server is now running on port `7050` and can be accessed on http://localhost:7050.

You can use [postman](https://www.postman.com/downloads/) for API testing. Try, for example `localhost:7050/api/people` as a GET request, or simply enter the link on the browser. Alternatively use [swagger](http://localhost:7050/swagger) for API testing in browser.

### Docker
You don't have to do these steps.

1. Build docker image: `docker build -t pvk_server:1.0.0 .`. `1.0.0` can be replaced with another version.
1. Start detached docker container: `docker run -d -p 7050:80 --name pvk_server pvk_server:1.0.0`.
1. Stop docker container from running: `docker stop pvk_server`.
1. Server is now running on port `7050` and can be accessed on http://localhost:7050.

## Resources
### ASP.NET Core and WebApi
* https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-6.0&tabs=visual-studio-code
* https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-javascript?view=aspnetcore-6.0
* https://youtu.be/sWJayOop4k8
* https://www.youtube.com/watch?v=vN9NRqv7xmY

### Docker
* https://docs.docker.com/samples/dotnetcore/
