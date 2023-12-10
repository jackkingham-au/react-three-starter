import { useSpring, animated as a, config } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";

const Root = () => {

    const { y } = useSpring({
        from: {
            y: 0
        },
        to: {
            y: Math.PI
        },  
        loop: true,
        config: {
            ...config.wobbly,
            friction: 50
        }
    })

    return (
        <>
            <color attach="background" args={['slateblue']} />
            <OrbitControls />

            <ambientLight intensity={2} />

            <a.mesh rotation-y={y}>
                <meshStandardMaterial wireframe color={"springgreen"} />
                <boxGeometry args={[10, 10, 10]} />
            </a.mesh>
        </>
    )
}

export default Root;