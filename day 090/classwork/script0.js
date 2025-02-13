let friends = new Map();
friends.set("nika", 16);
friends.set("giorgi",15 );
friends.set("dachi", 15);

console.log("Map ზომა:", friends.size);
friends.forEach((age, name) => {
    console.log(`${name}: ${age}`);
});
