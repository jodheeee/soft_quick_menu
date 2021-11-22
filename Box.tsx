import React,{ useState, useEffect} from 'react';

function Box() {
    // 초기 값
    let top = 100;
    const obj = {
        height: '338px',
        width: '255px',
        backgroundColor: '#fdfdfd',
        borderLeft: '1px solid #eee',
        borderRight: '1px solid #eee',
        borderBottom: '1px solid #aaaaaa',
        paddingLeft: '20px',
        paddingRight: '20px',
        position: 'absolute',
        top: '100px',
        right: '0px',
        transition: 'top .5s ease'
    };
    const [style, setStyle] = useState(obj);
    
    // 이벤트 리스너
    const listener = () => {
        // 현재 스크롤 값 구하기
        let anchor = window.pageYOffset + window.innerHeight;
        // 이벤트 발동 시점
        let fot = window.innerHeight + 410;
        // 가변적 좌표 부여
        if (anchor > fot){
            top = anchor - 1230;
        }else{
            // 초기 셋팅
            top = 100;
        }
        setStyleTop({...style, top:top+"px"});
    };

    // 스크롤 이벤트 부여/해제 
    useEffect(() => {
        window.addEventListener('scroll', listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);

    return (
        <div className="main" style={{height:'1500px', position: 'relative'}}>
            <div className="moveBox" style={style}>
            </div>
        </div>
    );
}

export default Box;
