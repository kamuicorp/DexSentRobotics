import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      category: 'gripper',
      short:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor repellat temporibus',
      long: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /> <br /> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      images: ['/images/G1.png', '/images/G1.png'],
      keyFeatures: {
        intro:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt',
        features: [
          {
            title: 'Independent Joint Control',
            points: [
              '20 joints can be independently controlled, enabling complex hand movements and precise manipulation.',
            ],
          },
          {
            title: 'High Human-Likeness',
            points: [
              `Designed with a size similar to an adult male hand, optimized for human work environments.`,
              `Facilitates tool and device operation, supporting human-like task patterns.`,
            ],
          },
          {
            title: 'Various Grip Modes',
            points: [
              'Supports multiple grip modes such as:',
              'Pinch Grip (holding with fingertips)',
              'Power Grip (firm grasp with the entire hand)',
              'Precision Grip (using part of the fingers)',
              'Optimized handling based on the size, shape, and weight of objects.',
            ],
          },
        ],
      },
      specifications: {
        intro:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt',
        specs: [
          {
            parameter: 'Communication',
            value: 'Modbus (RTU, TCP), EtherNet(TCP/IP)',
          },
          {
            parameter: 'Power supply',
            value: '24[V]',
          },
          {
            parameter: 'Current Consumption',
            value: 'Max. 10[A]',
          },
          {
            parameter: 'Control Frequency',
            value: '250 Hz',
          },
          {
            parameter: 'Encoder',
            value: 'Absolute Encoder',
          },
          {
            parameter: 'Degrees of Freedom',
            value: '20 DoF (4 DoF per finger)',
          },
          {
            parameter: 'Gripping Capacity',
            value: `Pinching Payload (Rated, Max) : 2.5, 5 [kg]<br />Envelop Payload (Rated, Max) : 10<br />20 [kg]*Performance may depending on friction.`,
          },
          {
            parameter: 'Weight',
            value: '1,763[g]',
          },
        ],
      },
      videos: {
        intro: 'Supporting text',
        content: [
          {
            title: 'Practice making User Flow',
            description: `In this article, we'll cover how to create user flows`,
            publishedOn: 'Insight',
            publishedDate: new Date(),
            url: 'https://www.youtube.com/embed/9eIHEX_h2Uc?si=B1hdvhdlYvIFARg-',
            type: 'youtube_embed',
          },
          {
            title: 'Overview of the Design Principles',
            description: `What are Design Principles?… To understand design principles, we first discuss the principles.`,
            publishedOn: 'Insight',
            publishedDate: new Date(),
            url: 'https://www.youtube.com/embed/9eIHEX_h2Uc?si=B1hdvhdlYvIFARg-',
            type: 'youtube_embed',
          },
          {
            title: 'Using Grid in website design',
            description: `Andi: "What's the grid like?" Toni: “Like below…”.`,
            publishedOn: 'Insight',
            publishedDate: new Date(),
            url: 'https://www.youtube.com/embed/9eIHEX_h2Uc?si=B1hdvhdlYvIFARg-',
            type: 'youtube_embed',
          },
        ],
      },
    },
  ];

  constructor() {}
}
