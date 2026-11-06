function fetchData(url) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
           let success = true; // Simulating a successful fetch
           if (success) {
               resolve("Data fetched successfully");
           } else {
               reject("Failed to fetch data");
           }
        }, 300);
    });
}