# SWACM International — Share the Word Apostolic Church Ministries International Website

A responsive, animated static church website branded as **SWACM International** for Share the Word Apostolic Church Ministries International, built with HTML, CSS, and vanilla JavaScript. The project is designed to run on Render Static Sites and can be hosted from a GitHub repository.

## What's included

- Responsive layouts for phones, tablets, laptops, and large screens
- Branded navy, royal-blue, gold, and warm-ivory color palette based on the supplied church emblem
- Sticky glass-style navigation, mobile navigation, reading-progress line, section reveal animations, active section links, and back-to-top control
- About, ministry pathways, mission vision, representative Philippine photo stories, gathering information, and contact sections
- Accessibility fundamentals: skip link, semantic landmarks, keyboard focus states, descriptive image alt text, and reduced-motion support
- Render deployment configuration (`render.yaml`)
- Church logo files provided in the request
- Footer credit: “Made with purpose by Rhapnel Rey · Powered by RhapnelReys Developments”

## Deploy to Render

### Option A — connect GitHub
1. Create a GitHub repository and upload all files and the `assets/` directory from this folder.
2. Name the GitHub repository `sharethewordinternational`. In Render, choose **New + → Static Site** and connect the repository.
3. Render can detect `render.yaml`. If configuring manually, use:
   - **Build Command:** leave blank
   - **Publish Directory:** `.`
4. Click **Create Static Site**. Each push to the connected branch will deploy the latest version.

### Option B — use the included blueprint
Connect the repository to Render and choose its Blueprint workflow so Render reads `render.yaml`.

## Important before the public launch

Some details must be confirmed by church leadership because the public web does not provide an official church website or a verified current schedule:

1. **Church name and branding:** the website brand is **SWACM International** and the full name is **Share the Word Apostolic Church Ministries International**, matching the supplied banner. The circular emblem says “Share the Word Apostolic Ministries International.” Confirm the formally preferred/registered wording with church leadership before launch. The suggested public website/repository identity is `sharethewordinternational`; domain availability has not been checked.
2. **Contact details:** a third-party business directory lists `0908 557 6223` and `PN.10A, PKG 1 Lt 1 Blk 4, Bagong Silang, Caloocan, Metro Manila`. The page also links to a Facebook profile associated with the listing. Confirm that the number, address, and Facebook page are official/current before publication.
3. **Ministry names and schedules:** ministries are presented as suggested pathways (Worship & Prayer, Bible & Discipleship, Children & Families, Youth & Young Adults, Evangelism & Outreach, Media & Creative Arts). Keep only ministries that are active and approved by leadership. The gathering section intentionally asks visitors to confirm service times instead of inventing a schedule.
4. **Missions:** the three locations/levels are written as mission vision, not as a claim that the church currently operates in every area. Add verified outreach locations, partners, dates, and testimonies when church leadership approves them.
5. **Photos:** the Philippine photos load from the source sites. They are representative contextual images, not photographs of the church's own activities. Replace these with church-owned event and ministry photographs when available. Keep the credits below if continuing to use the representative photos.

## Photo credits

- Church congregation photo: Lance Lozano, Unsplash. Identified on the photo page as a congregation in Silang, Cavite, Philippines. Source: https://unsplash.com/photos/a-large-group-of-people-sitting-in-a-church-XCA4387SI1U
- Children photo: Avel Chuklanov, Unsplash. Photo page describes the image as “Philippiens Smile,” with location listed as Philippines. Source: https://unsplash.com/photos/group-of-children-laughing-together-Ks4t8IK8Kgw
- Children walking photo: Taylor Keeran, Unsplash. Photo page lists Tigaon, Camarines Sur, Philippines. Source: https://unsplash.com/photos/a-group-of-children-walking-down-a-street-Gdbvbk9pIYU
- Manila church crowd photo: Moira De Castro, Pexels. Photo page identifies the scene as Quiapo Church, Manila, Philippines. Source: https://www.pexels.com/photo/crowd-gathering-at-quiapo-church-manila-36905753/
- Landscape photo: Cristian Jay Viray, Pexels. Photo page identifies the image as a landscape in Luzon, Philippines. Source: https://www.pexels.com/photo/scenic-mountain-and-lake-landscape-in-luzon-33681027/

The image links are remote, so visitors need an internet connection to see them. If an image is unavailable, its surrounding card keeps its background color and the layout remains intact.

## Editing the site

- Change text, headings, ministry descriptions, and imagery in `index.html`.
- Change colors, spacing, fonts, and animations in `styles.css` (the main brand variables are at the top of the file).
- Change navigation, reveal-on-scroll behavior, and sticky header behavior in `script.js`.
- Replace `assets/church-logo.png` with a higher-quality transparent logo if church leadership provides one. Maintain a square aspect ratio for the circular emblem.

## Technical notes

- No build step, framework, paid library, database, or API key is required.
- The contact links use direct call, Google Maps search, and Facebook navigation rather than a non-functional mock contact form.
- The photos and Google Fonts are remote third-party resources; replace with locally hosted assets if a fully self-contained offline deployment is required.
