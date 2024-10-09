import React from 'react'

export default function Rone() {

    return (
        <>
            <div className="p-4">
                <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 ml-0 sm:ml-5">
                    <p>5.0</p>
                    <p>
                        <svg className="w-6 h-6 text-amber-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                    </p>
                    <p>overall rating</p>
                </div>

                <div className="space-y-8">
                    <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 p-4 sm:p-10">
                        <div>
                            <p>5 stars</p>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div
                                className="bg-amber-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                style={{ width: "100%" }}
                            >
                                100%
                            </div>
                        </div>
                        <div>
                            <p>100%</p>
                        </div>
                    </div>

                    <div className="flex  air  flex-col sm:flex-row items-center space-x-0 sm:space-x-4 p-4 sm:p-10">
                        <div>
                            <p>4 stars</p>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div
                                className="bg-amber-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                style={{ width: "0%" }}
                            >
                                0%
                            </div>
                        </div>
                        <div>
                            <p>0%</p>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}
