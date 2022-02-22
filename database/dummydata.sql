-- Events
INSERT INTO Events (EventID, ShortTitle, LongTitle, Description, Price, StartTime, Location, Address, Coordinates, NumTick, EventPictureLink)
VALUES (1, 'Queen', 'Queen Tour 2022', 'Watch Queens last tour live, it will be great! This is the last chance to see your favprite rock band live!!',
 829, '2022-06-11 22:00:00', 'Gröna Lund', 'Lilla Allmänna Gränd 9, 115 21 Stockholm', '59.3240585,18.097304', 3000, 'link');

INSERT INTO Events (EventID, ShortTitle, LongTitle, Description, Price, StartTime, Location, Address, Coordinates, NumTick, EventPictureLink)
VALUES (2, 'Veronica Maggio', 'Veronica - Live on Gröna Lund', 'Veronica Maggio is back at Gröna Lund! See her new album live, on a perfect June night in Swedens capital',
 429, '2022-06-21 22:00:00', 'Gröna Lund', 'Lilla Allmänna Gränd 9, 115 21 Stockholm', '59.3240585,18.097304', 3000, 'link');

INSERT INTO Events (EventID, ShortTitle, LongTitle, Description, Price, StartTime, Location, Address, Coordinates, NumTick, EventPictureLink)
VALUES (3, 'Fröken Julie', ' Strindbergs Fröken Julie - Parkteater', 'Se den klassiska pjäsen av August Strindberg framförd live i amfiteatern i Vitabergsparken',
 199, '2022-06-27 21:00:00', 'Vitabergsparken', 'Skånegatan, 116 38 Stockholm', '59.310747,18.091541', 200, 'link');

INSERT INTO Events (EventID, ShortTitle, LongTitle, Description, Price, StartTime, Location, Address, Coordinates, NumTick, EventPictureLink)
VALUES (4, 'Café Opera - Party', 'Private party at Café Opera', 'Very VIP, very secret. We are hosting a private event at Café Opera. dsvdv',
 149, '2022-07-01 22:00:00', 'Café Opera', 'Kungliga Operan, Karl XII:s torg', '59.3301464,18.0688807', 500, 'link');

INSERT INTO Events (EventID, ShortTitle, LongTitle, Description, Price, StartTime, Location, Address, Coordinates, NumTick, EventPictureLink)
VALUES (5, 'Film Festival, Cannes', 'The Film Festival in Cannes 2022', 'Very exclusive film festival, only the best movies win prizes here! See them in one of the most beautiful cities in France',
 399, '2022-06-15 13:00:00', 'Cannes', 'Palais des Festivals, Cannes, France', '43.5507813,7.0157735', 5000, 'link');

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