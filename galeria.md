---
layout: default
title: galeria
menus: header
images:
  - image_path: images/image-1.jpg
    title: Fela-1
    link: images/image-1.jpg
    caption: Babcia i Dziadek
  - image_path: images/image-2.jpg
    title: Fela-2
    link: images/image-2.jpg
    caption: Na Gubałówce
  - image_path: images/image-3.jpg
    title: Fela-3
    link: images/image-3.jpg
    caption: Przed domem
---
<script type="text/javascript" src="{{'assets/js/lightbox.js' | relative_url}}"></script>

<ul class="photo-gallery flex">
  {% for image in page.images %}
    <a href="{{ image.link }}">
      <li>
        <img src="{{ image.image_path }}" alt="{{ image.title}}"/>
        <figcaption>{{ image.caption }}</figcaption>
      </li>
    </a>
  {% endfor %}
</ul>