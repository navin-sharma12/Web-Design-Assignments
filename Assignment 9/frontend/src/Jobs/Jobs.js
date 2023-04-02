import "../styles.css";
import Card from "../Components/Cards/Cards.js";
import React from 'react';
import Navbar from "../Components/Navbar/Navbar.js"

export default function Jobs() {
    const jobs = [
        {
            id: 1,
            title: "PR/Marketing Intern",
            description:"Fall 2023 (Hybrid)",
        },
        {
            id: 2,
            title: "PR/Marketing Intern",
            description: "Summer 2023 (Remote)",
        },
        {
            id: 3,
            title: "Analytics Intern",
            description: "Fall 2023 (Hybrid)",
        },
        {
            id: 4,
            title: "Analytics Intern",
            description: "Summer 2023 (Remote)",
        },
        {
            id: 5,
            title: "Software Intern",
            description: "Fall 2023 (Hybrid)",
        },
        {
            id: 6,
            title: "Software Intern",
            description: "Summer 2023 (Remote)",
        },
        {
            id: 7,
            title: "Hardware Intern",
            description: "Fall 2023 (Hybrid)",
        },
        {
            id: 8,
            title: "Hardware Intern",
            description: "Summer 2023 (Remote)",
        },
        {
            id: 9,
            title: "Sales Intern",
            description: "Fall 2023 (Hybrid)",
        },
        {
            id: 10,
            title: "Sales Intern",
            description: "Summer 2023 (Remote)",
        },
    ];
    return (
        <div>
            <Navbar/>
            <div class="column_right_about">
                <h1>
                    Jobs
                </h1>
                {jobs.map((job) => (
                    <Card
                        key={job.id}
                        header={job.title}
                        cardContent={job.description}
                        isShowButton
                    />
                ))}
            </div>
        </div>
    )
}