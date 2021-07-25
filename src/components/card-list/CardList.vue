<template>
  <div class="cards-list">
    <card v-for="item in list" :key="item.id" :starship="item" />
  </div>
</template>

<script>
import Card from "@/components/card/Card";

export default {
  name: "CardDetail",
  components: {
    card: Card,
  },
  props: {
    list: {
      required: true,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.cards-list {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
