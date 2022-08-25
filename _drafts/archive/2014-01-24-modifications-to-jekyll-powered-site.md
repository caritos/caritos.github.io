---
layout: post
title: Modifications to Jekyll Powered Site
categories: web
---

Ive been trying to improve how searchable this site is to search engines to improve viewership and one of the things I did was created pages focused on a specific category.  One page focused on Eclipse RCP/Plugin development would make it easier for an Eclipse programmer through look to similar articles and hopefully find what he/she was looking for.  In order to do that, I had to include a plugin file that built the jekyll powered site in a different way.  Unfortunately, Github hosted pages only build the site with their own plugins (-safe).  They recommended that I can still use github pages to upload the output of the jekyll build into my caritos.github.com account.  That is what I am currently using now.  My source files to this [website](http://caritos.com) is now located in [Bitbucket](http://bitbucket.com).  I modified config.yml to output the build result into my caritos.github.com repository.  I then commit and push those changes once again to see what you have here.  It is an extra step but having a Jekyll powered site really works well with my workflow.  I do not want to change now.
