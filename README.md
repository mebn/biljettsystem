# biljettsystem

In order for the whole application to work, you need to run both client side and the server side.

# Client side
ReactJS SPA app.

## How to run
### Install NodeJS
Download NodeJS [here](https://nodejs.org/en/).
### Install packages and run
1. Move to `~/biljettsystem/client`
2. Install necessary packages: `npm i`
3. Start the client: `npm start` (will automatically open `localhost:3000` on browser, which is our website)


# Server side
ASP.NET Core webAPI for cross platform RESTful API Server.

## How to run
### Install necessary programs
#### Alternative 1
Download and install `.net core` from [here](https://dotnet.microsoft.com/en-us/download/dotnet).

#### Alternative 2
Install visual studio for [Windows](https://visualstudio.microsoft.com/vs/) or [macOS](https://visualstudio.microsoft.com/vs/mac/) where `dotnet` etc are build in.

### Start the server
1. Move to `~/biljettsystem/server`
2. Run `dotnet run`
3. Your server is now running at port 5000. I strongly recommend using POSTMAN for API testing. Try, for example `localhost:5000/api/people` as a GET request, or simply enter the link on the browser.

# When both frontend and backend is running in background...
You can now make server side actions via the client side UI. Navigate to API Testing. 

Note: POST and DELETE requests do not work well with demos like this, as our data is stored in a C# class and not in a database, causing our data to get wiped out every time we make a new call.


## Resources
* https://reactjs.org/
* https://www.w3schools.com/react/

### Routing and SPA
* https://reactrouter.com/docs/en/v6/getting-started/tutorial

### API calls
* [Hooks](https://reactjs.org/docs/hooks-intro.html), states without classes
* https://youtu.be/bYFYF2GnMy8 (part 1-3)

* https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-6.0&tabs=visual-studio-code

* https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-javascript?view=aspnetcore-6.0

* https://youtu.be/sWJayOop4k8

* https://www.youtube.com/watch?v=vN9NRqv7xmY

### Connect PostgreSQL
* https://medium.com/@agavatar/webapi-with-net-core-and-postgres-in-visual-studio-code-8b3587d12823

