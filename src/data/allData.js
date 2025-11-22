// const allDatas = [
//   {
//     _id: '1',
//     image: '../img/lada.png',
//     name: 'Lada Largus',
//     description:
//       'LADA Largus универсал – обновленная модель семейства Largus, запущенная в производство в феврале 2019 года. Пассажирский универсал органичен в городской среде, надежен в путешествиях, полезен в бизнесе и работе. Крепкий семейный автомобиль покоряет новым уровнем комфорта, внушает доверие достойными техническими характеристиками и многофункциональностью, радует глаз яркой внешностью. Это универсальный вариант, подходящий для комфортабельных путешествий, выполнения семейных и рабочих дел, активного загородного отдыха, решения множества повседневных задач.',
//     price: '$120',
//     rating: 4.5,
//     section: '1',
//     category: 'sedan',
//     color: 'Серебристый',
//     year: '2019',
//     transmission: 'механическая',
//     fuel_type: 'бензин',
//     fuel: '6-7 ',
//     stock: 234,
//   },
//   {
//     _id: '2',
//     image: '../img/12.jpg',
//     image_1: '../img/121.png',
//     name: 'Lada Largus 7 мест',
//     description:
//       'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
//     price: '$120',
//     rating: 4.5,
//     section: '1',
//     category: 'gruzovoy',
//     color: ['red', 'white'],
//     year: '2025',
//     transmission: 'механическая, автоматическая',
//     fuel_type: 'бензин, электро, дизель, гибрид',
//     fuel: '6-7 ',
//     stock: 234,
//   },
//   {
//     _id: '3',
//     image: '../img/gaza21r32.jpg',
//     image_1: '../img/121.png',
//     name: 'Gaz A21R32',
//     description:
//       'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
//     price: '$120',
//     rating: 4.5,
//     section: '1',
//     category: 'gruzovoy',
//     color: 'Бордовый',
//     year: '2021',
//     transmission: 'механическая',
//     fuel_type: 'дизель',
//     fuel: '6-7 ',
//     stock: 234,
//   },
//   {
//     _id: '4',
//     image: 'https://sc04.alicdn.com/kf/HTB1jT8jmsjI8KJjSsppq6xbyVXaM.jpg',
//     name: 'Прицепы',
//     description:
//       'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
//     price: '$120',
//     rating: 4.5,
//     section: '1',
//     category: 'pricep',
//     color: ['red', 'white'],
//     year: '2025',
//     transmission: 'механическая, автоматическая',
//     fuel_type: 'бензин, электро, дизель, гибрид',
//     fuel: '6-7 ',
//     stock: 234,
//   },
//   {
//     _id: '5',
//     image:
//       'https://lodki-lodki.ru/images/product_images/popup_images/3731_ZTxz.jpg',
//     name: 'Лодки',
//     description:
//       'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
//     price: '$120',
//     rating: 4.5,
//     section: '1',
//     category: 'lodka',
//     color: ['red', 'white'],
//     year: '2025',
//     transmission: 'механическая, автоматическая',
//     fuel_type: 'бензин, электро, дизель, гибрид',
//     fuel: '6-7 ',
//     stock: 234,
//   },
//   {
//     _id: '6',
//     image: '../img/12.jpg',
//     image_1: '../img/121.png',
//     name: 'Lada Largus 7 мест',
//     description:
//       'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
//     price: '$120',
//     rating: 4.5,
//     section: '1',
//     category: 'gruzovoy',
//     color: ['red', 'white'],
//     year: '2025',
//     transmission: 'механическая, автоматическая',
//     fuel_type: 'бензин, электро, дизель, гибрид',
//     fuel: '6-7 ',
//     stock: 234,
//   },
//   {
//     _id: '7',
//     image: 'https://sc04.alicdn.com/kf/HTB1jT8jmsjI8KJjSsppq6xbyVXaM.jpg',
//     name: 'Прицепы',
//     description:
//       'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
//     price: '$120',
//     rating: 4.5,
//     section: '1',
//     category: 'pricep',
//     color: ['red', 'white'],
//     year: '2025',
//     transmission: 'механическая, автоматическая',
//     fuel_type: 'бензин, электро, дизель, гибрид',
//     fuel: '6-7 ',
//     stock: 234,
//   },
//   {
//     _id: '8',
//     image: 'https://sc04.alicdn.com/kf/HTB1jT8jmsjI8KJjSsppq6xbyVXaM.jpg',
//     name: 'Прицепы',
//     description:
//       'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
//     price: '$120',
//     rating: 4.5,
//     section: '1',
//     category: 'pricep',
//     color: ['red', 'white'],
//     year: '2025',
//     transmission: 'механическая, автоматическая',
//     fuel_type: 'бензин, электро, дизель, гибрид',
//     fuel: '6-7 ',
//     stock: 234,
//   },
//   {
//     _id: '9',
//     image: 'https://sc04.alicdn.com/kf/HTB1jT8jmsjI8KJjSsppq6xbyVXaM.jpg',
//     name: 'Прицепы',
//     description:
//       'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
//     price: '$120',
//     rating: 4.5,
//     section: '1',
//     category: 'pricep',
//     color: ['red', 'white'],
//     year: '2025',
//     transmission: 'механическая, автоматическая',
//     fuel_type: 'бензин, электро, дизель, гибрид',
//     fuel: '6-7 ',
//     stock: 234,
//   },
//   {
//     _id: '10',
//     image: 'https://sc04.alicdn.com/kf/HTB1jT8jmsjI8KJjSsppq6xbyVXaM.jpg',
//     name: 'Прицепы',
//     description:
//       'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
//     price: '$120',
//     rating: 4.5,
//     section: '1',
//     category: 'pricep',
//     color: ['red', 'white'],
//     year: '2025',
//     transmission: 'механическая, автоматическая',
//     fuel_type: 'бензин, электро, дизель, гибрид',
//     fuel: '6-7 ',
//     stock: 234,
//   },
//   {
//     _id: '11',
//     image:
//       'https://lodki-lodki.ru/images/product_images/popup_images/3731_ZTxz.jpg',
//     name: 'Лодки',
//     description:
//       'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
//     price: '$120',
//     rating: 4.5,
//     section: '1',
//     category: 'lodka',
//     color: ['red', 'white'],
//     year: '2025',
//     transmission: 'механическая, автоматическая',
//     fuel_type: 'бензин, электро, дизель, гибрид',
//     fuel: '6-7 ',
//     stock: 234,
//   },
//   {
//     _id: '12',
//     image:
//       'https://lodki-lodki.ru/images/product_images/popup_images/3731_ZTxz.jpg',
//     name: 'Лодки',
//     description:
//       'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
//     price: '$120',
//     rating: 4.5,
//     section: '1',
//     category: 'lodka',
//     color: ['red', 'white'],
//     year: '2025',
//     transmission: 'механическая, автоматическая',
//     fuel_type: 'бензин, электро, дизель, гибрид',
//     fuel: '6-7 ',
//     stock: 234,
//   },
//   {
//     _id: '13',
//     image:
//       'https://lodki-lodki.ru/images/product_images/popup_images/3731_ZTxz.jpg',
//     name: 'Лодки',
//     description:
//       'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
//     price: '$120',
//     rating: 4.5,
//     section: '1',
//     category: 'lodka',
//     color: ['red', 'white'],
//     year: '2025',
//     transmission: 'механическая, автоматическая',
//     fuel_type: 'бензин, электро, дизель, гибрид',
//     fuel: '6-7 ',
//     stock: 234,
//   },
//   {
//     _id: '14',
//     image:
//       'https://lodki-lodki.ru/images/product_images/popup_images/3731_ZTxz.jpg',
//     name: 'Лодки',
//     description:
//       'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
//     price: '$120',
//     rating: 4.5,
//     section: '1',
//     category: 'lodka',
//     color: ['red', 'white'],
//     year: '2025',
//     transmission: 'механическая, автоматическая',
//     fuel_type: 'бензин, электро, дизель, гибрид',
//     fuel: '6-7 ',
//     stock: 234,
//   },
// ];

