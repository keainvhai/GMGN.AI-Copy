# GMGN.AI UX Flow Documentation

---

## 1. 🧭 User Journey Map

| Step | Page             | User Action                                         | System Response                                          |
| ---- | ---------------- | --------------------------------------------------- | -------------------------------------------------------- |
| 1    | Trench Page      | Visit the homepage and browse newly created tokens  | Displays multiple token cards, search bar, and nav bar   |
| 2    | Login Modal      | Click "Login" and fill in email and password        | Modal appears; on success, user info shows in top right  |
| 3    | Wallet Overview  | Click “Holding” in the navbar                       | Shows current balance and transaction history            |
| 4    | CopyTrade Page   | Navigate to CopyTrade page and browse traders       | Displays PnL, addresses, transaction count, Copy buttons |
| 5    | Copy Modal       | Click “Copy” on a trader → enter amount and confirm | Modal pops up, user confirms options and submits         |
| 6    | Copied List View | Return to CopyTrade page to see copied traders      | “Copied Traders” list updates with copied entries        |

---

## 2. 🖼️ Wireframes with Annotations

> Below are annotated screenshots of key UI pages and their interactions

### 📌 Trench Page (Token Feed)

- Search bar supports keyword filtering
- Token cards are for display only (non-clickable)
- Bottom of page shows Snipe, Holding, and PnL summary

🖼️ ![](https://github.com/keainvhai/GMGN.AI-Copy/blob/main/images/trench.png?raw=true)

---

### 📌 Login Modal

- Input email and password to log in
- Supports Telegram / Phantom / Extension wallet login
- Upon success, user profile appears on top right (e.g., “Demo User”)

🖼️ ![](https://github.com/keainvhai/GMGN.AI-Copy/blob/main/images/login.png?raw=true)

---

### 📌 Wallet Overview (Holding)

- Displays current SOL balance
- Lists transactions with type and timestamp (Send / Receive)

🖼️ ![](https://github.com/keainvhai/GMGN.AI-Copy/blob/main/images/wallet.png?raw=true)

---

### 📌 CopyTrade Page

- Shows trader list with PnL %, win rate, transaction count
- Each row includes a “Copy” button

🖼️ ![](https://github.com/keainvhai/GMGN.AI-Copy/blob/main/images/copyPage.png?raw=true)

---

### 📌 Copy Modal

- Opens when user clicks “Copy” on a trader
- Input amount, choose sell method, and confirm the action

🖼️ ![](https://github.com/keainvhai/GMGN.AI-Copy/blob/main/images/copymodal.png?raw=true)

---

### 📌 Copied Traders Section

- Appears at the bottom of CopyTrade page
- Lists addresses and amounts of copied traders

🖼️ ![](https://github.com/keainvhai/GMGN.AI-Copy/blob/main/images/copiedlist.png?raw=true)

---

## 3. 🔄 Interaction Flow Descriptions

### ✅ Login Flow

> The user visits GMGN.AI and clicks the "Login" button in the top-right. A modal pops up, allowing them to enter their email and password. On successful login, the user name appears in the top right corner.

---

### ✅ Wallet Access Flow

> After logging in, the user clicks “Holding” in the navbar to view their wallet. The system displays their current SOL balance and transaction history, including dates and directions (Send / Receive).

---

### ✅ Copy Trading Flow

> The user navigates to the “CopyTrade” page, selects a trader, and clicks the “Copy” button. A modal appears. They enter the amount, choose copy settings, and click “Confirm.” The copied trader will be listed in the “Copied Traders” section below.

---
