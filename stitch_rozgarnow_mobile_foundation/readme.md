# RozgarNow — Mobile App (Expo / React Native)

RozgarNow is a two-sided daily-wage job marketplace app connecting **Workers**, **Employers**, and **Admins**, built with **Expo + Expo Router + NativeWind**, matching the original Stitch design system (colors, typography, spacing).

## What's included
- Full navigation: Auth/Onboarding → Role Selection → Worker / Employer / Admin dashboards
- 32 screens covering signup, login, OTP, job browsing, job details, applying, wallet, chat, job posting, applicant management, admin moderation, user management, verification
- Shared design system matching the Stitch export (primary green `#006b2c`, Work Sans typography)
- Mock data + in-memory state (no backend yet — see Limitations)

## 1. Install prerequisites (one-time)
- Install **Node.js LTS**: https://nodejs.org
- Create a free **Expo account**: https://expo.dev/signup

## 2. Install project dependencies
Open a terminal in this folder and run:
```bash
npm install
```

## 3. Run the app locally (to preview on your phone)
```bash
npx expo start
```
Scan the QR code with the **Expo Go** app (Android/iOS) to preview instantly — no build needed.

## 4. Build a real, installable APK
```bash
npm install -g eas-cli
eas login
eas build:configure
eas build --platform android --profile preview
```
This uploads your project to Expo's cloud build servers. After 5–15 minutes, you'll get a **download link** for a real `.apk` file you can install on any Android phone.

> The `eas build` command needs to be run on **your own computer** since it requires your Expo account login.

## Demo accounts
On the Login screen, use the **"Continue as Worker / Employer / Admin"** buttons for instant access to each role's experience — no real backend required yet.

## Current limitations
- All jobs, applicants, wallet transactions, and users are **mock/local data** (resets on app restart)
- No real payments, maps, or push notifications yet
- No real backend/database — everything runs in-memory via React Context

## Suggested next steps
- Connect a real backend (Firebase, Supabase, or Node.js + PostgreSQL)
- Integrate Google Maps for the job map view
- Add JazzCash/EasyPaisa APIs for real wallet payments
- Add push notifications for new jobs/messages
