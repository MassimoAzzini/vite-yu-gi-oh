import { reactive } from 'vue';

export const store = reactive({
  apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=2000&offset=0',
  cardsList: [],
})