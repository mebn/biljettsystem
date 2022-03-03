# Database
PostgreSQL database.

## Database schemas

**Event**(EventID *PK*: integer, ShortTitle: string, LongTitle: string, Description: text, Price: float, StartTime: timestamp, Location: string, Address: string, Coordinates: point, NumTick: integer, EventPictureLink: string)

**Category**(CategoryID: integer, Name: string)

**EventCategories**(EventID *PK, FK*: integer, CategoryID *PK, FK*: integer)

**User**(UserID *PK*: integer, Name: string, Mail: string)

**Purchase**(PurchaseID *PK*: integer, EventID *FK*: integer, UserID *FK*: integer, PurchaseTime: timestamp)

**Ticket**(TicketID *PK*: integer, PurchaseID *FK*: integer)

## How to run
The easiest way to run the database is with `docker-compose up db` from the root directory.

When you are done, exit out of the terminal with `ctrl+c` and run `docker-compose down db`.

To start over with fresh data, delete the `pgdata/` folder and run `docker-compose up db --build`.

### Access the database
You have two options to access the db. If the first method doesn't work, try the second method.

#### Via script
1. Start the db (eg `docker-compose up db`).
1. In another terminal and from the root directory, run: `./database/openDB.sh`.

#### Manually
1. Start the db (eg `docker-compose up db`).
1. Find the right container id: `docker ps -a` and look for the one with postgres:14, eg. `9e0fdb8a39d0`.
1. Enter interactive shell: `docker exec -it 9e0fdb8a39d0 bash`. Replace `9e0fdb8a39d0` with your container id.
1. Start psql and go to the correct database: `psql -U postgres -d pvk_db_dummy`.
