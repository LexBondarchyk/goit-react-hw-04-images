import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const api = async (nextRequest, prevPage) => {
  const { data } = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '33215555-402cf33540e5684cae94cb78a',
      q: nextRequest,
      page: prevPage,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });

  return data;
};

export default api;
