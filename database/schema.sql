DROP TABLE IF EXISTS Events CASCADE;
DROP TABLE IF EXISTS Categories CASCADE;
DROP TABLE IF EXISTS EventCategories CASCADE;
DROP TABLE IF EXISTS Users CASCADE;
DROP TABLE IF EXISTS Purchases CASCADE;
DROP TABLE IF EXISTS Tickets CASCADE;

CREATE TABLE Events (
    EventID SERIAL PRIMARY KEY,
    Title varchar(255) NOT NULL,
    Description text,
    Price double precision NOT NULL,
    StartTime timestamp NOT NULL,
    Location varchar(255) NOT NULL,
    NumTick int NOT NULL,
    EventPictureLink varchar(255)
);

CREATE TABLE Categories (
    CategoryID SERIAL PRIMARY KEY,
    Name varchar(255) NOT NULL
);

CREATE TABLE EventCategories (
    EventID int REFERENCES Events(EventID) ON UPDATE CASCADE ON DELETE CASCADE,
    CategoryID int REFERENCES Categories(CategoryID) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Users (
    UserID SERIAL PRIMARY KEY,
    Name varchar(255),
    Email varchar(255) NOT NULL
);

CREATE TABLE Purchases (
    PurchaseID SERIAL PRIMARY KEY,
    UserID int NOT NULL REFERENCES Users(UserID) ON UPDATE CASCADE ON DELETE CASCADE,
    EventID int NOT NULL REFERENCES Events(EventID) ON UPDATE CASCADE ON DELETE CASCADE,
    PurchaseTime timestamp NOT NULL
);

CREATE TABLE Tickets (
    TicketID SERIAL PRIMARY KEY,
    PurchaseID int NOT NULL REFERENCES Purchases(PurchaseID) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE VIEW AvailibleTickets AS (
    SELECT e.eventid, (e.numtick - count(p.eventid)) as availibletickets FROM events e
        INNER JOIN purchases p on e.eventid = p.eventid
        INNER JOIN tickets t on p.purchaseid = t.purchaseid
        GROUP BY e.eventid
);