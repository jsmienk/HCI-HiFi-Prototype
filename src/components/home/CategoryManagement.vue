<template>
  <div>
    <!-- If no items -->
    <p class="modal-info" v-if="items.length == 0">
      Currently no products in this category.
    </p>

    <!-- If items -->
    <div class="inventory-item" v-for="item in items" :key="item.name">
      <!-- Name, expires, frozen -->
      <div class="item-main-info">
        <span class="item-name">{{ item.name }}</span>
        <span class="item-isfrozen" v-if="item.frozen">Stored Frozen</span>
        <span class="item-expiry-date" :class="{ soon: doesExpireSoon(item.instances) }">
          expires <span class="date-font">{{ getDateString(getExpiryDate(item.instances)) }}</span>
        </span>
      </div>
      <!-- Quantity, last bought -->
      <div class="item-quantity-info">
        <span>
          <AmountSelector :initial-amount="item.quantity ? item.quantity : item.instances.length"
            :unit="item.unit" :increment="item.isWhole ? 1 : 100" :max="10000" small />
        </span>
        <span class="item-last-bought-date">
          Last bought: <span class="date-font">{{ getDateString(getBoughtDate(item.instances)) }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import AmountSelector from '@/components/AmountSelector.vue'

  export default {
    name: 'category-management',
    components: { AmountSelector },
    props: {
      category: Object
    },
    data() {
      return {
        items: []
      }
    },
    watch: {
      category(newValue) {
        if (newValue.meta && Array.isArray(newValue.meta.items)) {
          this.items = newValue.meta.items
        }
      }
    },
    methods: {
      /**
       * Get the number of days until the first instance of this product expires
       * param daysToExpireSinceBought: number of days to add to a product's bought date
       *   that has no expiry date.
       */
      getDaysToExpire(instances) {
        return Math.round((Date.parse(this.getExpiryDate(instances)) - new Date()) / (1000*60*60*24))
      },
      /**
       * Get expiry date that occurs first among instances of product
       */
      getExpiryDate(instances, daysToExpireSinceBought=7) {
        if (instances[0].expires == -1) {
          return this.getBoughtDate(instances, true) + (daysToExpireSinceBought*1000*60*60*24)
        }
        let d = Date.parse(instances[0].expires)
        for (let i = 1; i < instances.length; i++) {
          const ins = instances[i]
          const insEDate = Date.parse(ins.expires)
          if (insEDate < d) {
            d = insEDate
          }
        }
        return d
      },
      /**
       * If the expiry date is considered a 'soon' date
       */
      doesExpireSoon(instances, days=7) {
        return this.getDaysToExpire(instances) < days
      },
      /**
       * Get the first or last day an instance of this product was bought
       */
      getBoughtDate(instances, first=false) {
        let d = Date.parse(instances[0].bought)
        for (let i = 1; i < instances.length; i++) {
          const ins = instances[i]
          const insBDate = Date.parse(ins.bought)
          if (first) {
            if (insBDate < d) {
              d = insBDate
            }
          } else if (insBDate > d) {
            d = insBDate
          }
        }
        return d
      },
      getDateString(date) {
        date = new Date(date)
        const d = ('0' + date.getDate()).slice(-2);
        const m = ('0' + (date.getMonth() + 1)).slice(-2);
        const y = date.getFullYear();
        return d + '/' + m + '/' + y;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .inventory-item {
    margin-bottom: 16px;
    padding: 8px 16px;
    border-radius: 8px;
    background-color: #efefef;

    .item-main-info, .item-quantity-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 4px 0;
    }

    .item-main-info {
      border-bottom: 1px solid #999;

      .item-name {
        font-weight: bold;
        font-size: 1.1em;
      }

      .item-expiry-date.soon {
        color: red;
      }
    }

    .item-quantity-info {

    }

    .date-font {
      font-family: monospace;
      font-size: 1.2em;
    }
  }
</style>