// Sample data for the shop and personal collection
const shopBooks = new Map();
const personalCollection = new Map();

// Sample books
shopBooks.set(1, { title: "წიგნი 1", author: "ავტორი 1", genre: "ჟანრი 1", price: 10.99, description: "აღწერა 1", addedToCollection: false });
shopBooks.set(2, { title: "წიგნი 2", author: "ავტორი 2", genre: "ჟანრი 2", price: 15.99, description: "აღწერა 2", addedToCollection: false });

// Event listeners for navigation links
document.getElementById('shopLink').addEventListener('click', displayShop);
document.getElementById('collectionLink').addEventListener('click', displayCollection);

// Function to display shop books
function displayShop() {
    const content = document.getElementById('content');
    content.innerHTML = '<h2>მაღაზია</h2>';
    shopBooks.forEach((book, id) => {
        const bookCard = createBookCard(book, id, 'addToCollection');
        content.appendChild(bookCard);
    });
}

// Function to display personal collection
function displayCollection() {
    const content = document.getElementById('content');
    content.innerHTML = '<h2>პირადი კოლექცია</h2>';
    personalCollection.forEach((book, id) => {
        const bookCard = createBookCard(book, id, 'removeFromCollection');
        content.appendChild(bookCard);
    });
}

// Function to create book cards
function createBookCard(book, id, action) {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p>ავტორი: ${book.author}</p>
        <p>ჟანრი: ${book.genre}</p>
        <p>ფასი: $${book.price}</p>
        <p>${book.description}</p>
        <button onclick="${action}(${id})">${action === 'addToCollection' ? 'კოლექციაში დამატება' : 'წაშლა კოლექციიდან'}</button>
    `;
    return bookCard;
}

// Function to add book to personal collection
function addToCollection(id) {
    const book = shopBooks.get(id);
    if (book) {
        personalCollection.set(id, book);
        book.addedToCollection = true;
        alert(`${book.title} დამატებულია პირად კოლექციაში`);
    }
}

// Function to remove book from personal collection
function removeFromCollection(id) {
    const book = personalCollection.get(id);
    if (book) {
        personalCollection.delete(id);
        book.addedToCollection = false;
        alert(`${book.title} წაშლილია პირადი კოლექციიდან`);
    }
}

// Initial display
displayShop();
