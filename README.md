# Rao's Sunday Harangues Blog

This is a Next.js blog project, designed to be hosted on Vercel.

## Getting Started Locally

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Hosting on Vercel with GitHub

This project is optimized for deployment on [Vercel](https://vercel.com).

### Step 1: Push to GitHub

1.  Create a new repository on GitHub.
2.  Initialize this folder as a git repository (if it isn't already):
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```
3.  Push your code to the GitHub repository:
    ```bash
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```

### Step 2: Deploy on Vercel

1.  Go to [Vercel](https://vercel.com) and sign up/log in.
2.  Click **"Add New..."** and select **"Project"**.
3.  Select **"Continue with GitHub"**.
4.  Find your repository in the list and click **"Import"**.
5.  In the configuration screen:
    *   **Framework Preset**: Next.js (should be auto-detected).
    *   **Root Directory**: ./ (default).
    *   **Build Command**: `next build` (default).
    *   **Output Directory**: `.next` (default).
    *   **Install Command**: `npm install` (default).
6.  Click **"Deploy"**.

Vercel will build your project and deploy it. You will get a live URL (e.g., `your-project.vercel.app`).

### Updating the Blog

Whenever you want to add a new post or change code:
1.  Make changes locally.
2.  Commit and push to GitHub:
    ```bash
    git add .
    git commit -m "Add new post"
    git push
    ```
3.  Vercel will automatically detect the push and redeploy your site.
