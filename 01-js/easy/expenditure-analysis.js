/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let arr = new Array();
  for(let i=0;i<transactions.length;i++){{
      let category = transactions[i].category;
      let price = transactions[i].price;
      let added = 0;
      for(let i=0;i<arr.length;i++){
        if(category==arr[i].category){
          arr[i].totalSpent = arr[i].totalSpent + price;
          added=1;
        }
      }
      if(added==0){
        arr.push({category : category,totalSpent : price })
      }
    }
  }
  return arr;
}

module.exports = calculateTotalSpentByCategory;
