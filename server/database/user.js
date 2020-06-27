const knex = require('./connection');

module.exports = {
    getAll: () => {
        return knex('user');
    },
    getOneByName: name => {
        return knex('user').where('name', name).first();
    },
    create: user => 
        return knex('user').insert(user, 'id').then(ids => {
            return ids[0];
        });
    }
}
