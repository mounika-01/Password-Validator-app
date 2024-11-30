// Write your code here
// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  CardContainer,
  MainHeading,
  Description,
  InputEl,
  SpanEl,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  let showErrMsg = true
  //   console.log(password.split('').length)
  const passwordLength = password.split('').length
  if (passwordLength >= 8) {
    showErrMsg = false
  }
  const errMsg = showErrMsg
    ? 'Your password must be at least 8 characters'
    : null

  const onChangePassword = event => setPassword(event.target.value)

  return (
    <MainContainer>
      <CardContainer>
        <MainHeading>Password Validator</MainHeading>
        <Description>Check how strong and secure is your password</Description>
        <InputEl type="password" onChange={onChangePassword} value={password} />
        {showErrMsg && <SpanEl>{errMsg}</SpanEl>}
      </CardContainer>
    </MainContainer>
  )
}

export default PasswordValidator
