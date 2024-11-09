const accessKey = 'uHYT7waknR9sKbWNr6-S3WthAkxh2Mr7isZoC1ZIefY';

async function searchImages() {
    const query = document.getElementById('searchInput').value;
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=12`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      displayImages(data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }
  
  function displayImages(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear previous results
  
    images.forEach(image => {
      const imageCard = document.createElement('div');
      imageCard.classList.add('image-card');
  
      const img = document.createElement('img');
      img.src = image.urls.small;
      img.alt = image.alt_description || 'Unsplash Image';
  
      imageCard.appendChild(img);
      gallery.appendChild(imageCard);
    });
  }