import React from 'react';
import '../fonts/init.css';
import Buttons from '../components/Buttons';
import Stepper from '../components/Stepper';
import Close from '../components/Close';
import Minimize from '../components/Minimize';
import Donate from '../components/Donate';
import { color } from '../assets/baseStyles';
import { UserPic, MinimalUserPic } from '../components/Userpic';
import Group from '../components/Group';
import Ticket from '../components/Ticket';

const App = () => (
  <div>
    <Buttons />
    <Buttons bgColor={color.white} hoverColor={color.loved} />
    <Stepper />
    <Stepper isMinimal />
    <Close />
    <Minimize />
    <Donate />
    <MinimalUserPic userUrl="" />
    <UserPic userUrl="" />
    <UserPic userUrl="https://sun7-8.userapi.com/s/v1/if2/xDeOnphVIfS4G7fiWt_KnGUaXuiLUDP4b6AiPNCC9GvqOqlPhaKEK9MIW2BQPKlwECTIUH7xk-xSSRWXkN0Zgm2c.jpg?size=50x50&quality=96&crop=35,53,823,823&ava=1" />
    <Group errorDesc="Группа не найдена" selected />
    <Group status="createdL" groupName="SpotiASDASPOKDPOASKDPOAKSPOKD2VK" count="123456789" />
    <Ticket code="#1A33VV" status="created" preview="sdasiodjaiosdoiasjdioajsodijidoasdioasjiodajsdoasjdoisjodisajodajsodajsodajsiodjsiodjasoidajsoidjasiodjaiodjoфывлфзщывлзщфыфлызвзщылji" />
    <Ticket selected user="https://sun7-8.userapi.com/s/v1/if2/xDeOnphVIfS4G7fiWt_KnGUaXuiLUDP4b6AiPNCC9GvqOqlPhaKEK9MIW2BQPKlwECTIUH7xk-xSSRWXkN0Zgm2c.jpg?size=50x50&quality=96&crop=35,53,823,823&ava=1" />
  </div>
);

export default App;
