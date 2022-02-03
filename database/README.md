## Database schemas

**Event**(EventID *PK*: integer, Name: string, Description: text, Price: float, StartTime: timestamp, Location: string, NumTick: integer, EventPictureLink: string)

**Category**(CategoryID: integer, Name: string)

**EventCategories**(EventID *PK, FK*: integer, CategoryID *PK, FK*: integer)

**User**(UserID *PK*: integer, Name: string, Mail: string)

**Purchase**(PurchaseID *PK*: integer, EventID *FK*: integer, UserID *FK*: integer, PurchaseTime: timestamp)

**Ticket**(TicketID *PK*: integer, PurchaseID *FK*: integer)