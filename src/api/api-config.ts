import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rpback.com/api/games/',
  headers: {
    'Content-type': 'application/json',
  },
});

export const endpoints = {
  categories: 'test_categories?project_id=2',
  minutes: 'test_minutes?project_id=2',
  blocks: 'test_blocks?project_id=2',
};
