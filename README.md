# Demo Booking Website

A lightweight, responsive site designed to showcase AI-driven after‑hours scheduling for service businesses.

## Files

| Path | Purpose |
|------|---------|
| `index.html` | Landing page with CTA |
| `services.html` | List of sample services |
| `booking.html` | Interactive booking form (sends POST to webhook) |
| `contact.html` | Basic contact page |
| `css/styles.css` | Custom styles |
| `js/config.js` | **Update `WEBHOOK_URL`** with your endpoint |
| `js/main.js` | Form logic & fetch call |

## How to use

1. **Update branding**  
   Replace `{{BUSINESS_NAME}}` across HTML files with your company name.

2. **Add webhook**  
   Put your HighLevel/automation endpoint in `js/config.js`.

3. **Upload to hosting**  
   *Option A:* Drag the folder into your cPanel / public_html.  
   *Option B:* Push to GitHub and deploy via Netlify or Vercel.

4. **HTTPS only**  
   If your webhook requires HTTPS (recommended), be sure your domain has an SSL certificate.

5. **Test**  
   Open `/booking.html`, submit the form, check your endpoint logs.

## Customizing further

- Swap Bootstrap theme colors by editing `css/styles.css` or using Bootswatch.
- Embed a live HighLevel calendar/widget in `booking.html` if you prefer.
- Add Google Analytics, meta tags, etc.

Enjoy!
