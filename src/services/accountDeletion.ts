import { ID } from "appwrite";
import {
  APPWRITE_ACCOUNT_DELETION_TABLE_ID,
  APPWRITE_DATABASE_ID,
  databases,
} from "./appwrite";

export interface AccountDeletionForm {
  email: string;
  reason?: string;
  dataScope?: string;
}

export interface AccountDeletionResult {
  userId: string;
  recordId: string;
}

const saveDeletionRequest = async ({
  userId,
  email,
  reason,
  dataScope,
}: {
  userId: string;
  email: string;
  reason?: string;
  dataScope?: string;
}) => {
  if (!APPWRITE_DATABASE_ID || !APPWRITE_ACCOUNT_DELETION_TABLE_ID) {
    throw new Error("Appwrite account deletion table is not configured.");
  }

  if (!email.trim()) {
    throw new Error("Please provide the email tied to your account.");
  }

  const row = await databases.createRow(
    APPWRITE_DATABASE_ID,
    APPWRITE_ACCOUNT_DELETION_TABLE_ID,
    ID.unique(),
    {
      userId,
      email: email.trim(),
      reason: reason || "User requested account deletion",
      dataScope: dataScope || "Delete account, profile data, and app activity",
      status: "requested",
      requestedAt: new Date().toISOString(),
    }
  );

  return {
    userId,
    recordId: row.$id,
  };
};

export const accountDeletionService = {
  async requestDeletion(
    form: AccountDeletionForm
  ): Promise<AccountDeletionResult> {
    // No authentication—just capture the email and log the request for follow-up.
    const userId = `deletion-${Date.now()}`;

    return saveDeletionRequest({
      userId,
      email: form.email,
      reason: form.reason,
      dataScope: form.dataScope,
    });
  },
};
