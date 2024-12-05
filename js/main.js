(() => {

  //variables
  const hotspots = document.querySelectorAll(".Hotspot");

  //This information needs to be removed then pulled with an AJAX Call using the Fetch API
  //this is the api url https://swiftpixel.com/earbud/api/infoboxes"

  const infoBoxes = [
    {
      title: 'Noise-cancelling microphones',
      text: 'Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience.',
      image: 'images/ear-piece.jpg'
    },
    {
      title: 'Comfortable fit',
      text: 'Three pairs of ultra comfortable silicone tips are included. The tips create an acoustic seal that blocks outside audio and secures the earbuds in place.',
      image: 'images/ear-piece.jpg'
    },
    {
      title: '360 AUDIO',
      text: '360 Audio places sound all around you, while Dolby Head Tracking™ technology delivers an incredible three-dimensional listening experience.',
      image: 'images/ear-piece.jpg'
    },
    {
      title: 'Ultra Fast Charging',
      text: 'Charge your earbuds in 30 minutes or less with our hyper charging technology.',
      image: 'images/ear-piece.jpg'
    },
  ];

  const materialsCon = document.querySelector('#materials-con');
  const loader = document.querySelector('#loader');

  //This information needs to be removed then pulled with an AJAX Call using the Fetch API
  //this is the api url https://swiftpixel.com/earbud/api/materials"

  function getMaterials() {
    loader.classList.toggle('hidden');
    fetch('https://swiftpixel.com/earbud/api/materials')
        .then(response => response.json())
        .then(materials => {
            console.log(materials);
            const ul = document.createElement('ul');
            ul.id = 'material-list';
            materials.forEach(material => {
                const li = document.createElement('li');
                const h3 = document.createElement('h3');
                const p = document.createElement('p');
                h3.textContent = material.heading;
                p.textContent = material.description;

                li.appendChild(h3);
                li.appendChild(p);
                ul.appendChild(li);
            });

            loader.classList.toggle('hidden');
            materialsCon.innerHTML = '';
            materialsCon.appendChild(ul);
        })
        .catch(error => {
            console.log(error);
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Sorry something went wrong';
            materialsCon.appendChild(errorMessage);
        })
}

getMaterials();

  //functions
  function loadInfoBoxes() {

    //make AJAX call here

    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index + 1}`);

      const titleElement = document.createElement('h2');
      titleElement.textContent = infoBox.title;

      const textElement = document.createElement('p');
      textElement.textContent = infoBox.text;

      selected.appendChild(titleElement);
      selected.appendChild(textElement);
    });
  }
  loadInfoBoxes();


  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event listeners

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();

