import * as dataSource from '../../../ormconfig';

export async function teardownDB(): Promise<void> {
  let instance = dataSource.default;

  if (!instance.isInitialized) {
    instance = await dataSource.default.initialize();
  }

  await instance.dropDatabase();
  await instance.destroy();
}
