exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table){
    table.increments();
    table.string('user_name');
    table.string('city');
    table.string('hike_name');
    table.string('comment');
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
