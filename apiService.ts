// apiService.ts
export const fetchCategoriesList = async (): Promise<any> => {
  try {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    );
    const data = await response.json();
    return data.drinks || [];
  } catch (error) {
    console.error("Erro ao buscar lista de categorias:", error);
    throw error;
  }
};

export const fetchDrinksByCategory = async (category: string): Promise<any> => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const data = await response.json();
    return data.drinks || [];
  } catch (error) {
    console.error(`Erro ao buscar drinks da categoria ${category}:`, error);
    throw error;
  }
};

export const fetchDrinksByName = async (name: string): Promise<any> => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    );
    const data = await response.json();
    return data.drinks || [];
  } catch (error) {
    console.error("Erro ao buscar drinks por nome:", error);
    throw error;
  }
};

export const fetchDrinksByAlcoholicType = async (
  alcoholicType: string
): Promise<any> => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${alcoholicType}`
    );
    const data = await response.json();
    return data.drinks || [];
  } catch (error) {
    console.error("Erro ao buscar drinks por tipo alcoólico:", error);
    throw error;
  }
};

export const fetchDrinksByGlassType = async (
  glassType: string
): Promise<any> => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glassType}`
    );
    const data = await response.json();
    return data.drinks || [];
  } catch (error) {
    console.error("Erro ao buscar drinks por tipo de copo:", error);
    throw error;
  }
};
