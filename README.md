<div align=center>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="app/public/SCIST Logo/白字.svg">
  <source media="(prefers-color-scheme: light)" srcset="app/public/SCIST Logo/黑字.svg">
  <img alt="SCIST Logo" src="app/public/SCIST Logo/黑字.svg" width="250" style=margin-bottom:1rem />
</picture>

Official website of SCIST

</div>

---

- Next.js + Tailwind CSS + Shadcn

## 快速開始

### 1) 安裝依賴
```
npm install
```
### 2) 啟動開發環境

```
cd app
npm run dev
```

## 引用資料
- 主頁連結：<a href="https://github.com/scist-tw/scist.org/tree/main/app/public/data/hero">/app/public/data/hero</a>
- 課程內容：<a href="https://github.com/scist-tw/scist.org/tree/main/app/public/data/activities">/app/public/data/activities</a>
- 參與學校：<a href="https://github.com/scist-tw/scist.org/tree/main/app/public/data/organizations">/app/public/data/organizations</a>
- 合作夥伴：<a href="https://github.com/scist-tw/scist.org/tree/main/app/public/data/sponsors">/app/public/data/sponsors</a>
- 聯絡資訊：<a href="https://github.com/scist-tw/scist.org/tree/main/app/public/data/contact">/app/public/data/contact</a>

每個分類的資料夾都會有一個 `data.json`，有圖片的項目，圖片一律放在項目資料夾中，與 `data.json` 同層。

### 格式
#### 主頁連結
```json
[
  { "title": "<連結標題>", "url": "<連結網址>" }
]

```

#### 課程內容
```json
[
  {
    "title": "<課程標題>",
    "description": "<課程簡介>",
    "content": ["<內容>", "<內容>", "<內容>"],
    "goal": "<課程目標>",
    "image": "<課程圖片>"
  }
]
```

#### 參與學校
```json
[
  {
    "name": "<地區>",
    "clubs": [
      { "school": "<學校>", "image": "<社團logo>", "name": "<社團名稱>", "instagram": "<社團Instagram使用者名稱>" },
    ]
  }
]
```
備註：社團 Instagram 是使用者名稱，非 Instagram 個人檔案連結

#### 合作夥伴
```json
[
    {
      "title": "合作分類",
      "items": [
        {"name": "<單位名稱>", "image": "<單位logo>", "website": "<單位網站>"}
      ]
    }
  ]
```
備註：<單位網站> 可留空

#### 聯絡資訊
```json
[
  {
    "icon": "<圖標>",
    "label": "<標題>",
    "href": "<導向連結>",
    "ariaLabel": "<無障礙名稱>"
  }
]
```
備註：若圖示未顯示，請確認 `contact.jsx` 中是否正確匯入該圖示

<!-- https://hackmd.io/Zjm1UiDsTWmio1jO8dycCA?both -->
