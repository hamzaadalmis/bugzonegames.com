# [bugzonegames.com](https:/bugzonegames.com)

[![Netlify Status](https://api.netlify.com/api/v1/badges/89b6bba7-a11f-4e59-8d5b-9ff9ccfbd018/deploy-status)](https://app.netlify.com/sites/bugzonegames/deploys)

## What is this repo?

This repo is bugzonegames.com website GitHub repo for purpose of using with Netlify. 

## Contributing

We don't accept any contributing.

## Layout

* Page templates are in `/layouts`
* Global styles are in `/layouts/css`
* Global static files are in `/static`
* All content is in `/locale`
  * Initial development usually happens in English: `/locale/en`
  * `/locale/{{locale}}/site.json` is where global localization information lives.
  * All content is in Markdown and is per locale.
  * The top of each Markdown file is a block of YAML for page specific localization information that is passed to various templates.
  * The bulk of the Markdown content for each page is referenced as `{{{content}}}` in the corresponding template.

## Deployment

Deployment maintained by Netlify. After pushing commitments to Repo, Netlify will start build and deploy repo to host.

## Last Things

This website (and repo) maintained by hamzaadalmis(hamzaadalmis344@gmail.com). Using programming language, tools, editors, plugins and coding style are reserved. This website project licensed with GPL V3 and repository is private.