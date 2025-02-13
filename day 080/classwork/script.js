document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('portfolioForm');
    const preview = document.getElementById('previewContent');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        updatePreview();
    });

    // Update preview as user types
    form.addEventListener('input', function() {
        updatePreview();
    });

    function updatePreview() {
        const formData = {
            fullName: document.getElementById('fullName').value,
            profession: document.getElementById('profession').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            website: document.getElementById('website').value,
            bio: document.getElementById('bio').value,
            skills: document.getElementById('skills').value
        };

        const skillsArray = formData.skills
            .split(',')
            .map(skill => skill.trim())
            .filter(skill => skill);

        const skillsHtml = skillsArray.length
            ? `
                <h3>უნარები</h3>
                <div class="skills-list">
                    ${skillsArray.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            `
            : '';

        preview.innerHTML = `
            <h3>${formData.fullName || 'სახელი გვარი'}</h3>
            <p><strong>პროფესია:</strong> ${formData.profession || '-'}</p>
            <p><strong>ელ-ფოსტა:</strong> ${formData.email || '-'}</p>
            <p><strong>ტელეფონი:</strong> ${formData.phone || '-'}</p>
            <p><strong>ვებსაიტი:</strong> ${formData.website ? `<a href="${formData.website}" target="_blank">${formData.website}</a>` : '-'}</p>
            
            <h3>ჩემს შესახებ</h3>
            <p>${formData.bio || 'ინფორმაცია არ არის შევსებული'}</p>
            
            ${skillsHtml}
        `;
    }

    // Initial preview
    updatePreview();
});