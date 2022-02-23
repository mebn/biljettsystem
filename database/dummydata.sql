-- Events
INSERT INTO Events (Title, Description, Price, StartTime, Location, NumTick, EventPictureLink)
VALUES ('Queen Tour Consert', 'Watch Queens last tour live, it will be great',829, '2022-06-11 22:00:00', 'Gröna Lund', 3000, 'link');

INSERT INTO Events (Title, Description, Price, StartTime, Location, NumTick, EventPictureLink)
VALUES ('Veronica Maggio Consert', 'Veronica Maggio is back at Gröna Lund!',429, '2022-06-21 22:00:00', 'Gröna Lund', 3000, 'link');

INSERT INTO Events (Title, Description, Price, StartTime, Location, NumTick, EventPictureLink)
VALUES ('Park Theater - Fröken Julie', 'The classic play by August Strindberg',199, '2022-06-27 21:00:00', 'Vitabergsparken', 200, 'link');

INSERT INTO Events (Title, Description, Price, StartTime, Location, NumTick, EventPictureLink)
VALUES ('Private Party at Café Opera', 'Very VIP, very secret',149, '2022-07-01 22:00:00', 'Café Opera', 500, 'link');

INSERT INTO Events (Title, Description, Price, StartTime, Location, NumTick, EventPictureLink)
VALUES ('Film Festival', 'Very exclusive film festival', 399, '2022-06-15 13:00:00', 'Cannes', 5000, 'link');

-- Categories

INSERT INTO Categories (Name) VALUES ('Music');

INSERT INTO Categories (Name) VALUES ('Theater');

INSERT INTO Categories (Name) VALUES ('Party');

INSERT INTO Categories (Name) VALUES ('Movies');

INSERT INTO Categories (Name) VALUES ('Festival');

-- EventCategories

INSERT INTO EventCategories (CategoryID) VALUES (1);

INSERT INTO EventCategories (CategoryID) VALUES (3);

INSERT INTO EventCategories (CategoryID) VALUES (1);

INSERT INTO EventCategories (CategoryID) VALUES (2);

INSERT INTO EventCategories (CategoryID) VALUES (3);

INSERT INTO EventCategories (CategoryID) VALUES (4);

INSERT INTO EventCategories (CategoryID) VALUES (5);

-- Users

INSERT INTO Users (Name, Email) VALUES ('Lisa A', 'lisa01@gmail.se');

INSERT INTO Users (Name, Email) VALUES ('Lisa B', 'lisa02@gmail.se');

INSERT INTO Users (Name, Email) VALUES ('Lisa C', 'lisa03@gmail.se');

INSERT INTO Users (Name, Email) VALUES ('Lisa D', 'lisa04@gmail.se');

INSERT INTO Users (Name, Email) VALUES ('Lisa E', 'lisa05@gmail.se');


-- Purchases

INSERT INTO Purchases (EventID, UserID, PurchaseTime) 
VALUES (1, 1, '2022-02-27 21:00:00');

INSERT INTO Purchases (EventID, UserID, PurchaseTime) 
VALUES (3, 2, '2022-02-27 21:00:00');

INSERT INTO Purchases (EventID, UserID, PurchaseTime) 
VALUES (2, 4, '2022-02-27 21:00:00');

-- Tickets

INSERT INTO Tickets (PurchaseID) VALUES (1);

INSERT INTO Tickets (PurchaseID) VALUES (1);

INSERT INTO Tickets (PurchaseID) VALUES (1);

INSERT INTO Tickets (PurchaseID) VALUES (2);

INSERT INTO Tickets (PurchaseID) VALUES (2);

INSERT INTO Tickets (PurchaseID) VALUES (3);

INSERT INTO Tickets (PurchaseID) VALUES (3);