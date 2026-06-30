# NextLevel PM Cloudflare Pages + CMS Site

This is the ready-to-deploy NextLevel PM website built for Cloudflare Pages.

## What is included
- Your NextLevel PM logo
- Your email: support@nextlevelpm.net
- Your phone: 214-396-8038
- Your Google Calendar scheduling link
- Consulting page
- PMP Training page
- Corporate Training page
- About page
- Contact page
- Resources page
- Admin folder for Decap CMS content editing

## Cloudflare Pages setup
1. Create or open your GitHub repository.
2. Upload the contents of this folder to the repository.
3. In Cloudflare, go to Workers & Pages > Create application > Pages.
4. Connect your GitHub account and select the repository.
5. Set the build command to: `npm run build`
6. Set the build output directory to: `dist`
7. Click Deploy.
8. Add your custom domain: `nextlevelpm.net` and `www.nextlevelpm.net`.

## CMS note
The admin area is located at `/admin`. Before using it, update `admin/config.yml` with your GitHub username and repository name:

`repo: YOUR-GITHUB-USERNAME/YOUR-REPOSITORY-NAME`

Decap CMS with GitHub requires a GitHub OAuth setup. The website works without this step; this step is only for browser-based editing later.

## No coding needed for initial website launch
The site is already populated with your logo, contact information, and booking link.
