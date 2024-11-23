// Function to show a specific section and hide others
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section) => {
        section.classList.remove('active');
    });

    // Show the selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Show the first section (e.g., "Publications") by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('publications');
});
