function Assign() {
    /*
    (구조)분해 할당
    - 배열 분해 할당
    - 객체 분해 할당
    */
   
// 1. 배열 분해 할당
// - ES5  
    const points = [20,30,40];
    const x1 = points[0];
    const y1 = points[1];
    const z1 = points[2];

// - ES6
    const [x2, y2, z2] = points;
    // 이렇게 분해 할당 가능
    console.log(`x2 = : ${x2}, y2 = : ${y2}, z2 = : ${z2}`);

// 두번째 값 무시
    const [x3, ,z3] = points;
    console.log(`x3 = ${x3}, z3 = ${z3}`)

// 첫번째 값만 넣고 싶으면
    const [x4] = points;
    console.log(`x4 = ${x4}`);

// 배열보다 더 많은 변수가 있을 때
    const [x5, , , n5] = points;
    console.log(`x5 = ${x5}, n5 = ${n5}`);


// 2. 객체 분해 할당
    const car = {
        model : 'SM7',
        color : 'white',
        year : 2024,
    }

// - ES5 에서 분해 할당
    const model1 = car.model;
    const color1 = car.color;
    const year1 = car.year;

// - ES6 에서 분해 할당
    const {model, year, color} = car;
    console.log(`model = ${model}`);
    console.log(`color = ${color}`);
    console.log(`year = ${year}`);

// 위 방법으로 하면서 키값과 다른 변수에 분해할당 하려면
    const {model: m2, year: ye2, color:c2} = car;
    console.log(`m,odel = ${m2}`);
    console.log(`cvolor = ${c2}`);
    console.log(`y3ear = ${ye2}`);
 
    
    // 객체를 넘겨받으면서 화살표함수 사용
    const func1 = c => {
        console.log(`model : ${c.model}, year : ${c.year}, color : ${c.color}`)
    }
    func1(car);

    // 분해할당 하면서 매개변수로 넣어주는방법 (많이 사용함)
    const func2 = ({model, year}) => {
        console.log(`model : ${model}, year : ${year}`)
    }
    func2(car);
}
export default Assign;