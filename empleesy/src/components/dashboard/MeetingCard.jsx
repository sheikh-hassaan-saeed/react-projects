import React from 'react';
import { Video, Users, Clock, MapPin } from 'lucide-react';

const UpcomingMeetingsCard = () => {
    const meetings = [
        {
            id: 1,
            title: 'Weekly Team Sync',
            time: '09:00 AM',
            duration: '30 min',
            type: 'video',
            attendees: 8,
            date: 'Today'
        },
        {
            id: 2,
            title: 'Investor Pitch Review',
            time: '02:00 PM',
            duration: '1 hour',
            type: 'in-person',
            attendees: 5,
            date: 'Today'
        },
        {
            id: 3,
            title: 'Product Roadmap Discussion',
            time: '10:30 AM',
            duration: '45 min',
            type: 'video',
            attendees: 12,
            date: 'Tomorrow'
        },
    ];

    const getTypeIcon = (type) => {
        return type === 'video' ? (
            <Video className="w-4 h-4" />
        ) : (
            <MapPin className="w-4 h-4" />
        );
    };

    const getTypeColor = (type) => {
        return type === 'video'
            ? 'bg-blue-100 text-blue-600'
            : 'bg-purple-100 text-purple-600';
    };

    return (
        <div className="mt-6 flex flex-col gap-2 border w-[32rem] h-88 bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-[21px] shadow-md ml-3">
            {/* Header */}
            <h3 className="text-slate-600 text-sm font-medium mb-4">Upcoming Meetings</h3>

            {/* Meetings List */}
            <div className="space-y-3">
                {meetings.map((meeting) => (
                    <div
                        key={meeting.id}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-colors"
                    >
                        {/* Icon */}
                        <div className={`p-2 rounded-lg ${getTypeColor(meeting.type)} flex-shrink-0`}>
                            {getTypeIcon(meeting.type)}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 mb-1">
                                {meeting.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                                <Clock className="w-3 h-3" />
                                <span>{meeting.time}</span>
                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                <span>{meeting.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <Users className="w-3 h-3" />
                                <span>{meeting.attendees} attendees</span>
                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                <span className="font-medium">{meeting.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingMeetingsCard;