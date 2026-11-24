"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Search,
  Download,
  Filter,
  CheckCircle2,
  Shield,
  UserCheck,
  FileSpreadsheet,
} from "lucide-react";

interface Member {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Finance" | "Officer" | "Member";
  status: "Active" | "Pending Consent" | "Alumni";
  joinedDate: string;
}

export const RosterFilterSimulator: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState<string>("All");
  const [exportToast, setExportToast] = useState(false);

  const initialMembers: Member[] = [
    {
      id: "2023-01928",
      name: "Maria Santos",
      email: "m.santos@campus.edu",
      role: "Admin",
      status: "Active",
      joinedDate: "Aug 2024",
    },
    {
      id: "2023-41829",
      name: "Gabriel Mendoza",
      email: "g.mendoza@campus.edu",
      role: "Finance",
      status: "Active",
      joinedDate: "Aug 2024",
    },
    {
      id: "2022-83912",
      name: "Kyle Alcantara",
      email: "k.alcantara@campus.edu",
      role: "Officer",
      status: "Active",
      joinedDate: "Jan 2025",
    },
    {
      id: "2024-11029",
      name: "Bea Dimaculangan",
      email: "b.dimaculangan@campus.edu",
      role: "Member",
      status: "Active",
      joinedDate: "Feb 2026",
    },
    {
      id: "2024-99120",
      name: "Lorenzo Cruz",
      email: "l.cruz@campus.edu",
      role: "Member",
      status: "Pending Consent",
      joinedDate: "Feb 2026",
    },
  ];

  const filtered = initialMembers.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.id.includes(searchTerm) ||
      m.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === "All" || m.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  const handleExportCSV = () => {
    setExportToast(true);
    setTimeout(() => setExportToast(false), 3000);
  };

  const getRoleBadge = (role: Member["role"]) => {
    switch (role) {
      case "Admin":
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-700">
            Admin
          </span>
        );
      case "Finance":
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-soft text-amber-strong">
            Finance
          </span>
        );
      case "Officer":
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-accent-strong">
            Officer
          </span>
        );
      default:
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-zinc-100 text-ink-secondary">
            Member
          </span>
        );
    }
  };

  return (
    <div className="bg-surface rounded-3xl border border-line p-6 sm:p-8 shadow-card">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-line">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-ink">Dynamic Member Roster</h3>
            <Badge variant="emerald" size="sm">
              Epic 2: Members
            </Badge>
          </div>
          <p className="text-xs text-muted">
            Filtered view with GDPR student privacy consent verified
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleExportCSV}
            icon={<Download size={14} />}
          >
            Export Clean CSV
          </Button>
        </div>
      </div>

      {exportToast && (
        <div className="mb-4 p-3 rounded-xl bg-emerald-50 text-accent-strong text-xs font-semibold flex items-center gap-2 border border-emerald-200 animate-card-fade-in">
          <CheckCircle2 size={16} />
          Exported 5 verified records to `orgkit_roster_2026.csv`!
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-4">
        <div className="relative w-full sm:flex-1">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            type="text"
            placeholder="Search by name, student ID, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-zinc-50 border border-line text-xs sm:text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white"
          />
        </div>

        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto no-scrollbar">
          {["All", "Admin", "Finance", "Officer", "Member"].map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap min-h-[36px] ${
                selectedRole === role
                  ? "bg-ink text-white"
                  : "bg-zinc-100 text-ink-secondary hover:bg-zinc-200"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* Roster Table */}
      <div className="overflow-x-auto rounded-2xl border border-line">
        <table className="w-full text-left text-xs">
          <thead className="bg-zinc-50 border-b border-line text-muted font-semibold">
            <tr>
              <th className="py-3 px-4">Member Name</th>
              <th className="py-3 px-4">Student ID</th>
              <th className="py-3 px-4">Role (RBAC)</th>
              <th className="py-3 px-4">Privacy Consent</th>
              <th className="py-3 px-4">Joined</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line bg-white">
            {filtered.map((member) => (
              <tr key={member.id} className="hover:bg-zinc-50/80 transition-colors">
                <td className="py-3 px-4">
                  <div className="font-semibold text-ink">{member.name}</div>
                  <div className="text-[11px] text-muted">{member.email}</div>
                </td>
                <td className="py-3 px-4 font-mono text-ink-secondary">
                  {member.id}
                </td>
                <td className="py-3 px-4">{getRoleBadge(member.role)}</td>
                <td className="py-3 px-4">
                  {member.status === "Active" ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent">
                      <CheckCircle2 size={13} /> Consent Signed
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber">
                      Pending Consent
                    </span>
                  )}
                </td>
                <td className="py-3 px-4 text-muted">{member.joinedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
