import { Client, TablesDB } from "appwrite";

// Appwrite configuration
const APPWRITE_ENDPOINT =
  import.meta.env.VITE_APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1";
const APPWRITE_PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID || "";
const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID || "";
const APPWRITE_WAITLIST_TABLE_ID =
  import.meta.env.VITE_APPWRITE_WAITLIST_TABLE_ID || "";

// Initialize Appwrite client
const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID);

// Initialize Databases
const databases = new TablesDB(client);

export { client, databases, APPWRITE_DATABASE_ID, APPWRITE_WAITLIST_TABLE_ID };
