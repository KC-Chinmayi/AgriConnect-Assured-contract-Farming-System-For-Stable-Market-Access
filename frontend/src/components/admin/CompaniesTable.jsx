import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CompaniesTable = () => {
    
    const navigate = useNavigate();
    
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent registered companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableCell>
                        <Avatar>
                            <AvatarImage src=""></AvatarImage>
                        </Avatar>
                    </TableCell>
                   <TableCell>Company Name</TableCell>
                   <TableCell>18.07.24</TableCell>
<TableCell>
    <Popover>
        <PopoverTrigger><MoreHorizontal/></PopoverTrigger>
        <PopoverContent className="w-32">
            <div className='flex items-center gap-2 w-fit cursor-pointer' >
                <Edit2/>
                <span className='w-4'>Edit</span>
            </div>
            </PopoverContent> 
    </Popover>
</TableCell>
                </TableBody>
            </Table>
        </div>
    )
}

export default CompaniesTable