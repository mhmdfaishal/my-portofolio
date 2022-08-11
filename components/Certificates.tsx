import type { NextPage } from "next";
import { ICertificates } from "../typings";

interface ICertificatesProps {
    certificates: ICertificates[];
}

export const Certificates: NextPage<ICertificatesProps> = ({ certificates }) => {


  return (
    <>
        <h1 className="certificates_heading">Courses &amp; Certificates</h1>
        <div className="container">
            {certificates?.map(certificate => (
                <div className="certificate" key={certificate?.uniqueId} onClick={() => window.open(certificate?.url, "_blank")}>
                    <img src={certificate?.image?.url} alt="" />
                    <h1>{certificate?.name}</h1>
                </div>
            ))}
        </div>
    </>
  );
};
