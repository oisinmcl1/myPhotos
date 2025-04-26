const photos = [
    {
        id: '14KU6FUCvHoMyYqzRpqkrZWC2BaHQQFcp',
        caption: '21/07/2024 - out back of my home moville'
    },
    {
        id: '1R6iiwbPkI5lq97OPrLYQz7ZK4j2g7ECt',
        caption: '21/07/2024 - out back of my home moville'
    }
];

function loadGallery() {
    const gallery = document.getElementById('gallery');

    for (let photo of photos) {
        gallery.innerHTML += `
        <figure class="photo">
          <img src="https://drive.google.com/thumbnail?id=${photo.id}"
               loading="lazy"
               alt="Photo taken ${photo.caption}">
          <figcaption>${photo.caption}</figcaption>
        </figure>
      `;
    }
}

window.onload = loadGallery;
