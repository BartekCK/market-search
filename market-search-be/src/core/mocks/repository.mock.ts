import { MockType } from './mock.type';
import { Repository } from 'typeorm';

export const repositoryMockFactory = <T>(): (() => MockType<Repository<T>>) =>
  jest.fn(() => ({
    findOne: jest.fn(),
  }));
