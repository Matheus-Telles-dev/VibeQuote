# 🟣 VibeQuote

![License](https://img.shields.io/badge/license-MIT-blueviolet)
![TypeScript](https://img.shields.io/badge/language-TypeScript-blue)
![Platform](https://img.shields.io/badge/platform-iOS%20%7C%20Android-lightgrey)

> **A minimalist mobile experience that generates personalized stoic wisdom based on your mood using AI.**

---

## 💡 About the Project

**VibeQuote** is a native mobile application designed to demonstrate the integration of **Generative AI** with a **Premium Mobile UI**.

Instead of generic random quotes, the app uses **Google Gemini 2.5 Flash** to analyze the user's specific emotional context and generate a tailored response JSON. The interface focuses on Micro-interactions, Haptic Feedback, and Layout Animations to provide a polished user experience.

---

## ✨ Key Features

- 🧠 **Contextual AI:** Uses Prompt Engineering to extract structured JSON data from Google Gemini.
- 🎨 **Premium UI/UX:** Dark mode aesthetic with Linear Gradients and Glassmorphism elements.
- ⚡ **Motion Design:** Staggered entry animations and physics-based button interactions using `react-native-reanimated`.
- 📳 **Haptic Feedback:** Tactile responses for success, error, and interaction events using `expo-haptics`.
- 🏗 **Clean Architecture:** Strict separation of concerns (Services, Components, Theme, Types).

---

## 🛠 Tech Stack

| Area           | Technologies                            |
| :------------- | :-------------------------------------- |
| **Core**       | React Native, Expo (SDK 52), TypeScript |
| **AI**         | Google Gemini API (Generative AI SDK)   |
| **Animations** | React Native Reanimated 4               |
| **Styling**    | StyleSheet, Expo Linear Gradient        |
| **UX**         | Expo Haptics, Keyboard Avoidance        |

---

## 🚀 How to Run

1. **Clone the repository**

   ```bash
   git clone https://github.com/Matheus-Telles-dev/vibequote.git
   cd vibequote
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup Environment Variables**

   Create a `.env` file in the root directory and add your Google Gemini API Key:

   ```bash
   EXPO_PUBLIC_GEMINI_API_KEY=your_api_key_here
   ```

   _(You can get a free key at [Google AI Studio](https://aistudio.google.com/))_

4. **Run the App**
   ```bash
   npx expo start --clear
   ```
