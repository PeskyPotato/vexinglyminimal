# VexinglyMinimal 

Hugo theme build on top of [blank](https://github.com/vimux/blank)

Still very much a work in progress.

## Quickstart
Adapted from the official [Hugo quick start guide](https://gohugo.io/getting-started/quick-start/#create-a-site).

```bash
hugo new site quickstart
cd quickstart
git init
git submodule add https://github.com/PeskyPotato/vexinglyminimal.git themes/vexinglyminimal
echo "theme = 'vexinglyminimal'" >> hugo.toml
hugo server
```

## Options

### Archive page

Create a markdown file within `content/` that uses the archive layout type. For example:

```markdown
---
title: "Posts Archive"
layout: archive
hidden: true
type: posts
summary: This page contains an archive of all posts.
---
```

### Mastodon author tags

Adds a meta tag with a link to mastodon. Set an authors mastodon handle in the `hugo.toml` file. In this case I will use "pesky".

```
[params.authors]
[params.authors.pesky]
  mastodon = "@peskypotato@hachyderm.io"
```

Then if author is set in the frontmatter of a post the appropriate meta tags will be added in the header to show up on Mastodon for author attribution. For more on author tags read [Robb Knight's post](https://rknight.me/blog/setting-up-mastodon-author-tags/).


