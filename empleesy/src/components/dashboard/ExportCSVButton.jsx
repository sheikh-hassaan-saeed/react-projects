import React from "react";

const ExportCSVButton = ({ EmployeesData, filename = "employees.csv" }) => {


    const exportToCSV = () => {
        if (!EmployeesData || EmployeesData.length === 0) return;

        const csvRows = [];
        const headers = Object.keys(EmployeesData[0]);
        csvRows.push(headers.join(","));

        for (const row of EmployeesData) {
            const values = headers.map(header => `"${row[header]}"`);
            csvRows.push(values.join(","));
        }

        const csvData = csvRows.join("\n");
        const blob = new Blob([csvData], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
    };

    return <button
        onClick={exportToCSV}
        className="bg-[#1B263B] text-white border shadow-lg
       w-full p-6 rounded-[21px]
        hover:bg-blue-900
       transition-all duration-300 ease-in-out"
    >
        Export to CSV
    </button>
}

export default ExportCSVButton;
