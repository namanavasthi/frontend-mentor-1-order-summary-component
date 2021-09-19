import { Card } from "./Card";
import { Content } from "./Content";
import { Music } from "./Music";
import background from "./images/pattern-background-mobile.svg";
import hero from "./images/illustration-hero.svg";

function App() {
  return (
    <div
      className="flex justify-center bg-primary-pale py-10 px-5 bg-background"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Card>
        <img src={hero} alt="Illustrative hero"></img>
        <Content>
          <p className="text-2xl">Order Summary</p>
          <p className="text-neutral-desaurated pt-5 text-base">
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
          </p>
          <Music />
          <button className="bg-primary-bright text-white rounded-xl p-3 mt-5 text-base shadow-button">
            Proceed to Payment
          </button>
          <button className="text-neutral-desaurated p-3 mt-3 text-base">Cancel Order</button>
        </Content>
      </Card>
    </div>
  );
}

export default App;
