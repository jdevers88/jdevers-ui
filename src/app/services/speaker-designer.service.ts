import { Injectable, Version } from '@angular/core';
import { SpeakerDesignerComponent } from '../speaker-designer/speaker-designer.component';
import { SoftwareVersion } from '../models/software_version';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class SpeakerDesignerService {
  softwareVersions: SoftwareVersion[]
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {
    this.apollo.watchQuery({
      query: gql`{allVersions
      {
        edges
        {
          node
          {
            name
            number
            note
          }
        }
      }
      }`,
    }).valueChanges.subscribe(result => {
      const data = result.data
      //this.softwareVersions = result.data && result.data.allVersions.edges;
    })
    this.softwareVersions = this.generateMockSoftwareVersions();
   }

  generateSoftwareVersion(version: string, name:string, downloadType:string, notes?:string): SoftwareVersion {
    const softwareVersion: SoftwareVersion =  {
      version : version,
      name : name,
      downloadType : downloadType,
      notes : notes }; 
    return softwareVersion;
  }
  generateMockSoftwareVersions(): SoftwareVersion[] {
    const softwareVersions:SoftwareVersion[] = [
      this.generateSoftwareVersion("1",'Siberian Speaker Designer','exe','test'),
      this.generateSoftwareVersion("2",'Siberian Speaker Designer','exe','test'),
      this.generateSoftwareVersion("3",'Siberian Speaker Designer','exe','test')
    ]
    return softwareVersions;
  }
}
