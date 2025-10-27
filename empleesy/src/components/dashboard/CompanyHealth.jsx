import React, { useState } from 'react';
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle, Users, DollarSign, Target, Activity } from 'lucide-react';

const CompanyHealth = () => {
    const [healthData] = useState({
        overallScore: 78,
        metrics: [
            {
                name: 'Revenue Growth',
                score: 85,
                trend: 'up',
                value: '+12.5%',
                status: 'excellent',
                icon: DollarSign,
                description: 'Quarter over quarter'
            },
            {
                name: 'Employee Satisfaction',
                score: 72,
                trend: 'up',
                value: '7.2/10',
                status: 'good',
                icon: Users,
                description: 'Based on recent survey'
            },
            {
                name: 'Customer Retention',
                score: 88,
                trend: 'up',
                value: '88%',
                status: 'excellent',
                icon: Target,
                description: 'Annual retention rate'
            },
            {
                name: 'Operational Efficiency',
                score: 65,
                trend: 'down',
                value: '65%',
                status: 'warning',
                icon: Activity,
                description: 'Process optimization score'
            }
        ]
    });

    const getOverallStatus = (score) => {
        if (score >= 80) return { label: 'Excellent', color: 'text-green-600', bg: 'bg-green-100' };
        if (score >= 70) return { label: 'Good', color: 'text-blue-600', bg: 'bg-blue-100' };
        if (score >= 60) return { label: 'Fair', color: 'text-yellow-600', bg: 'bg-yellow-100' };
        return { label: 'Needs Attention', color: 'text-red-600', bg: 'bg-red-100' };
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'excellent': return 'bg-green-500';
            case 'good': return 'bg-blue-500';
            case 'warning': return 'bg-yellow-500';
            case 'critical': return 'bg-red-500';
            default: return 'bg-gray-500';
        }
    };

    const overallStatus = getOverallStatus(healthData.overallScore);

    return (
        <>
            <div className="mb-8 mt-3 bg-gradient-to-br from-slate-50 to-slate-100  px-8 py-6 rounded-[21px] shadow-lg border mr-4">
                <h1 className="text-xl font-bold text-slate-800 mb-2">Company Health Index</h1>
                <p className="text-slate-600 text-[12px]">Real-time overview of your organization's performance</p>
            </div>
            <div className="h-[150px] mt-5  ">
                <div className="max-w-6xl mx-auto">

                    {/* Overall Health Score Card */}
                    <div className="bg-white rounded-2xl shadow-lg px-8 py-4 mb-4 border border-slate-200 w-[34rem]">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-[14px] font-semibold text-slate-600 mb-2 ">Overall Health Score</h2>
                                <div className="flex items-center gap-4">
                                    <span className="text-3xl font-bold text-slate-800">{healthData.overallScore}</span>
                                    <div>
                                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${overallStatus.bg} ${overallStatus.color}`}>
                                            {overallStatus.label}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-20 h-20">
                                <svg className="transform -rotate-90 w-20 h-20">
                                    <circle
                                        cx="42"
                                        cy="42"
                                        r="32"
                                        stroke="#e5e7eb"
                                        strokeWidth="8"
                                        fill="none"
                                    />
                                    <circle
                                        cx="41"
                                        cy="41"
                                        r="32"
                                        stroke={healthData.overallScore >= 70 ? '#10b981' : '#f59e0b'}
                                        strokeWidth="8"
                                        fill="none"
                                        strokeDasharray={`${2 * Math.PI * 42}`}
                                        strokeDashoffset={`${2 * Math.PI * 42 * (1 - healthData.overallScore / 100)}`}
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {healthData.overallScore >= 70 ? (
                                        <CheckCircle className="w-8 h-8 text-green-500" />
                                    ) : (
                                        <AlertCircle className="w-8 h-8 text-yellow-500" />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        {healthData.metrics.map((metric, index) => {
                            const Icon = metric.icon;
                            return (
                                <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow w-[20rem]  mb-2 mt-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-3 rounded-lg ${getStatusColor(metric.status)} bg-opacity-10`}>
                                                <Icon className={`w-6 h-6 ${getStatusColor(metric.status).replace('bg-', 'text-')}`} />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-slate-800">{metric.name}</h3>
                                                <p className="text-sm text-slate-500">{metric.description}</p>
                                            </div>
                                        </div>
                                        {metric.trend === 'up' ? (
                                            <TrendingUp className="w-5 h-5 text-green-500" />
                                        ) : (
                                            <TrendingDown className="w-5 h-5 text-red-500" />
                                        )}
                                    </div>

                                    <div className="flex items-end justify-between ">
                                        <div>
                                            <span className="text-3xl font-bold text-slate-800">{metric.value}</span>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-medium text-slate-600 mb-1">Health Score</div>
                                            <span className="text-2xl font-bold text-slate-800">{metric.score}</span>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="mt-4">
                                        <div className="w-full bg-slate-200 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full ${getStatusColor(metric.status)}`}
                                                style={{ width: `${metric.score}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>


                </div>
            </div>
        </>
    );

};

export default CompanyHealth;