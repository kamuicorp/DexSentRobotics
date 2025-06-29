export interface Product {
  id: number;
  name: string;
  short: string;
  long: string;
  category: string;
  keyFeatures: {
    intro: string;
    features: { title: string; points: string[] }[];
  };
  specifications: {
    intro: string;
    specs: { parameter: string; value: string }[];
  };
  images: string[];
  videos: {
    intro: string;
    content: {
      title: string;
      description: string;
      publishedDate: Date;
      publishedOn: string;
      url: string;
      type: 'youtube_embed';
    }[];
  };
}

export interface Blog {
  videos: {
    content: {
      category: string;
      title: string;
      description: string;
      publishedDate: Date;
      publishedOn: string;
      url: string;
      type: 'youtube_embed';
    }[];
  };
}
