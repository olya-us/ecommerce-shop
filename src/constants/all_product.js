import p1_img from "../assets/product_1.png";
import p2_img from "../assets/product_2.png";
import p3_img from "../assets/product_3.png";
import p4_img from "../assets/product_4.png";
import p5_img from "../assets/product_5.png";
import p6_img from "../assets/product_6.png";
import p7_img from "../assets/product_7.png";
import p8_img from "../assets/product_8.png";
import p9_img from "../assets/product_9.png";
import p10_img from "../assets/product_10.png";
import p11_img from "../assets/product_11.png";
import p12_img from "../assets/product_12.png";
import p13_img from "../assets/product_13.png";
import p14_img from "../assets/product_14.png";
import p15_img from "../assets/product_15.png";
import p16_img from "../assets/product_16.png";
import p17_img from "../assets/product_17.png";
import p18_img from "../assets/product_18.png";
import p19_img from "../assets/product_19.png";
import p20_img from "../assets/product_20.png";
import p21_img from "../assets/product_21.png";
import p22_img from "../assets/product_22.png";
import p23_img from "../assets/product_23.png";
import p24_img from "../assets/product_24.png";
import p25_img from "../assets/product_25.png";
import p26_img from "../assets/product_26.png";
import p27_img from "../assets/product_27.png";
import p28_img from "../assets/product_28.png";
import p29_img from "../assets/product_29.png";
import p30_img from "../assets/product_30.png";
import p31_img from "../assets/product_31.png";
import p32_img from "../assets/product_32.png";
import p33_img from "../assets/product_33.png";

let all_product = [
  {
    id: 1,
    name: "Nike Dunk Low",
    category: "women",
    image: p1_img,
    price: 155,
  },
  {
    id: 2,
    name: "Nike Sportswear Phoenix Fleece",
    category: "women",
    image: p2_img,
    price: 70,
  },
  {
    id: 3,
    name: "Nike Sportswear Phoenix Fleece",
    category: "women",
    image: p3_img,
    price: 70,
  },
  {
    id: 4,
    name: "Nike Zoom Vomero 5 Premium",
    category: "women",
    image: p4_img,
    price: 180,
  },
  {
    id: 5,
    name: "Nike Air Max 270",
    category: "women",
    image: p5_img,
    price: 160,
  },
  {
    id: 6,
    name: "Nike Sportswear Club Fleece",
    category: "women",
    image: p6_img,
    price: 65,
  },
  {
    id: 7,
    name: "Nike Sportswear Club Fleece",
    category: "women",
    image: p7_img,
    price: 60,
  },
  {
    id: 8,
    name: "Nike Air Force 1 '07",
    category: "women",
    image: p8_img,
    price: 115,
  },
  {
    id: 9,
    name: "Nike Court Legacy Lift",
    category: "women",
    image: p9_img,
    price: 90,
  },
  {
    id: 10,
    name: "Nike Sportswear Phoenix Fleece",
    category: "women",
    image: p10_img,
    price: 75,
  },
  {
    id: 11,
    name: "Nike Sportswear Phoenix Fleece",
    category: "women",
    image: p11_img,
    price: 70,
  },
  {
    id: 12,
    name: "Nike Zoom Vomero 5",
    category: "women",
    image: p12_img,
    price: 160,
  },
  {
    id: 13,
    name: "Nike Dunk Low Retro",
    category: "men",
    image: p13_img,
    price: 115,
  },
  {
    id: 14,
    name: "Nike Pegasus 41",
    category: "men",
    image: p14_img,
    price: 140,
  },
  {
    id: 15,
    name: "Nike Invincible 3",
    category: "men",
    image: p15_img,
    price: 180,
  },
  {
    id: 16,
    name: "Jordan Brooklyn Fleece",
    category: "men",
    image: p16_img,
    price: 65,
  },
  {
    id: 17,
    name: "Jordan Brooklyn Fleece",
    category: "men",
    image: p17_img,
    price: 65,
  },
  {
    id: 18,
    name: "Jordan Spizike Low",
    category: "men",
    image: p18_img,
    price: 160,
  },
  {
    id: 19,
    name: "Air Jordan 3 Retro 'Cement Grey'",
    category: "men",
    image: p19_img,
    price: 200,
  },
  {
    id: 20,
    name: "Nike Free Metcon 6",
    category: "men",
    image: p20_img,
    price: 85.0,
    old_price: 120,
  },
  {
    id: 21,
    name: "Nike Metcon 9",
    category: "men",
    image: p21_img,
    price: 150,
  },
  {
    id: 22,
    name: "Nike Sportswear Club",
    category: "men",
    image: p22_img,
    price: 30,
  },
  {
    id: 23,
    name: "Nike Sportswear Club Fleece",
    category: "men",
    image: p23_img,
    price: 85.0,
    old_price: 60,
  },
  {
    id: 24,
    name: "Nike Air DT Max '96",
    category: "men",
    image: p24_img,
    price: 170,
  },
  {
    id: 25,
    name: "Jordan MJ Brooklyn",
    category: "kids",
    image: p25_img,
    price: 60,
  },
  {
    id: 26,
    name: "Jordan MJ Brooklyn Fleece Essentials",
    category: "kids",
    image: p26_img,
    price: 45,
  },
  {
    id: 27,
    name: "Air Jordan 1 High OG 'Black and Gold'",
    category: "kids",
    image: p27_img,
    price: 140,
  },
  {
    id: 28,
    name: "Air Jordan 1 High OG 'Black and Gold'",
    category: "kids",
    image: p28_img,
    price: 150,
  },
  {
    id: 29,
    name: "Jordan 1 Retro Low 'Silver'",
    category: "kids",
    image: p29_img,
    price: 75,
  },
  {
    id: 30,
    name: "Nike Everyday Plus Cushioned",
    category: "kids",
    image: p30_img,
    price: 28,
  },
  {
    id: 31,
    name: "Jordan 1 Mid",
    category: "kids",
    image: p31_img,
    price: 60,
  },
  {
    id: 32,
    name: "Nike Everyday Plus Cushioned",
    category: "kids",
    image: p32_img,
    price: 28,
  },
  {
    id: 33,
    name: "Jordan MJ Brooklyn",
    category: "kids",
    image: p33_img,
    price: 50,
  },
];

export default all_product;