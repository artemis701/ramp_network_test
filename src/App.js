import "./styles.css";
import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk'

const buyCrypto = () => {
  new RampInstantSDK({
    swapAsset: 'ETH',
    userAddress: '0xa4e7ca039fcedd7c7b5d20c774d8bbb98d313dee',
    hostAppName: 'Maker DAO',
    hostLogoUrl: 'https://cdn-images-1.medium.com/max/2600/1*nqtMwugX7TtpcS-5c3lRjw.png',
    hostApiKey: 'dw9fe8drpzmdfuks79ub5hvmqzuyjbme4kwkwkqf',
    // url: 'https://ri-widget-staging-ropsten.firebaseapp.com/'
  }).show();
}

export default function App() {
  return (
    <div className="App">
      <h2>Test rump</h2>
      <h3>
        <button onClick={buyCrypto}>Buy crypto</button>
      </h3>
    </div>
  );
}
