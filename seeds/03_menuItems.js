exports.seed = function (knex, Promise) {
  return knex("menuItems")
    .del()
    .then(() => {
      return knex("menuItems").insert([{
          name: "Breakfast Sandwich",
          price: 0650,
          description: "Egg, bacon, cheddar cheese on english muffin",
          type_id: 1,
          photo_url: "https://i.imgur.com/HjL2yaY.jpg"
        },
        {
          name: "B.L.T",
          price: 1100,
          description: "Bacon, greens, tomato jam, spicy aioli on toasted wheat bread",
          type_id: 2,
          photo_url: "https://i.imgur.com/DeANTDl.jpg"
        },
        {
          name: "Mixed Green Salad (v)",
          price: 0250,
          description: "Original/Cilantro Lime/Orange balsamic",
          type_id: 3,
          photo_url: "https://i.imgur.com/e4lUHTP.jpg"
        }
      ]);
    });
};