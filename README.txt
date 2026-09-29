SAMA ASHOUR PORTFOLIO - HOW TO USE
==================================

RUN THE WEBSITE
- Simplest: double-click index.html to open it in your browser.
- Visual Studio: File > Open > Folder..., choose the Sama-Portfolio folder, then
  right-click index.html > "Open With..." > a browser (or "View in Browser").
  (Visual Studio Code users can install the "Live Server" extension and click "Go Live".)
- After each edit, save the file and refresh the browser.

CHANGE YOUR NAME
- index.html: search for "Sama Ashour" (page <title>, hero <h1>, footer, image alt text).
- Also the logo text "Sama" in the navbar.

CHANGE THE TITLE TEXT (typing animation)
- script.js: edit the TITLES list at the top.

ADD YOUR PHOTO
- Replace images/profile.jpg with your photo. Keep the same file name.

ADD PROJECTS
- index.html: find the comment "PROJECTS". Copy a whole <article class="card project-card"> block,
  paste it below the last one, then change the image, name, description, tags and links.
- Project images: images/project1.jpg, project2.jpg, ... (or use the projects folder for project files).

ADD CERTIFICATES
- index.html: find the comment "CERTIFICATES". Copy or delete a whole <article class="card cert-card"> block.
- Put certificate images in the images folder and update the src and the "View Certificate" href.

CHANGE SOCIAL MEDIA LINKS
- index.html: find the comment "SOCIAL LINKS" and replace the placeholder URLs
  (your-username, your.email@example.com).
- Contact form email: change EMAIL at the top of script.js.

CHANGE COLORS
- style.css: edit the variables in the :root block at the top (--accent is the blue).

CHANGE SKILLS
- index.html: find "SKILLS". Change data-level="80" (0 to 100) to set the bar.

EDUCATION / SERVICES / ABOUT
- Edit the text directly in the matching section of index.html.

NOTE
- The Manrope font loads from Google Fonts when you are online; the site falls back to Segoe UI/Arial offline.
