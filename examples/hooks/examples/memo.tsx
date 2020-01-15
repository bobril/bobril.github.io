import * as b from "bobril";

export function Memoized() {
    const [a] = b.useState(0);
    const [c] = b.useState(1);
    const value = b.useMemo(() => {
        //computational heavy function
        return a + c;
    }, [a, c]);
    return <div>{value}</div>
}