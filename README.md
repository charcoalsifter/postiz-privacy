# Postiz Social Manager – Privacy Policy Website

A static Privacy Policy website for the **Postiz Social Manager** Meta/Facebook Developer App.

Hosted on **GitHub Pages** — no backend, no build process, no paid hosting required.

---

## Live URL

```
https://YOUR-GITHUB-USERNAME.github.io/postiz-privacy/
```

> Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username after deployment.

---

## Files

```
postiz-privacy/
├── index.html          ← Privacy Policy (main page / Meta Privacy Policy URL)
├── data-deletion.html  ← Data Deletion instructions (Meta Data Deletion page)
├── contact.html        ← Contact information
├── styles.css          ← All styles
├── script.js           ← Minimal JS (progressive enhancement only)
├── logo.jpg            ← Site logo
├── README.md           ← This file
└── .gitignore
```

---

## Deploying to GitHub Pages

### Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in.
2. Click **New repository**.
3. Name it: `postiz-privacy`
4. Set visibility to **Public**.
5. Click **Create repository**.

### Step 2 — Upload Files

**Option A: Via GitHub Web Interface**
1. In your new repository, click **Add file → Upload files**.
2. Drag and drop ALL files from this folder.
3. Click **Commit changes**.

**Option B: Via Git Command Line**
```bash
cd postiz-privacy
git init
git add .
git commit -m "Initial commit: Postiz Social Manager Privacy Policy"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/postiz-privacy.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. In your repository, click **Settings**.
2. In the left sidebar, click **Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Select branch: **main**.
5. Select folder: **/ (root)**.
6. Click **Save**.

### Step 4 — Wait for Deployment

GitHub Pages usually deploys within 1–3 minutes. You will see the live URL in **Settings → Pages**.

### Step 5 — Test

Open the URL in an **incognito/private browser window**:
```
https://YOUR-GITHUB-USERNAME.github.io/postiz-privacy/
```

Verify all three pages load correctly:
- `/` → Privacy Policy
- `/data-deletion.html` → Data Deletion
- `/contact.html` → Contact

---

## Before Publishing — Replace All Placeholders

Search for and replace the following placeholders in **all HTML files**:

| Placeholder | Replace With |
|---|---|
| `[YOUR BUSINESS NAME]` | Your business or personal name |
| `[YOUR CONTACT EMAIL]` | Your real contact email address |
| `[YOUR WEBSITE OR GITHUB PAGES URL]` | Your GitHub Pages URL or website |
| `[DATE]` | Today's date (e.g., August 15, 2026) |
| `YOUR-GITHUB-USERNAME` | Your actual GitHub username |

---

## Meta/Facebook Developer Dashboard Configuration

After your site is live, add the following URL in your Meta App settings:

**App Dashboard → Settings → Basic → Privacy Policy URL:**
```
https://YOUR-GITHUB-USERNAME.github.io/postiz-privacy/
```

**App Dashboard → Facebook Login → Settings → Deauthorize Callback URL (optional):**
> Note: This static site is NOT a valid callback endpoint.
> A real Data Deletion Callback URL requires a server-side endpoint.
> For manual deletion, use the email address on the Data Deletion page.

---

## Submission Checklist

- [ ] Replace `[YOUR BUSINESS NAME]` in all HTML files
- [ ] Replace `[YOUR CONTACT EMAIL]` in all HTML files
- [ ] Replace `[YOUR WEBSITE OR GITHUB PAGES URL]` in all HTML files
- [ ] Replace `[DATE]` with the actual effective date and last updated date
- [ ] Replace `YOUR-GITHUB-USERNAME` in canonical URLs and README
- [ ] Verify the site opens publicly in an incognito browser
- [ ] Verify HTTPS is active (GitHub Pages provides this automatically)
- [ ] Verify Privacy Policy page renders without JavaScript
- [ ] Verify Data Deletion page is accessible
- [ ] Verify Contact page shows correct contact information
- [ ] Verify all internal links work (Privacy Policy ↔ Data Deletion ↔ Contact)
- [ ] Verify Meta App settings → Privacy Policy URL is set
- [ ] Verify Facebook permissions in the policy match your actual app configuration
- [ ] Do NOT submit Meta App Review automatically — complete manual review first

---

## Security Notes

- This site does not collect any visitor data.
- This site does not use cookies, analytics, or tracking.
- This site does not embed any third-party scripts except Google Fonts.
