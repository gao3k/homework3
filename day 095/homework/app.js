// Main application logic
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('personForm');
    const peopleList = document.getElementById('peopleList');

    // Load existing people from localStorage
    const loadPeople = () => {
        const people = JSON.parse(localStorage.getItem('people') || '[]');
        peopleList.innerHTML = '';
        people.forEach(person => {
            peopleList.appendChild(createPersonCard(person));
        });
    };

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate personal ID
        const personalId = form.personalId.value;
        if (!validatePersonalId(personalId)) {
            alert('პირადი ნომერი უნდა შედგებოდეს 11 ციფრისგან');
            return;
        }

        // Validate email
        if (!validateEmail(form.email.value)) {
            alert('გთხოვთ შეიყვანოთ სწორი ელ. ფოსტის მისამართი');
            return;
        }

        const person = {
            id: generateId(),
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            age: parseInt(form.age.value),
            personalId: personalId,
            height: parseInt(form.height.value),
            email: form.email.value,
            description: form.description.value
        };

        // Save to localStorage
        const people = JSON.parse(localStorage.getItem('people') || '[]');
        people.push(person);
        localStorage.setItem('people', JSON.stringify(people));

        // Add to display
        peopleList.appendChild(createPersonCard(person));

        // Reset form
        form.reset();
    });

    // Initial load
    loadPeople();
});