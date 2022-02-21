# server
nodeJS express REST API

## How to run
The easiest way to run the server is with `docker-compose up server` from the root directory. More info [here](/README.md).

### Start the server
1. Move to `~/biljettsystem/server`.
1. In `server/db.js`, change `db` to `localhost`. `db` is used when running in docker container.
1. Run `nodemon index.js`.
1. Server is now running on port `7050` and can be accessed on http://localhost:7050.
