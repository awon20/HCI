# Firebase access retired

The owner requested that this legacy project no longer use Firebase (2026-10-13).
Client initialization and Firebase dependencies have been removed. Cloud reads and
writes are disabled in the application. Both checked-in rulesets deny all client
reads and writes. No stored data is deleted by these changes.

## Live project action still required

Repository rules do not change the deployed Firebase project automatically.
In the Firebase console, publish these deny-all Firestore and Storage rules for
each connected database/bucket. Verify the selected project first. Revoke existing
Storage download tokens or other public object access separately: download-token
URLs and administrative credentials are not controlled by client Security Rules.
Disable unused service accounts and integrations in the cloud console if applicable.
Do not delete buckets or databases merely to disable this client.

Previously deployed copies of the app may still contain the old client code until
replaced. Server-side access has not been verified or revoked from this workspace.
