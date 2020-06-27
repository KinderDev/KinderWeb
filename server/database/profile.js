const knex = require('./connection');

module.exports = {
    getAll: () => {
        return knex('profile');
    },
    getOneById: id => {
        return knex('profile').where('profile.id', id).first();
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
