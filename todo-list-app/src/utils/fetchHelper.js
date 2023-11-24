// denna fil är till för att skicks till node frn frontend/webbsian. (räkans som frontend me pratar med backend)

export async function sendData(text) {
  await fetch("http://localhost:3001/data", {
    method: "POST",
    body: JSON.stringify({
      todotext: text
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });

}

export async function getData(setTasks){
  try {
    const response = await fetch('http://localhost:3001/data'); // Replace with your API endpoint
    const result = await response.json();
    const tasks = result.map(item => item.Text);
    setTasks(tasks)

    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  
};
  
