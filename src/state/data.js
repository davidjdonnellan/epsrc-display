export { eData };
import { ref } from "vue";
import { data_2018 } from "../state/mock_data/Jan_2018";
import { data_2019 } from "../state/mock_data/Jan_2019";
import { data_2020 } from "../state/mock_data/Jan_2020";
var data = [];
data = data.concat(data_2018, data_2019, data_2020);

const eData = ref({});

const getData = (data) => {
  if (!data) return;
  try {
    eData.value = transformData(data);
  } catch (err) {
    return err;
  }
};
/* Due to scope and time to complete it is assumed JSON Keys are known */
// Amount: "£39,130.00"
// Department: "DFID"
// Entity: "DFID"
// Expense Area: "Human Resources "
// Expense Type: "Training - Course Fees "
// Invoice Description: "DFIDs contribution to the Civil Service priority learning - Stepping into Leadership Programme for the period September 2017 - March 2018"
// Supplier Name: "CSL - KPMG LLP "
// Transaction Date: "04/01/2018"
// Transaction number: "100269-155 "

const transformData = (data) => {
  const category = {};
  //   const yearsTotal = {};
  //   var year = undefined;
  for (let i = 0; i < data.length; i++) {
    const transaction = data[i];
    console.log("t", transaction);

    console.log(
      "herere",
      Date.getYear(String(transaction["Transaction Date"]))
    );
    category[Date.getYear(transaction["Transaction Date"])] =
      transaction["Amount"];
    console.log("cat", category);
    return category;
  }
};
getData(data);
