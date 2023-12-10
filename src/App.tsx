import { Canvas } from "@react-three/fiber";
import Root from "./components/Root";

const App = () => {

    return (
        <>
            <Canvas
                camera={{
                    position: [15,15,15]
                }}
            >
                <Root />
            </Canvas>
        </>
    )
}

export default App;