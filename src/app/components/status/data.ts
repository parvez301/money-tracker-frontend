export var single = [
    {
      "name": "Food",
      "value": 894
    },
    {
      "name": "Accomodation",
      "value": 500
    },
    {
      "name": "Entertainment",
      "value": 720
    },
    {
        "name": "Movies",
        "value": 894
      },
      {
        "name": "Books",
        "value": 500
      },
      {
        "name": "Miscelleneous",
        "value": 720
      }
  ];

  export function   getDataList(expense_list){
    expense_list.forEach(element => {
      console.log(expense_list.name);
    });
  }
  
  