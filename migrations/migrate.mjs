/* eslint-disable no-console */
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert the current module's URL to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Specify the path to your .env.local file relative to your script
const envPath = path.resolve(__dirname, '../.env.local');

// Load environment variables from the specified file
dotenv.config({ path: envPath });

// Function to get collections from a MongoDB instance
async function getCollections(uri, database) {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(database);
  const collections = await db.listCollections().toArray();
  await client.close();
  return new Set(collections.map((c) => c.name));
}

// Function to create collections in a MongoDB instance
async function createCollections(uri, database, collections) {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(database);
  for (const collection of collections) {
    try {
      await db.createCollection(collection);
      console.log(`Created collection: ${collection}`);
    } catch (err) {
      console.log(`Failed to create collection: ${collection}`, err);
    }
  }
  await client.close();
}

// Main function to compare and create collections
async function main() {
  const productionURI = process.env.MONGODB_URI;
  const testURI = process.env.MONGODB_URI;
  const localhostURI = 'mongodb://localhost:27017';

  const databases = {
    production: {
      uri: productionURI,
      name: 'production',
    },
    staging: {
      uri: testURI,
      name: 'testDB',
    },
    local: {
      uri: localhostURI,
      name: 'testDB',
    },
  };

  const args = process.argv.slice(2);

  if (args.length !== 2) {
    console.log('Usage: node compareCollections.mjs <source> <destination>');
    console.log('Options for source/destination: production, testDB, local');
    process.exit(1);
  }

  const [source, destination] = args;

  if (!(source in databases) || !(destination in databases)) {
    console.log('Invalid source or destination.');
    console.log(
      'Options for source/destination: production, testDB, localhost',
    );
    process.exit(1);
  }

  const sourceConfig = databases[source];
  const destConfig = databases[destination];

  const collectionsSource = await getCollections(
    sourceConfig.uri,
    sourceConfig.name,
  );
  const collectionsDest = await getCollections(destConfig.uri, destConfig.name);

  const onlyInSource = [...collectionsSource].filter(
    (x) => !collectionsDest.has(x),
  );

  console.log(`Collections only in ${source}:`, onlyInSource);

  if (onlyInSource.length > 0) {
    console.log(
      `Creating collections in ${destination} that are only in ${source}...`,
    );
    await createCollections(destConfig.uri, destConfig.name, onlyInSource);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
