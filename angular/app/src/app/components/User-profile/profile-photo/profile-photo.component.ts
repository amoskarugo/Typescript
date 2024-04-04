import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile-photo',
  standalone: true,
  imports: [],
  template: `
    <img
      src="../../assets/images/profile-photo.jpeg"
      alt="user profile photo"
    />

    <p>Bio: {{ bio }}</p>
    <p>Age: {{ age }}</p>

    <p>marital status: {{ label }}</p>
  `,
  styles: `
  
  img {
    border-radius: 50%;
  }
  `,
})
export class ProfilePhotoComponent {
  @Input()
  bio: string = '';

  @Input()
  age: number = 0;


  @Input({ transform: trimString }) label = '';
}

function trimString(value: string | undefined) {
  return value?.trim ?? '';
}
