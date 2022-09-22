AFRAME.registerComponent("comics-poster", {
    init: function () {
      this.comicBooks = this.el;   
      this.createCards();
    },
  
    createCards: function () {
      const postersRef = [
        {
          id: "superMan",
          title: "Super Man",
          url: './assets/superman.png',
        },
        {
          id: "spiderMan",
          title: "Spider Man",
          url: "./assets/spiderman.png",
        },
  
        {
          id: "captainAerp",
          title: "Captain Aero",
          url: "./assets/captainaero.png",
        },
        {
          id: "outerSpace",
          title: "Outer Space",
          url: "./assets/outerspace.png",
        },
      ];
      
      let prevoiusXPosition = -70;
  
      for (var item of postersRef) {
        const posX = prevoiusXPosition + 30;
        const posY = 25;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id);
  
        
        const createPoster = this.createPoster(item);
        borderEl.appendChild(createPoster);
  
        // Title Text Element
        const titleEl = this.createTitleEl(position, item);
        borderEl.appendChild(titleEl);
  
        this.comicBooks.appendChild(borderEl);
      }
    },
    createBorder: function (position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "ring",
        radiusInner: 9,
        radiusOuter: 10,
      });
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", {
        color: "#0077CC",
        opacity: 1,
      });
  
      return entityEl;
    },
    createPoster: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "circle",
        radius: 9,
      });
      entityEl.setAttribute("material", { src: item.url });
  
      return entityEl;
    },
    createTitleEl: function (position, item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width: 70,
        color: "black",
        value: item.title,
      });
      const elPosition = position;
      elPosition.y = -8;
      entityEl.setAttribute("position", elPosition);
      entityEl.setAttribute("visible", true);
      return entityEl;
    },
  });