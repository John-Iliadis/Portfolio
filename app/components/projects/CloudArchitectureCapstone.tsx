export default function CloudArchitectureCapstone()
{
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Cloud Architectures Capstone</h1>

            <hr className={"mb-1 border-gray-400 border-t-1"}/>
            <p className={"mt-2"}>A high-distinction capstone project involving the design and architecture of a serverless AWS cloud solution.</p>
            
            <h2 className="text-2xl font-bold mb-2 mt-4">Details</h2>
            <hr className={"mb-4 border-gray-400 border-t-1"}/>

            <ul className="list-disc list-outside pl-5">
                <li>Designed a serverless, highly available, multi-region AWS cloud solution for a multi-media platform.</li>
                <li>Built a decoupled, event-driven pipeline using SNS, SQS, and Lambda to automate media processing and storing.</li>
                <li>Delivered high performance through DynamoDB with DAX caching, CloudFront CDN, and Route 53 latency-based routing.</li>
                <li>Ensured reliability via load balancing across 4 AZs, multi-region deployment, and DynamoDB&#39;s PITR and backup.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-2 mt-4">Architecture</h2>
            <hr className={"mb-3 border-gray-400 border-t-1"}/>

            <img src="/CloudArchitectureDiagram.png"/>
        </div>
    );
}
