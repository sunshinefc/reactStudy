import React from 'react';
import MUtil from 'util/mm.jsx';
import User from 'service/user-service.jsx';
const _mm=new MUtil();
const _user=new User();
import './index.scss'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            redirect:_mm.getUrlParam('redirect')||'/'
        }
    }
    componentWillMount(){
        document.title='登录 - HISTORY ADMIN'

    }
    //当用户名/密码 发生改变
    onInputChange(e){
        let inputValue=e.target.value,
            inputName=e.target.name;
        this.setState({
           [inputName]:inputValue
        })

    }
    onInputKeyup(e){
        if(e.keyCode===13){
            this.onSubmit();
        }
    }
    //当用户提交表单
    onSubmit(e){
        let loginInfo={
                username: this.state.username,
                password:this.state.password           
        },
        checkResult=_user.checkLoginInfo(loginInfo);
        console.log(checkResult)
        //验证通过
        if(checkResult.status){
            _user.login(loginInfo).then((res)=>{
                _mm.setStorage('userInfo',res);
                this.props.history.push(this.state.redirect)
            },(errMsg)=>{
                _mm.errorTips(errMsg);
            })
        }
        //验证不通过
        else{
            _mm.errorTips(checkResult.msg);
        }
        
    }

    render() {
        return(
                <div className="col-md-4 col-md-offset-4">
                    <div className="panel panel-default login-panel">
                        <div className="panel-heading">欢迎登录 - HISTORY管理系统</div>
                        <div className="panel-body">
                            <div>
                                <div className="form-group">

                                    <input type="text"
                                           name="username"
                                           className="form-control"
                                           placeholder="请输入用户名"
                                           onKeyUp={e=>this.onInputKeyup(e)}
                                           onChange={e=>this.onInputChange(e)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                           name="password"
                                           className="form-control"
                                           placeholder="请输入密码"
                                           onKeyUp={e=>this.onInputKeyup(e)}
                                           onChange={e=>this.onInputChange(e)}
                                    />
                                </div>
                                <button className="btn btn-lg btn-primary btn-block"
                                        onClick={e=>{this.onSubmit(e)}}
                                >
                                    登录
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Login;