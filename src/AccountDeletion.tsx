import { useState } from "react";
import type React from "react";
import Footer from "./Footer";
import LoaderModal from "./Loader";
import Navigation from "./Navigation";
import ToastManager from "./Toast";
import { accountDeletionService } from "./services/accountDeletion";

const defaultDataScope =
  "Delete my entire Leankly account, profile, messages, quests, and activity";

function AccountDeletion() {
  const [formData, setFormData] = useState({
    email: "",
    reason: "",
    dataScope: defaultDataScope,
    confirm: false,
  });
  const [requestId, setRequestId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetForm = () => {
    setFormData({
      email: "",
      reason: "",
      dataScope: defaultDataScope,
      confirm: false,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.email.trim()) {
      window.showError("Please enter the email tied to your account.");
      return;
    }

    if (!formData.confirm) {
      window.showError("Please confirm that you want your account deleted.");
      return;
    }

    setIsSubmitting(true);
    setRequestId(null);
    console.log("submitting...");
    try {
      const result = await accountDeletionService.requestDeletion({
        email: formData.email.trim(),
        reason: formData.reason.trim() || undefined,
        dataScope: formData.dataScope,
      });

      setRequestId(result.recordId);
      window.showSuccess(
        "Request received. We’ll send a confirmation email shortly and delete your data."
      );
      resetForm();
    } catch (error) {
      const message =
        (error as Error).message ||
        "Unable to submit your request right now. Please try again.";
      window.showError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation currentPage="account-deletion" />

      {/* Hero */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-100 uppercase tracking-[0.2em] text-sm mb-4">
              Leankly · Account Controls
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-300 mb-6">
              Request account and data deletion
            </h1>
            <p className="text-lg text-black-100 leading-relaxed">
              This is the official Leankly path to ask for your account and
              associated data to be deleted. Share the email tied to your
              account and we’ll send a confirmation note as soon as your request
              is queued.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "1. Tell us your email",
                body: "Enter the email you use in the Leankly app. No password needed.",
              },
              {
                title: "2. Submit deletion request",
                body: "We log your request and queue removal.",
              },
              {
                title: "3. Confirmation + deletion",
                body: "We email you to confirm receipt and delete your data within 7 days. Backups age out automatically.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl shadow-lg bg-secondary-50 border border-secondary-100"
              >
                <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                  {item.title}
                </h3>
                <p className="text-black-100">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data handling */}
      <section className="py-14 bg-secondary-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-secondary-300 mb-4">
                What happens to your data
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-secondary-300 mb-2">
                    Data we delete
                  </h3>
                  <ul className="space-y-2 text-black-100">
                    <li>
                      • Profile details, photos, quest history, and matches
                    </li>
                    <li>• Messages, comments, likes, and in-app preferences</li>
                    <li>• Device/session metadata tied to your account</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-300 mb-2">
                    Data we may keep temporarily
                  </h3>
                  <ul className="space-y-2 text-black-100">
                    <li>
                      • Fraud/abuse logs retained up to 30 days to protect other
                      users
                    </li>
                    <li>
                      • Legal/transactional records kept only when required by
                      law or accounting
                    </li>
                    <li>
                      • Backups age out on their normal rotation (up to 30 days)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 rounded-xl bg-secondary-50 text-black-100">
                We start deletion immediately after you submit this form. Active
                data is removed within 7 days; backup copies expire
                automatically on the schedule above. You can always reach us at{" "}
                <a
                  className="text-primary-300 underline"
                  href="mailto:support@leankly.com"
                >
                  support@leankly.com
                </a>{" "}
                if you need to check status.
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Need a different route?
              </h3>
              <ul className="space-y-3 text-black-100">
                <li>
                  • If you cannot sign in, email{" "}
                  <a
                    className="text-primary-300 underline"
                    href="mailto:support@leankly.com"
                  >
                    support@leankly.com
                  </a>{" "}
                  with the email tied to your account.
                </li>
                <li>
                  • For developer/partner accounts, contact your Leankly account
                  manager so we can coordinate service continuity.
                </li>
                <li>
                  • Want a copy of your data first? Request export in-app before
                  submitting deletion.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-secondary-300">
                  Submit deletion request
                </h2>
                <p className="text-black-100 mt-2">
                  We capture your email and log your deletion request. You’ll
                  get a confirmation email shortly after submission.
                </p>
              </div>
              {requestId && (
                <div className="px-3 py-2 rounded-lg bg-secondary-50 text-primary-300 text-sm font-semibold border border-secondary-200">
                  Request saved · {requestId}
                </div>
              )}
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-black-200 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-300"
                  placeholder="email@youremail.com"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black-200 mb-2">
                    What should we delete?
                  </label>
                  <select
                    name="dataScope"
                    value={formData.dataScope}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-300"
                  >
                    <option value={defaultDataScope}>{defaultDataScope}</option>
                    <option value="Delete my account but keep receipts required for compliance">
                      Delete my account but keep receipts required for
                      compliance
                    </option>
                    <option value="Delete my account and anonymize safety logs after review">
                      Delete my account and anonymize safety logs after review
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black-200 mb-2">
                    Why are you leaving? (optional)
                  </label>
                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-300 resize-none"
                    placeholder="Tell us if there's something we could have done better."
                  />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="confirm"
                  name="confirm"
                  type="checkbox"
                  checked={formData.confirm}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 text-primary-300 border-gray-300 rounded focus:ring-primary-300"
                />
                <label
                  htmlFor="confirm"
                  className="text-sm text-black-100 leading-relaxed"
                >
                  I confirm that I want my Leankly account and associated data
                  deleted. I understand this is permanent and may take up to 7
                  days to fully complete (with backups expiring on their normal
                  schedule).
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  isSubmitting
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-primary-300 text-white hover:bg-primary-300/90"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit deletion request"}
              </button>

              <p className="text-xs text-black-200">
                We use this email to locate your account, log the request in
                Appwrite, and send a confirmation email. No password required.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <LoaderModal isOpen={isSubmitting} />
      <ToastManager />
    </>
  );
}

export default AccountDeletion;
