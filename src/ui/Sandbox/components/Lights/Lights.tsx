import React from 'react';
import SpotLight from '../SpotLight/Spotlight';
import PointLight from '../PointLight/PointLight';
import DirectionalLight from '../DirectionalLight/DirectionalLight';
import Spotlight from '../SpotLight/Spotlight';

// @ts-ignore
const Lights = ({ night, performance }) => {

    return (
        <>
          <ambientLight intensity={ 0.9 }/>
            {/* moon/sunlight */}
            <DirectionalLight
                position={[29, 50, -60]}
                target={[-5, -3, 50]}
                intensity={5}
                color={"black"}
                shadowCamBot={-30}
                shadowCamTop={30}
                shadowCamL={53}
                shadowCamR={-53}
            />
            <PointLight
                intensity={ 0.1 }
                position={[0, 19, 13]}
            />
                <>
                    {/* liam portrait light */}
                    <SpotLight
                        position={[12, 19.5, 0]}
                        target={[21, 4, 0]}
                        intensity={0.5}
                        penumbra={0.5}
                        sNormalBias={0.05}
                        sBias={0}
                        angle={Math.PI/10}
                        decay={2}
                    />

                    {/* wedding light  */}
                    <SpotLight
                        position={[12, 19.5, 25]}
                        target={[21, 4, 25]}
                        intensity={0.5}
                        penumbra={0.5}
                        sNormalBias={0.05}
                        sBias={0}
                        angle={Math.PI/10}
                        decay={2}
                    />

                    {/* wilson light */}
                    <SpotLight
                        position={[-12, 19.5, 0]}
                        target={[-21, 4, 0]}
                        intensity={0.5}
                        penumbra={0.5}
                        sNormalBias={0.05}
                        sBias={0}
                        angle={Math.PI/10}
                        decay={2}
                    />

                    {/* old man light */}
                    <SpotLight
                        position={[-12, 19.5, 25]}
                        target={[-21, 4, 25]}
                        intensity={1.5}
                        penumbra={0.5}
                        sNormalBias={0.05}
                        sBias={0}
                        angle={Math.PI/10}
                        decay={2}
                    />

                    {/* creation of adam light */}
                    <SpotLight
                        position={[28, 18, 12]}
                        target={[34.5, 13, 12]}
                        intensity={1}
                        penumbra={0.5}
                        sNormalBias={0}
                        sBias={-0.001}
                        angle={Math.PI/4}
                        decay={2}
                    />

                    {/* girl portrait light */}
                    <SpotLight
                        position={[-28, 18, 12]}
                        target={[-34.5, 13, 12]}
                        intensity={1}
                        penumbra={0.5}
                        sNormalBias={0}
                        sBias={-0.001}
                        angle={Math.PI/4}
                        decay={2}
                    />
                </>

        </>
    )

}

export default Lights;
