import { Component } from '@angular/core';

@Component({
  selector: 'app-visuals',
  templateUrl: './visuals.component.html',
  styleUrl: './visuals.component.scss'
})
export class VisualsComponent {
  photos = [
    { url: "https://lh3.googleusercontent.com/pw/AP1GczNgVxljhpNi2Qhr3rdScYuBjXOAxMNVd6ZCXvSmgONF0PYtQ_QL1D0h69Aw479bLssR054ngM5u2rpDKNLhZOvFRNrzKXNhXqvGQSbhpkH9wOWppnXupnFjEemNxH-qgYJYGjZdjaVoq1l_cocKYs-8oQ=w1520-h827-s-no-gm?authuser=0"},
    { url: "https://lh3.googleusercontent.com/pw/AP1GczO918e7ExkwkjdZRDegutgtwzbo25o4j7K7ItfL-F056-oEv-5KDZ3brttqYZ9wOCQinBd-WxUcpiZlWH88ljA9y6XkaPdaVVIeA-7MI-D5x3gfWrlmlBSGmdtC70RlhXn9jiwhfCKJ0c5-sD2ohto8Vw=w1103-h827-s-no-gm?authuser=0"},
    { url: "https://lh3.googleusercontent.com/pw/AP1GczN_VTx3dcgYn93JkfoW70qGVaxscKnn0Hn5rh1DLn-bikvCWvUvh1W1q1-DHfZYpf9PuUazkUEci2f7c0OmGvbvhLKsoJBE8LIckOiXmS3q2Q9UxIRcomm8auUNFqJrtG5C8sK4529o3YXhI_AtLfvBuw=w620-h827-s-no-gm?authuser=0" },
    { url: "https://lh3.googleusercontent.com/pw/AP1GczNMfzHiw_5WWNBcZqFh6x7ODbBSQdi-b-h9eb2oad3msYZJ4JkhOgMlSHhevBWu-a630zFDEP6-YmGQL1BPaumOWbKobQlcRMZtK64tG3g7mphdc6LmW_579HrlkOsA1DLFLHEJ2xEUro1JQpibi5kXKA=w1103-h827-s-no-gm?authuser=0"},
    { url: "https://lh3.googleusercontent.com/pw/AP1GczPHmbnaz1V58M2i7xz2jVBPHnoGpywGqjp75IvS76-aLeW4W9nsKTn6IVQ5ydX9LCEc67M3js6CVNzKYY2wHcyg8D20WK27cN26Y_JlAhCzCy7OOOtttmkSjkeKTmyNf18M2CcrDcMi0PgDhio8OyItyQ=w1470-h827-s-no-gm?authuser=0" },
    { url: "https://lh3.googleusercontent.com/pw/AP1GczPeDYcDWBIM9_70lQiDm_hTMhyiFizzSsIRY8qBlYCpBgDnW9sHJTtnSrMsXFm_2Dm3myxmi3gy-Mcsq-vzu7I1uAmJ87cQgsr-fSa1eZr5bTopwZyv1RLoOCN4KMxxz_C3w21GukSwM6eScq0HpFKRYw=w1470-h827-s-no-gm?authuser=0" },
    { url: "https://lh3.googleusercontent.com/pw/AP1GczNc3o3GEa1wJUzy2-vGT9yLeQXjpB_Aotpg5FH8UC33GY-8oGzBJG1kKbJUf7avt6-1iTxKjpOVrcET5SuUt53B8bvGjvVmK1fZRLb6np6NQJwF6gC87RwT9Yr3tXiUXBJgmWSQIxHcqOxGNeyW285ABw=w1103-h827-s-no-gm?authuser=0" },
    { url: "https://lh3.googleusercontent.com/pw/AP1GczNBtw4_f7OhzRyYA92LEGzDzXwluSM4U34klVRMspv14qAr0CbhOAEalPvxjUxnNw_7FkyTR0IkFq8SarSWrhHjnRlzQ8dI-c_vMuhFgmXl7JN0v6WK7syIljh2T_DE-azT99Dhmvc7b2mx3iRJzEiWRg=w774-h827-s-no-gm?authuser=0" },
    { url: "https://lh3.googleusercontent.com/pw/AP1GczOt5qRKWesNh5PBbmqcR-nYq8Qv2f6Gwc9VNp_hLx1IF1OYoUtxqD2abayFFyQElphLL2Tnw4UI0bCm_KMUosgv8wBb-6C2qptb5uno4M9yEHa00KmviqUGT9WpLudiyXYxrvHAq7sjTxCKhMhCwHZylQ=w620-h827-s-no-gm?authuser=0"},
    { url: "https://lh3.googleusercontent.com/pw/AP1GczPWimXCQ8Ts0vK1hxVdwBnMGlmRk5A2pLhHt5OHq7oFiVCXCBNYZMbT1Dmd1dHacqGSlhMm8tNU44WdbMLgE0TvGR-di4VfGA8-tqwkUKKH-6ZsN3RA8hWNopBh1Sad1IMqpVrooIy8u99jRiR0n0uIxQ=w620-h827-s-no-gm?authuser=0"},
    { url: "https://lh3.googleusercontent.com/pw/AP1GczNJ2hssgob2wG4vEu1LKyN2rHJUpPz_ZjVcbjp-ToiwGB328DPTqByY3abl9wVCXkF4U5JG_Qx_WVtYOS5IoqHUyBHu1_etr6vMY5yFlv0DXfGE52L6DGXTGvAQ3i6S4BpWBNnu5Mcz6h-xIKV4oCkw0A=w1470-h827-s-no-gm?authuser=0" },
  ];
  

  fullScreenImage: string | null = null;

  imageLoaded(event:any) {
    event.target.classList.add('loaded');
  }

  openFullScreen(imageUrl: string) {
    this.fullScreenImage = imageUrl;
  }

  closeFullScreen() {
    this.fullScreenImage = null;
  }
}
