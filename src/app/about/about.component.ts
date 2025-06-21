import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit {
  aboutSliderContent: { title: string; paragraph: string }[] = [
    {
      title: 'About us',
      paragraph: `DexSent Robotics was founded in May 2025 at IIT Gandhinagar by Mr.
          Barat S (PhD candidate), Prof. Harish PM, and Mr. Praveen Suresh with
          a shared belief that robotics should do more than just automate—it
          should solve real problems that matter to people. What started as a
          bold challenge to build a humanoid robot in just two months quickly
          turned into a much bigger journey. While the first prototype didn’t
          work perfectly, it brought together a team with the drive, speed, and
          vision to build complete, homegrown robotics technologies from the
          ground up. <br /><br />
          At DexSent, we work across two key areas. For industries, we design
          advanced robotic grippers and intelligent vision modules that improve
          how machines see and interact with the world. For education and public
          engagement, we create affordable humanoid robots that bring learning,
          research, and curiosity to  life in schools, colleges, and
          exhibitions. <br /><br />
          We're currently based at IIT Gandhinagar, where our core
          team—alongside contributors like Prof. Madhu Vadali, Mr. Arpit
          Sakhreliya, and Mr. Kaivalya Shah—is working at full pace to turn our
          ideas into impactful products. We're just getting started, and the
          road ahead is filled with exciting milestones and innovations.`,
    },
    {
      title: 'Our Vision',
      paragraph:
        'At DexSent Robotics, we envision a future where robotics is not limited to industrial automation but serves as a transformative force for solving deep-rooted societal challenges. <br /><br />  We are committed to developing intelligent, human-centric technologies that enhance quality of life, promote inclusive progress, and foster seamless human–robot collaboration. With a strong focus on real-world impact and indigenous innovation, our goal is to position India as a global leader in robotics—delivering solutions that are technologically advanced, socially relevant, and globally scalable.',
    },
    {
      title: 'Our Mission',
      paragraph:
        'At DexSent Robotics, our mission is to design and deliver advanced robotic systems that solve real-world problems across industries and society. <br /><br /> We focus on two strategic domains: developing high-performance end-effectors and vision intelligence modules for industrial automation, and creating accessible humanoid platforms that enable experiential learning, research, and engagement in educational and public spaces. <br /><br /> Through a strong commitment to engineering excellence, rapid integration, and customer-centric innovation, we aim to provide complete, reliable, and scalable robotics solutions that accelerate adoption and deliver tangible impact.',
    },
  ];
  currentIndex: number = 0;
  sliderInterval: any;

  ngAfterViewInit(): void {
    this.sliderInterval = setInterval(() => {
      if (this.currentIndex < this.aboutSliderContent.length - 1)
        this.currentIndex++;
      else this.currentIndex = 0;
      this.animateSlider();
    }, 10000);
  }

  animateSlider() {
    try {
      gsap.to('.slider_flex', {
        xPercent: this.currentIndex * 100 * -1,
        duration: 0.5,
        ease: 'ease',
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  onNavigate = (direction: string) => {
    try {
      if (direction === 'back' && this.currentIndex > 0) this.currentIndex--;
      else if (direction === 'back')
        this.currentIndex = this.aboutSliderContent.length - 1;

      if (
        direction === 'front' &&
        this.currentIndex < this.aboutSliderContent.length - 1
      ) {
        this.currentIndex++;
      } else if (direction === 'front') this.currentIndex = 0;

      this.animateSlider();
      clearInterval(this.sliderInterval);
      this.sliderInterval = setInterval(() => {
        if (this.currentIndex < this.aboutSliderContent.length - 1)
          this.currentIndex++;
        else this.currentIndex = 0;
        this.animateSlider();
      }, 10000);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}
