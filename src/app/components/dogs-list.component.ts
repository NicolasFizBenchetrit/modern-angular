import { Component } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { Dog } from '../interfaces/Dog'
import data from '../../mocks/dogs.json'
import { DogCardComponent } from './dog-card.component'

@Component({
  selector: 'app-dogs-list',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, DogCardComponent],
  template: `
    <div class="my-3 flex flex-col justify-center items-center text-white">
      <h1 class="text-5xl font-bold text-center flex items-center"><img src="../../assets/angularLogo.png" width="70">Welcome to a modern Angular App!</h1>
      <section class="m-4 flex flex-col items-center">
        <h2 class="text-xl font-semibold">This is a web app created with Angular 15 to make use of:</h2>
        <ul class="text-lg max-w-md space-y-1 text-gray-300 m-2 ml-14">
          <li>⚙ Standalone components</li>
          <li>🍃 Tailwind</li>
          <li>🟣 EsLint</li>
          <li>📄 Inline templates</li>
          <li>💉 Inject function for dependencies</li>
          <li>⌛ New lazy loading</li>
        </ul>
      </section>
      <div class="my-4 grid grid-cols-3 gap-12">
        <app-dog-card *ngFor="let dog of dogs" [dog]="dog"></app-dog-card>
      </div>
    </div>
  `,
  styles: []
})
export class DogsListComponent {
  dogs!: Dog[]

  ngOnInit (): void {
    this.dogs = data.dogBreeds
  }
}
