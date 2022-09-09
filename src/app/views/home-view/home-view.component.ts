import { Component, OnInit } from '@angular/core';
import { Excercise } from 'src/app/interfaces/exercise.interface';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  public readonly exercises: Excercise[] = [
    {
      name: 'Bicep curl',
      series: [
        {
          reps: 12,
          weightInKg: 5
        }
      ]
    }
  ];


  public constructor() { }

  public ngOnInit(): void {
  }

  public onClickAddSerie(exerciseName: string): void {
    const exercise = this.exercises.find(x => x.name === exerciseName);

    if(!exercise) {
      throw new Error('Impossible state');
    }

    exercise.series.push({ reps: 0, weightInKg: 0});
  }

  public debug(): void {
    console.log(this.exercises);
  }

}
