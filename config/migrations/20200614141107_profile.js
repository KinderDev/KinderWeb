exports.up = function(knex) {
    return knex.schema.createTable('profile', table=> {
        table.increments();
        table.integer('user_id').notNullable();
        table.text('avatar').notNullable().defaultTo('0');
        table.text('birth_date').notNullable().defaultTo('');
        table.text('gender').notNullable().defaultTo('');
        table.text('about').notNullable().defaultTo('');

        table.foreign('user_id').references('user.id');
    });
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('profile'); 
};
