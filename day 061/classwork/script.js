let me = {
    name: 'saba',
    profession: 'playing sports',
    hobby: 'learning coding'
};

me.hobby = 'coding';

me.favoriteColor = 'Blue';

delete me.profession;

console.log('Entire Object:', me);

for (let key in me) {
    console.log(${key}: ${me[key]});
}