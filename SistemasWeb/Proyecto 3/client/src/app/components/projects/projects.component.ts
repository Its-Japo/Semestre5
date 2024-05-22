import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from 'src/app/services/global';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent {
  public projects: Project[] = [];
  public url: string = Global.url;


  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
      return this.projectService.getProjects().subscribe(
        (response:any) => {
          if(response.projects){
            this.projects = response.projects;
          }
        },

        (error:any) => {
          console.log(error);
        }
      );
    }

}
