import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs'
import data from '../../mocks/dogs.json'
import { Dog } from '../interfaces/Dog'

@Component({
  selector: 'app-dog-details',
  standalone: true,
  imports: [CommonModule],
  template: ' <p>dog-details works!</p> ',
  styles: []
})
export class DogDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  dog!: Dog | undefined
  ngOnInit (): void {
    this.route.paramMap.pipe(
      map((params) => {
        this.dog = data.dogBreeds.find((elem) => elem.breed === params.get('breed'))
      })
    )
  }
}
