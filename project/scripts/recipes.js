// recipes.js - Updated to use local JSON data
let allRecipes = [];

// Load recipes from JSON file
export async function loadRecipeData() {
    try {
        const response = await fetch('data/recipes.json');
        if (!response.ok) throw new Error('Failed to load recipes');
        const data = await response.json();
        allRecipes = data.recipes;
        return allRecipes;
    } catch (error) {
        console.error('Error loading recipes:', error);
        throw error;
    }
}

// Fetch recipes with filters
export async function fetchRecipes(query = '', filters = {}) {
    try {
        if (allRecipes.length === 0) await loadRecipeData();
        
        let results = [...allRecipes];
        
        // Apply search filter
        if (query) {
            const searchTerm = query.toLowerCase();
            results = results.filter(recipe => 
                recipe.title.toLowerCase().includes(searchTerm) ||
                recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm))
            );
        }
        
        // Apply diet filter
        if (filters.diet) {
            results = results.filter(recipe => 
                recipe.diets.includes(filters.diet)
            );
        }
        
        // Apply time filter
        if (filters.time) {
            results = results.filter(recipe => 
                recipe.readyInMinutes <= parseInt(filters.time)
            );
        }
        
        return results.slice(0, 15); // Limit to 15 results
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
}

// Get single recipe details
export async function getRecipeDetails(id) {
    try {
        if (allRecipes.length === 0) await loadRecipeData();
        return allRecipes.find(recipe => recipe.id === parseInt(id)) || null;
    } catch (error) {
        console.error('Error getting recipe details:', error);
        throw error;
    }
}

// Display function remains the same as before
export function displayRecipes(recipes, container) {
    // ... (keep your existing displayRecipes implementation)
}


