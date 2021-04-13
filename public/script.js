async function windowsActions() {
  const request = await fetch('/api/dining');
  const dinning_dict = await request.json();
  const dinning_halls = dinning_dict['data'];
   
  //tests if fetch worked
  console.log(dinning_halls);
  
  
  const hall_table = document.getElementById('data');
  var tr = "";

  
  
  hall_table.innerHTML = "";



  dinning_halls.forEach((element) => {


    const tableheading = document.createElement('th');
           
        
           //create and assign
           
            const tr = document.createElement('tr');
            const did = document.createElement('td');
            const dname = document.createElement('td');
            const daddress = document.createElement('td');
        
    
    
    
            did.innerText = element.hall_id;
            dname.innerText = element.hall_name;
            daddress.innerText = element.hall_address;
        
    
    // adds data to list
            hall_table.append(tr);
            tr.append(did);
            tr.append(dname);
            tr.append(daddress);
          });
          
    }


window.onload = windowsActions;




//       tr += '<tr>';
//       tr += '<td>'+ element.hall_name + '</td>' + '<td>' + element.hall_address + '</td>';
//       tr += '</tr>';
//   });

//   hall_table.innerHTML += tr;
// } 





