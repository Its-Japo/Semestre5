import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent {
  public title: string;
  public project: Project;
  public savedProject: Project;
  public status: string;
  public filesToUpload: Array<File> = [];
  public url: string;
  public accion: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
    ) 
    {
    this.title = "Crear proyecto";
    this.project = new Project('', '', '', '', 2024, '', '');
    this.savedProject = new Project('', '', '', '', 2024, '', '');
    this.status = "pending";
    this.url = Global.url;
    this.accion = 'creado'
  }
  
  ngOnInit() {

  }

  onSubmit(form: any){
    this._projectService.saveProject(this.project).subscribe(
      (res: any) => {
        if(res.project){
          

          //Subir la imagen
          if(this.filesToUpload.length >= 1){
            this._uploadService.makeFileRequest(Global.url + "upload-image/" + res.project._id, [], this.filesToUpload, 'image')
            .then((result:any) => {
              this.status = "success";
              this.savedProject = result.project;
              form.reset();
            })
          }
          else {
            this.status = "success";
            this.savedProject = res.project;
            form.reset();
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
