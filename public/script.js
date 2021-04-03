async function windowActions() {
    const table = document.querySelector('.table');
    const headerRow = document.querySelector('.tblRow');
  
    console.log('window loaded');
    const request = await fetch('/api/dining/');
    const data = await request.json();
    console.log(data);

    data.forEach((element) => {
        const tableheading = document.createElement('th');
        tableheading.classList.add('cell heading');
        
        tableheading.innerText = element;
        headerRow.append(tableheading);
    
       //create and assign
       
        const tr = document.createElement('tr');
        const did = document.createElement('td');
        const dname = document.createElement('td');
        const daddress = document.createElement('td');
    



        did.innerText = element.hall_id;
        dname.innerText = element.hall_name;
        daddress.innerText = element.hall_address;
    

// adds data to list
        table.append(tr);
        tr.append(did);
        tr.append(dname);
        tr.append(daddress);
      });
      
}
window.onload = windowActions();