exports.up = function(knex) {
    return knex.schema.createTable('chat', table=> {
        table.increments();
        table.integer('user1_id').notNullable();
        table.integer('user2_id').notNullable();
        table.text('subject').notNullable().defaultTo('');
        table.text('status').notNullable().defaultTo('');
        table.datetime('timestamp').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('chat');
};
