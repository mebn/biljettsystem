## Users

Nå alla användare
```
GET /api/User
```
Reurnerar:
```json
[{
    "name": "Sven Svensson",
    ...
}]
```

Nå en specifik användare
GET /api/User/{id}


Events

Skapa Event Model (typ en objekt)

I EventController kommer vi definiera endpoints:

Få alla event
GET /api/Event

Få huvudkategorier och subkategorier
GET /api/Event/cat?{var1}
GET /api/Event/cat?{var1}/subcat?{var2}

Ett specifikt event
GET /api/Event/{id}

Få Event utefter date
GET ***

Få Event utefter location
GET /api/Event/location

Få Event utefter title (t.ex. artist eller lag)
GET /api/Event/title

Skicka Event till backend
POST /api/Event/


Purchases

Nå ett köp via purchaseID
GET /api/Purchase/{id}

Nå en biljett via ticketID
GET /api/uniqueTicket/{id}








