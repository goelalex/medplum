import { closeWorkers, initWorkers } from '.';
import { loadTestConfig } from '../config';
import { closeDatabase, initDatabase } from '../database';
import { initBinaryStorage } from '../fhir/storage';
import { closeRedis, initRedis } from '../redis';
import { seedDatabase } from '../seed';

describe('Workers', () => {
  test('Init and close', async () => {
    const config = await loadTestConfig();
    initRedis(config.redis);
    await initDatabase(config.database);
    await seedDatabase();
    initBinaryStorage('file:binary');
    initWorkers(config.redis);
    await closeWorkers();
    await closeDatabase();
    closeRedis();
  });
});
