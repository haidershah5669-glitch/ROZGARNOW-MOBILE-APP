# RozgarNow - Connecting Hands, Building Futures

RozgarNow is an AI-powered, two-sided marketplace designed to connect skilled daily-wage workers with employers in Pakistan. This project provides a high-fidelity frontend MVP built with React Native and Expo, featuring complete flows for Workers, Employers, and Administrators.

## 🚀 Tech Stack
- **Framework**: React Native with Expo (SDK 50+)
- **Navigation**: Expo Router (File-based navigation)
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **State Management**: React Context API + Local Storage
- **Icons**: Lucide React Native & Material Symbols
- **Animations**: Reanimated 3 & CSS Shaders

## 📦 Project Structure
```text
/rozgarnow
├── app/                  # Expo Router navigation
│   ├── (auth)/           # Authentication (Login, Signup, OTP)
│   ├── (worker)/         # Worker experience (Dashboard, Jobs, Wallet)
│   ├── (employer)/       # Employer experience (Post Job, Applicants)
│   ├── (admin)/          # Administrative controls & Moderation
│   └── index.js          # App entry point (Splash & Onboarding)
├── assets/               # Brand assets (Logo, Splash, Icons)
├── components/           # Shared UI components (TopAppBar, BottomNav)
├── context/              # Global state (User, Jobs, Applications)
├── styles/               # Design system tokens (Tailwind config)
├── design.md             # Design system documentation
└── app.json              # Expo/Android configuration
```

## 🛠️ Installation & Setup
1. **Clone the project**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npx expo start
   ```

## 🧪 Demo Accounts
Access the platform using these pre-configured demo routes:
- **Worker**: Continue as Worker on Login Screen
- **Employer**: Continue as Employer on Login Screen
- **Admin**: Continue as Admin on Login Screen

## 📱 Android APK Build Instructions (Expo/EAS)
To build a standalone Android APK for testing:
1. **Login to EAS**:
   ```bash
   eas login
   ```
2. **Configure project**:
   ```bash
   eas build:configure
   ```
3. **Run APK build (Preview Profile)**:
   ```bash
   eas build --platform android --profile preview
   ```
*This will generate a direct download link for the APK.*

## 🚧 Current Limitations
- **Mock Data**: All job postings, applicants, and transactions are currently simulated locally.
- **Map View**: Job locations use a high-fidelity map placeholder.
- **Payments**: Wallet withdrawals are frontend simulations (no real banking integration).

## 🔮 Future Roadmap
- Integration with Google Maps API.
- Real-time backend with Node.js & PostgreSQL.
- JazzCash/EasyPaisa API integration for live payments.
- AI-driven job matching and verification.
