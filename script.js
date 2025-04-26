const photos = [
    {
        id: '14KU6FUCvHoMyYqzRpqkrZWC2BaHQQFcp',
        caption: '21/07/2024 - home moville'
    },
    {
        id: '1R6iiwbPkI5lq97OPrLYQz7ZK4j2g7ECt',
        caption: '21/07/2024 - home moville'
    },
    {
        id: '1NmCYrJO6xNvbwldV3EEbveZbOzQnQkWk',
        caption: '26-07-2024 - upper pier moville'
    },
    {
        id: '1mMdmt1dRCk4mji5xM58BS1wrwIgpiABJ',
        caption: '26-07-2024 - old chapel redcastle'
    },
    {
        id: '1Bi0OzfxKubOde8cjR1sEEKW7Ny03LGew',
        caption: '27/07/2024 - old mill moville'
    },
    {
        id: '1Y-sOpsxrWWHHsQEZo58TR2hlqCKnrVaW',
        caption: '27/07/2024 - old mill moville'
    },
    {
        id: '15_FpRbx69mqAHwGLqfCef7eJ3P-OG3B5',
        caption: '27/07/2024 - old mill moville'
    },
    {
        id: '1wUsEW2ICYM_XO9IAF3k66_5l8KhJ7q4Y',
        caption: '12/08/2003 - malin head'
    },
    {
        id: '1qoOK-swn3qBaMV6VjpSBRQavmVtIyxhw',
        caption: '12/08/2003 - malin head'
    },
    {
        id: '1bP-SKJdv-3dABJtcMCc7ZF4XQnlkozy_',
        caption: '12/08/2003 - malin head'
    },
    {
        id: '1lew7N_PEMGGDwN0hYgup_sFFTSG45NIA',
        caption: '12/08/2003 - malin head'
    },
    {
        id: '1n7boBvCT5-eskKvpIBGmtOlJWY-qpoL4',
        caption: '12/08/2003 - malin head'
    },
    {
        id: '1gr47-g5ZtKnWkKkmqkhq5l8-tiB2Qf8G',
        caption: '28/08/2024 - lower ballybrack'
    },
    {
        id: '1vqk8-sJn1kfGACnzbAWz8f8H4XIZ6VPU',
        caption: '28/08/2024 - old chapel redcastle'
    },
    {
        id: '1jr9M0V9CXKcSSmqlYb5lnJEREulBLGYS',
        caption: '28/08/2024 - old chapel redcastle'
    },
    {
        id: '1pFktSEVKdpL-YQ004WW7JA5KXE9ql1XD',
        caption: '29/08/2024 - upper pier moville'
    },
    {
        id: '1OTsFJn-CFLK9rHR-hQeCh7pxxn-NUYw9',
        caption: '29/08/2024 - upper pier moville'
    },
    {
        id: '1Zg2jJc9yuXvWDg1SnTt216gfQ8SxEtd-',
        caption: '19/09/2024 - latin quarter galway'
    },
    {
        id: '1kjz7aqBYrd7Yq0-QZMVGezwU3KHd1VEE',
        caption: '19/09/2024 - sparch galway'
    },
    {
        id: '1y0rFQaTBqmW8YHjJHGjfo0BjxJceIf92',
        caption: '19/09/2024 - sparch galway'
    },
    {
        id: '129sVF3LK8x4cZMPFpqqNpDZ_zTyDHCwB',
        caption: '12/10/2024 - sparch galway'
    },
    {
        id: '1pVF2rPYm7rbwc6vN8OXfvKQ0ghCIWXEH',
        caption: '12/10/2024 - bottom shop street'
    },
    {
        id: '1ZDq1H9TFkqHh0GXxRalSiwrg_hq3l2py',
        caption: '12/10/2024 - charlie byrnes books'
    },
    {
        id: '1lFHfCfw5koLTMW9BBbCkVLIlJJOKq0wG',
        caption: '12/10/2024 - butter milk lane'
    },
    {
        id: '1KfxtUAoiXCEIm8Uee7RLEMU3FXSQ0KV7',
        caption: '26/04/2025 - merchant road'
    },
    {
        id: '1TvOJt9Ke6a22bZYo0AL-wjd7OLzO3Tra',
        caption: '26/04/2025 - eyre square'
    },
    {
        id: '1nJCW9znStosq8kCyuSd1DdwoK_BWnHIw',
        caption: '26/04/2025 - church lane'
    },
    {
        id: '1gdoG8Q3U1Fxidts4XIz2iRDDrla6euK0',
        caption: '26/04/2025 - cross street lower'
    },
    {
        id: '1z-aElt1ZztI-ZKzMmfNcanM0CYA0D7QC',
        caption: '26/04/2025 - cross street lower'
    },
    {
        id: '1oo-gxDs7vy1wYEmrsbnmt8O7YFe4FgsJ',
        caption: '26/04/2025 - quay street'
    }
];

function loadGallery() {
    const gallery = document.getElementById('gallery');

    for (let i = photos.length - 1; i >= 0; i--) {
        const photo = photos[i];

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

window.onload = loadGallery();
