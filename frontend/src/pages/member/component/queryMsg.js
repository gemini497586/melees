export default function queryMsg(category, code) {
  let msgList = {
    auth: {
      // A --> 驗證通過
      A0000: '驗證通過',
      A0001: '資料更新成功',
      A0002: '密碼更新成功',
      A0003: '註冊成功',
      A0004: '刪除成功',
      A0005: '第三方登入成功',
      // B --> accout
      B0101: '請填寫帳號',
      B0102: '不可註冊超過 100 字元的帳號',
      B0103: '此帳號已有人使用',
      // C --> password
      // C01xx --> password
      C0101: '請填寫密碼',
      C0102: '請填寫6-12位密碼',
      // C02xx --> repassword
      C0201: '請填寫密碼',
      C0202: '請填寫6-12位密碼',
      C0203: '密碼輸入不一致',
      C0204: '新舊密碼不能設定一樣',
      // C03xx --> oldpassword
      C0301: '請填寫密碼',
      C0302: '請填寫6-12位密碼',
      C0303: '密碼輸入錯誤',
      // D --> name
      D0101: '請填寫使用者姓名',
      D0102: '不可註冊超過 100 字元的姓名',
      // E --> nickname
      E0101: '不可註冊超過 100 字元的暱稱',
      // F --> gender
      F0101: '請勾選性別，讓 MELEEs 知道如何稱呼您',
      // G --> birthday
      G0101: '請填寫出生日期',
      G0102: '請填寫正確的日期格式',
      // H --> cellphone
      H0101: '請填寫手機號碼',
      H0102: '手機號碼格式有誤',
      // I --> email
      I0101: '請填寫 Email',
      I0102: '請填寫正確的 Email 格式',
      // J --> address
      J0101: '不可註冊超過 100 字元的地址',
      // K --> picture
      K0101: '不接受的檔案型態',
      K0102: '檔案太大拉，請重新上傳 < 2MB 的圖檔',
      // L --> login 登入時，確保資安，統一回覆帳號或密碼錯誤
      L0101: '帳號或密碼輸入錯誤',
      L0102: '請確實填寫帳號及密碼',
    },
    recipecomment: {
      // A --> 成功
      A0000: '驗證通過',
      A0004: '刪除成功',
      // B --> 發生錯誤
      // B01xx --> 編輯 時發生錯誤
      B0101: '評論與評分都沒有更新',
      B0102: '更新資料時，有錯誤發生，請聯繫 MEELEs 客服',
      // B02xx --> 刪除 時發生錯誤
      B0201: '請聯繫 MEELEs 客服，我們將儘速處理!',
    },
  }
  let resMsg = msgList[category][code]
  return resMsg
}
