## To see the API specification in swagger:
- Go to https://editor.swagger.io/
- Paste the ticketsAPI.yaml code into the editor! The API specification will appear on the right hand side of the page.


# biljettsystem
PVK Project 2022

# How to run
In order for the whole application to work, you need to run both client side and the server side.

## Client side
More information can be found [here](/client/README.md).

### Install NodeJS
Download NodeJS [here](https://nodejs.org/en/).

### Install packages and run
1. Change directory to `~/biljettsystem/client`
1. Install node modules: `npm i`
1. Start the client: `npm start` (will automatically open `localhost:3000` on browser, which is our website)

## Server side
More information can be found [here](/server/README.md).

### Install necessary programs
#### Alternative 1
Download and install `.net core` from [here](https://dotnet.microsoft.com/en-us/download/dotnet).

#### Alternative 2
Install visual studio for [Windows](https://visualstudio.microsoft.com/vs/) or [macOS](https://visualstudio.microsoft.com/vs/mac/) where `dotnet` etc are build in.

### Start the server
1. Move to `~/biljettsystem/server`
2. Run `dotnet run`
3. Your server is now running at port 5000. I strongly recommend using POSTMAN for API testing. Try, for example `localhost:5000/api/people` as a GET request, or simply enter the link on the browser.

## When both frontend and backend is running in background...
You can now make server side actions via the client side UI. Navigate to API Testing. 

Note: POST and DELETE requests do not work well with demos like this, as our data is stored in a C# class and not in a database, causing our data to get wiped out every time we make a new call. Further development here depends on database implementation.
