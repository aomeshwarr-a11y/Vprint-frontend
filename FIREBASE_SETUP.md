# Firebase Services Setup Guide

This project is connected to Firebase for **Authentication** and **Cloud Firestore** database services.

---

## 1. Firebase Console Configuration (Action Required)

### Step A: Enable Email/Password Authentication
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Select your project: **smart-printer-5561a**.
3. In the left-hand navigation pane, click **Build** > **Authentication**.
4. Click **Get Started** (if you have not initialized Auth for this project yet).
5. Open the **Sign-in method** tab.
6. Under **Sign-in providers**, click **Add new provider** and select **Email/Password**.
7. Toggle the provider to **Enabled** and click **Save** (keep "Email link" passwordless sign-in disabled).

### Step B: Enable Cloud Firestore Database
1. In the left-hand navigation pane of the Firebase Console, click **Build** > **Firestore Database**.
2. Click the **Create database** button.
3. Select a database location closest to your users, and click **Next**.
4. Select **Start in production mode** (recommended) and click **Create**.
5. Once the database is initialized, go to the **Rules** tab at the top and replace the existing rules with the following rules for basic user profile security:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
     }
   }
   ```
6. Click **Publish**.

---

## 2. Summary of Changes Made in the Project

The following modifications were made to connect your web app to Firebase Authentication and Cloud Firestore:

### Installed Package
- Installed `firebase` SDK via npm:
  ```json
  "dependencies": {
    "firebase": "^12.14.0"
  }
  ```

### New Files Created
- **`src/firebase.js`**: Initializes the Firebase app, and exports the Firebase Auth service (`auth`) and Firestore database service (`db`) using your configuration credentials.

### Files Modified
1. **`src/index.css`**: Added `.auth-error` style at the bottom to render red error messages cleanly.
2. **`src/auth/Signup.js`**:
   - Replaced mock registration logic with `createUserWithEmailAndPassword`.
   - Added user display name update using `updateProfile`.
   - **Firestore Integration**: Writes user profiles (containing name, email, phone, city, and createdAt timestamp) into the `users` collection in Cloud Firestore under their UID.
   - Added validation (required fields, password match checks, minimum password length).
   - Wired up UI loading states (`loading` indicator on button) and authentication/database error handling.
3. **`src/auth/Login.js`**:
   - Replaced mock authentication state logic with `signInWithEmailAndPassword`.
   - Added UI loading states and authentication error handling.
4. **`src/landigPage/Navbar.js`**:
   - Replaced local storage check on initial mount with a persistent observer: `onAuthStateChanged`.
   - Real-time updates to user interface items (`isLoggedIn`, `userName`) whenever login state changes.
   - Cleans up subscription dynamically on unmount.
   - Updated the mock logout logic to `signOut(auth)`.
5. **`src/landigPage/findlocations/Locations.js`**:
   - (Note) This component checks `localStorage.getItem("isLoggedIn")` to decide if the user can reserve a location. The Navbar synchronization handles updating local storage automatically in response to Firebase Auth, ensuring seamless operation without any changes needed in `Locations.js`.

---

## 3. Local Development

To run the application locally:
```bash
npm start
```
When you sign up or log in, you will be redirected to the home page, and your username/status will update in the Navbar. On signup, a new document is created under `users` collection in Firestore.
