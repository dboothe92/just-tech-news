const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
    foreign_key: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {User, Post};
