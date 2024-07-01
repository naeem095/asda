
import Link from "next/link"

export default function TopHeader() {
    return (
        <div className="bgc-thm d-flex py-2">
            <div className="container-lg">
                <div className="row g-2">
                    <div className="col-sm">
                        <div className="text-white">
                            Get access to this Month’s free products. Limited offer!
                        </div>
                    </div>
                    <div className="col-sm-auto">
                        <Link href="/" className="bg-white fw500 fz13 px-3 py-1 rounded-2 d-flex lh-sm">
                            Download Free Products
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-arrow-right ms-1"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}