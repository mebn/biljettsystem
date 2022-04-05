const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const locations = [
  {
    lat: 59.3240585,
    lng: 18.097304,
    title: "Gröna Lund",
    address: "Lilla Allmänna Gränd 9, 115 21 Stockholm",
  },
  {
    lat: 59.3240585,
    lng: 18.097304,
    title: "Gröna Lund",
    address: "Lilla Allmänna Gränd 9, 115 21 Stockholm",
  },
  {
    lat: 59.310747,
    lng: 18.091541,
    title: "Vitabergsparken",
    address: "Skånegatan, 116 38 Stockholm",
  },
  {
    lat: 59.3301464,
    lng: 18.0688807,
    title: "Café Opera",
    address: "Kungliga Operan, Karl XII:s torg",
  },
  {
    lat: 43.5507813,
    lng: 7.0157735,
    title: "Cannes",
    address: "Palais des Festivals, Cannes, France",
  },
];

const events = [
  {
    shortTitle: "Queen",
    longTitle: "Queen Tour 2022",
    description:
      "Watch Queens last tour live, it will be great! This is the last chance to see your favourite rock band live!!",
    price: 829,
    startTime: new Date("2022-06-11 22:00:00"),
    numTick: 3000,
    eventPictureLink: "link",
  },
  {
    shortTitle: "Veronica Maggio",
    longTitle: "Veronica - Live on Gröna Lund",
    description:
      "Veronica Maggio is back at Gröna Lund! See her new album live, on a perfect June night in Swedens capital",
    price: 429,
    startTime: new Date("2022-06-21 22:00:00"),
    numTick: 3000,
    eventPictureLink: "link",
  },
  {
    shortTitle: "Fröken Julie",
    longTitle: " Strindbergs Fröken Julie - Parkteater",
    description:
      "Se den klassiska pjäsen av August Strindberg framförd live i amfiteatern i Vitabergsparken",
    price: 199,
    startTime: new Date("2022-06-27 21:00:00"),
    numTick: 200,
    eventPictureLink: "link",
  },
  {
    shortTitle: "Café Opera - Party",
    longTitle: "Private party at Café Opera",
    description:
      "Very VIP, very secret. We are hosting a private event at Café Opera. dsvdv",
    price: 149,
    startTime: new Date("2022-07-01 22:00:00"),
    numTick: 500,
    eventPictureLink: "link",
  },
  {
    shortTitle: "Film Festival, Cannes",
    longTitle: "The Film Festival in Cannes 2022",
    description:
      "Very exclusive film festival, only the best movies win prizes here! See them in one of the most beautiful cities in France",
    price: 399,
    startTime: new Date("2022-06-15 13:00:00"),
    numTick: 5000,
    eventPictureLink: "link",
  },
];

const users = [
  { name: "Lisa A", email: "lisa01@gmail.com" },
  { name: "Lisa B", email: "lisa02@gmail.com" },
  { name: "Lisa C", email: "lisa03@gmail.com" },
  { name: "Lisa D", email: "lisa04@gmail.com" },
  { name: "Lisa E", email: "lisa05@gmail.com" },
];

async function main() {

  const createdLocations = await prisma.$transaction(
      locations.map((location) => prisma.eventLocation.create({data: location}))
  )
  const eventsWithLocations = events.map((event, i) => ({...event, locationId: createdLocations[i].id}))

  const createdEvents = await prisma.$transaction(
    eventsWithLocations.map((event) => prisma.event.create({data: event}))
  )

  const createdUsers = await prisma.$transaction(
    users.map((user) => prisma.user.create({data: user}))
  )

  const purchases = [
    {
      eventId: createdEvents[0].id,
      userId: createdUsers[0].id,
      purchaseTime: new Date("2022-02-27 21:00:00"),
    },
    {
      eventId: createdEvents[1].id,
      userId: createdUsers[2].id,
      purchaseTime: new Date("2022-02-27 21:00:00"),
    },
    {
      eventId: createdEvents[2].id,
      userId: createdUsers[3].id,
      purchaseTime: new Date("2022-02-27 21:00:00"),
    },
  ]
  
  const createdPurchases = await prisma.$transaction(
    purchases.map((purchase) => prisma.purchase.create({data: purchase}))
  )


  const tickets = await prisma.ticket.createMany({
    data: [
      { purchaseId: createdPurchases[0].id },
      { purchaseId: createdPurchases[0].id },
      { purchaseId: createdPurchases[0].id },
      { purchaseId: createdPurchases[1].id },
      { purchaseId: createdPurchases[1].id },
      { purchaseId: createdPurchases[2].id },
      { purchaseId: createdPurchases[2].id },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
