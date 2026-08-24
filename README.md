# Dawn View — Shareable Web Preview v0.1

This is a standalone Progressive Web App (PWA) built from Dawn View v2.16.0.

## What changed from the personal Android build

- Personal master-seed data has been removed.
- The included records are fictitious sample data.
- Plaid / bank connection support is not included in this build.
- Settings shows Bank Sync as a possible future feature.
- Google Calendar sync is not active in the web preview.
- Data is stored locally in the browser using IndexedDB.
- A **Start Fresh** option clears the sample personal data on that device.
- The app includes a web manifest, icons, and service worker for install/offline behavior.

## Test locally

You must serve the folder over HTTP; opening `index.html` directly will not enable the service worker.

Python:
`python -m http.server 8000`

Then open:
`http://localhost:8000`

## Publish free with GitHub Pages

1. Create a new GitHub repository for the shareable preview.
2. Upload the contents of this folder to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. Push to `main` if needed. The included workflow deploys the site.
6. When the workflow finishes, GitHub Pages will show the public URL.

Important: publish **this sanitized folder**, not your personal Dawn View Android repository.

## iPhone install

1. Open the public Dawn View URL in Safari.
2. Tap **Share**.
3. Tap **Add to Home Screen**.
4. Turn on **Open as Web App** if Safari shows the option.
5. Tap **Add**.

Dawn View will then launch from its Home Screen icon in a standalone window.

## Android install

Open the URL in Chrome. Use **Install app** or **Add to Home screen** from the browser menu when offered.

## Current limitation

There are no user accounts or cloud sync in this preview. Each browser/device keeps its own local Dawn View data. Clearing site data or deleting browser storage can remove that device's data, so users should use **Export Backup** for anything they care about.
