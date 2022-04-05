import { ref } from "vue";
// eslint-disable-next-line
const parseData = (data) => {
  if (!data) return;
  try {
    return data;
  } catch (err) {
    return err;
  }
};

const eData = ref({});

export { eData };
