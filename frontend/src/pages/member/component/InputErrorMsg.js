import '../../../style/global.css'
import '../../../style/member.css'
import 'animate.css'

function InputErrorMsg(props) {
  const { errorMsg } = props
  return (
    <>
      <p
        className={
          errorMsg
            ? 'font-400S member-form-errorMsg errorMsg-show animate__animated animate__headShake'
            : 'font-400S member-form-errorMsg'
        }
      >
        {errorMsg ? errorMsg : '預留錯誤訊息的位置'}
      </p>
    </>
  )
}
export default InputErrorMsg
