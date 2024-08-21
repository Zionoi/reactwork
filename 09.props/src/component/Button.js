import './Button.css';
const Button = ({text,color,a,b,c})=>{
    return (                        // 뒤에 color은 넘겨받은 color임
        <button className="btn" style={{color:color, backgroundColor:a}}>{text}버어튼</button>

    )
}

export default Button;