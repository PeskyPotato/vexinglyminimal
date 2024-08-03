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


