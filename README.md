# Keja Scan Kenya (Vacant Kenya)

Live website: [keestra-ke.github.io/netrsa-gpt](https://keestra-ke.github.io/netrsa-gpt/)

Landlords and agents can **post vacancies** (photos, estate pin, features, WhatsApp/call). Listings expire after 30 days. Accounts live on this device until a backend is added. Roadmap: `ROADMAP.md`.

## Routes

- `/` live feed
- `/auth` tenant / landlord / agent (demo SMS code **1234**)
- `/post` publish a vacancy
- `/dashboard` views, inquiries, renew, mark taken
- `/listings` search · `/listings/:id` room
- `/map` Mtaa View

## Web

```bash
npm ci
npm run dev
```

Pushes to `main` deploy GitHub Pages.

## Android APK

```bash
npm ci
npm run build:apk
```

The debug APK is `releases/keja-scan-debug.apk` (also built at `android/app/build/outputs/apk/debug/app-debug.apk`).

**Phone:** enable **Install unknown apps**, then open the file.

**Android TV / Google TV / Fire TV:** sideload the same APK (USB, Downloads, or an installer like Send Files to TV). The app appears in the TV launcher (Leanback banner). Use the remote:

- **D-pad arrows** move between menus, listings, map pins, and buttons
- **OK / Center / Enter** opens the focused item
- **Back** returns to the previous screen
- **Page Up / Page Down** (if the remote has them) scroll the page

Photos on Post vacancy are easier from a phone; TV file pickers are limited.

Play Store listing (phone + TV) comes after a Google Play developer account.

Posted listings are stored in the app/browser. They are not yet a shared Nairobi database.
