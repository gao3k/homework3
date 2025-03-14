// Statistic კლასი
class Statistic {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    render() {
        const statElement = document.createElement('div');
        statElement.classList.add('stat');
        statElement.innerHTML = `<strong>${this.name}</strong>: ${this.value}`;
        return statElement;
    }
}

// სტატისტიკების სია
const statistics = [
    new Statistic("Users", 1500),
    new Statistic("Posts", 432),
    new Statistic("Comments", 1980)
];

// კონტეინერი, სადაც რენდერინგი მოხდება
const container = document.getElementById('statistics-container');

// სტატისტიკების დამატება HTML-ში
statistics.forEach(stat => container.appendChild(stat.render()));
