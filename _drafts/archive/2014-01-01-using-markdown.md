---
layout: post
title: Using Markdown
categories: misc 
---

What is Markdown
----------------

Markdown is a plain text formatting syntax created by [John Gruber](http://daringfireball.net/projects/markdown/).  It allows me to create well formatted documents with a text editor.

Pandoc
------

On the web, I found [Pandoc](http://johnmacfarlane.net/pandoc/) to be one of the most popular tools to convert markdown files into PDFs.  
I downloaded the Windows installation and ran the command
~~~~~~~~
pandoc Book.txt -o Book.pdf
~~~~~~~~
I got the error 
~~~~~~~~
pandoc: pdflatex not found. pdflatex is needed for pdf output.
~~~~~~~~
To get the pdflatex executable, I needed [MiKTeX](http://tug.ctan.org/tex-archive/systems/win32/protext).
Once installed, I was able to convert my markdown file to PDF.  

It doesn't matter what extension you use in the source file.  I have "txt" instead of "md" and Pandoc was able to convert Book.txt properly into a PDF file.
