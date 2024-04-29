import React, { FC } from 'react';
import { InlineWidget } from "react-calendly";

function InTouch () {
   const ColoredLine = ({ color, wid }) => (
      <hr
          style={{
              color: color,
              backgroundColor: color,
              height: 2,
              width: wid
          }}
      />
  );

   return (
      <div>
         <h1>GET IN TOUCH</h1>
         <h4>Have a project for me? Think I'd be a good fit for your team? 
         I'd love to hear from you, give me a shout by email, via LinkedIn or 
         call me on my cellphone.</h4>
         <h1>Schedule a meeting with me</h1>
         <div>
            <InlineWidget
            styles={{
               height: '400px',
               width: '400px',
               marginLeft: '39.5%'
             }}
             url="https://calendly.com/kbhengura?background_color=ffffff&text_color=0c0c0c" />
         </div>
         <br></br><ColoredLine color="purple" wid="80%"/>
         <h4>Copyright © 2024 Kuljeet Singh Bhengura. All rights reserved.</h4>
         Developed by Kuljeet with "❤️"<br></br><br></br><br></br><br></br>
      </div>
   )
}

export default InTouch;