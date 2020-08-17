---
title: Testowy post z galerią
paragraph: Felicja Oberlander urodzona
categories: writing
gallery:
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
Takie treści, to się zmieści. Niesamowite, chyba to się uda : )


{% if page.gallery %}{% include image-gallery.html %}{% endif %}