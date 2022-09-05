const getAllDataFromDB = new Promise((resolve, reject) => {
  setTimeout(() => {
    var database = ["hanoi", "hochiminh", "danang"];
    resolve(database);
    console.log("getting data from database");
  }, 3000);
});
getAllDataFromDB.then((data) => console.log("data", data));
