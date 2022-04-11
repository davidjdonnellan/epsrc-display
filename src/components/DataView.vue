<template>
  <div class="row shadow p-3 mb-5 bg-white rounded-3">
    <div class="table-responsive">
      <table class="table">
        <caption>
          List of Transactions
        </caption>

        <thead>
          <tr>
            <template v-for="(obj, index) in tableData[0]" :key="index">
              <th>
                {{ index }}
              </th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(display, displayindex) in tableData" :key="displayindex">
            <td v-for="(data, dindex) in display" :key="dindex">
              {{ data }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
export default {
  name: "DataView",
  data() {
    return {
      selectYear: "2018",
    };
  },
  props: {
    tableData: {
      type: Object,
      required: true,
    },
  },
};
</script>
