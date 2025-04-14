import { fetchRecipes, displayRecipes, loadRecipeData } from './recipes.js';

// Initialize when page loads
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Preload recipe data
        await loadRecipeData();
        
        // Load featured recipes
        const featuredRecipes = await fetchRecipes('', { diet: 'vegetarian' });
        displayRecipes(featuredRecipes.slice(0, 6), document.getElementById('featured-recipes'));
        
        // Set current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();
        
        // Set up search functionality
        document.getElementById('search-btn').addEventListener('click', () => {
            const query = document.getElementById('search-input').value.trim();
            if (query) {
                window.location.href = `browse.html?search=${encodeURIComponent(query)}`;
            }
        });
        
    } catch (error) {
        console.error('Initialization error:', error);
        document.getElementById('featured-recipes').innerHTML = `
            <div class="error-message">
                <p>Error loading featured recipes.</p>
            </div>
        `;
    }
});