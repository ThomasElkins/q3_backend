exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {user_name: 'Thomas', city: 'Phoenix', hike_name: `Camelback`, comment: `Crowded on the weekends and holidays`},
        {user_name: `Jess`, city: `Phoenix`, hike_name: `McDowell Mtn`, comment: `Great Views!`},
        {user_name: `Mac`, city: `Tucson`, hike_name: `Cactus Forest`, comment: `So many cactus's (or is it cacti?) whatever they are awesome!`}
      ]);
    });
};
