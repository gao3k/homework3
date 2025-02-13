function getElementByIdClone(id) {
    // მოძებნეთ ელემენტი id-ის მიხედვით
    var element = document.querySelector(`#${id}`);
    // თუ ელემენტი მოიძებნა, დააბრუნეთ იგი
    if (element) {
        return element;
    }
    // თუ ელემენტი ვერ მოიძებნა, დააბრუნეთ null
    return null;
}

// გამოყენების მაგალითი:
var myElement = getElementByIdClone('myParagraph');
if (myElement) {
    console.log('ელემენტი მოიძებნა:', myElement);
} else {
    console.log('ელემენტი ვერ მოიძებნა');
}
