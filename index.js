function submitData(name, email) {
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(function (data) {
        const newId = data.id;
        //const newIdElement = document.createElement("p");
        //newIdElement.textContent = `New ID: ${newId}`;
        document.body.textContent= newId
    
      })
      .catch(function (error) {
      //const errorMessageElement = document.createElement("p");
        //errorMessageElement.textContent = `Error: ${error.message}`;
        document.body.innerHTML= error.message
        //throw error;
      });
  }
  