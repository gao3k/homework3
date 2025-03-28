function ნაკრებებისგაერთიანება(sets) {
    const unionSet = new Set();
    sets.forEach(set => {
        set.forEach(value => {
            unionSet.add(value);
        });
    });
    return unionSet;
}

// გამოყენება
console.log(ნაკრებებისგაერთიანება([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])])); 
// შედეგი: Set {1, 2, 3, 4}
function სიმეტრიულისხვაობა(setA, setB) {
    const symmetricDifference = new Set(setA);
    setB.forEach(value => {
        if (symmetricDifference.has(value)) {
            symmetricDifference.delete(value);
        } else {
            symmetricDifference.add(value);
        }
    });
    return symmetricDifference;
}

// გამოყენება
console.log(სიმეტრიულისხვაობა(new Set([1, 2, 3]), new Set([3, 4, 5])));
// შედეგი: Set {1, 2, 4, 5}
function არისქვნენაკრები(subset, set) {
    for (let value of subset) {
        if (!set.has(value)) {
            return false;
        }
    }
    return true;
}

// გამოყენება
console.log(არისქვნენაკრები(new Set([1, 2]), new Set([1, 2, 3])));
// შედეგი: true
function სიმბოლოსიხშირე(str) {
    const frequencyMap = new Map();
    for (let char of str) {
        if (frequencyMap.has(char)) {
            frequencyMap.set(char, frequencyMap.get(char) + 1);
        } else {
            frequencyMap.set(char, 1);
        }
    }
    return frequencyMap;
}

// გამოყენება
console.log(სიმბოლოსიხშირე("hello"));
// შედეგი: Map {'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1}
function ინვერტირებულრუკა(map) {
    const invertedMap = new Map();
    map.forEach((value, key) => {
        invertedMap.set(value, key);
    });
    return invertedMap;
}

// გამოყენება
console.log(ინვერტირებულრუკა(new Map([['a', 1], ['b', 2], ['c', 1]])));
// შედეგი: Map {1 => 'c', 2 => 'b'}
function მაქსიმალურისგასაღებები(map) {
    let maxVal = -Infinity;
    const keysWithMaxVal = [];
    map.forEach((value, key) => {
        if (value > maxVal) {
            maxVal = value;
            keysWithMaxVal.length = 0;
            keysWithMaxVal.push(key);
        } else if (value === maxVal) {
            keysWithMaxVal.push(key);
        }
    });
    return keysWithMaxVal;
}

// გამოყენება
console.log(მაქსიმალურისგასაღებები(new Map([['a', 5], ['b', 3], ['c', 5]])));
// შედეგი: ['a', 'c']
