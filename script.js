document.addEventListener('DOMContentLoaded', () => {
    const inputs = {
        fullName: document.getElementById('fullName'),
        jobTitle: document.getElementById('jobTitle'),
        email: document.getElementById('email'),
        phone: document.getElementById('phone'),
        location: document.getElementById('location'),
        linkedin: document.getElementById('linkedin'),
        github: document.getElementById('github'),
        portfolio: document.getElementById('portfolio'),
        summary: document.getElementById('summary'),
        skills: document.getElementById('skills'),
        projects: document.getElementById('projects'),
        certificates: document.getElementById('certificates'),
        languages: document.getElementById('languages'),
        hobbies: document.getElementById('hobbies'),
    };

    const previews = {
        fullName: document.getElementById('previewName'),
        jobTitle: document.getElementById('previewJob'),
        email: document.getElementById('previewEmail'),
        phone: document.getElementById('previewPhone'),
        location: document.getElementById('previewLocation'),
        linkedin: document.getElementById('previewLinkedin'),
        github: document.getElementById('previewGithub'),
        portfolio: document.getElementById('previewPortfolio'),
        summary: document.getElementById('previewSummary'),
        skills: document.getElementById('previewSkills'),
        projects: document.getElementById('previewProjects'),
        certificates: document.getElementById('previewCertificates'),
        languages: document.getElementById('previewLanguages'),
        hobbies: document.getElementById('previewHobbies'),
    };

    const profileImage = document.getElementById('profileImage');
    const previewImage = document.getElementById('previewImage');
    const accentColor = document.getElementById('accentColor');
    const themeBtn = document.getElementById('themeBtn');
    const downloadBtn = document.getElementById('downloadBtn');

    const educationBox = document.getElementById('educationBox');
    const addEducationBtn = document.getElementById('addEducation');
    const previewEducation = document.getElementById('previewEducation');

    const experienceBox = document.getElementById('experienceBox');
    const addExperienceBtn = document.getElementById('addExperience');
    const previewExperience = document.getElementById('previewExperience');

    const syncText = (inputEl, previewEl, fallbackText = '') => {
        inputEl.addEventListener('input', () => {
            previewEl.textContent = inputEl.value.trim() || fallbackText;
        });
    };

    const syncList = (textareaEl, previewListEl) => {
        textareaEl.addEventListener('input', () => {
            const items = textareaEl.value.split('\n').filter(item => item.trim() !== '');
            previewListEl.innerHTML = items.map(item => `<li>${item.trim()}</li>`).join('');
            
            const section = previewListEl.closest('section');
            if (section) section.style.display = items.length ? 'block' : 'none';
        });
    };

    syncText(inputs.fullName, previews.fullName, 'Your Name');
    syncText(inputs.jobTitle, previews.jobTitle, 'Professional Title');
    syncText(inputs.summary, previews.summary);
    
    const syncContact = (inputEl, previewEl, iconClass) => {
        inputEl.addEventListener('input', () => {
            const val = inputEl.value.trim();
            if (val) {
                previewEl.innerHTML = `<i class="${iconClass}"></i> ${val}`;
                previewEl.style.display = 'inline-block';
            } else {
                previewEl.innerHTML = '';
                previewEl.style.display = 'none';
            }
        });
    };

    syncContact(inputs.email, previews.email, 'fa-solid fa-envelope');
    syncContact(inputs.phone, previews.phone, 'fa-solid fa-phone');
    syncContact(inputs.location, previews.location, 'fa-solid fa-location-dot');
    syncContact(inputs.linkedin, previews.linkedin, 'fa-brands fa-linkedin');
    syncContact(inputs.github, previews.github, 'fa-brands fa-github');
    syncContact(inputs.portfolio, previews.portfolio, 'fa-solid fa-globe');

    syncList(inputs.skills, previews.skills);
    syncList(inputs.projects, previews.projects);
    syncList(inputs.certificates, previews.certificates);
    syncList(inputs.languages, previews.languages);
    syncList(inputs.hobbies, previews.hobbies);

    profileImage.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                previewImage.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    const updateEducationPreview = () => {
        const educationalBlocks = educationBox.querySelectorAll('.education');
        previewEducation.innerHTML = '';
        let hasData = false;

        educationalBlocks.forEach(block => {
            const college = block.querySelector('.college').value.trim();
            const degree = block.querySelector('.degree').value.trim();
            const year = block.querySelector('.year').value.trim();

            if (college || degree || year) {
                hasData = true;
                const eduItem = document.createElement('div');
                eduItem.className = 'preview-item';
                eduItem.innerHTML = `
                    <div style="display: flex; justify-content: space-between; font-weight: 600;">
                        <span>${degree}</span>
                        <span style="font-weight: 400; font-size: 0.9em;">${year}</span>
                    </div>
                    <div style="font-style: italic; color: var(--text-light, #666);">${college}</div>
                `;
                previewEducation.appendChild(eduItem);
            }
        });

        previewEducation.closest('section').style.display = hasData ? 'block' : 'none';
    };

    addEducationBtn.addEventListener('click', () => {
        const newEdu = document.createElement('div');
        newEdu.className = 'education';
        newEdu.innerHTML = `
            <input type="text" class="college" placeholder="College">
            <input type="text" class="degree" placeholder="Degree">
            <input type="text" class="year" placeholder="2026">
            <button class="remove-btn" type="button"><i class="fa-solid fa-trash"></i></button>
        `;
        educationBox.appendChild(newEdu);
        
        newEdu.querySelectorAll('input').forEach(input => input.addEventListener('input', updateEducationPreview));
        newEdu.querySelector('.remove-btn').addEventListener('click', () => {
            newEdu.remove();
            updateEducationPreview();
        });
    });

    educationBox.querySelectorAll('input').forEach(input => input.addEventListener('input', updateEducationPreview));

    const updateExperiencePreview = () => {
        const experienceBlocks = experienceBox.querySelectorAll('.experience');
        previewExperience.innerHTML = '';
        let hasData = false;

        experienceBlocks.forEach(block => {
            const company = block.querySelector('.company').value.trim();
            const position = block.querySelector('.position').value.trim();
            const duration = block.querySelector('.duration').value.trim();
            const description = block.querySelector('.description').value.trim();

            if (company || position || duration || description) {
                hasData = true;
                const expItem = document.createElement('div');
                expItem.className = 'preview-item';
                
                const formattedDesc = description ? `<p style="margin-top: 4px; white-space: pre-line;">${description}</p>` : '';

                expItem.innerHTML = `
                    <div style="display: flex; justify-content: space-between; font-weight: 600;">
                        <span>${position}</span>
                        <span style="font-weight: 400; font-size: 0.9em;">${duration}</span>
                    </div>
                    <div style="font-style: italic; color: #2563eb;">${company}</div>
                    ${formattedDesc}
                `;
                previewExperience.appendChild(expItem);
            }
        });

        previewExperience.closest('section').style.display = hasData ? 'block' : 'none';
    };

    addExperienceBtn.addEventListener('click', () => {
        const newExp = document.createElement('div');
        newExp.className = 'experience';
        newExp.innerHTML = `
            <input type="text" class="company" placeholder="Company">
            <input type="text" class="position" placeholder="Position">
            <input type="text" class="duration" placeholder="2025 - Present">
            <textarea class="description" rows="3" placeholder="Describe your work..."></textarea>
            <button class="remove-btn" type="button"><i class="fa-solid fa-trash"></i></button>
        `;
        experienceBox.appendChild(newExp);

        newExp.querySelectorAll('input, textarea').forEach(el => el.addEventListener('input', updateExperiencePreview));
        newExp.querySelector('.remove-btn').addEventListener('click', () => {
            newExp.remove();
            updateExperiencePreview();
        });
    });

    experienceBox.querySelectorAll('input, textarea').forEach(el => el.addEventListener('input', updateExperiencePreview));

    accentColor.addEventListener('input', (e) => {
        const color = e.target.value;
        document.getElementById('resume').style.setProperty('--accent-color', color);
    });

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = themeBtn.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.className = 'fa-solid fa-sun';
        } else {
            icon.className = 'fa-solid fa-moon';
        }
    });

    downloadBtn.addEventListener('click', () => {
        window.print();
    });

    updateEducationPreview();
    updateExperiencePreview();
});