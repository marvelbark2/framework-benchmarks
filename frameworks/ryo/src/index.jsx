import {
    AppHeader,
    HelloWorld,
} from '../components/generated-components/index.js';

export default function Home() {
    return (
        <div>
            <AppHeader framework="ryo" path="/" />
            <HelloWorld />
        </div>
    );
}