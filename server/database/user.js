const knex = require('./connection');

module.exports = {
    getAll: () => {
        return knex('user');
    },
    create: user => 
        return knex('user').insert(user, 'id').then(ids => {
            return ids[0];
        });
    }
}