// export default allDatas;

const allDatas = [
  {
    _id: '1',
    make: 'Toyota',
    year: '2013',
    model: 'Lada Largus',
    bodyTyle: 'Sedan',
    fuelType: 'Gas',
    price: '21,998',
    kmmils: '118K',
    category: 'sedan',
    engin: '6-cyl, Gas, 3.5L',
    transmision: 'Automatic',
    images: {
      img: '../img/lada.png',
      img2: 'https://img2.carmax.com/assets/24164720/image/8.jpg?width=400&height=300',
      img3: 'https://img2.carmax.com/assets/24164720/image/1.jpg?width=400&height=300',
      img4: 'https://img2.carmax.com/assets/24164720/image/3.jpg?width=400&height=300',
      img5: 'https://img2.carmax.com/assets/24164720/image/2.jpg?width=400&height=300',
      img6: 'https://img2.carmax.com/assets/24164720/image/4.jpg?width=400&height=300',
      img7: 'https://img2.carmax.com/assets/24164720/image/5.jpg?width=400&height=300',
      img8: 'https://img2.carmax.com/assets/24164720/image/6.jpg?width=400&height=300',
      img9: 'https://img2.carmax.com/assets/24164720/image/7.jpg?width=400&height=300',
      img10:
        'https://img2.carmax.com/assets/24164720/image/8.jpg?width=400&height=300',
      img11:
        'https://img2.carmax.com/assets/24164720/image/16.jpg?width=400&height=300',
      img12:
        'https://img2.carmax.com/assets/24164720/image/10.jpg?width=400&height=300',
      img13:
        'https://img2.carmax.com/assets/24164720/image/11.jpg?width=400&height=300',
      img14:
        'https://img2.carmax.com/assets/24164720/image/12.jpg?width=400&height=300',
      img15:
        'https://img2.carmax.com/assets/24164720/image/21.jpg?width=400&height=300',
    },
  },
  {
    _id: '2',
    make: 'Mercedes-Benz',
    year: '2018',
    model: 'C300',
    bodyTyle: 'Sedan',
    fuelType: 'Gas',
    price: '18,998',
    kmmils: '118K',
    category: 'sedan',
    engin: '4-cyl, Turbo Gas, 2.0L',
    transmision: 'Automatic',
    images: {
      img: 'https://img2.carmax.com/assets/24164701/image/hero.jpg?width=800&height=450s',
      img2: 'https://img2.carmax.com/assets/24164701/image/8.jpg?width=400&height=300',
      img3: 'https://img2.carmax.com/assets/24164701/image/1.jpg?width=400&height=300',
      img4: 'https://img2.carmax.com/assets/24164701/image/3.jpg?width=400&height=300',
      img5: 'https://img2.carmax.com/assets/24164701/image/2.jpg?width=400&height=300',
      img6: 'https://img2.carmax.com/assets/24164701/image/4.jpg?width=400&height=300',
      img7: 'https://img2.carmax.com/assets/24164701/image/5.jpg?width=400&height=300',
      img8: 'https://img2.carmax.com/assets/24164701/image/6.jpg?width=400&height=300',
      img9: 'https://img2.carmax.com/assets/24164701/image/7.jpg?width=400&height=300',
      img10:
        'https://img2.carmax.com/assets/24164701/image/8.jpg?width=400&height=300',
      img11:
        'https://img2.carmax.com/assets/24164701/image/16.jpg?width=400&height=300',
      img12:
        'https://img2.carmax.com/assets/24164701/image/10.jpg?width=400&height=300',
      img13:
        'https://img2.carmax.com/assets/24164701/image/11.jpg?width=400&height=300',
      img14:
        'https://img2.carmax.com/assets/24164701/image/12.jpg?width=400&height=300',
      img15:
        'https://img2.carmax.com/assets/24164701/image/21.jpg?width=400&height=300',
    },
  },
  {
    _id: '3',
    make: 'Ford',
    year: '2018',
    model: 'Mustang Mach-E GT',
    bodyTyle: 'Sedan',
    fuelType: 'Electric',
    price: '46,998',
    kmmils: '21K miles',
    category: 'lodka',
    engin: 'All Wheel Drive',
    transmision: 'Automatic',
    images: {
      img: 'https://lodki-lodki.ru/images/product_images/popup_images/3731_ZTxz.jpg',
      img2: 'https://img2.carmax.com/assets/23121165/image/8.jpg?width=400&height=300',
      img3: 'https://img2.carmax.com/assets/23121165/image/1.jpg?width=400&height=300',
      img4: 'https://img2.carmax.com/assets/23121165/image/3.jpg?width=400&height=300',
      img5: 'https://img2.carmax.com/assets/23121165/image/2.jpg?width=400&height=300',
      img6: 'https://img2.carmax.com/assets/23121165/image/4.jpg?width=400&height=300',
      img7: 'https://img2.carmax.com/assets/23121165/image/5.jpg?width=400&height=300',
      img8: 'https://img2.carmax.com/assets/23121165/image/6.jpg?width=400&height=300',
      img9: 'https://img2.carmax.com/assets/23121165/image/7.jpg?width=400&height=300',
      img10:
        'https://img2.carmax.com/assets/23121165/image/8.jpg?width=400&height=300',
      img11:
        'https://img2.carmax.com/assets/23121165/image/16.jpg?width=400&height=300',
      img12:
        'https://img2.carmax.com/assets/23121165/image/10.jpg?width=400&height=300',
      img13:
        'https://img2.carmax.com/assets/23121165/image/11.jpg?width=400&height=300',
      img14:
        'https://img2.carmax.com/assets/23121165/image/12.jpg?width=400&height=300',
      img15:
        'https://img2.carmax.com/assets/23121165/image/21.jpg?width=400&height=300',
    },
  },
  {
    _id: '4',
    make: 'Mercedes-Benz C300',
    year: '2018',
    model: 'Polo',
    bodyTyle: 'Sedan',
    fuelType: 'Gas',
    price: '234500',
    category: 'pricep',
    transmision: 'automatic',
    images: {
      img: 'https://sc04.alicdn.com/kf/HTB1jT8jmsjI8KJjSsppq6xbyVXaM.jpg',
      img2: 'https://img2.carmax.com/assets/24530817/image/8.jpg?width=400&height=300',
      img3: 'https://img2.carmax.com/assets/24530817/image/1.jpg?width=400&height=300',
      img4: 'https://img2.carmax.com/assets/24530817/image/3.jpg?width=400&height=300',
      img5: 'https://img2.carmax.com/assets/24530817/image/2.jpg?width=400&height=300',
      img6: 'https://img2.carmax.com/assets/24530817/image/4.jpg?width=400&height=300',
      img7: 'https://img2.carmax.com/assets/24530817/image/5.jpg?width=400&height=300',
      img8: 'https://img2.carmax.com/assets/24530817/image/6.jpg?width=400&height=300',
      img9: 'https://img2.carmax.com/assets/24530817/image/7.jpg?width=400&height=300',
      img10:
        'https://img2.carmax.com/assets/24530817/image/8.jpg?width=400&height=300',
      img11:
        'https://img2.carmax.com/assets/24530817/image/16.jpg?width=400&height=300',
      img12:
        'https://img2.carmax.com/assets/24530817/image/10.jpg?width=400&height=300',
      img13:
        'https://img2.carmax.com/assets/24530817/image/11.jpg?width=400&height=300',
      img14:
        'https://img2.carmax.com/assets/24530817/image/12.jpg?width=400&height=300',
      img15:
        'https://img2.carmax.com/assets/24530817/image/21.jpg?width=400&height=300',
    },
  },
  {
    _id: '5',
    make: 'Mercedes-Benz C300',
    year: '2018',
    model: 'Polo',
    bodyTyle: 'Sedan',
    fuelType: 'Gas',
    price: '234500',
    category: 'gruzovoy',
    transmision: 'automatic',
    images: {
      img: '../img/12.png',
      img2: 'https://img2.carmax.com/assets/24564103/image/8.jpg?width=400&height=300',
      img3: 'https://img2.carmax.com/assets/24564103/image/1.jpg?width=400&height=300',
      img4: 'https://img2.carmax.com/assets/24564103/image/3.jpg?width=400&height=300',
      img5: 'https://img2.carmax.com/assets/24564103/image/2.jpg?width=400&height=300',
      img6: 'https://img2.carmax.com/assets/24564103/image/4.jpg?width=400&height=300',
      img7: 'https://img2.carmax.com/assets/24564103/image/5.jpg?width=400&height=300',
      img8: 'https://img2.carmax.com/assets/24564103/image/6.jpg?width=400&height=300',
      img9: 'https://img2.carmax.com/assets/24564103/image/7.jpg?width=400&height=300',
      img10:
        'https://img2.carmax.com/assets/24564103/image/8.jpg?width=400&height=300',
      img11:
        'https://img2.carmax.com/assets/24564103/image/16.jpg?width=400&height=300',
      img12:
        'https://img2.carmax.com/assets/24564103/image/10.jpg?width=400&height=300',
      img13:
        'https://img2.carmax.com/assets/24564103/image/11.jpg?width=400&height=300',
      img14:
        'https://img2.carmax.com/assets/24564103/image/12.jpg?width=400&height=300',
      img15:
        'https://img2.carmax.com/assets/24564103/image/21.jpg?width=400&height=300',
    },
  },
  {
    _id: '6',
    make: 'ford',
    year: '2017',
    model: 'Ford F150 XLT',
    bodyTyle: 'Sedan',
    fuelType: 'Gas',
    price: 234500,
    transmision: 'automatic',
    images: {
      img: 'https://img2.carmax.com/assets/24036359/image/hero.jpg?width=800&height=450',
      img2: 'https://img2.carmax.com/assets/24036359/image/8.jpg?width=400&height=300',
      img3: 'https://img2.carmax.com/assets/24036359/image/1.jpg?width=400&height=300',
      img4: 'https://img2.carmax.com/assets/24036359/image/3.jpg?width=400&height=300',
      img5: 'https://img2.carmax.com/assets/24036359/image/2.jpg?width=400&height=300',
      img6: 'https://img2.carmax.com/assets/24036359/image/4.jpg?width=400&height=300',
      img7: 'https://img2.carmax.com/assets/24036359/image/5.jpg?width=400&height=300',
      img8: 'https://img2.carmax.com/assets/24036359/image/6.jpg?width=400&height=300',
      img9: 'https://img2.carmax.com/assets/24036359/image/7.jpg?width=400&height=300',
      img10:
        'https://img2.carmax.com/assets/24036359/image/8.jpg?width=400&height=300',
      img11:
        'https://img2.carmax.com/assets/24036359/image/16.jpg?width=400&height=300',
      img12:
        'https://img2.carmax.com/assets/24036359/image/10.jpg?width=400&height=300',
      img13:
        'https://img2.carmax.com/assets/24036359/image/11.jpg?width=400&height=300',
      img14:
        'https://img2.carmax.com/assets/24036359/image/12.jpg?width=400&height=300',
      img15:
        'https://img2.carmax.com/assets/24036359/image/21.jpg?width=400&height=300',
    },
  },
  {
    _id: '7',
    make: 'bmw',
    year: '2020',
    model: 'BMW 530 I',
    bodyTyle: 'Sedan',
    fuelType: 'Gas',
    price: '19.998',
    transmision: 'automatic',
    images: {
      img: 'https://img2.carmax.com/assets/24325520/image/hero.jpg?width=800&height=450',
      img2: 'https://img2.carmax.com/assets/24325520/image/8.jpg?width=400&height=300',
      img3: 'https://img2.carmax.com/assets/24325520/image/1.jpg?width=400&height=300',
      img4: 'https://img2.carmax.com/assets/24325520/image/3.jpg?width=400&height=300',
      img5: 'https://img2.carmax.com/assets/24325520/image/2.jpg?width=400&height=300',
      img6: 'https://img2.carmax.com/assets/24325520/image/4.jpg?width=400&height=300',
      img7: 'https://img2.carmax.com/assets/24325520/image/5.jpg?width=400&height=300',
      img8: 'https://img2.carmax.com/assets/24325520/image/6.jpg?width=400&height=300',
      img9: 'https://img2.carmax.com/assets/24325520/image/7.jpg?width=400&height=300',
      img10:
        'https://img2.carmax.com/assets/24325520/image/8.jpg?width=400&height=300',
      img11:
        'https://img2.carmax.com/assets/24325520/image/16.jpg?width=400&height=300',
      img12:
        'https://img2.carmax.com/assets/24325520/image/10.jpg?width=400&height=300',
      img13:
        'https://img2.carmax.com/assets/24325520/image/11.jpg?width=400&height=300',
      img14:
        'https://img2.carmax.com/assets/24325520/image/12.jpg?width=400&height=300',
      img15:
        'https://img2.carmax.com/assets/24325520/image/21.jpg?width=400&height=300',
    },
  },
  {
    _id: '8',
    make: 'bmw',
    year: '2019',
    model: 'BMW X1 XDrive28i',
    bodyTyle: 'Sedan',
    fuelType: 'Gas',
    price: '19.998',
    transmision: 'automatic',
    images: {
      img: 'https://img2.carmax.com/assets/24510667/image/hero.jpg?width=800&height=450',
      img2: 'https://img2.carmax.com/assets/24510667/image/8.jpg?width=400&height=300',
      img3: 'https://img2.carmax.com/assets/24510667/image/1.jpg?width=400&height=300',
      img4: 'https://img2.carmax.com/assets/24510667/image/3.jpg?width=400&height=300',
      img5: 'https://img2.carmax.com/assets/24510667/image/2.jpg?width=400&height=300',
      img6: 'https://img2.carmax.com/assets/24510667/image/4.jpg?width=400&height=300',
      img7: 'https://img2.carmax.com/assets/24510667/image/5.jpg?width=400&height=300',
      img8: 'https://img2.carmax.com/assets/24510667/image/6.jpg?width=400&height=300',
      img9: 'https://img2.carmax.com/assets/24510667/image/7.jpg?width=400&height=300',
      img10:
        'https://img2.carmax.com/assets/24510667/image/8.jpg?width=400&height=300',
      img11:
        'https://img2.carmax.com/assets/24510667/image/16.jpg?width=400&height=300',
      img12:
        'https://img2.carmax.com/assets/24510667/image/10.jpg?width=400&height=300',
      img13:
        'https://img2.carmax.com/assets/24510667/image/11.jpg?width=400&height=300',
      img14:
        'https://img2.carmax.com/assets/24510667/image/12.jpg?width=400&height=300',
      img15:
        'https://img2.carmax.com/assets/24510667/image/21.jpg?width=400&height=300',
    },
  },
];

export default allDatas;
