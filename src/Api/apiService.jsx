import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const apiService = async (nextRequest, prevPage) => {
  const { data } = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '31937054-4f91842a9dcddf6212309b614',
      q: nextRequest,
      page: prevPage,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });

  return data;
};

export default apiService;
