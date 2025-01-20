"use client"
import { ChartBar, BarChart3, FolderPlus, LayoutGrid } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();
  return (
    <div className="bg-[#0d1117] text-white w-64 min-h-screen p-4">
      {/* Login Section */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-full bg-gray-700"></div>
        <span>Login</span>
      </div>

      {/* Watchlist Section */}
      <div className="mb-6">
        <h3 className="text-xs text-gray-400 mb-2">MY WATCHLIST</h3>
      </div>

      {/* Dashboards Section */}
      <div>
        <h3 className="text-xs text-gray-400 mb-2">DASHBOARDS</h3>
        <div className="space-y-1">
        <div 
            className="flex items-center gap-2 p-2 bg-[#1a1f2b] rounded cursor-pointer"
            onClick={() => router.push('/chain-rankings')}
          >
            <ChartBar size={18} />
            <span>Crypto Rankings</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-[#1a1f2b] rounded cursor-pointer"
              onClick={() => router.push('/ai-rankings')}>
            <BarChart3 size={18} />
            <span>AI Rankings</span>
          </div>
        </div>
      </div>
    </div>
  );
}