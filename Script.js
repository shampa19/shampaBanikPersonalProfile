// Function to show the selected section and hide others
function showSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('section');

    // Hide all sections
    sections.forEach((section) => {
        section.style.display = 'none';
    });

    // Show the selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

// Show the "About Me" section by default when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showSection('about');
});
