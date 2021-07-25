<template>
  <div class="content">
    <img src="@/assets/img/logo.png" />
    <div class="filterContainer">
      <div class="filterItem">
        <label :for="filter">Name / Model</label>
        <input type="text" v-model="filterValue" placeholder="Name / Model" />
      </div>
      <div class="filterItem">
        <button class="filterButton" type="button" @click="filter">
          Filter
        </button>
      </div>
    </div>
    <div class="cards-list">
      <card-list :list="ships" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardList from "@/components/card-list/CardList";

export default {
  name: "StarWars",
  components: {
    "card-list": CardList,
  },
  data() {
    return {
      ships: [],
      filterValue: "",
    };
  },
  methods: {
    getShips(filter = "") {
      let url =
        filter != ""
          ? "https://swapi.dev/api/starships?search=" + filter
          : "https://swapi.dev/api/starships";
      axios.get(url).then((response) => {
        this.ships = response.data.results;
      });
    },
    filter() {
      this.getShips(this.filterValue);
    },
  },
  mounted() {
    this.getShips();
  },
};
</script>
