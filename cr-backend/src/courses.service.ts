import { Injectable } from '@nestjs/common';
import { Course } from './interfaces/courses.interface';

@Injectable()
export class CoursesService {
  async findAll(): Promise<Course[]> {
    return [
      {
        id: '100',
        number: '01204111',
        title: 'Computer and Programming',
      },
      {
        id: '12312312',
        number: '5435345435',
        title: 'Discreate mathemetic and linear algebra',
      },
      {
        id: 'sdsfsfdsf',
        number: '31312321312',
        title: 'Design and analysis of algorithms',
      },
    ];
  }
}
