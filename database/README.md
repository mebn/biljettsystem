# Database
PostgreSQL database.

## Database schemas

**Event**(EventID *PK*: integer, Name: string, Description: text, Price: float, StartTime: timestamp, Location: string, NumTick: integer, EventPictureLink: string)

**Category**(CategoryID: integer, Name: string)

**EventCategories**(EventID *PK, FK*: integer, CategoryID *PK, FK*: integer)

**User**(UserID *PK*: integer, Name: string, Mail: string)

**Purchase**(PurchaseID *PK*: integer, EventID *FK*: integer, UserID *FK*: integer, PurchaseTime: timestamp)

**Ticket**(TicketID *PK*: integer, PurchaseID *FK*: integer)

## How to run
The easiest way to run the database is with `docker-compose up db` from the root directory.

### Access the database
Once the database is up and running, you can access it in another terminal window via these commands:
1. Find the right container id: `docker ps -a` and look for the one with postgres:14, eg. `9e0fdb8a39d0`.
1. Enter interactive shell: `docker exec -it 9e0fdb8a39d0 bash`. Replace `9e0fdb8a39d0` with your container id.
1. Start psql: `psql -U postgres`.
1. Switch to the correct database: `\c pvk_db_dummy`.

When you are done, exit out of the terminal with `ctrl+c` and run `docker-compose down db`.

To start over with fresh data, delete the `pgdata/` folder and run `docker-compose up db --build`.