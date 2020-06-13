const knex = require('./connection');

module.exports = {
    getAll: () => {
        return knex('profile');
    },
    create: profile => {
        return knex('profile').insert(profile, 'id').then(ids => {
            return ids[0];
        });
    },
    remove: id => {
        return knex('profile').where('id', id).del();
    }
}
