document.addEventListener('DOMContentLoaded', async () => {
  try {
    const apiCall = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2406-FTB-ET-WEB-FT/events');
    const response = await apiCall.json();

    console.log(response);

    const eventTableBody = document.querySelector('#event-table tbody');

    for (let i = 0; i < response.data.length; i++) {
      const event = response.data[i];
      const row = document.createElement('tr');

      const nameCell = document.createElement('td');
      nameCell.textContent = event.name;
      row.appendChild(nameCell);

      const eventDate = new Date(event.date);
      const dateCell = document.createElement('td');
      dateCell.textContent = eventDate.toLocaleDateString(); 
      row.appendChild(dateCell);

      const timeCell = document.createElement('td');
      timeCell.textContent = eventDate.toLocaleTimeString(); 
      row.appendChild(timeCell);

      const locationCell = document.createElement('td');
      locationCell.textContent = event.location;
      row.appendChild(locationCell);

      const descriptionCell = document.createElement('td');
      descriptionCell.textContent = event.description;
      row.appendChild(descriptionCell);

      eventTableBody.appendChild(row);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
