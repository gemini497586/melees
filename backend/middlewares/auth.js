module.exports = {
  //登入後才能看得分頁，都要先套用這個中間件
  loginCheckMiddleware: (req, res, next) => {
    if (!req.session.member) {
      return next({
        status: 401,
        message: "登入會員後，即可享受更多專屬功能",
        category: "auth",
        type: "login",
        code: "L0104",
      });
    } else {
      next();
    }
  },
};

// 中間件都是函式
// return module.exports


// 需要驗證登入的話
// 1. 先 require 這個檔案，改成對應的"路徑"
//    const { loginCheckMiddleware } = require('...../middlewares/auth')
// 2. 需要驗證的中間件加上 loginCheckMiddleware
//    Ex. router.get("/member/.....", loginCheckMiddleware, () => {.....})