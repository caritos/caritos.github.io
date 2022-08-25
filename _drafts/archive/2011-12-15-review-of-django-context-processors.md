---
layout: default
title: Review of Django's Context Processors
---

{{ page.title }}
================

<p class="meta">15 December 2011 - Philadelphia</p>

We recently had to create a custom context processor for a project I was working on.
Just wanted to jot some notes down to review the basics of Context Processors.

- A context is a name value mapping (similar to Python dictionary) that is passed to a template.
- A template renders a context by replacing the variable "holes" with values from the context and executing all template tags.
- RequestContext adds a bunch of variables to your template context by default - things like HttpRequest object or information the currently logged in user. 
- Example of custom context processor:

<pre><code>
def custom_proc(request):
    "A custom processor that provides 'app', 'user', and 'ip_address'."
    return {
        'app': 'My app',
        'user': request.user,
        'ip_address': request.META['REMOTE_ADDR']
    }

def view(request):
    # ...
    return render_to_response('template1.html', 
                             {'message': 'I am view 1.'},
                             context_instance=RequestContext(request, processors=[custom_proc]))
</code></pre>

- Django provides support for global context processors.  The TEMPLATE_CONTEXT_PROCESSORS settings (in your settings.py) designates which context processors should always be applied to RequestContext.
