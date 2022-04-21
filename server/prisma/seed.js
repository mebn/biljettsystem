const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const events = [
  {
    shortTitle: "Queen",
    longTitle: "Queen Tour 2022",
    description:
      "Watch Queens last tour live, it will be great! This is the last chance to see your favourite rock band live!!",
    startTime: new Date("2022-06-11 22:00:00"),
    eventPictureLink: "/public/images/eventBanner.jpeg",
    location: {
      lat: 59.3240585,
      lng: 18.097304,
      title: "Gröna Lund",
      address: "Lilla Allmänna Gränd 9, 115 21 Stockholm",
    },
    ticketTypes: [
      {
        title: "Adult",
        description: "This is an adult ticket, 18+",
        price: 400,
        numTickets: 200,
        standard: true,
      },
      {
        title: "Child",
        description: "Only for children under 18",
        price: 200,
        numTickets: 200,
      },
    ],
  },
  {
    shortTitle: "Veronica Maggio",
    longTitle: "Veronica - Live on Gröna Lund",
    description: `### **Veronica Maggio är tillbaka på Gröna Lund!**

Se hennes nya album live, en perfekt junikväll i Sveriges huvudstad.
    
"Vissa turnéer vill jag återuppfinna allt, både visuellt och musikaliskt. I år är ett sådant år! Jag längtar efter mycket av allting. Jag vill känna att spelningen är en egen värld och att det finns ett tydligt före- och efter när vi spelar" -- **Veronica Maggio**.

### Om Veronica Maggio
    
Veronica har sedan debuten 2006 höjts till skyarna av journalister och fans och nått otroliga kommersiella framgångar med sina sex kritikerrosade album, samtliga platina. Hon har slagit rekord på Spotify med över 1 miljard streams och är därmed den första artisten någonsin vars låtkatalog på svenska når den magiska milstolpen.`,
    price: 429,
    startTime: new Date("2022-06-21 22:00:00"),
    eventPictureLink: "/public/images/eventBanner.jpeg",
    location: {
      lat: 59.3240585,
      lng: 18.097304,
      title: "Gröna Lund",
      address: "Lilla Allmänna Gränd 9, 115 21 Stockholm",
    },
    ticketTypes: [
      {
        title: "Adult",
        description: "This is an adult ticket, 18+",
        price: 600,
        numTickets: 200,
        standard: true,
      },
      {
        title: "Child",
        description: "Only for children under 18",
        price: 400,
        numTickets: 200,
      },
    ],
  },
  {
    shortTitle: "Fröken Julie",
    longTitle: " Strindbergs Fröken Julie - Parkteater",
    description:
      "Se den klassiska pjäsen av August Strindberg framförd live i amfiteatern i Vitabergsparken",
    startTime: new Date("2022-06-27 21:00:00"),
    eventPictureLink: "/public/images/eventBanner.jpeg",
    location: {
      lat: 59.310747,
      lng: 18.091541,
      title: "Vitabergsparken",
      address: "Skånegatan, 116 38 Stockholm",
    },
    ticketTypes: [
      {
        title: "Adult",
        description: "This is an adult ticket, 18+",
        price: 600,
        numTickets: 200,
        standard: true,
      },
      {
        title: "Child",
        description: "Only for children under 18",
        price: 400,
        numTickets: 200,
      },
      {
        title: "VIP",
        description: "Very exclusive, limited stock",
        price: 1200,
        numTickets: 10,
      },
    ],
  },
  {
    shortTitle: "Café Opera - Party",
    longTitle: "Private party at Café Opera",
    description:
      "Very VIP, very secret. We are hosting a private event at Café Opera. dsvdv",
    startTime: new Date("2022-07-01 22:00:00"),
    eventPictureLink: "/public/images/eventBanner.jpeg",
    location: {
      lat: 59.3301464,
      lng: 18.0688807,
      title: "Café Opera",
      address: "Kungliga Operan, Karl XII:s torg",
    },
    ticketTypes: [
      {
        title: "Adult",
        description: "This is an adult ticket, 18+",
        price: 600,
        numTickets: 200,
        standard: true,
      },
      {
        title: "Child",
        description: "Only for children under 18",
        price: 400,
        numTickets: 200,
      },
    ],
  },
  {
    shortTitle: "Film Festival, Cannes",
    longTitle: "The Film Festival in Cannes 2022",
    description:
      "Very exclusive film festival, only the best movies win prizes here! See them in one of the most beautiful cities in France",
    startTime: new Date("2022-06-15 13:00:00"),
    eventPictureLink: "/public/images/eventBanner.jpeg",
    location: {
      lat: 43.5507813,
      lng: 7.0157735,
      title: "Cannes",
      address: "Palais des Festivals, Cannes, France",
    },
    ticketTypes: [
      {
        title: "Adult",
        description: "This is an adult ticket, 18+",
        price: 600,
        numTickets: 200,
        standard: true,
      },
      {
        title: "Child",
        description: "Only for children under 18",
        price: 400,
        numTickets: 200,
      },
    ],
  },
];

const users = [
  { name: "Lisa A", email: "lisa01@gmail.com" },
  { name: "Lisa B", email: "lisa02@gmail.com" },
  { name: "Lisa C", email: "lisa03@gmail.com" },
];

async function main() {
  const createdEvents = await prisma.$transaction(
    events.map((event) =>
      prisma.event.create({
        data: {
          shortTitle: event.shortTitle,
          longTitle: event.longTitle,
          description: event.description,
          startTime: event.startTime,
          eventPictureLink: event.eventPictureLink,
          location: {
            create: event.location,
          },
          ticketTypes: {
            createMany: { data: event.ticketTypes },
          },
        },
        include: {
          ticketTypes: true,
        },
      })
    )
  );

  const createdUsers = await prisma.$transaction(
    users.map((user) => prisma.user.create({ data: user }))
  );

  const orders = [
    {
      event: { connect: { id: createdEvents[0].id } },
      user: { connect: { id: createdUsers[0].id } },
      purchaseTime: new Date("2022-02-27 21:00:00"),
      tickets: {
        createMany: {
          data: [
            { ticketTypeId: createdEvents[0].ticketTypes[0].id },
            { ticketTypeId: createdEvents[0].ticketTypes[0].id },
            { ticketTypeId: createdEvents[0].ticketTypes[0].id },
            { ticketTypeId: createdEvents[0].ticketTypes[1].id },
          ],
        },
      },
    },
  ];

  await prisma.$transaction(
    orders.map((order) => prisma.order.create({ data: order }))
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
