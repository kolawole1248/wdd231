const recipeList = document.getElementById('recipe-list');

function displayRecipes(filteredRecipes) {
    recipeList.innerHTML = "";
    filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        recipeCard.innerHTML = `
            <img src="${recipe.photo}" alt="${recipe.name}" class="recipe-image" />
            <div class="recipe-content">
                <h2 class="recipe-title">${recipe.name}</h2>
                <p class="recipe-description">Cuisine: ${recipe.Cuisine}</p>
                <a href="about-recipe.html?recipeId=${recipe.id}">View more about recipe </a>
            </div>
        `;
        recipeList.appendChild(recipeCard);
    });
}


async function searchRecipe(query){
    const rapidApikey = '83682b0663mshf328a91c95c4dc8p1c9cc4jsnc6a5304b93aa'
    const options = {
        method: 'GET',
        url: `https://all-in-one-recipe-api.p.rapidapi.com/search/${query}`,
        headers: {
          'x-rapidapi-key': rapidApikey,
          'x-rapidapi-host': 'all-in-one-recipe-api.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data,'searccc');

          return response
         
      } catch (error) {
          console.error(error);
      }
}



document.getElementById("search-button").addEventListener("click", function() {
    const query = document.getElementById("search-input").value;
    if (query) {
        searchRecipe(query).then((response)=>{
            displayRecipes(response.data.recipes.data)
        })
        
    }
});