import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent {

  public title: string;
  public project: Project;
  public savedProject: Project;
  public status: string;
  public filesToUpload: Array<File> = [];
  public url: string;
  public accion: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute,
    ) 
    {
    this.title = "Editar proyecto";
    this.project = new Project('', '', '', '', 2022, '', '');
    this.savedProject = new Project('', '', '', '', 2022, '', '');
    this.status = "pending";
    this.url = Global.url;
    this.accion = "editado";
  }

  ngOnInit(){
    this._route.params.subscribe((params: Params) => {
      let id: any = params['_id']
      console.log(id)
      this.getProject(id)
    }
  )}

  getProject(id: any){
    return this._projectService.getProject(id).subscribe(
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


  onSubmit(form: any){
    this._projectService.updateProject(this.project).subscribe(
      (res: any) => {
        if(res.project){
          

          //Subir la imagen
          if(this.filesToUpload.length >= 1){
            this._uploadService.makeFileRequest(Global.url + "upload-image/" + res.project._id, [], this.filesToUpload, 'image')
            .then((result:any) => {
              this.status = "success";
              this.savedProject = result.project;
            })
          }
          else {
            this.status = "success";
            this.savedProject = res.project;
          }


          
        } else {
          this.status = "failed";
        }
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
