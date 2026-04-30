import React from 'react'
import { Bookmark } from 'lucide-react';


const Card = () => {
    return (
        <>
            <div className="card">
                <div>
                    <div className="top">
                        <img src="data:image/webp;base64,UklGRtAFAABXRUJQVlA4IMQFAAAQJQCdASqtALUAPp1MoEylpCMiIvFaELATiWVu4XEpxv+U4y0CLmMYD8kbwD+a/5z1Afxn+3fth7//ot/6XpVdQB6AHSyeVlqq/kbsi/z9e54c94O1Pu/HLfNg968z9IFNB8hP1V7Bn8s/tfW3/bH2DP16HeZmZmZmZmZmZmZmZku65ZqHTEpr7ru7ugz3Y1Qu6UwehfkpJDf940dMzMXVeHkkwrMW6pmWkjYWZmXoO4YKZ5F18r9610EZc86IIiIfNCrJr9WuhNgvMY4nzjcrSbb/QaFEV/tR7wp/fwoQkUtm0Z/d/m0zfwesnFa9K+zyVe4jYy/hbXd4EYDdh+tCVf0swGX1D5mZhPXrid6bfnfh4oW1rO7vk9kCIiIiIh/0CTtmmZmZjdK38IL3f8XgAAD+/s9AB3sX/MvqEIJ36zzYyWaccXmiCoInv6QMsqR1+nUM4uL3uK8YfbsysP9HH/FUMmwf23TPZcxVhnMOFEqw7Ttx30HqEqw5Pblk7Na968flB205pdGBdwftvgdx8vk73dfPKic/Q8xYW4EoeaMdHqc3S1L5lKHywvPvKvJyk7tNa1D/WfkXgNXU1308hqZ+N9jSY2HqreaF24+GAmme/MXLM/99q/msqTfRWc3Asa5bJZ14cF3PIqM8lwQDzmqHL3tsjiU2AHls1K1YCrIXVochTADlpEUAnmJtpRpfcHVQEmLePLMhMgek6qcvgSFzxFBAkxeqpry+ClCERB341wXnu1+R+8vU5O/UozxKn8Ur9JhEG6z9uvewYGs1nmWEA7uNp8+lCiN9b1SBHI018nxdMNvcpUYSLlU1e+fD+ccupbmY3ecbW4sNGeYAzQA6UH5BIabuvrxSAbI28/75Dob/UU/b//2Jew7tX3wsO/8n8/za1Wo74G6XfGgGLTA8vfV5Ej9T/FJvRO+1o+7Ho7FDS9pHk2s3GLDjmtfYq6qYygjapnE9yxjehqLZ6YUYCeiGed8Z8w+6naFbFJg/RQX5gn/SlAtfQCuQM3xdUzojrPaayjL+daMrEIrWNQj41Q+MG4vGbr/C+/nL8s5/qR/NoCX0aM9he5G8Fnv5UEp2t2VBI5DkqYj39OcxCx1ARDVsOOvAd8NngKOVu5U6zTZi+zJCq0VK6b0hJ0KVxl90ttEJwAg0lnGTu/3xtLqtZMy8PJmU5ZoeKwhlAIpmRRFtl5w+UGexbhROv+x92Q/i40eExNVa7Jqts47ZG73zxgv4Vass+fspLGD1GJ2vjS1fMxnh3E4jjFmYeKxST+YAl976Dqk/go8vC9x5tXMF2QGWAChUfQBozMb5wbIVSv5jE+rLG6gfKhlmvZPjrnUxO1tnW45qqxlc1lv980zhh2SiuG7zERr9fJ8bzo/HT6pF0tS/SBaZoTzGS7P3ti+Oo+/K3+RZeH27+c7hlKDdMyKGqlm7bcbVTBgDb+XgEbyI7G8AwgsrPtTFSJSNc3cIMJXKl13YHEQwLhqqMD4WRUHD/04R4nuSlTY+n7FvH/sSPR6Gn0YDAdtvqMHoPmyfNZhqkQJDlKQiBZI/1xX7nq3Xh5v3DGXZDdceBfHyT5YawDTCdpvR8ehMERS0v+BnvP3697eX5rRdmMQ8jBt9umRop2K2QAbmzViZ532EaJnFUvu5NSxKGzx5rFljz/zAezR21eRdbkZgWyVOomn/kRl6EOBvIHWSagjGU7YjBoHACDUD+tVlXo7vXYLRh5FEBwQHO6FqEuQQsoxcGzxPIxipzYgEVti0MEBLcTHiT4khwt95h739F4EZZFBZam5Y6qVRk9NVJhZdSbA889J8F5kBrdPYClaFXl5BRlnVQbksLsRpCd+LPwwxYjAT9IlKdCcA/trkksNkJ++zr7/S/+luAgfI8Mf+djItJUH2lBDjm+AANqHT0nw2H03RaQjSSMzfYtUIclTc/Gxa1I+EHkKYUeVUmYKjX/plgAAAAAA=" alt="" />
                        <button>Save <Bookmark size={15} /></button>
                    </div>

                    <div className="center">
                        <h3>Amazon <span>5 days ago</span></h3>
                        <h2>Sineor UI/UX Developer</h2>
                        <div className="tag">
                            <h4>Part Time</h4>
                            <h4>Senior Level</h4>
                        </div>
                    </div>
                </div>


                <div className="bottom">
                    <div>
                        <h3>$120/hr</h3>
                        <h3>Mumbai, India</h3>
                    </div>
                    <button>Apply Now</button>
                </div>
            </div>

        </>
    )
}

export default Card
