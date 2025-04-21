const fetchData = async () => {
    const data = await new Promise((resolve, reject) => {
      const success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Failed to fetch data");
      }
    });
  
    console.log(data);
  };
  
  fetchData();
  