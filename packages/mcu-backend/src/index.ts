import { https, logger } from 'firebase-functions';

export const helloWorld = https.onRequest(async (_req, res) => {
  try {
    logger.info('hello world');
    res.send('hello world');
  } catch (error) {
    logger.error('error', { error });
    res.send({ error });
  }
});
