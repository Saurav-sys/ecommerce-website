
import axios from 'axios';

const API_BASE_URL = 'https://boppotech.github.io/react-task-json.github.io/reactjob.json';

export const fetchProductData = async () => {
  try {
    const response = await axios.get('https://boppotech.github.io/react-task-json.github.io/reactjob.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    return null;
  }
};
