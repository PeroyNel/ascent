// mock-product.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockProductService {
  private data: any[] = [
    {   id: 1, 
        productName: 'Omnisan Over Ear Headphones MK-1240', 
        discountPercentage: '50%', 
        currentPrice: 'R700', 
        fullPrice: 'R1100', 
        rating: '4.7',
        productImageURL: 'https://tse2.mm.bing.net/th?id=OIP.vgEWJR6D56YaPHjFGxxIaAHaGs&pid=Api&P=0&h=300.png'
    },
    { 
        id: 2, 
        productName: 'EliteSound Headphones ES-55', 
        discountPercentage: '50%', 
        currentPrice: 'R700', 
        fullPrice: 'R1100', 
        rating: '4.7',
        productImageURL: 'https://th.bing.com/th/id/OIP.fCwAuDIOubC0vKN8eqZ8-QHaHa?pid=ImgDet&rs=1' 
    },
    { 
        id: 3,
        productName: 'SoundKings In Ear Earphones SK-IEM-400', 
        discountPercentage: '50%', 
        currentPrice: 'R700', 
        fullPrice: 'R1100', 
        rating: '4.7',
        productImageURL: 'https://pngimg.com/uploads/headphones/headphones_PNG7659.png'
    },
    { 
        id: 4, 
        productName: 'AudioForce Over Ear Headphones AF-468', 
        discountPercentage: '50%', 
        currentPrice: 'R700', 
        fullPrice: 'R1100', 
        rating: '4.7',
        productImageURL: 'https://tse1.mm.bing.net/th?id=OIP.ZAE4bglxrqt9mg8pUFP8cwHaF7&pid=Api&P=0&h=300.png'
    },
    { 
        id: 5, 
        productName: 'Omnisan Over Ear Headphones MK-1240', 
        discountPercentage: '50%', 
        currentPrice: 'R700', 
        fullPrice: 'R1100', 
        rating: '4.7',
        productImageURL: 'https://th.bing.com/th/id/R.774f187bc09f94520feddbf8b579e744?rik=8sxknwRm1QB71g&pid=ImgRaw&r=0.png'
    },
    { 
        id: 6, 
        productName: 'Omnisan Over Ear Headphones MK-1240', 
        discountPercentage: '50%', 
        currentPrice: 'R700', 
        fullPrice: 'R1100', 
        rating: '4.7',
        productImageURL: 'https://pngimg.com/uploads/headphones/headphones_PNG101920.png'
    },
    { 
        id: 7, 
        productName: 'Omnisan Over Ear Headphones MK-1240', 
        discountPercentage: '50%', 
        currentPrice: 'R700', 
        fullPrice: 'R1100', 
        rating: '4.7',
        productImageURL: 'https://pngimg.com/uploads/headphones/headphones_PNG7630.png'
    },
    { 
        id: 8, 
        productName: 'Omnisan Over Ear Headphones MK-1240', 
        discountPercentage: '50%', 
        currentPrice: 'R700', 
        fullPrice: 'R1100', 
        rating: '4.7',
        productImageURL: 'https://freepngimg.com/thumb/headphones/6-headphones-png-image.png'
    },
    { 
        id: 9, productName: 'Omnisan Over Ear Headphones MK-1240', 
        discountPercentage: '50%', 
        currentPrice: 'R700', 
        fullPrice: 'R1100', 
        rating: '4.7',
        productImageURL: 'https://freepngimg.com/download/headphones/30039-3-headphones-transparent.png'
    },
    { 
        id: 10, 
        productName: 'Omnisan Over Ear Headphones MK-1240', 
        discountPercentage: '50%', 
        currentPrice: 'R700', 
        fullPrice: 'R1100', 
        rating: '4.7',
        productImageURL: 'https://pngimg.com/uploads/headphones/headphones_PNG101924.png'
    },
    { 
        id: 11, 
        productName: 'Omnisan Over Ear Headphones MK-1240', 
        discountPercentage: '50%', 
        currentPrice: 'R700', 
        fullPrice: 'R1100', 
        rating: '4.7',
        productImageURL: 'https://pngimg.com/uploads/headphones/headphones_PNG101981.png'
    },
    { 
        id: 12, 
        productName: 'Omnisan Over Ear Headphones MK-1240', 
        discountPercentage: '50%', 
        currentPrice: 'R700', 
        fullPrice: 'R1100', 
        rating: '4.7',
        productImageURL: 'https://pngimg.com/uploads/headphones/headphones_PNG101950.png'
    },
    { 
        id: 13,
        productName: 'Omnisan Over Ear Headphones MK-1240', 
        discountPercentage: '50%', 
        currentPrice: 'R700', 
        fullPrice: 'R1100', 
        rating: '4.7',
        productImageURL: 'https://th.bing.com/th/id/R.cbef05c52debdf0ae480a14153b16024?rik=lWTJVcYVlRxHWA&riu=http%3a%2f%2fwww.officialpsds.com%2fimages%2fthumbs%2fDJ-HEADPHONES-psd23114.png&ehk=INV4o6V5asyye1On95AegTaICYllY%2bAAJp5JNkWXzJk%3d&risl=&pid=ImgRaw&r=0' },
    { 
        id: 14, 
        productName: 'Omnisan Over Ear Headphones MK-1240', 
        discountPercentage: '50%', 
        currentPrice: 'R700', 
        fullPrice: 'R1100', 
        rating: '4.7',
        productImageURL: 'https://th.bing.com/th/id/OIF.33ku0GdCDMbu1AiWUlrnNw?pid=ImgDet&rs=1.png'},
    { 
        id: 15, 
        productName: 'Omnisan Over Ear Headphones MK-1240', 
        discountPercentage: '50%', 
        currentPrice: 'R700', 
        fullPrice: 'R1100', 
        rating: '4.7',
        productImageURL: 'https://th.bing.com/th/id/OIF.DT2uirIYcVMPeCxyjh5j6Q?pid=ImgDet&rs=1.png' }

    // Add more mock data as needed
  ];

  getAll() {
    return this.data;
  }

  getById(id: number) {
    return this.data.find(item => item.id === id);
  }

  // Implement other methods as required
}
