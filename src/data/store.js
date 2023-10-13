import { reactive } from 'vue';

export const store = reactive({
  apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
  apiOptionUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
  cardsList: [],
  archetypeToSearch: null,
  nameToSearch: null,
  archetypeList: [],
  isLoad: false
})