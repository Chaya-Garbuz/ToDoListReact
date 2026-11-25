import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(
  response => response,
  error => {
    console.log('API error:', error.message);
    return Promise.reject(error);
  }
);

export default {
  getTasks: async () => {
    const result = await axios.get('/items')    
    return result.data;
  },

  addTask: async(name)=>{
    const result = await axios.post('/items', { name: name, isComplete: false })
    return result.data;
  },

  setCompleted: async(id, isComplete, name)=>{
    const result = await axios.put(`/items/${id}`, { name: name, isComplete: isComplete })
    return result.data;
  },

  deleteTask:async(id)=>{
    await axios.delete(`/items/${id}`)
  }
};
