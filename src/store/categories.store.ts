import { IApiData } from '../interfaces/IApiData';
import { endpoints } from '../api/api-config';
import { getData } from '../api/api';

interface ICategoriesStore {
  categoriesData: IApiData | null;
  loadCategories: () => void;
}

const CategoriesStore: ICategoriesStore = {
  categoriesData: null,
  async loadCategories() {
    const data = await getData(endpoints.categories);
    this.categoriesData = { ...data };
  },
};

export default CategoriesStore;
