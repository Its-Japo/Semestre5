import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  public project: Project 
  public url: string = Global.url
  public confirm: boolean;

  constructor(
    private projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute,
    ) {
    this.project = new Project('','','','',2020,'','')
    this.confirm = false;
  }

  setConfirm(){
    this.confirm = !this.confirm;
  }

  ngOnInit(){
    this._route.params.subscribe((params: Params) => {
      let id: any = params['_id']
      console.log(id)
      this.getProject(id)
    }
  )}

  getProject(id: any){
    return this.projectService.getProject(id).subscribe(
      (response: any) => {
        if (response.project){
          this.project = response.project
        }
      },
      (error: any) => {
        console.log(error)
      }
    )
  }
  deleteProject(id: any){
    return this.projectService.deleteProject(id).subscribe(
      (response: any) => {
        if (response.project){
          this._router.navigate(['/projects'])
        }
      },
      (error: any) => {
        console.log(error)
      }
    )
  }

  
}
