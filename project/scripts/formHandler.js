// Save recipe to localStorage
function saveUserRecipe(recipe) {
    try {
        // Generate unique ID
        recipe.id = `user-${Date.now()}`;
        recipe.source = 'user';
        
        // Get existing recipes
        const userRecipes = JSON.parse(localStorage.getItem('userRecipes')) || [];
        
        // Add new recipe
        userRecipes.push(recipe);
        localStorage.setItem('userRecipes', JSON.stringify(userRecipes));
        
        return true;
    } catch (error) {
        console.error('Error saving recipe:', error);
        return false;
    }
}

// Handle form submission
async function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const recipe = {
        title: document.getElementById('recipe-name').value.trim(),
        image: document.getElementById('recipe-image').value.trim() || 'images/placeholder.webp',
        readyInMinutes: parseInt(document.getElementById('recipe-time').value) || 30,
        servings: 4, // Default value
        ingredients: document.getElementById('recipe-ingredients').value
            .split('\n')
            .filter(line => line.trim() !== ''),
        instructions: document.getElementById('recipe-instructions').value.trim(),
        diets: Array.from(document.querySelectorAll('input[name="diet"]:checked'))
            .map(checkbox => checkbox.value)
    };
    
    // Validate required fields
    if (!recipe.title || !recipe.ingredients.length || !recipe.instructions) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Save recipe
    if (saveUserRecipe(recipe)) {
        // Store for display on confirmation page
        localStorage.setItem('lastSubmittedRecipe', JSON.stringify(recipe));
        
        // Redirect to confirmation
        window.location.href = 'form-action.html';
    } else {
        alert('Failed to save recipe. Please try again.');
    }
}

// Initialize form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('recipe-submission-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});