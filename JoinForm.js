import React from 'react'

class JoinForm extends React.Component {
  state = {
    email: '',
    password: '',
  }
  
  render() {
    const {email, password} = this.state
    console.log('render')
    
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" placeholder="이메일" onChange={this.handleChangeEmail} value={email} />
        <input type="password" placeholder="비밀번호" onChange={this.handleChangePassword} value={password} />
        <button type="submit">가입하기</button>
        <button type="button" onClick={this.handleReset}>초기화</button>
      </form>
    );
  }

  handleChangeEmail = ({ target: { value } }) => {
    this.setState({ email: value })
  }
  
  handleChangePassword = ({ target: { value } }) => {
    this.setState({ password: value })
  }

  handleSubmit = () => {
    console.log(this.state.email, this.state.password)
  }

  handleReset = () => {
    this.setState({
      email: '',
      password: '',
    })
  }
}

export default JoinForm