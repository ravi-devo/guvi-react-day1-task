import './App.css';
import Container from "./Component/Body/body";

const data = [
  {
    subscription: "Free",
    value: "0",
    benefits: [
      "Single user", "50GB usage", "Unlimited public storage", "Community access"
    ],
    unCovered: [
      "Unlimited private projects", "Dedicated phone support", "Free subdomain", "Monthly status report"
    ]
  },
  {
    subscription: "Plus",
    value: "9",
    benefits: [
      "5 user", "50GB usage", "Unlimited public storage", "Community access", "Unlimited private projects", "Dedicated phone support", "Free subdomain"
    ],
    unCovered: [
      "Monthly status report"
    ]
  },
  {
    subscription: "Pro",
    value: "49",
    benefits: [
      "Unlimited user", "50GB usage", "Unlimited public storage", "Community access", "Unlimited private projects", "Dedicated phone support", "Free subdomain", "Monthly status report"
    ],
    unCovered: [
      
    ]
  }

];

function App() {
  return (
    <div className="App">
      <Container data = {data}/>
    </div>
  );
}

export default App;
