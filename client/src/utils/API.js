import axios from "axios";

export default {

  searchArticles: function(query) {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", { params: query });
  },

  findAll: function(id) {
    return axios.get("/api/" + id);
  },

  remove: function(id) {
    return axios.delete("/api/" + id);
  },

  save: function(Articles) {
    return axios.post("/api/", Articles);
  }
};
