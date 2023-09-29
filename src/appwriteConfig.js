import { Client, Databases, Account } from 'appwrite';

export const PROJECT_ID = '65153492a1e7ecc24339'
export const DATABASE_ID = '6515381c803701101778'
export const COLLECTION_ID_MESSAGES = '651538308f187b3293ed'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65153492a1e7ecc24339');

export const databases = new Databases(client);
export const account = new Account(client);

export default client;