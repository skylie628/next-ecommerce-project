let id = 0;
const productsList = [
  {
    title: "The Buffalo x 12 Zodiacs Mecha",
    sku: id++,
    price: 95000,
    group: 6,
    color: ["black", "green"],
    images: [
      "medium-12-zodiacs-0001-str-img",
      "medium-12-zodiacs-0001-side-img",
      "medium-12-zodiacs-0001-str-img-thumbnail",
      "medium-12-zodiacs-0001-side-img-thumbnail",
      "medium-12-zodiacs-0001-showing-img-thumbnail",
    ],
  },
  {
    title: "The Cat x 12 Zodiacs Mecha",
    sku: id++,
    price: 95000,
    group: 6,
    color: ["black", "blue"],
    images: [
      "medium-12-zodiacs-0002-str-img",
      "medium-12-zodiacs-0002-side-img",
      "medium-12-zodiacs-0002-str-img-thumbnail",
      "medium-12-zodiacs-0002-side-img-thumbnail",
      "medium-12-zodiacs-0002-showing-img-thumbnail",
    ],
  },
  {
    title: "The Rooster x 12 Zodiacs Mecha",
    sku: id++,
    price: 95000,
    group: 6,
    color: ["black", "yellow"],
    images: [
      "medium-12-zodiacs-0003-str-img",
      "medium-12-zodiacs-0003-side-img",
      "medium-12-zodiacs-0003-str-img-thumbnail",
      "medium-12-zodiacs-0003-side-img-thumbnail",
      "medium-12-zodiacs-0003-showing-img-thumbnail",
    ],
  },

  {
    title: "The Dog x 12 Zodiacs Mecha",
    sku: id++,
    price: 95000,
    group: 6,
    color: ["black", "green"],
    images: [
      "medium-12-zodiacs-0004-str-img",
      "medium-12-zodiacs-0004-side-img",
      "medium-12-zodiacs-0004-str-img-thumbnail",
      "medium-12-zodiacs-0004-side-img-thumbnail",
      "medium-12-zodiacs-0004-showing-img-thumbnail",
    ],
  },

  {
    title: "The Dragon x 12 Zodiacs Mecha",
    sku: id++,
    price: 95000,
    group: 6,
    color: ["black", "blue"],
    images: [
      "medium-12-zodiacs-0005-str-img",
      "medium-12-zodiacs-0005-side-img",
      "medium-12-zodiacs-0005-str-img-thumbnail",
      "medium-12-zodiacs-0005-side-img-thumbnail",
      "medium-12-zodiacs-0005-showing-img-thumbnail",
    ],
  },

  {
    title: "The Goat x 12 Zodiacs Mecha",
    sku: id++,
    price: 95000,
    group: 6,
    color: ["black", "green"],
    images: [
      "medium-12-zodiacs-0006-str-img",
      "medium-12-zodiacs-0006-side-img",
      "medium-12-zodiacs-0006-str-img-thumbnail",
      "medium-12-zodiacs-0006-side-img-thumbnail",
      "medium-12-zodiacs-0006-showing-img-thumbnail",
    ],
  },

  {
    title: "The Horse x 12 Zodiacs Mecha",
    sku: id++,
    price: 95000,
    group: 6,
    color: ["black", "blue", "red"],
    images: [
      "medium-12-zodiacs-0007-str-img",
      "medium-12-zodiacs-0007-side-img",
      "medium-12-zodiacs-0007-str-img-thumbnail",
      "medium-12-zodiacs-0007-side-img-thumbnail",
      "medium-12-zodiacs-0007-showing-img-thumbnail",
    ],
  },

  {
    title: "The Monkey x 12 Zodiacs Mecha",
    sku: id++,
    price: 95000,
    group: 6,
    color: ["black", "green"],
    images: [
      "medium-12-zodiacs-0008-str-img",
      "medium-12-zodiacs-0008-side-img",
      "medium-12-zodiacs-0008-str-img-thumbnail",
      "medium-12-zodiacs-0008-side-img-thumbnail",
      "medium-12-zodiacs-0008-showing-img-thumbnail",
    ],
  },

  {
    title: "The Pig x 12 Zodiacs Mecha",
    sku: id++,
    price: 95000,
    group: 6,
    color: ["black", "green"],
    images: [
      "medium-12-zodiacs-0009-str-img",
      "medium-12-zodiacs-0009-side-img",
      "medium-12-zodiacs-0009-str-img-thumbnail",
      "medium-12-zodiacs-0009-side-img-thumbnail",
      "medium-12-zodiacs-0009-showing-img-thumbnail",
    ],
  },

  {
    title: "The Rat x 12 Zodiacs Mecha",
    sku: id++,
    price: 95000,
    group: 6,
    color: ["black", "green", "blue"],
    images: [
      "medium-12-zodiacs-0010-str-img",
      "medium-12-zodiacs-0010-side-img",
      "medium-12-zodiacs-0010-str-img-thumbnail",
      "medium-12-zodiacs-0010-side-img-thumbnail",
      "medium-12-zodiacs-0010-showing-img-thumbnail",
    ],
  },

  {
    title: "The Snake x 12 Zodiacs Mecha",
    sku: id++,
    price: 95000,
    group: 6,
    color: ["black", "pink"],
    images: [
      "medium-12-zodiacs-0011-str-img",
      "medium-12-zodiacs-0011-side-img",
      "medium-12-zodiacs-0011-str-img-thumbnail",
      "medium-12-zodiacs-0011-side-img-thumbnail",
      "medium-12-zodiacs-0011-showing-img-thumbnail",
    ],
  },

  {
    title: "The Tiger x 12 Zodiacs Mecha",
    sku: id++,
    price: 95000,
    group: 6,
    color: ["black", "blue", "orange"],
    images: [
      "medium-12-zodiacs-0012-str-img",
      "medium-12-zodiacs-0012-side-img",
      "medium-12-zodiacs-0012-str-img-thumbnail",
      "medium-12-zodiacs-0012-side-img-thumbnail",
      "medium-12-zodiacs-0012-showing-img-thumbnail",
    ],
  },
  {
    title: "Hoo ho x Minimalism Little Ghost",
    sku: id++,
    price: 95000,
    group: 5,
    color: ["white", "blue"],
    images: [
      "medium-minimalism-0001-str-img",
      "medium-minimalism-0001-side-img",
      "medium-minimalism-0001-str-img-thumbnail",
      "medium-minimalism-0001-side-img-thumbnail",
      "medium-minimalism-0001-showing-img-thumbnail",
    ],
  },
  {
    title: "Boo x Minimalism Little Ghost",
    sku: id++,
    price: 95000,
    group: 5,
    color: ["blue", "white"],
    images: [
      "medium-minimalism-0002-str-img",
      "medium-minimalism-0002-side-img",
      "medium-minimalism-0002-str-img-thumbnail",
      "medium-minimalism-0002-side-img-thumbnail",
      "medium-minimalism-0002-showing-img-thumbnail",
    ],
  },

  {
    title: "Aww x Minimalism Little Ghost",
    sku: id++,
    price: 95000,
    group: 5,
    color: ["white", "blue"],
    images: [
      "medium-minimalism-0003-str-img",
      "medium-minimalism-0003-side-img",
      "medium-minimalism-0003-str-img-thumbnail",
      "medium-minimalism-0003-side-img-thumbnail",
      "medium-minimalism-0003-showing-img-thumbnail",
    ],
  },
  {
    title: "U oa x Minimalism Cute Gosh",
    sku: id++,
    price: 95000,
    group: 5,
    color: ["white", "blue"],
    images: [
      "medium-minimalism-0004-str-img",
      "medium-minimalism-0004-side-img",
      "medium-minimalism-0004-str-img-thumbnail",
      "medium-minimalism-0004-side-img-thumbnail",
      "medium-minimalism-0004-showing-img-thumbnail",
    ],
  },

  {
    title: "Neymar Lines Art x Neymar",
    sku: id++,
    price: 95000,
    group: 4,
    color: ["blue", "yellow"],
    images: [
      "medium-neymar-0001-str-img",
      "medium-neymar-0001-side-img",
      "medium-neymar-0001-str-img-thumbnail",
      "medium-neymar-0001-side-img-thumbnail",
      "medium-neymar-0001-showing-img-thumbnail",
    ],
  },

  {
    title: "Neymar Home Jersey x Neymar",
    sku: id++,
    price: 95000,
    group: 4,
    color: ["green", "yellow"],
    images: [
      "medium-neymar-0002-str-img",
      "medium-neymar-0002-side-img",
      "medium-neymar-0002-str-img-thumbnail",
      "medium-neymar-0002-side-img-thumbnail",
      "medium-neymar-0002-showing-img-thumbnail",
    ],
  },

  {
    title: "Neymar Unique Design 01 x Neymar",
    sku: id++,
    price: 95000,
    group: 4,
    color: ["blue", "yellow"],
    images: [
      "medium-neymar-0003-str-img",
      "medium-neymar-0003-side-img",
      "medium-neymar-0003-str-img-thumbnail",
      "medium-neymar-0003-side-img-thumbnail",
      "medium-neymar-0003-showing-img-thumbnail",
    ],
  },

  {
    title: "Neymar Unique  02 x Neymar",
    sku: id++,
    price: 95000,
    group: 4,
    color: ["blue", "yellow"],
    images: [
      "medium-neymar-0004-str-img",
      "medium-neymar-0004-side-img",
      "medium-neymar-0004-str-img-thumbnail",
      "medium-neymar-0004-side-img-thumbnail",
      "medium-neymar-0004-showing-img-thumbnail",
    ],
  },

  {
    title: "Neymar Unique Design 03 x Neymar",
    sku: id++,
    price: 95000,
    group: 4,
    color: ["blue", "white"],
    images: [
      "medium-neymar-0005-str-img",
      "medium-neymar-0005-side-img",
      "medium-neymar-0005-str-img-thumbnail",
      "medium-neymar-0005-side-img-thumbnail",
      "medium-neymar-0005-showing-img-thumbnail",
    ],
  },

  {
    title: "Neymar Unique Design 04 x Neymar",
    sku: id++,
    price: 95000,
    group: 4,
    color: ["blue", "purple"],
    images: [
      "medium-neymar-0006-str-img",
      "medium-neymar-0006-side-img",
      "medium-neymar-0006-str-img-thumbnail",
      "medium-neymar-0006-side-img-thumbnail",
      "medium-neymar-0006-showing-img-thumbnail",
    ],
  },

  {
    title: "Neymar Unique Design 05 x Neymar",
    sku: id++,
    price: 95000,
    group: 4,
    color: ["yellow"],
    images: [
      "medium-neymar-0007-str-img",
      "medium-neymar-0007-side-img",
      "medium-neymar-0007-str-img-thumbnail",
      "medium-neymar-0007-side-img-thumbnail",
      "medium-neymar-0007-showing-img-thumbnail",
    ],
  },

  {
    title: "Neymar Unique Design 6 x Neymar",
    sku: id++,
    price: 95000,
    group: 4,
    color: ["blue", "red"],
    images: [
      "medium-neymar-0008-str-img",
      "medium-neymar-0008-side-img",
      "medium-neymar-0008-str-img-thumbnail",
      "medium-neymar-0008-side-img-thumbnail",
      "medium-neymar-0008-showing-img-thumbnail",
    ],
  },

  {
    title: "Neymar Unique Design 07 x Neymar",
    sku: id++,
    price: 95000,
    group: 4,
    color: ["black", "pink"],
    images: [
      "medium-neymar-0009-str-img",
      "medium-neymar-0009-side-img",
      "medium-neymar-0009-str-img-thumbnail",
      "medium-neymar-0009-side-img-thumbnail",
      "medium-neymar-0009-showing-img-thumbnail",
    ],
  },

  {
    title: "Neymar Unique Design 08 x Neymar",
    sku: id++,
    price: 95000,
    group: 4,
    color: ["blue"],
    images: [
      "medium-neymar-0010-str-img",
      "medium-neymar-0010-side-img",
      "medium-neymar-0010-str-img-thumbnail",
      "medium-neymar-0010-side-img-thumbnail",
      "medium-neymar-0010-showing-img-thumbnail",
    ],
  },

  {
    title: "Neymar Unique Design 09 x Neymar",
    sku: id++,
    price: 95000,
    group: 4,
    color: ["black", "yellow"],
    images: [
      "medium-neymar-0011-str-img",
      "medium-neymar-0011-side-img",
      "medium-neymar-0011-str-img-thumbnail",
      "medium-neymar-0011-side-img-thumbnail",
      "medium-neymar-0011-showing-img-thumbnail",
    ],
  },

  {
    title: "Mbappe France Team x Mbappe",
    sku: id++,
    price: 95000,
    group: 3,
    color: ["green"],
    images: [
      "medium-mpappe-0001-str-img",
      "medium-mpappe-0001-side-img",
      "medium-mpappe-0001-str-img-thumbnail",
      "medium-mpappe-0001-side-img-thumbnail",
      "medium-mpappe-0001-showing-image-thumbnail",
      ,
    ],
  },
  {
    title: "Mbappe PSG Running Pose x Mbappe",
    sku: id++,
    price: 95000,
    group: 3,
    color: ["white"],
    images: [
      "medium-mpappe-0002-str-img",
      "medium-mpappe-0002-side-img",
      "medium-mpappe-0002-str-img-thumbnail",
      "medium-mpappe-0002-side-img-thumbnail",
      "medium-mpappe-0002-showing-image-thumbnail",
      ,
    ],
  },
  {
    title: "Mbappe Win Pose x Mbappe",
    sku: id++,
    price: 95000,
    group: 3,
    color: ["silver"],
    images: [
      "medium-mpappe-0003-str-img",
      "medium-mpappe-0003-side-img",
      "medium-mpappe-0003-str-img-thumbnail",
      "medium-mpappe-0003-side-img-thumbnail",
      "medium-mpappe-0003-showing-image-thumbnail",
      ,
    ],
  },
  {
    title: "Mbappe Unique Design 01 x Mbappe",
    sku: id++,
    price: 95000,
    group: 3,
    color: ["black"],
    images: [
      "medium-mpappe-0004-str-img",
      "medium-mpappe-0004-side-img",
      "medium-mpappe-0004-str-img-thumbnail",
      "medium-mpappe-0004-side-img-thumbnail",
      "medium-mpappe-0004-showing-image-thumbnail",
      ,
    ],
  },
  {
    title: "Mbappe Unique Design 02 x Mbappe",
    sku: id++,
    price: 95000,
    group: 3,
    color: ["black", "blue"],
    images: [
      "medium-mpappe-0005-str-img",
      "medium-mpappe-0005-side-img",
      "medium-mpappe-0005-str-img-thumbnail",
      "medium-mpappe-0005-side-img-thumbnail",
      "medium-mpappe-0005-showing-image-thumbnail",
      ,
    ],
  },
  {
    title: "Mbappe Unique Design 03 x Mbappe",
    sku: id++,
    price: 95000,
    group: 3,
    color: ["blue", "red"],
    images: [
      "medium-mpappe-0006-str-img",
      "medium-mpappe-0006-side-img",
      "medium-mpappe-0006-str-img-thumbnail",
      "medium-mpappe-0006-side-img-thumbnail",
      "medium-mpappe-0006-showing-image-thumbnail",
      ,
    ],
  },
  {
    title: "Mbappe Unique Design 04 x Mbappe",
    sku: id++,
    price: 95000,
    group: 3,
    color: ["blue"],
    images: [
      "medium-mpappe-0007-str-img",
      "medium-mpappe-0007-side-img",
      "medium-mpappe-0007-str-img-thumbnail",
      "medium-mpappe-0007-side-img-thumbnail",
      "medium-mpappe-0007-showing-image-thumbnail",
      ,
    ],
  },
  {
    title: "Mbappe Unique Design 05 x Mbappe",
    sku: id++,
    price: 95000,
    group: 3,
    color: ["black", "orange"],
    images: [
      "medium-mpappe-0008-str-img",
      "medium-mpappe-0008-side-img",
      "medium-mpappe-0008-str-img-thumbnail",
      "medium-mpappe-0008-side-img-thumbnail",
      "medium-mpappe-0008-showing-image-thumbnail",
      ,
    ],
  },
  {
    title: "Mbappe Home Jersey France x Mbappe",
    sku: id++,
    price: 95000,
    group: 3,
    color: ["blue", "yellow"],
    images: [
      "medium-mpappe-0009-str-img",
      "medium-mpappe-0009-side-img",
      "medium-mpappe-0009-str-img-thumbnail",
      "medium-mpappe-0009-side-img-thumbnail",
      "medium-mpappe-0009-showing-image-thumbnail",
      ,
    ],
  },

  {
    title: "CR7 MU Jumping Pose x Ronaldo",
    sku: id++,
    price: 95000,
    group: 2,
    color: ["red"],
    images: [
      "medium-cr7-0001-str-img",
      "medium-cr7-0001-side-img",
      "medium-cr7-0001-str-img-thumbnail",
      "medium-cr7-0001-side-img-thumbnail",
      "medium-cr7-0001-showing-img-thumbnail",
    ],
  },

  {
    title: "CR7 From Behind With Signature x Ronaldo",
    sku: id++,
    price: 95000,
    group: 2,
    color: ["black", "white"],
    images: [
      "medium-cr7-0002-str-img",
      "medium-cr7-0002-side-img",
      "medium-cr7-0002-str-img-thumbnail",
      "medium-cr7-0002-side-img-thumbnail",
      "medium-cr7-0002-showing-img-thumbnail",
    ],
  },

  {
    title: "CR7 Home Jersey x Ronaldo",
    sku: id++,
    price: 95000,
    group: 2,
    color: ["red", "green"],
    images: [
      "medium-cr7-0003-str-img",
      "medium-cr7-0003-side-img",
      "medium-cr7-0003-str-img-thumbnail",
      "medium-cr7-0003-side-img-thumbnail",
      "medium-cr7-0003-showing-img-thumbnail",
    ],
  },

  {
    title: "CR7 AL NASSR 01 x Ronaldo",
    sku: id++,
    price: 95000,
    group: 2,
    color: ["blue", "white"],
    images: [
      "medium-cr7-0004-str-img",
      "medium-cr7-0004-side-img",
      "medium-cr7-0004-str-img-thumbnail",
      "medium-cr7-0004-side-img-thumbnail",
      "medium-cr7-0004-showing-img-thumbnail",
    ],
  },

  {
    title: "CR7 Unique Design 01 x Ronaldo",
    sku: id++,
    price: 95000,
    group: 2,
    color: ["red", "white"],
    images: [
      "medium-cr7-0005-str-img",
      "medium-cr7-0005-side-img",
      "medium-cr7-0005-str-img-thumbnail",
      "medium-cr7-0005-side-img-thumbnail",
      "medium-cr7-0005-showing-img-thumbnail",
    ],
  },

  {
    title: "CR7  Unique Design 02 x Ronaldo",
    sku: id++,
    price: 95000,
    group: 2,
    color: ["blue"],
    images: [
      "medium-cr7-0006-str-img",
      "medium-cr7-0006-side-img",
      "medium-cr7-0006-str-img-thumbnail",
      "medium-cr7-0006-side-img-thumbnail",
      "medium-cr7-0006-showing-img-thumbnail",
    ],
  },

  {
    title: "CR7 Unique Design 03 x Ronaldo",
    sku: id++,
    price: 95000,
    group: 2,
    color: ["red"],
    images: [
      "medium-cr7-0007-str-img",
      "medium-cr7-0007-side-img",
      "medium-cr7-0007-str-img-thumbnail",
      "medium-cr7-0007-side-img-thumbnail",
      "medium-cr7-0007-showing-img-thumbnail",
    ],
  },

  {
    title: "CR7 The Batipibe x Ronaldo",
    sku: id++,
    price: 95000,
    group: 2,
    color: ["red", "black"],
    images: [
      "medium-cr7-0008-str-img",
      "medium-cr7-0008-side-img",
      "medium-cr7-0008-str-img-thumbnail",
      "medium-cr7-0008-side-img-thumbnail",
      "medium-cr7-0008-showing-img-thumbnail",
    ],
  },

  {
    title: "CR7 Unique Design 04 x Ronaldo",
    sku: id++,
    price: 95000,
    group: 2,
    color: ["red"],
    images: [
      "medium-cr7-0009-str-img",
      "medium-cr7-0009-side-img",
      "medium-cr7-0009-str-img-thumbnail",
      "medium-cr7-0009-side-img-thumbnail",
      "medium-cr7-0009-showing-img-thumbnail",
    ],
  },

  {
    title: "CR7 Walking From Behind x Ronaldo",
    sku: id++,
    price: 95000,
    group: 2,
    color: ["red"],
    images: [
      "medium-cr7-0010-str-img",
      "medium-cr7-0010-side-img",
      "medium-cr7-0010-str-img-thumbnail",
      "medium-cr7-0010-side-img-thumbnail",
      "medium-cr7-0010-showing-img-thumbnail",
    ],
  },

  {
    title: "CR7 Winning Pose With Signature x Ronaldo",
    sku: id++,
    price: 95000,
    group: 2,
    color: ["red", "yellow"],
    images: [
      "medium-cr7-0011-str-img",
      "medium-cr7-0011-side-img",
      "medium-cr7-0011-str-img-thumbnail",
      "medium-cr7-0011-side-img-thumbnail",
      "medium-cr7-0011-showing-img-thumbnail",
    ],
  },

  {
    title: "M10 World Cup Trophy 2022 With Signature x Messi",
    sku: id++,
    price: 95000,
    group: 1,
    color: ["black", "white", "yellow"],
    images: [
      "medium-messi-0001-str-img",
      "medium-messi-0001-side-img",
      "medium-messi-0001-str-img-thumbnail",
      "medium-messi-0001-side-img-thumbnail",
      "medium-messi-0001-showing-img-thumbnail",
    ],
  },

  {
    title: "M10 With Trophy Design x Messi",
    sku: id++,
    price: 95000,
    group: 1,
    color: ["blue", "white"],
    images: [
      "medium-messi-0002-str-img",
      "medium-messi-0002-side-img",
      "medium-messi-0002-str-img-thumbnail",
      "medium-messi-0002-side-img-thumbnail",
      "medium-messi-0002-showing-img-thumbnail",
    ],
  },

  {
    title: "M10 Holding World Cup 2022 Trophy x Messi",
    sku: id++,
    price: 95000,
    group: 1,
    color: ["black", "yellow"],
    images: [
      "medium-messi-0003-str-img",
      "medium-messi-0003-side-img",
      "medium-messi-0003-str-img-thumbnail",
      "medium-messi-0003-side-img-thumbnail",
      "medium-messi-0003-showing-img-thumbnail",
    ],
  },

  {
    title: "M10 Unique Design 01 x Messi",
    sku: id++,
    price: 95000,
    group: 1,
    color: ["blue"],
    images: [
      "medium-messi-0004-str-img",
      "medium-messi-0004-side-img",
      "medium-messi-0004-str-img-thumbnail",
      "medium-messi-0004-side-img-thumbnail",
      "medium-messi-0004-showing-img-thumbnail",
    ],
  },

  {
    title: "M10 Unique Design 02 x Messi",
    sku: id++,
    price: 95000,
    group: 1,
    color: ["blue", "red"],
    images: [
      "medium-messi-0005-str-img",
      "medium-messi-0005-side-img",
      "medium-messi-0005-str-img-thumbnail",
      "medium-messi-0005-side-img-thumbnail",
      "medium-messi-0005-showing-img-thumbnail",
    ],
  },

  {
    title: "M10 Holding Trophy With Teammate x Messi",
    sku: id++,
    price: 95000,
    group: 1,
    color: ["multi"],
    images: [
      "medium-messi-0006-str-img",
      "medium-messi-0006-side-img",
      "medium-messi-0006-str-img-thumbnail",
      "medium-messi-0006-side-img-thumbnail",
      "medium-messi-0006-showing-img-thumbnail",
    ],
  },

  {
    title: "M10 Home Jersey x Messi",
    sku: id++,
    price: 95000,
    group: 1,
    color: ["blue", "white"],
    images: [
      "medium-messi-0007-str-img",
      "medium-messi-0007-side-img",
      "medium-messi-0007-str-img-thumbnail",
      "medium-messi-0007-side-img-thumbnail",
      "medium-messi-0007-showing-img-thumbnail",
    ],
  },

  {
    title: "M10 Unique Design 03 x Messi",
    sku: id++,
    price: 95000,
    group: 1,
    color: ["blue", "yellow"],
    images: [
      "medium-messi-0008-str-img",
      "medium-messi-0008-side-img",
      "medium-messi-0008-str-img-thumbnail",
      "medium-messi-0008-side-img-thumbnail",
      "medium-messi-0008-showing-img-thumbnail",
    ],
  },

  {
    title: "M10 The True King Art x Messi",
    sku: id++,
    price: 95000,
    group: 1,
    color: ["blue"],
    images: [
      "medium-messi-0009-str-img",
      "medium-messi-0009-side-img",
      "medium-messi-0009-str-img-thumbnail",
      "medium-messi-0009-side-img-thumbnail",
      "medium-messi-0009-showing-img-thumbnail",
    ],
  },

  {
    title: "M10 Statue Of Liberty x Messi",
    sku: id++,
    price: 95000,
    group: 1,
    color: ["blue"],
    images: [
      "medium-messi-0010-str-img",
      "medium-messi-0010-side-img",
      "medium-messi-0010-str-img-thumbnail",
      "medium-messi-0010-side-img-thumbnail",
      "medium-messi-0010-showing-img-thumbnail",
    ],
  },

  {
    title: "M10 Unique Design 04 x Messi",
    sku: id++,
    price: 95000,
    group: 1,
    color: ["blue", "white"],
    images: [
      "medium-messi-0011-str-img",
      "medium-messi-0011-side-img",
      "medium-messi-0011-str-img-thumbnail",
      "medium-messi-0011-side-img-thumbnail",
      "medium-messi-0011-showing-img-thumbnail",
    ],
  },

  {
    title: "Lucy 01 x Cyberpunk",
    sku: id++,
    price: 95000,
    group: 0,
    color: ["black"],
    images: [
      "medium-cyperpunk-0001-str-img",
      "medium-cyperpunk-0001-side-img",
      "medium-cyperpunk-0001-str-img-thumbnail",
      "medium-cyperpunk-0001-side-img-thumbnail",
      "medium-cyperpunk-0001-showing-image-thumbnail",
      ,
    ],
  },

  {
    title: "Lucy 02 x Cyberpunk",
    sku: id++,
    price: 95000,
    group: 0,
    color: ["multi"],
    images: [
      "medium-cyperpunk-0002-str-img",
      "medium-cyperpunk-0002-side-img",
      "medium-cyperpunk-0002-str-img-thumbnail",
      "medium-cyperpunk-0002-side-img-thumbnail",
      "medium-cyperpunk-0002-showing-image-thumbnail",
      ,
    ],
  },

  {
    title: "Lucy 03 x Cyberpunk",
    sku: id++,
    price: 95000,
    group: 0,
    color: ["black", "white"],
    images: [
      "medium-cyperpunk-0003-str-img",
      "medium-cyperpunk-0003-side-img",
      "medium-cyperpunk-0003-str-img-thumbnail",
      "medium-cyperpunk-0003-side-img-thumbnail",
      "medium-cyperpunk-0003-showing-image-thumbnail",
      ,
    ],
  },

  {
    title: "Lucy 04 x Cyberpunk",
    sku: id++,
    price: 95000,
    group: 0,
    color: ["yellow", "blue"],
    images: [
      "medium-cyperpunk-0004-str-img",
      "medium-cyperpunk-0004-side-img",
      "medium-cyperpunk-0004-str-img-thumbnail",
      "medium-cyperpunk-0004-side-img-thumbnail",
      "medium-cyperpunk-0004-showing-image-thumbnail",
      ,
    ],
  },

  {
    title: "Lucy 05 x Cyberpunk",
    sku: id++,
    price: 95000,
    group: 0,
    color: ["blue", "yellow"],
    images: [
      "medium-cyperpunk-0005-str-img",
      "medium-cyperpunk-0005-side-img",
      "medium-cyperpunk-0005-str-img-thumbnail",
      "medium-cyperpunk-0005-side-img-thumbnail",
      "medium-cyperpunk-0005-showing-image-thumbnail",
      ,
    ],
  },

  {
    title: "Lucy 06 x Cyberpunk",
    sku: id++,
    price: 95000,
    group: 0,
    color: ["blue", "yellow"],
    images: [
      "medium-cyperpunk-0006-str-img",
      "medium-cyperpunk-0006-side-img",
      "medium-cyperpunk-0006-str-img-thumbnail",
      "medium-cyperpunk-0006-side-img-thumbnail",
      "medium-cyperpunk-0006-showing-image-thumbnail",
      ,
    ],
  },

  {
    title: "Outer Space Bubha x Astronault",
    sku: id++,
    price: 95000,
    group: 8,
    color: ["orange", "red", "blue"],
    images: [
      "medium-astronault-0001-str-img",
      "medium-astronault-0001-side-img",
      "medium-astronault-0001-str-img-thumbnail",
      "medium-astronault-0001-side-img-thumbnail",
      "medium-astronault-0001-showing-img-thumbnail",
    ],
  },

  {
    title: "Outer Space Skateboard x Astronault",
    sku: id++,
    price: 95000,
    group: 8,
    color: ["orange", "red", "blue"],
    images: [
      "medium-astronault-0002-str-img",
      "medium-astronault-0002-side-img",
      "medium-astronault-0002-str-img-thumbnail",
      "medium-astronault-0002-side-img-thumbnail",
      "medium-astronault-0002-showing-img-thumbnail",
    ],
  },

  {
    title: "Outer Space Yoga x Astronault",
    sku: id++,
    price: 95000,
    group: 8,
    color: ["orange", "red", "blue"],
    images: [
      "medium-astronault-0003-str-img",
      "medium-astronault-0003-side-img",
      "medium-astronault-0003-str-img-thumbnail",
      "medium-astronault-0003-side-img-thumbnail",
      "medium-astronault-0003-showing-img-thumbnail",
    ],
  },

  {
    title: "Nike Doodle x Unique",
    sku: id++,
    price: 110000,
    group: 9,
    color: ["black", "white"],
    images: [
      "medium-unique-0001-str-img",
      "medium-unique-0001-side-img",
      "medium-unique-0001-str-img-thumbnail",
      "medium-unique-0001-side-img-thumbnail",
      "medium-unique-0001-showing-img-thumbnail",
    ],
  },

  {
    title: "Killer Panda x Unique",
    sku: id++,
    price: 110000,
    group: 9,
    color: ["black", "white"],
    images: [
      "medium-unique-0002-str-img",
      "medium-unique-0002-side-img",
      "medium-unique-0002-str-img-thumbnail",
      "medium-unique-0002-side-img-thumbnail",
      "medium-unique-0002-showing-img-thumbnail",
    ],
  },

  {
    title: "Numeric x Unique",
    sku: id++,
    price: 110000,
    group: 9,
    color: ["black", "white"],
    images: [
      "medium-unique-0003-str-img",
      "medium-unique-0003-side-img",
      "medium-unique-0003-str-img-thumbnail",
      "medium-unique-0003-side-img-thumbnail",
      "medium-unique-0003-showing-img-thumbnail",
    ],
  },

  {
    title: "Random Doodle x Unique",
    sku: id++,
    price: 110000,
    group: 9,
    color: ["multi"],
    images: [
      "medium-unique-0004-str-img",
      "medium-unique-0004-side-img",
      "medium-unique-0004-str-img-thumbnail",
      "medium-unique-0004-side-img-thumbnail",
      "medium-unique-0004-showing-img-thumbnail",
    ],
  },

  {
    title: "Random Doodle 1 x Unique",
    sku: id++,
    price: 110000,
    group: 9,
    color: ["multi"],
    images: [
      "medium-unique-0005-str-img",
      "medium-unique-0005-side-img",
      "medium-unique-0005-str-img-thumbnail",
      "medium-unique-0005-side-img-thumbnail",
      "medium-unique-0005-showing-img-thumbnail",
    ],
  },

  {
    title: "Killer Gun Doodle x Unique",
    sku: id++,
    price: 110000,
    group: 9,
    color: ["black", "white", "red"],
    images: [
      "medium-unique-0006-str-img",
      "medium-unique-0006-side-img",
      "medium-unique-0006-str-img-thumbnail",
      "medium-unique-0006-side-img-thumbnail",
      "medium-unique-0006-showing-img-thumbnail",
    ],
  },

  {
    title: "Cool Doodle x Unique",
    sku: id++,
    price: 110000,
    group: 9,
    color: ["black", "white", "red"],
    images: [
      "medium-unique-0007-str-img",
      "medium-unique-0007-side-img",
      "medium-unique-0007-str-img-thumbnail",
      "medium-unique-0007-side-img-thumbnail",
      "medium-unique-0007-showing-img-thumbnail",
    ],
  },

  {
    title: "Dangerous Doodle x Unique",
    sku: id++,
    price: 110000,
    group: 9,
    color: ["multi"],
    images: [
      "medium-unique-0008-str-img",
      "medium-unique-0008-side-img",
      "medium-unique-0008-str-img-thumbnail",
      "medium-unique-0008-side-img-thumbnail",
      "medium-unique-0008-showing-img-thumbnail",
    ],
  },

  {
    title: "Abstract Art Doodle x Unique",
    sku: id++,
    price: 110000,
    group: 9,
    color: ["black", "white", "red"],
    images: [
      "medium-unique-0009-str-img",
      "medium-unique-0009-side-img",
      "medium-unique-0009-str-img-thumbnail",
      "medium-unique-0009-side-img-thumbnail",
      "medium-unique-0009-showing-img-thumbnail",
    ],
  },

  {
    title: "Funny Animal Doodle x Unique",
    sku: id++,
    price: 110000,
    group: 9,
    color: ["multi"],
    images: [
      "medium-unique-0010-str-img",
      "medium-unique-0010-side-img",
      "medium-unique-0010-str-img-thumbnail",
      "medium-unique-0010-side-img-thumbnail",
      "medium-unique-0010-showing-img-thumbnail",
    ],
  },
];
const ProductSeed = productsList.map((product) => ({
  ...product,
  quantity: 100,
  score: 5,
  n_o_reviews: 0,
  instock_reserved: 100,
  instock_available: 100,
  sku: product.sku + "",
}));

module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    await db.createCollection("products");
    await db.collection("products").insertMany(ProductSeed);
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    await db.collection("products").drop();
  },
};
