# Stage 1 — Research & Asset Review

## 1. Sources reviewed

| Source | Status |
|---|---|
| `Images/` folder (10 files) | Reviewed in full |
| phonesbyasap.com/aboutUs.html | Live site is behind a bot check. Read the Wayback Machine copy (17 Nov 2025). Text captured in §5 |
| phonesbyasap.com/service.html | **Blocked.** Bot check on the live site; the tool denied the archive request. **Need the page content from you** |
| farhandev.top/asap/new.html | **Unreachable** from this machine (connection refused). The HTML file is not in the project folder. **Need the file from you** |
| Screenshots / client feedback docs | Not in the folder; I worked from the feedback quoted in the brief |

### File format note
All nine `ASAP*.jpg` files are actually **WebP** files with a `.jpg` extension. WordPress may reject a mismatched type on upload, so the organized copies in `assets/images/` use the correct `.webp` extension and descriptive names. The originals in `Images/` are unchanged.

### Resolution note
Every photo is 700–800 px wide. That is fine at its natural size or in a half-width column. As a full-bleed 1920 px hero it would look soft. **The design never stretches a photo past ~1.5× its native width.** If the client has larger originals (1600 px+), especially of the hero phone and the van, ask for them.

## 2. Image inventory

| # | Organized file | Original | Size | Full telephone? | ASAP logo on vehicle? | Notes / constraints |
|---|---|---|---|---|---|---|
| 1 | `phone-hero-desk.webp` | ASAP1 | 800×450 | **Yes, complete** (handset, coiled cord, colour screen with ASAP logo, keypad, nav cluster, side keys) | — | **Best product shot.** The phone fills the left ~65 % and a man works out of focus on the right. Never put text over the left two-thirds. Show uncropped. |
| 2 | `receptionist-headset-phone.webp` | ASAP2 | 800×450 | **Yes, if uncropped.** Phone and sidecar sit at bottom-left; the base reaches the bottom edge (~15 px margin) | — | This is the "female, phone partially not visible" from the feedback. Any crop from the bottom or left hides the phone. **Always show the full frame (`object-fit: contain`), never `cover`.** |
| 3 | `technician-network-rack.webp` | ASAP3 | 800×450 | **Yes.** Full phone bottom-left on the desk | **Partial.** ASAP van visible through the window, logo legible but small | Best for voice/data cabling: real rack, patch cables, technician. Show uncropped so both the phone and the van stay in frame. |
| 4 | `service-van-fleet-logo.webp` | ASAP4 | 800×533 | — (technician holds a mobile) | **Yes, fully legible:** ASAP logo, "877-611-ASAP", "PhonesByASAP.com", "Keeping Your Telephones Ringing Since 2001", "Business Telephone Services" | **Best vehicle shot.** The logo sits in the centre third. Never crop the top 40 % or centre. Use for Emergency Service and the About CTA. |
| 5 | `phone-screen-sidecar-detail.webp` | ASAP5 (= original site's `asap-ip750x350.png`) | 765×340 | **No.** Close-up of screen and sidecar only; handset and keypad are cut | — | Detail shot only, **never the "full phone" image of a section**. Good for Hosted PBX features and the voice processing screen UI. Has the ASAP logo baked in top-right. |
| 6 | `technician-customer-phone.webp` | ASAP6 | 800×450 | **Yes, complete**, centred | **Yes,** in the background through the window (logo and number legible) | A strong trust image: technician shows a client the phone. Good for the company intro and the service philosophy. |
| 7 | `team-asap-award.webp` | ASAP7 (= original site's `oldcrew.jpg`) | 800×600 | — | — | **A real photo:** Team ASAP staff with a "TEAM" plaque. Use for Team ASAP (About) and the customer showcase if no separate customer photo exists. |
| 8 | `headquarters-truck-logo.webp` | ASAP8 (= original site's `banner-truck.jpg`) | 700×324 | — | **Yes:** ASAP logo on the truck's rear window and door, ASAP sign on the building and window, address 44861 visible | **A real photo of the Lancaster HQ.** It's the most authentic image, so it suits the About hero. It's wide and short, so show it uncropped. |
| 9 | `office-wall-logo.webp` | ASAP9 | 800×452 | **No telephone** | — (big ASAP wall logo) | Brand/office atmosphere. Use only where the section's subject isn't the phone (company history, solutions). |
| — | `asap-logo.webp` | logo.webp | 150×101 | — | — | Official logo. **Too small for retina headers.** Fine at ≤ 64 px tall. Ask for an SVG or a 600 px+ PNG. |

### Feedback compliance summary
- **Complete telephone:** #1, #2 (uncropped only), #3, #6
- **Vehicle with clear ASAP logo:** #4 (best), #8, plus #3 and #6 in the background
- **Must never be cropped:** #1, #2, #4, #8. In fact **no photo** will use `background-image` + `cover`. Every photo is an `<img>` shown at its native aspect ratio.

## 3. Image-to-section mapping

Every page leads with either a complete phone or a logo-visible vehicle.

### Homepage (`index.html`)
| § | Section | Image | Why |
|---|---|---|---|
| 1 | Hero | **#1 phone-hero-desk** | Complete phone with ASAP on screen. Text sits in its own column |
| 2 | Company introduction | #6 technician-customer-phone | Full phone, real service moment, van in the background |
| 3 | Business communication solutions | #9 office-wall-logo | Brand atmosphere, no phone needed |
| 4 | Voice & data cabling | #3 technician-network-rack | Real rack, cabling and phone |
| 5 | Business phone services (24 h, systems, data) | No photo. Numbered service list beside #5 detail | Keeps rhythm; avoids repeating images |
| 6 | Specialized solutions (Audit, Call Recording) | #2 receptionist-headset-phone, **uncropped** | Call handling fits; the full phone stays visible |
| 7 | Work from home | #5 phone-screen-sidecar-detail | Phone features close-up (secondary image) |
| 8 | Why VoIP | Typographic: 3 benefit columns, no image | |
| 9 | Emergency service | **#4 service-van-fleet-logo** | Full van branding and phone number |
| 10 | Voice processing | Typographic plus IVR / voicemail / speech-to-text list | |
| 11 | Video resources | Existing VoIP videos (need the URLs from new.html) | |
| 12 | Customer showcase | #7 team-asap-award (or the customer image in new.html) | |
| 13 | Final CTA / footer | #8 headquarters-truck-logo | Real HQ and branded truck |

### About Us (`about.html`)
| Section | Image |
|---|---|
| Hero | **#8 headquarters-truck-logo** (real HQ, branded truck) |
| Company profile & history (2001, Antelope Valley) | #9 office-wall-logo |
| Philosophy ("best friend", 1 % / 99 %) | #6 technician-customer-phone |
| Mission ("We Listen. We Respond. We deliver ASAP.") | Typographic statement band |
| Certified technicians (24/7/365) | #3 technician-network-rack |
| Team ASAP | #7 team-asap-award |
| Support / customer relationships | #2 receptionist-headset-phone |
| Contact CTA | **#4 service-van-fleet-logo** |

### Services (`services.html`) — provisional until I have the real service copy
| Section | Image |
|---|---|
| Hero | **#1 phone-hero-desk** |
| Hosted PBX | #5 phone-screen-sidecar-detail |
| Phone system installation | #6 technician-customer-phone |
| New office / relocation | #4 service-van-fleet-logo |
| Voice & data cabling | #3 technician-network-rack |
| Enterprise WiFi | #9 office-wall-logo |
| Special custom applications | #2 receptionist-headset-phone |
| Why choose ASAP | #8 headquarters-truck-logo |

With only nine photos, the Services page will reuse homepage images. The original site has more product photos (`Nec-sl2100rl.jpg`, `pbxsystems2.png`, `ServiceVan2.png`, `bannervans.jpg`, `before-after.jpg`, `banner1-3.jpg`). **If you can supply those, Services gets its own imagery.**

## 4. Navigation and contact data (from the original site)

- Home → `index.html`
- About Us → `https://phonesbyasap.com/aboutUs.html`
- Service ▾ → `https://phonesbyasap.com/service.html`
  - Promotions On Hold → `https://www.phonesbyasap.com/2poh.html#one`
  - Fax to Email → `http://asapreminder.com/faxit-asap-sign-up/`
  - Setting System Clock → `https://phonesbyasap.com/setclock.html`
  - Headsets and More → `https://www.phonesbyasap.com/headsets/headsets.html`
- Products → `https://phonesbyasap.com/products.html` (submenu items NEC Phone Systems, Grandstream, Headsets are `#` placeholders)
- VoIP → `https://phonesbyasap.com/voip.html` (Home Office, Small Office, Hosted PBX are `#` placeholders)
- Support ▾ → `https://phonesbyasap.com/support.html`
  - Support Documents (`#`), Support Videos → `https://phonesbyasap.com/train-videos.html`, Support TEAM ASAP (`#`)
- Login → `https://asap.freshbooks.com/` (the brief asks for a Login dropdown; I need its other items from new.html)
- Contact → `https://phonesbyasap.com/contact.html`
- Request Service (brief); the original links `https://tinyurl.com/ASAPestimate`, labelled "Tiny URL Test"

**Contact:** 44861 10th Street West, Lancaster, CA 93534 · 661.264.9880 · 877.611.ASAP · Service@PhonesByASAP.com / info@PhonesByASAP.com · 24/7 Emergency Service · Se Habla Español
**Sister services:** ASAP Appointment Reminder (asapreminder.com) · Fax It ASAP · Return It ASAP (returnitasap.com)
**Tagline:** "Providing Business Telephone Solutions Since 2001" · Van: "Keeping Your Telephones Ringing Since 2001"

## 5. About Us — original content (to preserve)

**ASAP Company Profile.** After many years in the Telecommunications industry, the founders of ASAP Business Communications chose Antelope Valley for its Corporate headquarters in 2001. Although our customer base extends throughout California and beyond, it is our dedication to all our customers that make us unique. With an emphasis on customer service, our technical staff is well trained in all aspects of business telephone systems and our administration staff utilizes the latest accounting software, allowing our customers 24/7 web access to manage their accounts. Our premise is simple, treat each customer as if he/she were our best friend and always leave the customer with the feeling that he/she received more than what was expected. Our goal is to provide a level of service that is unsurpassed. We challenge our customers to give us 1 percent of their confidence and we'll happily earn the other 99 percent.

ASAP Business Communications provides a one stop vendor solution for all of your office voice, internet and telecom needs thanks to the convergence of voice and data. We are in the business of providing Traditional Telephones and Hosted PBX as well as voice and data network carrier solutions over a reliable network that is proven to be the best solution to connect your business to the rest of the world. Although we can save you money because rates have dropped, it is not just about saving money anymore. The days of having multiple telecom vendors and several phone bills are over.

We have meticulously put together a support team of professionals who stand ready to assist you and lend encouragement and expertise to insure you receive the best service available. An atmosphere of whatever the customer wants, we will make it happen is how we approach each relationship with our customers, whether long time customers or, new to the ASAP family.

**ASAP Mission.** To continue to provide outstanding services and products to our customers, helping their businesses to grow and prosper by exceeding their expectations and make new friends in the process. We pride ourselves in the ability to understand and respond to the needs of our customers. We Listen. We Respond. We deliver ASAP. Our support team members are rated at the top of their fields and feel as we do. Our staff is our greatest asset.

**Certified Technicians.** Our factory and/or in house certified technical staff offer 24/7/365 live support for all our customers. We guarantee to get the job done right the first time and will work hard to make sure you are completely satisfied. When a technician is dispatched to your place of business, he/she is charged with taking personal responsibility of first providing the requested service and then sharing the technical details of the experience with their fellow technicians and staff. As a locally owned and operated company, we know the value of our neighbors, and treat our customers like we'd want to be treated during sales, installation, training, and long-term support. See what a difference we can make by calling us ASAP.

**Team ASAP.** A strong strategy-supportive culture, which will nurture and motivate employees, has been chosen by ASAP Business Communications to provide structure, standards, and a value system in which to operate. Employee identification with the company's vision is impressed upon each employee, as well as performance targets and the overall strategy of the company. The culture is one that encourages each employee to take on the vision of the company; that supports them to do their jobs competently and enthusiastically; and that upholds the execution of the company's strategy.

## 6. Still needed before Stage 3

1. **`new.html`**, the latest homepage HTML. It's the content source for all 13 homepage sections and the VoIP video embeds. **Please drop it in `C:\ASAP\`.**
2. **The Services page content.** In your browser, open phonesbyasap.com/service.html and use Save Page As → "Webpage, HTML only" into `C:\ASAP\`, or paste the text.
3. Optional: screenshots of the current design, a larger logo (SVG/PNG), and any extra original photos from the old site.
