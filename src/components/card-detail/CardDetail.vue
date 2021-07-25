<template>
  <div>
    <div class="back-button" @click="goBack">
      <div class="arrow-wrap">
        <span class="arrow-part-1"></span>
        <span class="arrow-part-2"></span>
        <span class="arrow-part-3"></span>
      </div>
    </div>
    <div class="profile-content">
      <div class="profile-sub-content">
        <div class="profile-content-border">
          <h1>{{ starship.name }}</h1>
          <hr />
          <img src="@/assets/img/ship.jpg" />
          <ul>
            <li>
              <strong>Model:</strong>
              {{ starship.model }}
            </li>
            <li>
              <strong>Hyperdrive Rating:</strong>
              {{ starship.hyperdrive_rating }}
            </li>
            <li>
              <strong>Passengers:</strong>
              {{ starship.passengers }}
            </li>
            <li>
              <strong>Max Atmosphering Speed:</strong>
              {{ starship.max_atmosphering_speed }}
            </li>
            <li>
              <strong>Manufacturer:</strong>
              {{ starship.manufacturer }}
            </li>
            <li>
              <strong>Crew :</strong>
              {{ starship.crew }}
            </li>
            <li>
              <strong>Cargo Capacity :</strong>
              {{ starship.cargo_capacity }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardDetail",
  props: {
    starship: { Object, default: {} },
  },
  methods: {
    goBack() {
      this.$router.push({
        name: "StarWars",
      });
    },
  },
};
</script>

<style scoped>
@import "../../components/card-detail/card-detail.css";
</style>
