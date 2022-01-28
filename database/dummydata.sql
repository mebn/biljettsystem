-- Events
INSERT INTO Event (EventID, Name, Price, StartTime, EndTime, Location, NumTick)
VALUES (1, 'Queen Tour Consert', 829, '2022-06-11 22:00:00', '2022-06-12 02:00:00', 'Gröna Lund', 3000);

INSERT INTO Event (EventID, Name, Price, StartTime, EndTime, Location, NumTick)
VALUES (2, 'Veronica Maggio Consert', 429, '2022-06-21 22:00:00', '2022-06-22 02:00:00', 'Gröna Lund', 3000);

INSERT INTO Event (EventID, Name, Price, StartTime, EndTime, Location, NumTick)
VALUES (3, 'Park Theater - Fröken Julie', 199, '2022-06-27 21:00:00', '2022-06-27 23:00:00', 'Vitabergsparken', 200);

INSERT INTO Event (EventID, Name, Price, StartTime, EndTime, Location, NumTick)
VALUES (4, 'Private Party at Café Opera', 149, '2022-07-01 22:00:00', '2022-07-02 04:00:00', 'Café Opera', 500);

INSERT INTO Event (EventID, Name, Price, StartTime, EndTime, Location, NumTick)
VALUES (5, 'Film Festival', 399, '2022-06-15 13:00:00', '2022-06-19 13:00:00', 'Cannes', 5000);

-- Users

INSERT INTO User (UserID, Mail) VALUES (1, 'lisa01@gmail.se');

INSERT INTO User (UserID, Mail) VALUES (2, 'lisa02@gmail.se');

INSERT INTO User (UserID, Mail) VALUES (3, 'lisa03@gmail.se');

INSERT INTO User (UserID, Mail) VALUES (4, 'lisa04@gmail.se');

INSERT INTO User (UserID, Mail) VALUES (5, 'lisa05@gmail.se');


-- Purchases

INSERT INTO Purchase (PurchaseID, EventID, UserID, PurchaseTime, PaymentMethod) VALUES (
    1, 1, 1, '2022-02-27 21:00:00', Swish
);

INSERT INTO Purchase (PurchaseID, EventID, UserID, PurchaseTime, PaymentMethod) VALUES (
    2, 3, 2, '2022-02-27 21:00:00', Swish
);

INSERT INTO Purchase (PurchaseID, EventID, UserID, PurchaseTime, PaymentMethod) VALUES (
    3, 2, 4, '2022-02-27 21:00:00', Swish
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