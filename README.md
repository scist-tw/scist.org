# scist.org

|  內容  |  path |
| ------ | -------- |
| 主頁連結 | <a href="https://github.com/scist-tw/scist.org/tree/main/app/public/data/hero">/app/public/data/hero</a> |
| 課程內容 | <a href="https://github.com/scist-tw/scist.org/tree/main/app/public/data/activities">/app/public/data/activities</a> |
| 參與學校 | <a href="https://github.com/scist-tw/scist.org/tree/main/app/public/data/organizations">/app/public/data/organizations</a> |
| 合作夥伴 | <a href="https://github.com/scist-tw/scist.org/tree/main/app/public/data/sponsors">/app/public/data/sponsors</a> |
| 聯絡資訊 | <a href="https://github.com/scist-tw/scist.org/tree/main/app/public/data/contact">/app/public/data/contact</a> |

## 格式
### 主頁連結
https://github.com/scist-tw/scist.org/tree/main/app/public/data/hero/data.json
```json
[
  { "title": "連結標題", "url": "連結url" }
]

```

### 課程內容
https://github.com/scist-tw/scist.org/tree/main/app/public/data/activities/data.json
```json
[
  {
    "title": "",
    "description": "",
    "content": ["", "", ""],
    "goal": "",
    "image": ""
  }
]
```

### 參與學校
https://github.com/scist-tw/scist.org/tree/main/app/public/data/organizations/data.json
> 注意 社團 Instagram 是指使用者名稱，非 Instagram 個人檔案連結
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

### 合作夥伴
https://github.com/scist-tw/scist.org/tree/main/app/public/data/sponsors/data.json
> <單位網站> 可留空
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

### 聯絡資訊
https://github.com/scist-tw/scist.org/tree/main/app/public/data/contact/data.json
> 若圖示未顯示，請確認 `contact.jsx` 中是否正確匯入該圖示
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

<!-- https://hackmd.io/Zjm1UiDsTWmio1jO8dycCA?both -->
