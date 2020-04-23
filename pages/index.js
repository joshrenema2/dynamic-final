import Link from "next/link";
import Router from "next/router";
import "./index.css"

const Index= () => <div className="main_app">

<Link href="/1-home">Home</Link>

<p/>

<Link href="/2-learn">Learn</Link>

<p/>

<Link href="/3-waste-options">Waste Options</Link>

<p/>

<Link href="/4-sub-options">Sub Options</Link>

<p/>

<Link href="/5-how">How</Link>

<p/>

<Link href="/6-why">Why</Link>

</div>

export default Index;