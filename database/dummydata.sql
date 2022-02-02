-- Categories

INSERT INTO Category (CategoryID, Name) VALUES (1, Music);

INSERT INTO Category (CategoryID, Name) VALUES (2, Theater);

INSERT INTO Category (CategoryID, Name) VALUES (3, Party);

INSERT INTO Category (CategoryID, Name) VALUES (4, Movies);

-- Events
INSERT INTO Event (EventID, Name, Description, Price, StartTime, Location, NumTick, EventPictureLink, CategoryID)
VALUES (1, 'Queen Tour Consert', 'Watch Queens last tour live, it will be great',829, '2022-06-11 22:00:00', 'Gröna Lund', 3000, 'link', 1);

INSERT INTO Event (EventID, Name, Description, Price, StartTime, Location, NumTick, EventPictureLink, CategoryID)
VALUES (2, 'Veronica Maggio Consert', 'Veronica Maggio is back at Gröna Lund!',429, '2022-06-21 22:00:00', 'Gröna Lund', 3000, 'link', 1);

INSERT INTO Event (EventID, Name, Description, Price, StartTime, Location, NumTick, EventPictureLink, CategoryID)
VALUES (3, 'Park Theater - Fröken Julie', 'The classic play by August Strindberg',199, '2022-06-27 21:00:00', 'Vitabergsparken', 200, 'link', 2);

INSERT INTO Event (EventID, Name, Description, Price, StartTime, Location, NumTick, EventPictureLink, CategoryID)
VALUES (4, 'Private Party at Café Opera', 'Very VIP, very secret',149, '2022-07-01 22:00:00', 'Café Opera', 500, 'link', 3);

INSERT INTO Event (EventID, Name, Description, Price, StartTime, Location, NumTick, EventPictureLink, CategoryID)
VALUES (5, 'Film Festival', 'Very exclusive film festival', 399, '2022-06-15 13:00:00', 'Cannes', 5000, 'link', 4);

-- Users

INSERT INTO User (UserID, Mail) VALUES (1, 'lisa01@gmail.se');

INSERT INTO User (UserID, Mail) VALUES (2, 'lisa02@gmail.se');

INSERT INTO User (UserID, Mail) VALUES (3, 'lisa03@gmail.se');

INSERT INTO User (UserID, Mail) VALUES (4, 'lisa04@gmail.se');

INSERT INTO User (UserID, Mail) VALUES (5, 'lisa05@gmail.se');


-- Purchases

INSERT INTO Purchase (PurchaseID, EventID, UserID, PurchaseTime) VALUES (
    1, 1, 1, '2022-02-27 21:00:00'
);

INSERT INTO Purchase (PurchaseID, EventID, UserID, PurchaseTime) VALUES (
    2, 3, 2, '2022-02-27 21:00:00'
);

INSERT INTO Purchase (PurchaseID, EventID, UserID, PurchaseTime) VALUES (
    3, 2, 4, '2022-02-27 21:00:00'
);

-- Tickets

INSERT INTO Ticket (TicketID, PurchaseID, UserID) 
VALUES (1, 1, 1);
INSERT INTO Ticket (TicketID, PurchaseID, UserID) 
VALUES (2, 1, 1);
INSERT INTO Ticket (TicketID, PurchaseID, UserID) 
VALUES (3, 1, 2);

INSERT INTO Ticket (TicketID, PurchaseID, UserID) 
VALUES (4, 2, 3);
INSERT INTO Ticket (TicketID, PurchaseID, UserID) 
VALUES (5, 2, 3);

INSERT INTO Ticket (TicketID, PurchaseID, UserID) 
VALUES (6, 3, 4);
INSERT INTO Ticket (TicketID, PurchaseID, UserID) 
VALUES (7, 3, 2);