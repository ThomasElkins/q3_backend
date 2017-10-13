exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {user_name: 'Thomas', city: 'Phoenix', hike_name: `Camelback`, comment: `Crowded on the weekends and holidays`},
        {user_name: 'Jess', city: 'Phoenix', hike_name: `South Mountain`, comment: `Great Views!`}
      ]);
    });
};
