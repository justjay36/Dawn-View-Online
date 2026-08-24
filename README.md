# DawnView Online v0.4

DawnView Online v0.4 is the shareable Progressive Web App (PWA) version of Dawn View.

## v0.4 changes
- Prevents the white browser canvas from flashing through during mobile overscroll by applying the Dawn View background to the root page.
- Adds mobile overscroll containment and full-viewport background coverage.

- The demo/personalization banner now disappears completely after **Make it yours** is selected.
- The banner also disappears after **Start Fresh**.
- Resetting the device back to demo data restores the banner.
- Existing v0.2 personalization state is migrated so upgrading users do not have to personalize again.
- Keeps the mobile scrolling improvements and network-first update behavior from v0.2.
- Bank Sync remains listed as a future feature; no Plaid integration is included.
- User data remains local to each browser/device using IndexedDB.

## Update the live GitHub Pages site

1. Upload the **contents** of this folder to the root of the existing GitHub repository.
2. Replace the existing files with these versions.
3. Commit directly to `main`.
4. GitHub Pages will redeploy automatically.
5. If an older build appears, test in a private/incognito tab first, then clear the site's cached data if necessary.

## iPhone install

Open the public URL in Safari → **Share → Add to Home Screen**. Enable **Open as Web App** when shown.

## Android install

Open the URL in Chrome and use **Install app** or **Add to Home screen**.

## Privacy / current limitations

- Included demo records are fictitious.
- No Plaid credentials or operational Bank Sync are present.
- No cloud accounts or cross-device sync are included yet.
- Clearing browser/site data can remove locally stored Dawn View data. Use **Export Backup** for anything important.
