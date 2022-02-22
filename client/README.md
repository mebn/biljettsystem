# Client
ReactJS SPA app.

## How to run
The easiest way to run the client is with `docker-compose up client` from the root directory. More info [here](/README.md). Keep in mind hot reloading does not work on windows (some problem with WSL2). If you want that, keep reading.

### Install programs
Install NodeJS [here](https://nodejs.org/en/).

### Install packages and run
1. Install node modules: `npm i`.
1. Start the client: `npm start`.
1. Server is now running on port `3000` and can be accessed on http://localhost:3000.

### Docker
You don't have to do these steps.

1. Build docker image: `docker build -t pvk_client:1.0.0 .`. `1.0.0` can be replaced with another version.
1. Start detached docker container: `docker run -d -p 3000:3000 --name pvk_client pvk_client:1.0.0`.
1. Stop docker container from running: `docker stop pvk_client`.
1. Server is now running on port `3000` and can be accessed on http://localhost:3000.

## Resources
### ReactJS
* https://reactjs.org/
* https://www.w3schools.com/react/

### Routing and SPA
* https://reactrouter.com/docs/en/v6/getting-started/tutorial

### API calls
* [Hooks](https://reactjs.org/docs/hooks-intro.html) (states without classes)
* https://youtu.be/bYFYF2GnMy8 (part 1-3)
