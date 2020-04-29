import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { INews } from '../models/news';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  createDb() {
    let users: IUser[] = [{ id: 1, username: 'admin', password: 'admin' }];
    let news: INews[] = [
      {
        id: 1,
        newsTitle: 'Corona initiates',
        summary: 'Situation is out of hands',
        description: 'corona is disasterous and should start taking measures',
        fullNews: 'we should start taking measures'
      }
    ];
    let precautions: any[] = [
      {
        id: 1,
        precaution:
          'Clean your hands often. Use soap and water, or an alcohol-based hand rub.'
      },
      {
        id: 2,
        precaution:
          'Maintain a safe distance from anyone who is coughing or sneezing.'
      },
      { id: 3, precaution: 'Don’t touch your eyes, nose or mouth.' },
      {
        id: 4,
        precaution:
          'Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.'
      },
      { id: 5, precaution: 'Stay home if you feel unwell.' },
      {
        id: 6,
        precaution:
          'If you have a fever, a cough, and difficulty breathing, seek medical attention. Call in advance.'
      },
      {
        id: 7,
        precaution: 'Follow the directions of your local health authority.'
      }
    ];

    return { users, news, precautions };
  }

  constructor() {}
}
