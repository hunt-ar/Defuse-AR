import { StyleSheet } from 'react-native';
import React from 'react';
//test
import {
  ViroARScene,
  ViroAmbientLight,
  Viro360Image,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject
} from 'react-viro';

export default class MainScene extends React.Component {
  render() {
    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" intensity={200} />
        <ViroPortalScene
          passable={true}
          dragType="FixedDistance"
          onDrag={() => {}}
        >
          <ViroPortal position={[0, 0, -1]} scale={[0.1, 0.1, 0.1]}>
            <Viro3DObject
              source={require('./PortalAssets/PortalShip/portal_ship.vrx')}
              resources={[
                require('./PortalAssets/PortalShip/portal_ship_diffuse.png'),
                require('./PortalAssets/PortalShip/portal_ship_normal.png'),
                require('./PortalAssets/PortalShip/portal_ship_specular.png')
              ]}
              type="VRX"
            />
          </ViroPortal>
          <Viro360Image source={require('./PortalAssets/360_island.jpg')} />
        </ViroPortalScene>
      </ViroARScene>
    );
  }
}

module.exports = MainScene;

//What ever Renders this component needs to have this wrapped in it
{
  /* <ViroARSceneNavigator
        {...this.state.sharedProps}
        initialScene={{ scene: InitialARScene }}
      /> */
}
