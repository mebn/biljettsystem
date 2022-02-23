-- Events
INSERT INTO Events (ShortTitle, LongTitle, Description, Price, StartTime, Location, Address, Coordinates, NumTick, EventPictureLink)
VALUES ('Queen', 'Queen Tour 2022', 'Watch Queens last tour live, it will be great! This is the last chance to see your favourite rock band live!!',
 829, '2022-06-11 22:00:00', 'Gröna Lund', 'Lilla Allmänna Gränd 9, 115 21 Stockholm', '59.3240585,18.097304', 3000, 'link');

INSERT INTO Events (ShortTitle, LongTitle, Description, Price, StartTime, Location, Address, Coordinates, NumTick, EventPictureLink)
VALUES ('Veronica Maggio', 'Veronica - Live on Gröna Lund', 'Veronica Maggio is back at Gröna Lund! See her new album live, on a perfect June night in Swedens capital',
 429, '2022-06-21 22:00:00', 'Gröna Lund', 'Lilla Allmänna Gränd 9, 115 21 Stockholm', '59.3240585,18.097304', 3000, 'link');

INSERT INTO Events (ShortTitle, LongTitle, Description, Price, StartTime, Location, Address, Coordinates, NumTick, EventPictureLink)
VALUES ('Fröken Julie', ' Strindbergs Fröken Julie - Parkteater', 'Se den klassiska pjäsen av August Strindberg framförd live i amfiteatern i Vitabergsparken',
 199, '2022-06-27 21:00:00', 'Vitabergsparken', 'Skånegatan, 116 38 Stockholm', '59.310747,18.091541', 200, 'link');

INSERT INTO Events (ShortTitle, LongTitle, Description, Price, StartTime, Location, Address, Coordinates, NumTick, EventPictureLink)
VALUES ('Café Opera - Party', 'Private party at Café Opera', 'Very VIP, very secret. We are hosting a private event at Café Opera. dsvdv',
 149, '2022-07-01 22:00:00', 'Café Opera', 'Kungliga Operan, Karl XII:s torg', '59.3301464,18.0688807', 500, 'link');

INSERT INTO Events (ShortTitle, LongTitle, Description, Price, StartTime, Location, Address, Coordinates, NumTick, EventPictureLink)
VALUES ('Film Festival, Cannes', 'The Film Festival in Cannes 2022', 'Very exclusive film festival, only the best movies win prizes here! See them in one of the most beautiful cities in France',
 399, '2022-06-15 13:00:00', 'Cannes', 'Palais des Festivals, Cannes, France', '43.5507813,7.0157735', 5000, 'link');

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