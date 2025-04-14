import { fetchRecipes, displayRecipes, loadRecipeData } from './recipes.js';

// Initialize when page loads
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Preload recipe data
        await loadRecipeData();
        
        // Check for URL search parameters
        const urlParams = new URLSearchParams(window.location.search);
        const searchTerm = urlParams.get('search') || '';
        const dietFilter = urlParams.get('diet') || '';
        const timeFilter = urlParams.get('time') || '';
        
        // Set initial form values
        document.getElementById('search-term').value = searchTerm;
        document.getElementById('diet-filter').value = dietFilter;
        document.getElementById('time-filter').value = timeFilter;
        
        // Load recipes if search term exists
        if (searchTerm) {
            await loadRecipes(searchTerm, dietFilter, timeFilter);
        }
        
        // Set up filter button
        document.getElementById('apply-filters').addEventListener('click', applyFilters);
        
        // Set current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();
        
    } catch (error) {
        console.error('Initialization error:', error);
        document.getElementById('recipe-results').innerHTML = `
            <div class="error-message">
                <p>Error loading recipe data. Please try refreshing the page.</p>
            </div>
        `;
    }
});

// ... (rest of your browse.js file remains the same)


async function loadRecipes(query, diet, time) {
    console.log(`Searching for: ${query}, Diet: ${diet}, Time: ${time}`);
    
    try {
        const recipes = await fetchRecipes(query, { diet, time });
        console.log("Recipes found:", recipes);
        
        if (!recipes || recipes.length === 0) {
            console.log("No recipes found for search criteria");
        }
        
        displayRecipes(recipes, document.getElementById('recipe-results'));
    } catch (error) {
        console.error("Search error:", error);
        document.getElementById('recipe-results').innerHTML = `
            <div class="error">
                <p>Error loading recipes: ${error.message}</p>
                <button onclick="window.location.reload()">Try Again</button>
            </div>
        `;
    }
}