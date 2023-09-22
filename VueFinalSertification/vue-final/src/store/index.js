import image5 from '@/assets/photo5.png';
import image6 from '@/assets/photo6.png';
import image7 from '@/assets/photo7.png';
import image9 from '@/assets/photo9.png';
import image10 from '@/assets/photo10.png';
import image11 from '@/assets/photo11.png';
import image16 from '@/assets/photo16.png';
import image17 from '@/assets/photo17.png';
import image18 from '@/assets/photo18.png';
import image19 from '@/assets/photo19.png';
import image20 from '@/assets/photo20.png';
import image21 from '@/assets/photo21.png';
import image22 from '@/assets/photo22.png';
import image23 from '@/assets/photo23.png';
export default {
  state: {
    blogArticles: [
      {
        id: 1,
        photo: image5,
        alt: 'photo5',
        title: 'Let’s Get Solution For Building Construction Work',
        date: '26 December, 2022',
        button: 'Kitchan Design'
      },
      {
        id: 2,
        photo: image6,
        alt: 'photo6',
        title: 'Low Cost Latest Invented Interior Designing Ideas.',
        date: '22 December, 2022',
        button: 'Living Design'
      },
      {
        id: 3,
        photo: image7,
        alt: 'photo7',
        title: 'Best For Any Office & Business Interior Solution',
        date: '25 December, 2022',
        button: 'Interior Design'
      },
      {
        id: 4,
        photo: image9,
        alt: 'photo9',
        title: 'Let’s Get Solution For Building Construction Work',
        date: '26 December, 2022',
        button: 'Kitchan Design'
      },
      {
        id: 5,
        photo: image10,
        alt: 'photo10',
        title: 'Low Cost Latest Invented Interior Designing Ideas.',
        date: '22 December, 2022',
        button: 'Living Design'
      },
      {
        id: 6,
        photo: image11,
        alt: 'photo11',
        title: 'Best For Any Office & Business Interior Solution',
        date: '25 December, 2022',
        button: 'Interior Design'
      }
    ],
    products: [
      {
        id: 1,
        image: image16,
        alt: 'image16',
        title: 'Minimal Bedroom',
        subtitle: 'Decor / Artchitecture'
      },
      {
        id: 2,
        image: image20,
        alt: 'image20',
        title: 'Minimal Bedroom',
        subtitle: 'Decor / Artchitecture'
      },
      {
        id: 3,
        image: image18,
        alt: 'image18',
        title: 'Classic Minimal Bedroom',
        subtitle: 'Decor / Artchitecture'
      },
      {
        id: 4,
        image: image17,
        alt: 'image17',
        title: 'Modern Bedroom',
        subtitle: 'Decor / Artchitecture'
      },
      {
        id: 5,
        image: image19,
        alt: 'image19',
        title: 'Minimal Bedroom table',
        subtitle: 'Decor / Artchitecture'
      },
      {
        id: 6,
        image: image16,
        alt: 'image16',
        title: 'System Table',
        subtitle: 'Decor / Artchitecture'
      },
      {
        id: 7,
        image: image22,
        alt: 'image22',
        title: 'Modern Bedroom',
        subtitle: 'Decor / Artchitecture'
      },
      {
        id: 8,
        image: image23,
        alt: 'image23',
        title: 'Modern Bedroom',
        subtitle: 'Decor / Artchitecture'
      },
      {
        id: 9,
        image: image21,
        alt: 'image21',
        title: 'Modern Bedroom',
        subtitle: 'Decor / Artchitecture'
      },
      {
        id: 10,
        image: image21,
        alt: 'image21',
        title: 'Modern Bedroom',
        subtitle: 'Decor / Artchitecture'
      },
    ]
  },
  getters: {
    blogArticles(state) {
      return state.blogArticles;
    },
    products(state) {
      return state.products;
    }
  },
  mutations: {}
};