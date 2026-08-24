# DawnView Online v0.2

DawnView Online v0.2 is the shareable Progressive Web App (PWA) version of Dawn View, built from the sanitized v2.16.0 web layer.

## v0.2 changes

- Keeps fictitious demo data so new users can immediately explore the app.
- Adds a first-launch choice: **Explore Demo** or **Start Fresh**.
- Improves mobile scrolling by removing expensive fixed-background effects on phones and simplifying the sticky navigation rendering.
- Updates the service worker so new GitHub Pages releases are picked up more reliably instead of staying on an older cached app shell.
- Renames the shareable release to **DawnView Online v0.2**.
- Bank Sync remains visible as a possible future feature, but no Plaid/bank integration is included.
- Data remains local to each browser/device using IndexedDB.

## Publish free with GitHub Pages — easiest method

1. Upload the **contents** of this folder to the root of your GitHub repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select **main** and **/(root)**, then Save.
5. Wait for GitHub Pages to publish the new version.

If v0.1 was already installed or opened, refresh the page once after the deployment. The v0.2 service worker will replace the older cache.

## iPhone install

Open the public URL in Safari → **Share → Add to Home Screen**. Enable **Open as Web App** when shown.

## Android install

Open the URL in Chrome and use **Install app** or **Add to Home screen**.

## Privacy / current limitations

- Included records are fictitious demo data.
- No Plaid credentials or operational Bank Sync are present.
- No cloud accounts or cross-device sync are included yet.
- Clearing browser/site data can remove locally stored Dawn View data. Use **Export Backup** for anything important.
