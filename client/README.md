# Client
ReactJS SPA app.

## How to run
### Install programs
Install NodeJS [here](https://nodejs.org/en/).

### Install packages and run
1. Install node modules: `npm i`.
1. Start the client: `npm start`.
1. Server is now running at port `3000` and can be accessed on http://localhost:3000.

### Docker
1. Build docker image: `docker build -t pvk_client:1.0.0 .`. `1.0.0` can be replaced with another version.
1. Start detached docker container: `docker run -d -p 3000:3000 --name pvk_client pvk_client:1.0.0`.
1. Stop docker container from running: `docker stop pvk_client`.
1. Server is now running at port `3000` and can be accessed on http://localhost:3000.

## Resources
### ReactJS
* https://reactjs.org/
* https://www.w3schools.com/react/

### Routing and SPA
* https://reactrouter.com/docs/en/v6/getting-started/tutorial

### API calls
* [Hooks](https://reactjs.org/docs/hooks-intro.html) (states without classes)
* https://youtu.be/bYFYF2GnMy8 (part 1-3)
