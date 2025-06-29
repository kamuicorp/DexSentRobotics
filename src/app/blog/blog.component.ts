import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog } from '../interfaces/product.interface';
import { SafePipe } from '../pipes/safe.pipe';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, SafePipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements AfterViewInit {
  blogs: Blog = {
    videos: {
      content: [
        {
          category: 'Design',
          title: 'Practice making User Flow',
          description: `In this article, we'll cover how to create user flows`,
          publishedOn: 'Insight',
          publishedDate: new Date(),
          url: 'https://www.youtube.com/embed/9eIHEX_h2Uc?si=B1hdvhdlYvIFARg-',
          type: 'youtube_embed',
        },
        {
          category: 'Articles',
          title: 'Overview of the Design Principles',
          description: `What are Design Principles?… To understand design principles, we first discuss the principles.`,
          publishedOn: 'Insight',
          publishedDate: new Date(),
          url: 'https://www.youtube.com/embed/9eIHEX_h2Uc?si=B1hdvhdlYvIFARg-',
          type: 'youtube_embed',
        },
        {
          category: 'Design',
          title: 'Using Grid in website design',
          description: `Andi: "What's the grid like?" Toni: “Like below…”.`,
          publishedOn: 'Insight',
          publishedDate: new Date(),
          url: 'https://www.youtube.com/embed/9eIHEX_h2Uc?si=B1hdvhdlYvIFARg-',
          type: 'youtube_embed',
        },
      ],
    },
  };
  categories: string[] = [];
  selectedCategory: string = '';
  filteredBlogs: Blog = JSON.parse(JSON.stringify(this.blogs));

  constructor() {
    this.categories = [
      ...new Set(this.blogs.videos.content.map((c) => c.category)),
    ] as string[];
  }

  ngAfterViewInit(): void {
    this.filteredBlogs.videos.content = this.blogs.videos.content.filter((c) =>
      c.category.includes(this.selectedCategory),
    );
  }

  onSelectCategory = (cate: string) => {
    this.selectedCategory = cate;
    this.filteredBlogs.videos.content = this.blogs.videos.content.filter((c) =>
      c.category.includes(this.selectedCategory),
    );
  };
}
