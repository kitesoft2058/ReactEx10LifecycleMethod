import {Component} from 'react'

export default class Home extends Component{

    //컴포넌트 클래스가 객체가되어 화면에 보여지고 종료될때 까지 상황에 따라 자동으로 실행되는 콜백메소드 - 라이프사이클 메소드
    //모든 라이프사이클을 사용하는 경우는 많지 않기에 주요한 라이프사이클 메소드만 소개. [안드로이드의 Activity 라이프사이클 중 6개정도만 익히듯이..]
    //교재(리액트를 다루는 기술)에는 더 많이 소개되어 있음. 참고.    

    //1. 생성자 메소드 : Home 클래스가 객체로 생성될 때 발동
    constructor(){
        super() // JS의 자식생성자는 반드시 첫줄에 명시적으로 부모생성자를 호출해야만 함.

        console.log('Home component constructor.....')
    }

    //(추가실습)에서 추가..
    state= {
        message: 'Hello world'
    }

    //2. 화면에 보여질 그림(JSX요소)을 그려내기 위해 실행되는 메소드
    render(){
        console.log('Home component render ~~~~')
        return (
            <>
                <h2>Home Component</h2>

                {/* (추가실습) compoentDidUpdate()메소드 호출 테스트를 위해 */}
                <p> 메세지 : {this.state.message} </p>
                <button onClick={ ()=>{this.setState({message:'nice to meet you'})} }>메세지 변경</button>
            </>
        )
    }

    //3. 화면에 완전히 보여진 후 발동하는 메소드 - android의 onResume()같은 역할 
    componentDidMount(){
        console.log('Home component Did Mount!')
        //일반적으로 이 메소드 안에서 서버데이터 불러오기 등의 작업을 실행함.
    }

    //4. state나 props의 값변경으로 같은 액션에 의해 화면에 갱신되면 발동하는 메소드
    componentDidUpdate(){
        console.log('Home component Did Update >>>>> ')
        //일반적으로 이 메소드안에서 컴포넌트 상태변경에 대한 사용자 알림등의 작업을 실행함
    }

    //5. 컴포넌트가 더 이상 화면에 보여지지 않기 시작할때 발동하는 메소드 .. 현재는 페이지 전환을 학습하지 않아 이 메소드의 발동여부 체크는 확인하기 어려움. 추후 필요할때 확인..
    componentWillUnmount(){
        console.log('Home component Will Unmount !!!!!! ')
        //일반적으로 이 메소드안에서 컴포넌트에서 사용한 미디어나 스트림 같은 리소스의 closing작업을 수행함.
    }


    // index.js 가 <React.StringMode> 라면 컴포넌트가 한번 만들어지고 부순 후 다시 만듫.

    // (실습2)
    // [함수형 컴포넌트는 Component클래스를 상속하지 않았기에 라이프사이클 메소드가 없음.]
    // [다만, 가장 많이 사용하는 componentDidMount()의 역할을 대신하는 HOOK 기술이 존재함.]
    // [Second.js 파일을 만들고 함수형 컴포넌트를 만들고 index.js에 등록하여 그려주기]


}