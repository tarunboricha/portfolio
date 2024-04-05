import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent{
  profilePhoto: string = "https://lh3.googleusercontent.com/pw/ABLVV84a5nti7mNDTll6qFgqjVuFyuKcbIkUzaTWlO2D7l41InLPcU95ATP-rpnNtMS5m058ZhwyLqdLsNhrfwPD64R_mdA6YZmF4TlLGSERSAtTnOHUwxFYhTJ7_H67Oz6daqKkM4BGQ3EBBOOl84T6NMXHzA=w620-h827-s-no-gm?authuser=0";

  imageLoaded(event:any) {
    event.target.classList.add('loaded');
  }
}
