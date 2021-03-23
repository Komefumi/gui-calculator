import { Text, View, Button, LineEdit, useEventHandler } from "@nodegui/react-nodegui";
import { QPushButtonSignals } from "@nodegui/nodegui";
import React from "react";
import open from "open";

export default function MainView() {
  const btnHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: () => open("https://react.nodegui.org").catch(console.log)
    },
    []
  );
  return (
    // <View style={containerStyle}>
    //   <Text style={textStyle} wordWrap={true}>
    //     {`
    //       <ol>
    //         <li>
    //             Open chrome and navigate to chrome://inspect. You should see a target below with your app.
    //         </li>
    //         <br/>
    //           <li>
    //               Next click on  "Open dedicated DevTools for Node"
    //           </li>
    //           <br/>
    //         <li>
    //             On the dedicated devtools. Click on Source > Node > "Your node process"
    //         </li>
    //       </ol>
    //     `}
    //   </Text>
    //   <Button
    //     style={btnStyle}
    //     on={btnHandler}
    //     text={`Open React NodeGui docs`}
    //   ></Button>
    // </View>
    <View>
        <LineEdit></LineEdit>
        <Text>The main content is here</Text>
    </View>
  );
}
