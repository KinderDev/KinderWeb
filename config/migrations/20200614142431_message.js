exports.up = function(knex) {
    return knex.schema.createTable('message', table=> {
        table.increments();
        table.integer('chat_id').notNullable();
        table.bool('seen').notNullable();
        table.datetime('timestamp').notNullable();

        table.foreign('chat_id').references('chat.id');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('message');
};
