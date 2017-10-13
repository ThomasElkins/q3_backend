exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {user_name: 'Thomas', hike_name: `Camelback`, comment: `Crowded on the weekends and holidays`},
      ]);
    });
};
