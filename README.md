# Jiacheng Lai Academic Homepage

This repository hosts the academic homepage for Jiacheng Lai at `https://jiachenglai.github.io`.

The site is organized as a lightweight Jekyll project inspired by academic themes such as al-folio, while keeping the current custom visual design.

## Structure

```text
.
|-- _config.yml              # Site metadata and GitHub Pages/Jekyll settings
|-- index.html               # Main Liquid template for the one-page homepage
|-- _data/                   # Editable homepage content
|   |-- profile.yml
|   |-- news.yml
|   |-- blog.yml
|   |-- publications.yml
|   |-- projects.yml
|   |-- awards.yml
|   |-- misc.yml
|   `-- cv.yml
|-- _bibliography/
|   `-- papers.bib           # BibTeX records for publications
|-- _layouts/                # Page layouts
|-- _includes/               # Shared HTML fragments
|-- _pages/                  # Standalone Jekyll pages
|-- _posts/                  # Blog posts
|-- _projects/               # Project pages
|-- .github/workflows/       # GitHub Pages deployment workflow
`-- assets/
    |-- img/                 # Profile image, paper figures, favicon
    |-- pdf/                 # CV and paper PDFs
    |-- script.js
    `-- styles.css
```

## Editing Content

- Edit biography, links, and motto in `_data/profile.yml`.
- Edit news and opportunity text in `_data/news.yml`.
- Edit publications in `_data/publications.yml` and keep BibTeX records in `_bibliography/papers.bib`.
- Edit research projects in `_data/projects.yml`.
- Edit awards in `_data/awards.yml`.
- Edit the CV link in `_data/cv.yml`.
- Add blog posts in `_posts/` using filenames such as `2026-06-17-title.md`.
- Add standalone pages in `_pages/`.
- Add project pages in `_projects/`.
- Edit visual styling in `assets/styles.css`.

## GitHub Pages

Create a public repository named:

```text
jiachenglai.github.io
```

Upload this repository content to the `main` branch. In repository settings, set GitHub Pages to deploy with **GitHub Actions**.

GitHub Pages will build the Jekyll site and publish it at:

```text
https://jiachenglai.github.io
```

## Local Preview

If Ruby and Bundler are installed:

```bash
bundle install
bundle exec jekyll serve
```

Then open the local URL printed by Jekyll.

## Included Publishing Features

- MIT License
- custom 404 page
- `robots.txt`
- generated sitemap via `jekyll-sitemap`
- RSS/Atom feed via `jekyll-feed`
- SEO and Open Graph metadata via `jekyll-seo-tag`
- favicon and social preview image
- GitHub Actions deployment workflow
- BibTeX bibliography rendering via `jekyll-scholar`
