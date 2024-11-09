"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import dayjs from 'dayjs';
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover';
import { Calendar } from '@/components/ui/calendar';
import { Calendar1Icon } from 'lucide-react';



const SearchForm = ({onFilter}) => {
    const [endDate, setEndDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [status, setStatusValue] = useState('');
    const [type, setTypeValue] = useState('');

    const handleStatusChange = (value) => {
        setStatusValue(value);
    };
    const handleTypeChange = (value) => {
        setTypeValue(value);
    };
    
    const handleSearch = (e) => {
        e.preventDefault();
        onFilter({ startDate, endDate, status, type });
        
        
    };

    return (
        <div>
            <form onSubmit={handleSearch} className="flex gap-2 items-center">
                <div className="mb-4 flex gap-4">

                    <div className="relative w-full max-w-sm">
                        <Popover>
                            <PopoverTrigger asChild>
                                <button className="flex items-center justify-between w-full px-2 py-2 text-sm font-medium text-left text-gray-900 bg-gray-100 border rounded-lg shadow-sm hover:bg-gray-200">
                                    <span>{dayjs(startDate).format('YYYY-MM-DD HH:mm')}</span>
                                    <Calendar1Icon />
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className="p-2 mt-2 bg-white border rounded-lg shadow-lg">
                                <Calendar
                                    selected={startDate}
                                    onSelect={(date) => setStartDate(date)}
                                    mode="single"
                                    className="rounded-md"
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="relative w-full max-w-sm">
                        <Popover>
                            <PopoverTrigger asChild>
                                <button className="flex items-center justify-between w-full px-2 py-2 text-sm font-medium text-left text-gray-900 bg-gray-100 border rounded-lg shadow-sm hover:bg-gray-200">
                                    <span>{dayjs(endDate).format('YYYY-MM-DD HH:mm')}</span>
                                    <Calendar1Icon />
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className="p-2 mt-2 bg-white border rounded-lg shadow-lg">
                                <Calendar
                                    selected={endDate}
                                    onSelect={(date) => setEndDate(date)}
                                    mode="single"
                                    className="rounded-md"
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="relative w-full max-w-sm">
                    <Select className="px-4 bg-gray-100" onValueChange={handleStatusChange}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="staus" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                        </SelectContent>
                    </Select>
                    </div>
                    <div className="relative w-full max-w-sm">
                    <Select className="px-4 bg-gray-100" onValueChange={handleTypeChange}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Buy">Buy</SelectItem>
                            <SelectItem value="Sell">Sell</SelectItem>
                            <SelectItem value="Deposit">Deposit</SelectItem>
                            <SelectItem value="Withdrawal">Withdrawal</SelectItem>
                        </SelectContent>
                    </Select>
                    </div>
                    <Button
                        onClick={handleSearch}
                        className="px-6 py-2 bg-blue-500 text-white rounded"
                    >
                        Search
                    </Button>

                </div>

            </form>
        </div>
    )
}

export default SearchForm
