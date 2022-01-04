import {AuthProvider} from "./app/AuthProvider";
import Navigation from "./app/navigation/Navigation";

export default function App() {
    return (
        <AuthProvider>
            <Navigation/>
        </AuthProvider>
    );
}
