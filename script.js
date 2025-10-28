async function searchMeal() {
  const ingredient = document.getElementById('ingredient').value.trim();
  if (!ingredient) return alert("Please enter an ingredient!");

  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const res = await fetch(url);
  const data = await res.json();
  const container = document.getElementById('results');
  container.innerHTML = '';

  if (data.meals) {
    data.meals.forEach(meal => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        <h3>${meal.strMeal}</h3>
      `;
      container.appendChild(card);
    });
  } else {
    container.innerHTML = '<p>No meals found 😕</p>';
  }
}
