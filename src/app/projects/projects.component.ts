import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczM4YSvmQ6jnnabLqfq38NcHT9tzvm6JyhbYlqaPYjRp00uH4aDsYJzHnLnQFw8Y38CCZotk72dRBH7F_nbV9s07Mt5eBxuf7DpUIYsSv89fhJ-phue74JrCvsiyPP1130fnZFiaV8ejTcNxS0J8ARukGg=w1021-h573-s-no-gm?authuser=0',
      title: "Men's Fashion Web-Application",
      description: "I developed E-commerce Fashion Web Application using Angular 15. The primary focus is to build a good, user-interactive Single Page Application. This application allows sellerto perform all CRUD operations on the products.",
      demoUrl: 'https://tarunboricha.github.io/angular-crud',
      codeUrl: 'https://github.com/tarunboricha/angular-crud'
    },
    {
      imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNpcT3bbL04v4hf_h7nehOcUK_sMVfa0-rnJ7GvzrcZ4wBfZ43f9zJU5Qfc-v_Q0V84qvor3Hjtweq-U3upvgHUcjh0Q7BRsCO0omVHX7gB3DzCzz7eGCa_RKFt2XYwB3BIf6Six-g43VO9fU9PZISwzQ=w1023-h573-s-no-gm?authuser=0',
      title: "KEEPER APPLICATION",
      description: " Developed a web application similarto Google Keep for creating, updating, and deleting notes, featuring user authentication and personalized note storage. Utilized React for the front-end, Express for the back-end, and MySQL for the database, establishing a user-notes relationship. Successfully deployed the project using GitHub Pages for front-end and ngrok for the back-end.",
      demoUrl: 'https://tarunboricha.github.io/React-Keeper',
      codeUrl: 'https://github.com/tarunboricha/React-Keeper'
    },
    {
      imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPaQaIfIjA2O9_GroWzRqQtQrrQ7lfLraj3GZsjFjL8QzF2MmtPOyMg-jJiGLPt-FbubGQSDSeGZg4fS8rdOAmLRQKQIANc3l_RtP_UyKg638VUl-ivM8j_MvJ8niDEgDo3ooX_jquLK-8l43mKAwnF0g=w1035-h699-s-no-gm?authuser=0',
      title: "TASK MANAGEMENT SYSTEM",
      description: "Delivered a solution forthe hardware manufacturing domain. Engineered seamless task tracking and optimizing efficiency in the manufacturing workflow. Developed a solution that enhances productivity,resource allocation and all the CRUD operations.",
      demoUrl: 'https://drive.google.com/file/d/1fGAMzV7JmTrCJuLTlTTrRadkUCP0y6zd/view?usp=sharing',
      codeUrl: 'https://github.com/tarunboricha/Hardware-Manufacturing-Task-Management-System'
    }
  ];

  imageLoaded(event:any) {
    event.target.classList.add('loaded');
  }
}
