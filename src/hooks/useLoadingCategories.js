import { loadAllCategories } from "../helpers/loadAllCategories"

export const useLoadingCategories = async () => {
  
    const resp = await loadAllCategories();

    return resp;
}
