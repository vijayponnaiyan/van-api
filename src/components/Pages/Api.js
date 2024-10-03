// Api.js
export const fetchData = async () => {
  try {
    const response = await fetch('/api/vans'); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    console.log('Fetched data:', data); // Log the fetched data to ensure it is correct
    return Array.isArray(data) ? data : data.vans || []; // Adjusting in case the vans are nested
  } catch (error) {
    throw new Error(error.message);
  }
};
