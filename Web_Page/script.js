// Embed Dashboard
var divElement = document.getElementById('vizDashboard');
var vizElement = divElement.getElementsByTagName('object')[0];
if (divElement.offsetWidth > 800) { vizElement.style.width = '1000px'; vizElement.style.height = '1227px'; }
else if (divElement.offsetWidth > 500) { vizElement.style.width = '1000px'; vizElement.style.height = '1227px'; }
else { vizElement.style.width = '100%'; vizElement.style.height = '1777px'; }
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);

// Embed Story
var divElement2 = document.getElementById('vizStory');
var vizElement2 = divElement2.getElementsByTagName('object')[0];
vizElement2.style.width = '1000px'; vizElement2.style.height = '827px';
var scriptElement2 = document.createElement('script');
scriptElement2.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement2.parentNode.insertBefore(scriptElement2, vizElement2);
