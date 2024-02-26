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
      imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOjloriHd_16mrTLpdwxRyV-IxgyDvnF7iJ-GlFXzD7Snx8wFMn5SD1FXySxNxC7NS1gjXb_MQBm8l5MRVqyp6DKHfm1hivkiGZGjHpCd5zXNYZE53fIHzgDsX5blrpTB1n0JCCx8DAAuwKARXK8ohMPQ=w1896-h824-s-no-gm?authuser=0',
      title: "Men's Fashion Web-Application",
      description: "I developed E-commerce Fashion Web Application using Angular 15. The primary focus is to build a good, user-interactive Single Page Application. This application allows sellerto perform all CRUD operations on the products.",
      demoUrl: 'https://tarunboricha.github.io/angular-crud',
      codeUrl: 'https://github.com/tarunboricha/angular-crud'
    },
    {
      imageUrl: 'https://lh3.googleusercontent.com/pw/ABLVV84k_gRFY9oKSsrd2FfIRapTr9N9sh8U2ouNnyLPe9tZTd8U5zOVKqKnNOTjzI95FGG4EOk5RxZ-CeCOz1xmz8GkJHpkJVdw47JXrKCtYOBLzIxALxDPmgZpDBMcyWaDrf1w58ROKvoYHp4IWNq5wbgcyA=w1919-h822-s-no-gm?authuser=0',
      title: "KEEPER APPLICATION",
      description: " Developed a web application similarto Google Keep for creating, updating, and deleting notes, featuring user authentication and personalized note storage. Utilized React for the front-end, Express for the back-end, and MySQL for the database, establishing a user-notes relationship. Successfully deployed the project using GitHub Pages for front-end and ngrok for the back-end.",
      demoUrl: 'https://tarunboricha.github.io/React-Keeper',
      codeUrl: 'https://github.com/tarunboricha/React-Keeper'
    },
    {
      imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPaQaIfIjA2O9_GroWzRqQtQrrQ7lfLraj3GZsjFjL8QzF2MmtPOyMg-jJiGLPt-FbubGQSDSeGZg4fS8rdOAmLRQKQIANc3l_RtP_UyKg638VUl-ivM8j_MvJ8niDEgDo3ooX_jquLK-8l43mKAwnF0g=w1035-h699-s-no-gm?authuser=0',
      title: "TASK MANAGEMENT SYSTEM",
      description: "Delivered a solution forthe hardware manufacturing domain. Engineered seamless task tracking and optimizing efficiency in the manufacturing workflow. Developed a solution that enhances productivity,resource allocation and all the CRUD operations.",
      demoUrl: undefined,
      codeUrl: 'https://github.com/tarunboricha/Hardware-Manufacturing-Task-Management-System'
    }
  ]
}
