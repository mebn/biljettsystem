DROP TABLE IF EXISTS Event CASCADE;
DROP TABLE IF EXISTS User CASCADE;
DROP TABLE IF EXISTS Purchase CASCADE;
DROP TABLE IF EXISTS Ticket CASCADE;

CREATE TABLE Event (
    EventID SERIAL PRIMARY KEY,
    Name varchar(255) NOT NULL,
    Description text,
    Price double precision NOT NULL,
    StartTime timestamp NOT NULL,
    Location varchar(255) NOT NULL,
    NumTick int NOT NULL,
    EventPictureLink varchar(255),
    Category int
);

CREATE TABLE Category (
    CategoryID SERIAL PRIMARY KEY,
    Name varchar(255) NOT NULL
);

CREATE TABLE User (
    UserID SERIAL PRIMARY KEY,
    Mail varchar(255) NOT NULL
);

CREATE TABLE Purchase (
    PurchaseID SERIAL PRIMARY KEY,
    EventID int REFERENCES Event(EventID) NOT NULL ON UPDATE CASCADE ON DELETE CASCADE,
    UserID int REFERENCES User(UserID) NOT NULL ON UPDATE CASCADE ON DELETE CASCADE,
    PurchaseTime timestamp NOT NULL
);

CREATE TABLE Ticket (
    TicketID SERIAL PRIMARY KEY,
    PurchaseID int REFERENCES Purchase(PurchaseID) NOT NULL ON UPDATE CASCADE ON DELETE CASCADE,
    UserID int REFERENCES User(UserID) NOT NULL ON UPDATE CASCADE ON DELETE CASCADE
);
