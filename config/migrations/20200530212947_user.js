
exports.up = function(knex) {
	return knex.schema.createTable('user', table=> {
    	table.increments();
    	table.text('phone').unique().notNullable();
    	table.text('email').unique().notNullable();
    	table.text('name').notNullable();
    	table.datetime('date').notNullable();
    	table.boolean('is_active').notNullable().defaultTo(true);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('user'); 
};
