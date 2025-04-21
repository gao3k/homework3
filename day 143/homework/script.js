const fetchData = new Promise((resolve, reject) => {
    const success = true;
  
    if (success) {
      resolve("Data fetched successfully");
    } else {
      reject("Failed to fetch data");
    }
  });
  
  fetchData
    .then((message) => console.log(message))
    .catch((error) => console.log(error));
  