// Person card creation and management
function createPersonCard(person) {
    const card = document.createElement('div');
    card.className = 'person-card';
    card.dataset.id = person.id;

    card.innerHTML = `
        <div class="person-header">
            <h3 class="person-name">${person.firstName} ${person.lastName}</h3>
            <button class="delete-btn" onclick="deletePerson('${person.id}')">წაშლა</button>
        </div>
        <div class="person-info">
            <p><strong>პ/ნ:</strong> ${person.personalId}</p>
            <p><strong>ასაკი:</strong> ${person.age} წელი</p>
            <p><strong>სიმაღლე:</strong> ${person.height} სმ</p>
            <p><strong>ელ. ფოსტა:</strong> <a href="mailto:${person.email}">${person.email}</a></p>
            <p><strong>აღწერა:</strong><br>${person.description}</p>
        </div>
    `;

    return card;
}

function deletePerson(id) {
    const card = document.querySelector(`.person-card[data-id="${id}"]`);
    if (card) {
        card.remove();
        
        // Remove from localStorage
        const people = JSON.parse(localStorage.getItem('people') || '[]');
        const updatedPeople = people.filter(person => person.id !== id);
        localStorage.setItem('people', JSON.stringify(updatedPeople));
    }
}