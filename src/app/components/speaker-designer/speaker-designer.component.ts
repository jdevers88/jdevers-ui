import { Component, OnInit } from '@angular/core';
import {SpeakerDesignerService} from '../../services/speaker-designer.service'
import { SoftwareVersion } from '../../models/software_version';
import { Apollo, ApolloModule } from 'apollo-angular';

@Component({
  selector: 'app-speaker-designer',
  templateUrl: './speaker-designer.component.html',
  styleUrls: ['./speaker-designer.component.css']
})
export class SpeakerDesignerComponent implements OnInit {
  versions: SoftwareVersion[]

  constructor(private apollo:Apollo) {
    
   }

  ngOnInit(): void {
    this.versions = new SpeakerDesignerService(this.apollo).softwareVersions;
  }

}
