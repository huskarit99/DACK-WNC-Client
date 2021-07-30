import Axios from "axios";

import categoryEnum from "../../utils/enums/categoryEnum";

const ENDPOINT = 'http://localhost:5000/api/root-category-controller/';

const getAll = async() => {
  const PATH = ENDPOINT + 'root-categories';
  try {
    const result = await Axios({
      method: 'get',
      url: PATH
    });
    return result.data
  } catch (e) {
    return null;
  }
}

export {
  getAll
}