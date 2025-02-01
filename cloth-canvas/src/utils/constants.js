export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWFiMDBjMzE3NWI4MmFjYWJkMzdiMTE0OTVmYWMzOCIsIm5iZiI6MTczMDM4MzE0Ni41OTg4Mjc2LCJzdWIiOiI2NzIzOGJmMjAwM2M0YjViNWI2NDRkNjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xRcmhKPL1hzY5aiIr0vHTkcdg5be_7nx4hCBVceU6hw",
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const DEFAULT_POSTER =
  "https://miro.medium.com/v2/resize:fit:828/format:webp/1*94SsFbivh18YNKuiTEIkmA.jpeg";
export const OPEAI_GPT_KEY = process.env.REACT_APP_OPEN_AI_KEY;

export const categorData = [
  {
    label: "women",
    src: "https://videos.pexels.com/video-files/4919748/4919748-uhd_2732_1440_25fps.mp4",
    title:"LifeWear Collection",
    description:"High-quality, timeless essentials that make every day easier for everyone, everywhere.",
    subcategories:[{
      name:"Outerwear",
      image:"https://im.uniqlo.com/global-cms/spa/resb1b4dec857e645c1dc6c4f7458941faefr.jpg"},{
        name:"Bottoms",
        image:"https://im.uniqlo.com/global-cms/spa/res482c1449d0d77992ea64930aa6939200fr.jpg"
      },{
        name:"Shirts",
        image:"https://im.uniqlo.com/global-cms/spa/resfca0c886686017edc39cf262537abdc1fr.jpg"
      },{
        name:"Dresses &Skirts",
        image:"https://im.uniqlo.com/global-cms/spa/resf4d20cc90dca2503803d3eacf0981e3dfr.jpg"
      },{
        name:"Innerwear",
        image:"https://im.uniqlo.com/global-cms/spa/resb6482bacabc2646a8f7986f829d3481bfr.jpg"
      },{
        name:"Accessories",
        image:"https://im.uniqlo.com/global-cms/spa/res759f6f47ceebca156ff7f3f861489b8efr.jpg"
      },{
        name:"T shirts & Sweats",
        image:"https://im.uniqlo.com/global-cms/spa/res39fb458da4b73b337131d48603460aa4fr.jpg"
      },{
        name:"Loungewear & Home",
        image:"https://im.uniqlo.com/global-cms/spa/resbe017955dfa2c51e7a6e659a34dea7b4fr.jpg"
      }
    ]
  },
  {
    label: "men",
    src: "https://videos.pexels.com/video-files/4694596/4694596-uhd_2732_1440_25fps.mp4",
    title:"LifeWear Collection",
    description:"High-quality, timeless essentials that make every day easier for everyone, everywhere.",
    subcategories:[{
      name:"Outerwear",
      image:"https://im.uniqlo.com/global-cms/spa/resb1b4dec857e645c1dc6c4f7458941faefr.jpg"},{
        name:"Bottoms",
        image:"https://im.uniqlo.com/global-cms/spa/res482c1449d0d77992ea64930aa6939200fr.jpg"
      },{
        name:"Shirts",
        image:"https://im.uniqlo.com/global-cms/spa/resfca0c886686017edc39cf262537abdc1fr.jpg"
      },{
        name:"Dresses &Skirts",
        image:"https://im.uniqlo.com/global-cms/spa/resf4d20cc90dca2503803d3eacf0981e3dfr.jpg"
      },{
        name:"Innerwear",
        image:"https://im.uniqlo.com/global-cms/spa/resb6482bacabc2646a8f7986f829d3481bfr.jpg"
      },{
        name:"Accessories",
        image:"https://im.uniqlo.com/global-cms/spa/res759f6f47ceebca156ff7f3f861489b8efr.jpg"
      },{
        name:"T shirts & Sweats",
        image:"https://im.uniqlo.com/global-cms/spa/res39fb458da4b73b337131d48603460aa4fr.jpg"
      },{
        name:"Loungewear & Home",
        image:"https://im.uniqlo.com/global-cms/spa/resbe017955dfa2c51e7a6e659a34dea7b4fr.jpg"
      }
    ]
  },
  {
    label: "kids",
    src: "https://videos.pexels.com/video-files/8385343/8385343-uhd_2560_1440_24fps.mp4",
     title:"Just Arrived: Sanrio Characters",
    description:"© 2024 SANRIO CO., LTD. APPROVAL NO. L654539",
    subcategories:[{
      name:"Outerwear",
      image:"https://im.uniqlo.com/global-cms/spa/resb1b4dec857e645c1dc6c4f7458941faefr.jpg"},{
        name:"Bottoms",
        image:"https://im.uniqlo.com/global-cms/spa/res482c1449d0d77992ea64930aa6939200fr.jpg"
      },{
        name:"Shirts",
        image:"https://im.uniqlo.com/global-cms/spa/resfca0c886686017edc39cf262537abdc1fr.jpg"
      },{
        name:"Dresses &Skirts",
        image:"https://im.uniqlo.com/global-cms/spa/resf4d20cc90dca2503803d3eacf0981e3dfr.jpg"
      },{
        name:"Innerwear",
        image:"https://im.uniqlo.com/global-cms/spa/resb6482bacabc2646a8f7986f829d3481bfr.jpg"
      },{
        name:"Accessories",
        image:"https://im.uniqlo.com/global-cms/spa/res759f6f47ceebca156ff7f3f861489b8efr.jpg"
      },{
        name:"T shirts & Sweats",
        image:"https://im.uniqlo.com/global-cms/spa/res39fb458da4b73b337131d48603460aa4fr.jpg"
      },{
        name:"Loungewear & Home",
        image:"https://im.uniqlo.com/global-cms/spa/resbe017955dfa2c51e7a6e659a34dea7b4fr.jpg"
      }
    ]
  },
  {
    label: "baby",
    src: "https://videos.pexels.com/video-files/7119624/7119624-hd_1920_1080_25fps.mp4",
     title:"Fleece Leggings",
    description:"A soft fleece interior for extra warmth.",
    subcategories:[{
      name:"Outerwear",
      image:"https://im.uniqlo.com/global-cms/spa/resb1b4dec857e645c1dc6c4f7458941faefr.jpg"},{
        name:"Bottoms",
        image:"https://im.uniqlo.com/global-cms/spa/res482c1449d0d77992ea64930aa6939200fr.jpg"
      },{
        name:"Shirts",
        image:"https://im.uniqlo.com/global-cms/spa/resfca0c886686017edc39cf262537abdc1fr.jpg"
      },{
        name:"Dresses &Skirts",
        image:"https://im.uniqlo.com/global-cms/spa/resf4d20cc90dca2503803d3eacf0981e3dfr.jpg"
      },{
        name:"Innerwear",
        image:"https://im.uniqlo.com/global-cms/spa/resb6482bacabc2646a8f7986f829d3481bfr.jpg"
      },{
        name:"Accessories",
        image:"https://im.uniqlo.com/global-cms/spa/res759f6f47ceebca156ff7f3f861489b8efr.jpg"
      },{
        name:"T shirts & Sweats",
        image:"https://im.uniqlo.com/global-cms/spa/res39fb458da4b73b337131d48603460aa4fr.jpg"
      },{
        name:"Loungewear & Home",
        image:"https://im.uniqlo.com/global-cms/spa/resbe017955dfa2c51e7a6e659a34dea7b4fr.jpg"
      },{
        name:"Sweaters & Knitwear",
        image:"https://im.uniqlo.com/global-cms/spa/resfca0c886686017edc39cf262537abdc1fr.jpg"
      },{
        name:"SALE",
        image:"https://im.uniqlo.com/global-cms/spa/res5c61825f6a8c44c7d15d0df29e83d899fr.png"
      }
    ]
  },
];
