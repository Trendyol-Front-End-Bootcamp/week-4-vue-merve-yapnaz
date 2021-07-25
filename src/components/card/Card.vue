<template>
  <div class="card" @click="openDetail">
    <div class="card_image">
      <img src="@/assets/img/ship.jpg" />
      <div class="card_title title-white">
        <p>{{ starship.name }}</p>
      </div>
      <div class="card_detail title-white">
        <ul>
          <li><strong>Model:</strong> {{ starship.model }}</li>
        </ul>
        <ul>
          <li>
            <strong>Hyperdrive Rating:</strong> {{ starship.hyperdrive_rating }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    starship: { Object, default: {} },
  },
  methods: {
    openDetail() {
      this.$router.push({
        name: "CardDetail",
        params: {
          starship: this.starship,
        },
      });
    },
  },
};
</script>

<style scoped>
@import "../../components/card/card.css";
</style>
