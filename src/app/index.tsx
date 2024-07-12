import {appStarted} from "@/shared/config/initialization";
import {Providers} from "./providers";

appStarted()

export function App() {
    return (
        <Providers/>
    )
}
