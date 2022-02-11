-- Events
INSERT INTO Events (EventID, Title, Description, Price, StartTime, Location, NumTick, EventPictureLink)
VALUES (1, 'Queen Tour Consert', 'Watch Queens last tour live, it will be great',829, '2022-06-11 22:00:00', 'Gröna Lund', 3000, 'link');

INSERT INTO Events (EventID, Title, Description, Price, StartTime, Location, NumTick, EventPictureLink)
VALUES (2, 'Veronica Maggio Consert', 'Veronica Maggio is back at Gröna Lund!',429, '2022-06-21 22:00:00', 'Gröna Lund', 3000, 'link');

INSERT INTO Events (EventID, Title, Description, Price, StartTime, Location, NumTick, EventPictureLink)
VALUES (3, 'Park Theater - Fröken Julie', 'The classic play by August Strindberg',199, '2022-06-27 21:00:00', 'Vitabergsparken', 200, 'link');

INSERT INTO Events (EventID, Title, Description, Price, StartTime, Location, NumTick, EventPictureLink)
VALUES (4, 'Private Party at Café Opera', 'Very VIP, very secret',149, '2022-07-01 22:00:00', 'Café Opera', 500, 'link');

INSERT INTO Events (EventID, Title, Description, Price, StartTime, Location, NumTick, EventPictureLink)
VALUES (5, 'Film Festival', 'Very exclusive film festival', 399, '2022-06-15 13:00:00', 'Cannes', 5000, 'link');

-- Categories

INSERT INTO Categories (CategoryID, Name) VALUES (1, 'Music');

INSERT INTO Categories (CategoryID, Name) VALUES (2, 'Theater');

INSERT INTO Categories (CategoryID, Name) VALUES (3, 'Party');

INSERT INTO Categories (CategoryID, Name) VALUES (4, 'Movies');

INSERT INTO Categories (CategoryID, Name) VALUES (5, 'Festival');

-- EventCategories

INSERT INTO EventCategories (EventID, CategoryID) VALUES (1, 1);

INSERT INTO EventCategories (EventID, CategoryID) VALUES (1, 3);

INSERT INTO EventCategories (EventID, CategoryID) VALUES (2, 1);

INSERT INTO EventCategories (EventID, CategoryID) VALUES (3, 2);

INSERT INTO EventCategories (EventID, CategoryID) VALUES (4, 3);

INSERT INTO EventCategories (EventID, CategoryID) VALUES (5, 4);

INSERT INTO EventCategories (EventID, CategoryID) VALUES (5, 5);

-- Users

INSERT INTO Users (UserID, Name, Email) VALUES (1, 'Lisa A', 'lisa01@gmail.se');

INSERT INTO Users (UserID, Name, Email) VALUES (2, 'Lisa B', 'lisa02@gmail.se');

INSERT INTO Users (UserID, Name, Email) VALUES (3, 'Lisa C', 'lisa03@gmail.se');

INSERT INTO Users (UserID, Name, Email) VALUES (4, 'Lisa D', 'lisa04@gmail.se');

INSERT INTO Users (UserID, Name, Email) VALUES (5, 'Lisa E', 'lisa05@gmail.se');


-- Purchases

INSERT INTO Purchases (PurchaseID, EventID, UserID, PurchaseTime) 
VALUES (1, 1, 1, '2022-02-27 21:00:00');

INSERT INTO Purchases (PurchaseID, EventID, UserID, PurchaseTime) 
VALUES (2, 3, 2, '2022-02-27 21:00:00');

INSERT INTO Purchases (PurchaseID, EventID, UserID, PurchaseTime) 
VALUES (3, 2, 4, '2022-02-27 21:00:00');

-- Tickets

INSERT INTO Tickets (TicketID, PurchaseID) VALUES (1, 1);

INSERT INTO Tickets (TicketID, PurchaseID) VALUES (2, 1);

INSERT INTO Tickets (TicketID, PurchaseID) VALUES (3, 1);

INSERT INTO Tickets (TicketID, PurchaseID) VALUES (4, 2);

INSERT INTO Tickets (TicketID, PurchaseID) VALUES (5, 2);

INSERT INTO Tickets (TicketID, PurchaseID) VALUES (6, 3);

INSERT INTO Tickets (TicketID, PurchaseID) VALUES (7, 3);