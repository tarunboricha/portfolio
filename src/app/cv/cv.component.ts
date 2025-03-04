import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent {
  socialLinks = [
    { icon: 'fab fa-github', text: 'github.com/tarunboricha/', url: 'https://github.com/tarunboricha/' },
    { icon: 'fab fa-linkedin', text: '/in/tarunboricha', url: 'https://linkedin.com/in/tarunboricha' }
  ];

  coreCompetencies = {
    programming: ['C#', 'C++', 'JavaScript/TypeScript', '.NET Core', 'SQL'],
    frameworks: ['Angular 14+', 'React', '.NET Core 6.0', 'Express.js'],
    tools: ['Selenium', 'Azure OpenAI', 'Git/GitHub', 'MySQL', 'MS SQL Server'],
    concepts: ['OOP', 'REST APIs', 'Web Scraping', 'Scalability', 'CI/CD', 'JWT Authentication']
  };

  education = {
    institution: 'Dhirubhai Ambani Institute of Information and Communication Technology',
    duration: '8/2019 - 5/2023',
    cgpa: 'CGPA: 6.34/10',
    details: [
      'B.Tech. in Information and Communication Technology',
      'Relevant Coursework: Data Structures, Algorithms, DBMS, Operating Systems, OOP'
    ]
  };
}
