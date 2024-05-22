import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public title: string;
  public subtitle: string;
  public web: string;
  public github: string;

  constructor() {
    this.title = 'Joaquín Puente';
    this.subtitle = 'Alumno UVG';
    this.web = 'jpuente.dev';
    this.github = 'github.com/Its-Japo';
  }

  ngOnInit() {

  }
}
