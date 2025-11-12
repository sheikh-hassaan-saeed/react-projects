import React from 'react'

const PieChart = () => {
    return (
        <>
            <div class="ml-2 max-w-sm mx-auto bg-gradient-to-br from-slate-50 to-slate-100 border mt-2 shadow-md rounded-[21px] p-6">
                <h2 class="text-xl font-bold text-gray-800 mb-6 text-center">DEPARTMENT PIE</h2>

                <div class="relative w-40 h-40 mx-auto mb-6">
                    <div class="w-40 h-40 rounded-full bg-[conic-gradient(#3b82f6_0_38%,#10b981_38%_58%,#facc15_58%_73%,#ef4444_73%_100%)]"></div>
                    <div class="absolute top-1/2 left-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full flex items-center justify-center text-gray-600 font-semibold">
                        Pie
                    </div>
                </div>


                <div class="flex justify-around text-gray-700 font-semibold text-sm">
                    <div class="flex flex-col items-center">
                        <span class="text-blue-500">●</span>
                        <span>Eng: 15</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <span class="text-green-500">●</span>
                        <span>Mkt: 8</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <span class="text-yellow-400">●</span>
                        <span>HR: 5</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <span class="text-red-500">●</span>
                        <span>Sales: 10</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PieChart