import { Component} from '@angular/core';
import { ProfilePhotoComponent } from '../profile-photo/profile-photo.component';

@Component({
  selector: 'user-profile',
  standalone: true,
  imports: [ProfilePhotoComponent],
  template: `
    
    <profile-photo [bio]='bio' [age]="age" [label]="status"/>

    <button>Upload profile a new profile picture</button>
  `,
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  bio: string = "cybersecurity expert";
  age: number = 27;
  status: string = 'single';

}
