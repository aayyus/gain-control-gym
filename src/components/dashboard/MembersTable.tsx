
import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Member {
  id: string;
  name: string;
  email: string;
  membershipType: string;
  status: string;
  joinDate: string;
  expiryDate: string;
}

const statusColors: Record<string, string> = {
  active: "bg-green-100 text-green-800",
  inactive: "bg-gray-100 text-gray-800",
  pending: "bg-yellow-100 text-yellow-800",
};

const MembersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Sample data - in a real app this would come from Supabase
  const members: Member[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      membershipType: "Premium",
      status: "active",
      joinDate: "2023-01-15",
      expiryDate: "2024-01-15"
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      membershipType: "Basic",
      status: "active",
      joinDate: "2023-03-10",
      expiryDate: "2023-12-10"
    },
    {
      id: "3",
      name: "Robert Johnson",
      email: "robert@example.com",
      membershipType: "Standard",
      status: "inactive",
      joinDate: "2022-11-05",
      expiryDate: "2023-05-05"
    },
    {
      id: "4",
      name: "Emily Davis",
      email: "emily@example.com",
      membershipType: "Annual Premium",
      status: "active",
      joinDate: "2023-02-20",
      expiryDate: "2024-02-20"
    },
    {
      id: "5",
      name: "Michael Brown",
      email: "michael@example.com",
      membershipType: "Basic",
      status: "pending",
      joinDate: "2023-06-01",
      expiryDate: "2023-12-01"
    }
  ];

  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.membershipType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Members</h3>
        <div className="flex items-center gap-4">
          <Input
            placeholder="Search members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-[250px]"
          />
          <Button className="bg-gym-primary hover:bg-gym-primary/90">
            Add Member
          </Button>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Membership</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>Expiry Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell className="font-medium">{member.name}</TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>{member.membershipType}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[member.status]}`}>
                    {member.status}
                  </span>
                </TableCell>
                <TableCell>{member.joinDate}</TableCell>
                <TableCell>{member.expiryDate}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
            {filteredMembers.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6 text-gray-500">
                  No members found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MembersTable;
