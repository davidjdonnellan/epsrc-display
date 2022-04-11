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
  const annualTotal = {};
  const annualBreakdown = [];
  const expenseType = {};
  console.log(data.length);
  for (let i = 0; i < data.length; i++) {
    const transaction = data[i];
    // if the log has a date and amount can be added
    if (transaction["Transaction Date"] && transaction["Amount"]) {
      var year =
        annualTotal[transaction["Transaction Date"].split("/")[2]] || 0;
      year += Number(transaction["Amount"].replace("£", "").replace(",", ""));

      annualTotal[transaction["Transaction Date"].split("/")[2]] = year;
    }
    // if the log has a date and amount can be added
    if (transaction["Expense Type"] && transaction["Amount"]) {
      var type = expenseType[transaction["Expense Type"].trim()] || 0;
      type += Number(transaction["Amount"].replace("£", "").replace(",", ""));

      expenseType[transaction["Expense Type"].trim()] = type;
    }

    if (transaction["Transaction Date"] && transaction["Amount"]) {
      annualBreakdown.push(transaction);
    }
    console.log(annualBreakdown);
  }

  return {
    annualTotal: annualTotal,
    expenseType: expenseType,
    breakdown: annualBreakdown,
  };
};
getData(data);
