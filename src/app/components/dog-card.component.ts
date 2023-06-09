import { Component, Input } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { Dog } from '../interfaces/Dog'

@Component({
  selector: 'app-dog-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col dog-card cursor-pointer">
      <div class="h-50 overflow-hidden">
        <img class="rounded-t-lg w-auto object-cover h-80" [ngSrc]="dog.photo" width="400" height="200" />
      </div>
      <div class="m-3">
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 text-center h-10 overflow-hidden">
          {{ dog.breed }}
        </h5>
      </div>
    </div>
  `,
  styles: [
    `
      .dog-card {
        transition: transform 0.3s;
      }
      .dog-card:hover {
        transform: scale(1.05);
      }
      .dog-card:active {
        transform: scale(0.95);
      }
    `
  ]
})
export class DogCardComponent {
  @Input() dog!: Dog
}
