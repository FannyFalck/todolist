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
    console.log(tasks)
    setTasks(tasks)

    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  
};
  
//listheader
export async function UPDATElistheader(name){
  await fetch("http://localhost:3001/listheader", {
    method: "PUT",
    body: JSON.stringify({
      listheader: name
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });

}

export async function getlistheader(setListName){
  try {
    const response = await fetch('http://localhost:3001/listheader'); // Replace with your API endpoint
    const result = await response.json()
    console.log(result[0])
    setListName (result[0].Listheader)
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  
};