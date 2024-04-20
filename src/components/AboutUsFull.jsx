import "../assets/css/aboutusfull.css"

export default function AboutUsFull() {
    // reset background color for commerce array main page
    document.documentElement.style.setProperty('--col1', 'rgba(50,0,20,0.8');
    document.documentElement.style.setProperty('--col2', 'rgba(0,20,50,0.8');
    document.documentElement.style.setProperty('--col3', 'rgba(20,50,0,0.8');
    document.documentElement.style.transitionProperty = 'all';
    return (
        <div className="about-us-full">
            <h1 className="title">[Commerce] <span className="part-of-speech">n.</span></h1>
            <p className="syllables-phonetic-container"><span className="syllables">com·merce ar·ray</span><span className="phonetic">/'kämərs ə'rā/</span></p>
            <p className="definition">An array of stores.</p>
        </div>
    )
}