# melees

## git-flow
實際有７個分支，依照功能性分成３類
- 實際有７個分支
    1. main
    2. develop
    3. member
    4. private
    5. feature
    6. market
    7. box
- 功能性分成３類
    - main —> 正式報告+展演用
    - develop —> 開發用（merge feature類型所完成的新功能）
    - feature 類別 —> 寫新開發功能與內容

        包含了：member, private, feature, market, box

## 命名規則
### frontend
- 檔案命名：
    - 資料夾命名：小寫底線 _ Ex. member_login
    - 自訂元件命名：大寫駝峰式 Ex. SubmitButton.js
    - 基本檔案命名：小寫駝峰式 Ex. saveProduct.js, saveRecipe.js
- code命名：
    - class：dash - 表示層級 Ex. products, product-item, product-item-title
    - id：小寫駝峰式
    - ref：小寫駝峰式
    - function：符合它的功能
- 共用的CSS命名：
    - 使用前綴詞 st-

### backend
- 圖片的命名：跟使用者上傳相同
- 檔案命名：
    - 資料夾命名：小寫底線 _ Ex. member_login
    - 基本檔案命名：小寫駝峰式 Ex. saveProduct.js, saveRecipe.js