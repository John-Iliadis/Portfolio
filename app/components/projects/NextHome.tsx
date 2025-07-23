export default function ProjectileMotionSimulator()
{
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Next Home</h1>

            <hr className={"mb-1 border-gray-400 border-t-1"}/>
            <ul className="list-disc list-outside pl-5 mt-4">
                <li>A high-distinction project involving the development of a real-estate app for forecasting housing market dynamics.</li>
                <li>Built a D3.js data visualization dashboard to present dynamic, interactive insights from the AI model&#39;s predictions.</li>
                <li>Cleaned and processed a 2-million-record real estate dataset using Pandas to improve accuracy and reduce bias.</li>
                <li>Used the Seaborn library to analyze the dataset and visualize feature relationships.</li>
                <li>Trained a price prediction model using various machine learning algorithms, achieving 80% accuracy.</li>
            </ul>

            <p className={"mt-1"}>GitHub Link: <a className={"text-blue-700 underline"} href="https://github.com/tranducanh2111/housing-market">https://github.com/tranducanh2111/housing-market</a></p>

            <h2 className="text-2xl font-bold mb-2 mt-4">Details</h2>
            <hr className={"mb-4 border-gray-400 border-t-1"}/>

            <ul className="list-disc list-outside pl-5">
                <li>React and Tailwind was used for the frontend.</li>
                <li>Fast API was used for the backend.</li>
                <li>D3.js was used for data visualizations.</li>
                <li>Pandas was used for data cleaning and processing.</li>
                <li>Scikit-learn was used for the creation of the prediction model.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-2 mt-4">Preview Video 1</h2>
            <hr className={"mb-3 border-gray-400 border-t-1"}/>
            <video src="/next_home/vid1.mp4" controls autoPlay={true} muted={true}></video>

            <h2 className="text-2xl font-bold mb-2 mt-4">Preview Video 2</h2>
            <hr className={"mb-3 border-gray-400 border-t-1"}/>
            <video src="/next_home/vid2.mp4" controls autoPlay={false} muted={true}></video>
        </div>
    );
}
