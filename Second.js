import {useEffect, useState} from 'react'

const Second= ()=>{

    // 1. 생성자 함수 constructor()가 있을리가 없음. 이미 이 영역이 함수니까..
    // 그냥 이 함수형 컴포넌트의 시작 지점이 이미 생성자메소드의 영역이라고 보면 됨
    console.log('Second 시작!')

    // 2. componentDidMount()와 같은 역할의 HOOK useEffect()함수 -- ()파라미터에 함수를 전달하면 그 함수가 화면이 그려지고 난 후 자동 발동함
    // useEffect( function(){
    //     console.log('Second useEffect()!!')
    // })

    //(실습2)에서 사용할 state용 변수
    const [ nickname, setNickname ] = useState('별명')

    // (실습3) update()할때는 말고 오직. DidMount()할때만 useEffect()가 발동되도록 하고 싶다면. - 서버데이터의 중복 로딩을 방지!
    // useEffect( ()=>{  //화살표 함수로 만들어보기
    //     console.log('Second useEffect()!!')

    // }, []) //두번째 파라미터로 빈 배열 지정 - 역할? 변경되었을 때 반응할 state변수를 지정하는 배열

    // (실습4) email 변경에만 반응하는 useEffect()
    const [email, setEmail] = useState('aaa@aaa.com')

    useEffect(()=>{
        console.log('Second useEffect()')      

    },[email])


    // 3. Second component가 보여줄 요소를 리턴
    return (
        <div>
            <h4>Second functional component</h4>

            {/* (실습2) componentDidUpdate() 역할 확인 - useEffect()가 이 역할도 함 */}
            <p>별명 : {nickname} </p>
            <button onClick={()=>setNickname('oops')}>별명 변경</button>
            {/* componentDidUpdate()와 다르게 실제 nickname값의 변화가 없으면 useEffect()는 더이상 발동하지 않음 */}

            {/* (실습3) useEffect()의 업데이트 반응 대상 지정 실습 */}
            <p>이메일 : {email}</p>
            <button onClick={()=>setEmail('bb@bb.com')}>change email</button>
        </div>
    )

}

export default Second