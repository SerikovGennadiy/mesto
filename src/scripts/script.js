import '../pages/index.css';

import { loadUserProfile } from './utils/profile.js';
import { loadGallery } from './utils/gallery.js';
import { loadAddCardHandler } from './utils/card.js';

document.addEventListener("DOMContentLoaded", function() {
  loadUserProfile()
    .then(user => {
      return loadGallery(user);
    })
    .then(user => {
      loadAddCardHandler(user);
    })
});
