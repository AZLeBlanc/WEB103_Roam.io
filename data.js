const destinations = [
  {
    id: "paris",
    name: "Paris",
    country: "France",
    continent: "Europe",
    climate: "Temperate",
    bestTimeToVisit: "April to June",
    description:
      "Paris, a magnificent travel destination, is a city that has always been at the forefront of its time, it is a city that always embraces adversity head-on, whilst inspiring many. It is THE city that produced some of the world's most highly regarded artists of our time, that offers more than just luminescent beauty at night, and architectural genius during the day.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Paris_at_night_3-3-2013.jpg/960px-Paris_at_night_3-3-2013.jpg",
  },
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    continent: "Asia",
    climate: "Humid Subtropical",
    bestTimeToVisit: "March to May",
    description:
      "Tokyo is a city of controlled contradictions - ancient shrines tucked between glass towers, quiet tea houses a block from neon-lit arcades. It is relentlessly modern yet deeply rooted in tradition, a place where precision and creativity collide to produce one of the most livable, walkable, and endlessly fascinating cities on earth.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/1280px-Skyscrapers_of_Shinjuku_2009_January.jpg",
  },
  {
    id: "cape-town",
    name: "Cape Town",
    country: "South Africa",
    continent: "Africa",
    climate: "Mediterranean",
    bestTimeToVisit: "November to February",
    description:
      "Cape Town sits at the edge of a continent, framed by the flat-topped drama of Table Mountain on one side and two oceans on the other. It is a city of stunning contrasts - world-class beaches and rugged hiking, vibrant neighborhoods and vast winelands - all within reach of each other in a way few cities can match.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dassies%2C_Cape_Town_%28P1050367%29.jpg/960px-Dassies%2C_Cape_Town_%28P1050367%29.jpg",
  },
  {
    id: "new-york",
    name: "New York City",
    country: "United States",
    continent: "North America",
    climate: "Humid Continental",
    bestTimeToVisit: "September to November",
    description:
      "New York City doesn't ask for your attention - it simply commands it. From the density of Midtown to the brownstone-lined streets of Brooklyn, every neighborhood feels like its own city within a city. It is loud, relentless, and expensive, yet it remains the destination that most people, from most places, put at the top of their list at least once.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Southwest_corner_of_Central_Park%2C_looking_east%2C_NYC.jpg/1280px-Southwest_corner_of_Central_Park%2C_looking_east%2C_NYC.jpg",
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    continent: "Asia",
    climate: "Humid Subtropical",
    bestTimeToVisit: "March to May",
    description:
      "Where Tokyo races forward, Kyoto holds still. Japan's former imperial capital is a city of wooden temples, moss-covered stone gardens, and geisha districts that have changed little in centuries. It rewards slow travel - the kind where you wake early to beat the crowds to a bamboo grove, or linger over matcha in a tea house tucked behind a shrine gate.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Yasaka-dori_early_morning_with_street_lanterns_and_the_Tower_of_Yasaka_%28Hokan-ji_Temple%29%2C_Kyoto%2C_Japan.jpg/960px-Yasaka-dori_early_morning_with_street_lanterns_and_the_Tower_of_Yasaka_%28Hokan-ji_Temple%29%2C_Kyoto%2C_Japan.jpg",
  },
  {
    id: "buenos-aires",
    name: "Buenos Aires",
    country: "Argentina",
    continent: "South America",
    climate: "Humid Subtropical",
    bestTimeToVisit: "March to May",
    description:
      "Buenos Aires is the kind of city that gets under your skin. Equal parts European grandeur and Latin American energy, it is a place of wide boulevards, passionate tango, and late dinners that stretch past midnight. The city wears its history openly - in its architecture, its politics, and the pride of its people - and rewards those who take time to look past the surface.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Buenos_Aires_-_Puerto_Madero.jpg/960px-Buenos_Aires_-_Puerto_Madero.jpg",
  },
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    continent: "Europe",
    climate: "Mediterranean",
    bestTimeToVisit: "May to October",
    description:
      "Santorini is one of those places that looks exactly like the photographs - and somehow still manages to exceed them. The volcanic caldera, the white-washed cliffside villages, the sunsets over Oia that draw crowds every evening without apology. It is unapologetically beautiful, best experienced in the shoulder season when the island breathes a little easier.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Thira_%28Santorini%29_-_Fira-01.jpg/960px-Thira_%28Santorini%29_-_Fira-01.jpg",
  },
  {
    id: "marrakech",
    name: "Marrakech",
    country: "Morocco",
    continent: "Africa",
    climate: "Semi-Arid",
    bestTimeToVisit: "March to May",
    description:
      "Marrakech is sensory overload in the best possible way. The medina is a labyrinth of souks, riads, and street food stalls where the smell of spice mixes with leather and wood smoke. Djemaa el-Fna square transforms from a daytime market into a full-on open-air circus by nightfall. It is chaotic, colorful, and completely unlike anywhere else.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Marrakech_skyline_view.jpg/960px-Marrakech_skyline_view.jpg",
  },
];
module.exports = destinations;
