import './App.css';

function App() {

  const priceChart =[
    {
      type: "FREE",
      charge: "$0",
      charge1:"/month",
      line1:"✔️ Single User",
      line2:"✔️ 5GB Storage",
      line3:"✔️ Unlimited Public Projects",
      line4:"✔️ Community Access",
      line5:"❌ Unlimited Private Projects",
      line6:"❌ Dedicated Phone Support",
      line7:"❌ Free Subdomain",
      line8:"❌ Monthly Status Reports"
    },
    {
      type: "PLUS",
      charge: "$9",
      charge1:"/month",
      line1:"✔️ Single User",
      line2:"✔️ 5GB Storage",
      line3:"✔️ Unlimited Public Projects",
      line4:"✔️ Community Access",
      line5:"✔️ Unlimited Private Projects",
      line6:"✔️ Dedicated Phone Support",
      line7:"✔️ Free Subdomain",
      line8:"❌ Monthly Status Reports"
    },
    {
      type: "PRO",
      charge: "$49",
      charge1:"/month",
      line1:"✔️ Single User",
      line2:"✔️ 5GB Storage",
      line3:"✔️ Unlimited Public Projects",
      line4:"✔️ Community Access",
      line5:"✔️ Unlimited Private Projects",
      line6:"✔️ Dedicated Phone Support",
      line7:"✔️ Free Subdomain",
      line8:"✔️ Monthly Status Reports"
    }

  ]

  return (
    <div className="App">
      {priceChart.map((price)=>(
        <Msg type={price.type} 
            charge={price.charge} 
            charge1={price.charge1} 
            line1={price.line1}
            line2={price.line2}
            line3={price.line3}
            line4={price.line4}
            line5={price.line5}
            line6={price.line6}
            line7={price.line7}
            line8={price.line8}
            ></Msg>

      ))}
    </div>
  );
}

function Msg(props) {

  return (
  <div className="App-1">
    <div className="head">
  <p>{props.type}</p>
  <div className="price1">
  <p className="price">{props.charge}</p>
  <p>{props.charge1}</p>
  </div>
  </div>
  <div className="line"></div>
  <p>{props.line1}</p>
  <p>{props.line2}</p>
  <p>{props.line3}</p>
  <p>{props.line4}</p>
  <p>{props.line5}</p>
  <p>{props.line6}</p>
  <p>{props.line7}</p>
  <p>{props.line8}</p>
  
  <button>BUTTON</button>
  </div>
  );
}

export default App;
